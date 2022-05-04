if (document.getElementById('content2D')) {
    var content = document.getElementById('content2D');//2ddiv
    var fallback = document.getElementsByClassName('createHeaderNavItem')[1];//回退
    var canvas = document.createElement('canvas'),//创建canvas
        ctx = canvas.getContext('2d'),//
        pointerArray = [],
        circleWidth = 5,
        _current_mask_point = [],
        currentPoint = {},
        allpoints = [];
    points = [];
    var imgData = null,
        dragging = false;
    //canvas的宽度、高度
    ctx.canvas.width = innerWidth;
    ctx.canvas.height = innerHeight;

    // 复制
    function saveData() {
        imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    // 粘贴
    function restoreData() {
        ctx.putImageData(imgData, 0, 0);
    }
    //清空
    function clearCanvas() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    // 获得x y坐标
    function unifyCoordinates(x, y) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.floor((x - rect.left) * (canvas.width / rect.width)) + 0.5,
            y: Math.floor((y - rect.top) * (canvas.height / rect.height)) + 0.5
        };
    }
    // 对于新建页面用户画，本地无缓存
    function drawShape(location) {
        ctx.beginPath();
        ctx.strokeStyle = 'grey';
        for (var i = 0; i < pointerArray.length; i++) {
            let point = pointerArray[i];
            ctx.lineWidth = 6;
            if (i == 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        }
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
    }
    // 当本地存储了户型点后画户型图
    function drawShape2() {
        ctx.beginPath();
        for (var i = 0; i < pointerArray.length; i++) {
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'grey';
            if (i == 0) {
                ctx.moveTo(pointerArray[0].x, pointerArray[0].y);
            } else {
                if (pointerArray[i - 1].x == pointerArray[i].x && pointerArray[i - 1].y == pointerArray[i].y) {
                    ctx.beginPath();
                } else {
                    ctx.lineTo(pointerArray[i].x, pointerArray[i].y);
                }
            }

            ctx.stroke();
        }
    }
    //本地存储了每次的线（双击结束就是一个数组） 用来实现页面转3d和回退后继续绘制2d图像 
    function drawShape3() {
        console.log(allpoints)
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'grey';
        for (var i = 0; i < allpoints.length; i++) {
            ctx.beginPath();
            for (var j = 0; j < allpoints[i].length; j++) {
                if (j == 0) {
                    ctx.moveTo(allpoints[i][0].x, allpoints[i][0].y);
                } else {
                    if (allpoints[i][j - 1].x == allpoints[i][j].x && allpoints[i][j - 1].y == allpoints[i][j].y) {
                        ctx.beginPath();
                    } else {
                        ctx.lineTo(allpoints[i][j].x, allpoints[i][j].y);
                    }
                }
                ctx.stroke();
            }
        }
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();

    }
    //通过ctx的getImageData和putImageData方法可以精细控制每帧图像的每个像素值；
    //该过程中的视频处理其实就是对每一帧图像处理的一个连续过程，因此是一个递归
    function onResize() {
        saveData();
        restoreData();
    }
    //鼠标点击down的瞬间
    function onPointerDown(e) {
        var location = unifyCoordinates(e.clientX, e.clientY);
        console.log(pointerArray);
        setPointerArray(location);
        currentPoint = location;
        points.push(currentPoint);
        var p = localStorage.getItem('points');
        console.log(points, p)
        localStorage.setItem('points', JSON.stringify(points));
        dragging = true;
        saveData();
    }
    //保存目前点击的点
    function setPointerArray(location) {
        pointerArray.push(location);
        console.log(pointerArray)
        _current_mask_point = [];
        for (var i = 0; i < pointerArray.length - 1; i++) {
            let point = pointerArray[i];
            if (i >= 1 && Math.abs(point.x - location.x) <= circleWidth && Math.abs(point.y - location.y) <= circleWidth) {
                var arr = JSON.parse(localStorage.getItem('pointerArray')) || [];
                arr.push(pointerArray);
                localStorage.setItem('pointerArray', JSON.stringify(arr));
                ctx.closePath();
                pointerArray = [];
                dragging = false;
                saveData();
                return;
            } else {
                _current_mask_point.push(point);
            }
        }
    }
    //鼠标移动记录
    function onPointerMove(e) {
        if (dragging) {
            var location = unifyCoordinates(e.clientX, e.clientY);
            currentPoint = location;
            restoreData();
            drawShape(location);
        }
    }
    //鼠标up
    function onPointerUp(e) {
        if (!dragging) {
            var location = unifyCoordinates(e.clientX, e.clientY);
            drawShape(location);
        }
    }

    // 画网格
    function drawGrid(color, stepx, stepy) {
        ctx.save()
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = color;
        for (var i = stepx; i < ctx.canvas.width; i += stepx) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, ctx.canvas.height);
            ctx.closePath();
            ctx.stroke();
        }
        for (var j = stepy; j < ctx.canvas.height; j += stepy) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(ctx.canvas.width, j);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
    }
    drawGrid('#ccc', 20, 20);
    console.log(pointerArray)
    // 回退操作
    fallback.onclick = function () {
        // console.log(points[0])
        var length = points.length;
        var pointsArr = JSON.parse(localStorage.getItem('pointerArray'));
        if (points[length - 1].x === points[length - 2].x && points[length - 1].y === points[length - 2].y) {
            points.splice(length - 2, 2)
            console.log(111)
            pointsArr[pointsArr.length - 1].splice(pointsArr[pointsArr.length - 1].length - 2, 2)
            if (pointsArr[pointsArr.length - 1].length == 1) {
                points.pop();
                pointsArr.pop(pointsArr[pointsArr.length - 1])
            } else if (pointsArr[pointsArr.length - 1].length == 2
                && points[length - 3].x === points[length - 4].x && points[length - 3].y === points[length - 4].y) {
                console.log()
                points.splice(length - 4, 4)
                console.log(points)
                pointsArr.pop(pointsArr[pointsArr.length - 1])
            }
        } else if (length === 2) {
            points.splice(length - 2, 2)
            pointsArr.pop(pointsArr[pointsArr.length - 1])
        } else {
            points.pop();
            pointsArr[pointsArr.length - 1].pop()
            if (pointsArr[pointsArr.length - 1].length == 1) {
                points.pop();
                pointsArr.pop(pointsArr[pointsArr.length - 1])
            }
        }
        console.log(points);
        localStorage.setItem('points', JSON.stringify(points));
        localStorage.setItem('pointerArray', JSON.stringify(pointsArr))
        pointerArray = JSON.parse(localStorage.getItem('points'))
        window.location.reload()

    }
    // 监听
    if (localStorage.getItem('points') && localStorage.getItem('points') != '[]') {
        if (localStorage.getItem('pointerArray')) {
            allpoints = JSON.parse(localStorage.getItem('pointerArray'));
            console.log(allpoints)
            pointerArray = [];
            console.log(pointerArray)
            points = JSON.parse(localStorage.getItem('points'))
            drawShape3()
            onResize();
            window.addEventListener('resize', onResize);
            canvas.addEventListener('pointerdown', onPointerDown);
            canvas.addEventListener('pointermove', onPointerMove);
            canvas.addEventListener('pointerup', onPointerUp);
        } else {
            console.log(111)
            pointerArray = JSON.parse(localStorage.getItem('points'))
            drawShape2()
        }

    } else {

        onResize();
        window.addEventListener('resize', onResize);
        canvas.addEventListener('pointerdown', onPointerDown);
        canvas.addEventListener('pointermove', onPointerMove);
        canvas.addEventListener('pointerup', onPointerUp);
    }

    content.appendChild(canvas);
}
