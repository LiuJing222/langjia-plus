function stere(){
if (document.getElementById('content3D') && localStorage.getItem('points')) {
    var content = document.getElementById('content3D');
    var points = JSON.parse(localStorage.getItem('points'));
    /*-----通过此操作使房屋所有坐标点的中点作为原点---------*/
    var allPoints = [];
    for (var i = 0; i < points.length; i++) {
        var obj = { x: points[i].x * 2, y: points[i].y * 2 };
        allPoints.push(obj);
    }
    var Xmin, Xmax, Ymin, Ymax;
    for (var i = 0; i < allPoints.length; i++) {
        if (i == 0) {
            Xmin = allPoints[0].x;
            Xmax = allPoints[0].x;
            Ymin = allPoints[0].y;
            Ymax = allPoints[0].y;
        } else {
            if (allPoints[i].x > Xmax) {
                Xmax = allPoints[i].x;
            }
            if (allPoints[i].x < Xmin) {
                Xmin = allPoints[i].x;
            }
            if (allPoints[i].y > Ymax) {
                Ymax = allPoints[i].y;
            }
            if (allPoints[i].y < Ymin) {
                Ymin = allPoints[i].y;
            }
        }
    }
    var X = (Xmin + Xmax) / 2;
    var Y = (Ymin + Ymax) / 2;

    /*-----------创建3d场景以及组------------ */
    var scene = new THREE.Scene();
    var group = new THREE.Group();

    /*---------------------------------------------绘制点并拉伸成墙体----------------------------------------------*/

    for (var i = 1; i < allPoints.length; i++) {
        if (allPoints[i - 1].x == allPoints[i].x && allPoints[i - 1].y == allPoints[i].y) {
            i = i + 1;
        } else {
            var shape = new THREE.Shape();
            shape.moveTo(allPoints[i - 1].x, allPoints[i - 1].y);
            shape.lineTo(allPoints[i].x, allPoints[i].y);
            shape.lineTo(allPoints[i].x - 20, allPoints[i].y - 20);
            shape.lineTo(allPoints[i - 1].x - 20, allPoints[i - 1].y - 20);
            shape.moveTo(allPoints[i - 1].x, allPoints[i - 1].y);

            var curve = new THREE.SplineCurve3([
                new THREE.Vector3(allPoints[i].x, 0, allPoints[i].y),
                new THREE.Vector3(allPoints[i].x, 100, allPoints[i].y)
                //墙高100
            ]);

            var geometry = new THREE.ExtrudeGeometry(//拉伸造型
                shape,//二维轮廓
                //拉伸参数
                {
                    bevelEnabled: false,//无倒角
                    steps: 50,//扫描方向细分数
                }
            );

            var material = new THREE.MeshBasicMaterial({
                color: 0xf4f4f4,
                overdraw: true,
                // size: 5.0,//点对象像素尺寸
                side: THREE.BackSide
            });//材质对象

            var mesh = new THREE.Mesh(geometry, material);//点模型对象
            mesh.translateX(-X);
            mesh.translateZ(-Y);
            mesh.translateY(100);
            mesh.rotation.x = Math.PI / 2;
            group.add(mesh)

        }

    }

    /*-----------------------------------------------------绘制地面-------------------------------------------------*/


    var floorPoints = [];
    var floorPoint = [];
    for (var i = 0; i < allPoints.length; i++) {
        if (i == 0) {
            floorPoint.push({ x: allPoints[0].x, y: allPoints[0].y })
        } else {
            if (allPoints[i].x == allPoints[i - 1].x && allPoints[i].y == allPoints[i - 1].y) {
                floorPoints.push(floorPoint);
                floorPoint = [];

            } else {
                floorPoint.push({ x: allPoints[i].x, y: allPoints[i].y })
            }
        }
    }

    var curve2 = new THREE.SplineCurve3([
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, -2, 0),
    ]);

    var material2 = new THREE.MeshBasicMaterial({
        color: 0xe3dfdd,
        size: 5.0,//点对象像素尺寸
        side: THREE.DoubleSide
    });//材质对象

    for (var i = 0; i < floorPoints.length; i++) {
        for (var j = 0; j < floorPoints[i].length; j++) {
            if (j == 0) {
                var shape2 = new THREE.Shape();
                shape2.moveTo(floorPoints[i][j].x, floorPoints[i][j].y);
            } else {
                shape2.lineTo(floorPoints[i][j].x, floorPoints[i][j].y);
            }
        }

        var geometry2 = new THREE.ExtrudeGeometry(//拉伸造型
            shape2,//二维轮廓
            //拉伸参数
            {
                bevelEnabled: false,//无倒角
                extrudePath: curve2,//选择扫描轨迹
                steps: 50,//扫描方向细分数
            }
        );

        var mesh2 = new THREE.Mesh(geometry2, material2);//旋转网格模型对象
        mesh2.translateX(-X);
        mesh2.translateZ(-Y);
        mesh2.rotation.y = 3 * Math.PI / 2;
        group.add(mesh2);

    }

    scene.add(group); //线条对象添加到场景中

    /*-------------------------------------------------基本元素---------------------------------------------- */

    //平行光
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    scene.add(directionalLight);

    //环境光
    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    //窗口
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 700; //三维场景显示范围控制系数，系数越大，显示的范围越大

    //相机
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 3000);
    camera.position.set(700, 400, 700); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    //渲染
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xffffff, 1); //设置背景颜色
    content.appendChild(renderer.domElement); //id为content元素中插入canvas对象
    renderer.domElement.id = "container";
    renderer.render(scene, camera);

    //三维坐标轴
    // var axisHelper1 = new THREE.AxisHelper(700);
    // scene.add(axisHelper1);

    //鼠标拖转
    function render() {
        renderer.render(scene, camera); //执行渲染操作
        requestAnimationFrame(render); //请求再次执行渲染函数render
    }
    render();
    var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象

    /*-------------------------------------------------合并group中mesh  实现所有家具渲染---------------------------------------------------- */

    var objects = [];
    var clickObjects = [];


    var furniture = JSON.parse(localStorage.getItem('furniture')) || [];

    for (var i = 0; i < furniture.length; i++) {
        load(furniture[i])
    }
    function load(furn) {
        var MTLLoader = new THREE.MTLLoader(); //材质文件加载器
        // 加载mtl和obj文件
        MTLLoader.load('https://api.qasdwer.xyz:2019/getDesignDatas/materials/' + furn.mtlname, (materials) => {
            materials.preload();
            var OBJLoader = new THREE.OBJLoader(); //obj加载器
            OBJLoader.setMaterials(materials);

            OBJLoader.load('https://api.qasdwer.xyz:2019/getDesignDatas/materials/' + furn.objname, (res) => {
                var meshArr = [] // mesh数组
                var materialArr = [] // 材质数组
                // 获取集合体/材质数组
                res.traverse((child) => {
                    if (child.isMesh) {
                        meshArr.push(child)
                        materialArr.push(child.material)
                    }
                })

                // 循环合并
                var geometry = new THREE.Geometry()
                for (var i = 0; i < meshArr.length; i++) {
                    meshArr[i].updateMatrix()
                    geometry.merge(new THREE.Geometry().fromBufferGeometry(meshArr[i].geometry), meshArr[i].matrix, i)
                }
                var mesh_2 = new THREE.Mesh(geometry, materialArr)
                mesh_2.translateX(furn.position?.x || 0)
                mesh_2.translateY(furn.position?.y || 0)
                mesh_2.translateZ(furn.position?.z || 0)
                mesh_2.scale.set(Number(furn.size), Number(furn.size), Number(furn.size));
                mesh_2.rotation.y = furn.rotate || 0;
                mesh_2.name = furn.furniture_id;


                scene.add(mesh_2);
                clickObjects.push(mesh_2);
                objects.push(mesh_2);


                if(furniture[furniture.length-1].furniture_id==furn.furniture_id){
                    document.getElementById('loading').style.visibility='hidden';
                    document.getElementsByClassName('createpage')[0].style.opacity=1;
                }
            })
        })
    }



    /*-------------------------------------------------实现旋转，缩放-----------------------------------------------------*/

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    content.addEventListener('mousedown', onDocumentMouseDown, false);
    function onDocumentMouseDown(event) {
        event.preventDefault();
        mouse.x = ((event.clientX - 60) / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - 55) / renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(clickObjects);
        if (intersects.length > 0) {
            var a = intersects[0].object.scale.x;
            var y = intersects[0].object.rotation.y;
            document.onkeydown = function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 87) { // W键
                    a = a + a * 0.1;
                    intersects[0].object.scale.set(a, a, a);
                    changeFurn(intersects[0])
                } else if (e && e.keyCode == 83) { // S键
                    a = a - a * 0.1;
                    intersects[0].object.scale.set(a, a, a);
                    changeFurn(intersects[0])
                } else if (e && e.keyCode == 65) {
                    y = y + 0.05;
                    intersects[0].object.rotation.y = y;
                    changeFurn(intersects[0])
                } else if (e && e.keyCode == 68) {
                    y = y - 0.05;
                    intersects[0].object.rotation.y = y;
                    changeFurn(intersects[0])
                } else if (e && e.keyCode == 46) {
                    scene.remove(intersects[0].object)
                    var newFurn = furniture.filter((item, index) => item.furniture_id !== intersects[0].object.name);
                    localStorage.setItem('furniture', JSON.stringify(newFurn))
                }
            };
        }
    }

    /*-----------------------------------------------------实现拖拽--------------------------------------------------*/

    // 添加平移控件
    var transformControls = new THREE.TransformControls(camera, renderer.domElement);
    scene.add(transformControls);

    var dragControls = new THREE.DragControls(objects, camera, renderer.domElement);
    // 鼠标略过事件
    dragControls.addEventListener('hoveron', function (event) {
        // 让变换控件对象和选中的对象绑定
        transformControls.attach(event.object);
    });
    //开始拖拽
    dragControls.addEventListener('dragstart', function (event) {
        controls.enabled = false;
    });

    // 拖拽结束
    dragControls.addEventListener('dragend', function (event) {
        controls.enabled = true;
        changeFurn(event)
    });
    // 获取家具的位置
    function changeFurn(event) {
        for (var i = 0; i < furniture.length; i++) {
            if (event.object.name === furniture[i].furniture_id) {
                furniture[i].position = event.object.position
                furniture[i].rotate = event.object.rotation.y
                furniture[i].size = event.object.scale.x
                localStorage.setItem('furniture', JSON.stringify(furniture));
            }
        }
    }

}
}
stere();
window.addEventListener('setItem',stere)




