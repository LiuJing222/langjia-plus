
function stere() {
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

        var inp = document.getElementById('create_wall_height_input');
        inp.oninput = (e) => {
            const n = group.children.length;
            for (var i = 0; i < n; i++) {
                group.remove(group.children[0]);
            }
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

                    // var curve = new THREE.SplineCurve3([
                    //     new THREE.Vector3(X, YallPoints[0].y,0 ),
                    //     new THREE.Vector3(X, allPoints[0].y,200 )
                    // ]);
                    // console.log(localStorage.getItem('wallHeight')*70);
                    var geometry = new THREE.ExtrudeGeometry(//拉伸造型
                        shape,//二维轮廓
                        //拉伸参数
                        {
                            amount: e.target.value * 70,
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
                    mesh.translateY(e.target.value * 70);
                    mesh.rotation.x = Math.PI / 2;
                    group.add(mesh)

                }

            }
        }
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

                // var curve = new THREE.SplineCurve3([
                //     new THREE.Vector3(X, YallPoints[0].y,0 ),
                //     new THREE.Vector3(X, allPoints[0].y,200 )
                // ]);
                // console.log(localStorage.getItem('wallHeight')*70);
                var geometry = new THREE.ExtrudeGeometry(//拉伸造型
                    shape,//二维轮廓
                    //拉伸参数
                    {
                        amount: localStorage.getItem('wallHeight') * 70,
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
                mesh.translateY(localStorage.getItem('wallHeight') * 70);
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
            scene.add(mesh2);
            // console.log(mesh2)

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
        var s2 = 900;

        //相机
        var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 3000);
        camera.position.set(700, 400, 700); //设置相机位置
        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

        var camera2 = new THREE.OrthographicCamera(-s2 * k * 1 / 3, s2 * k * 2 / 5, s2, -s2 / 2, 1, 3000);
        camera2.position.set(300, 600, 1200); //设置相机位置


        //渲染
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height); //设置渲染区域尺寸
        renderer.setClearColor(0xffffff, 1); //设置背景颜色
        content.appendChild(renderer.domElement); //id为content元素中插入canvas对象
        renderer.domElement.id = "container";
        renderer.render(scene, camera);

        var renderer2 = new THREE.WebGLRenderer();
        renderer2.setSize(270, 270); //设置渲染区域尺寸
        renderer2.setClearColor(0xffffff, 1); //设置背景颜色
        document.getElementById('copyid').appendChild(renderer2.domElement);
        renderer2.domElement.id = "container2";
        renderer2.render(scene, camera2);


        //鼠标拖转
        function render() {
            renderer.render(scene, camera); //执行渲染操作
            renderer2.render(scene, camera2);
            requestAnimationFrame(render); //请求再次执行渲染函数render
        }
        render();
        var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象


        /*------------------------------- */

        var range = document.getElementById('range');
        var range2 = document.getElementById('range2');
        range.oninput = () => {
            value = document.getElementById('range').value;
            document.getElementById('value').innerHTML = value + '°';
            camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
            camera2.lookAt(scene.position);
        };
        range.onchange = () => {
            value = document.getElementById('range').value;
            document.getElementById('value').innerHTML = value + '°';
            camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
            camera2.lookAt(scene.position);
        };
        range2.oninput = () => {
            value2 = document.getElementById('range2').value;
            document.getElementById('value2').innerHTML = value2;
            camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
            camera2.lookAt(scene.position);
        }
        range2.onchange = () => {
            value2 = document.getElementById('range2').value;
            document.getElementById('value2').innerHTML = value2;
            camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
            camera2.lookAt(scene.position);
        };

        var value = 0;
        var value2 = 300;
        var time = setInterval(function () {
            if (value >= 0 && value < 90) { //4
                camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                value++;
            } else if (value >= 90 && value < 180) {//1
                camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                value++;
            } else if (value >= 180 && value < 270) {//2
                camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                value++;
            } else if (value >= 270 && value < 360) {//3
                camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                value++;
            } else {
                value = 0;
            }
            camera2.lookAt(scene.position);
        }, 15);

        var btn = document.createElement('div');
        btn.innerText = '停止';
        btn.style.position = 'absolute';
        btn.style.bottom = '10px';
        btn.style.left = '5px';
        btn.style.width = '50px';
        btn.style.height = '25px';
        btn.style.backgroundColor = 'gray';
        btn.style.color = 'white';
        btn.style.lineHeight = '25px';
        btn.style.textAlign = 'center';
        btn.style.borderRadius = '5px';
        document.getElementById('copyid').appendChild(btn);
        var move = true;
        btn.onclick = () => {
            if (move) {
                btn.innerText = '运动';
                clearInterval(time);
                move = false;
            } else {
                btn.innerText = '停止';
                time = setInterval(function () {
                    if (value >= 0 && value < 90) { //4
                        camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                        value++;
                    } else if (value >= 90 && value < 180) {//1
                        camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                        value++;
                    } else if (value >= 180 && value < 270) {//2
                        camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                        value++;
                    } else if (value >= 270 && value < 360) {//3
                        camera2.position.set(Math.sin(2 * Math.PI / 360 * value) * 300, value2, Math.cos(2 * Math.PI / 360 * value) * 300);
                        value++;
                    } else {
                        value = 0;
                    }
                    camera2.lookAt(scene.position);
                }, 15);
                move = true;
            }
        }

        var btn2 = document.createElement('div');
        btn2.innerText = '室内';
        btn2.style.position = 'absolute';
        btn2.style.bottom = '10px';
        btn2.style.left = '60px';
        btn2.style.width = '50px';
        btn2.style.height = '25px';
        btn2.style.backgroundColor = 'gray';
        btn2.style.color = 'white';
        btn2.style.lineHeight = '25px';
        btn2.style.textAlign = 'center';
        btn2.style.borderRadius = '5px';
        document.getElementById('copyid').appendChild(btn2);

        var all = true;
        var axisHelper1 = new THREE.AxisHelper(700);
        btn2.onclick = () => {
            console.log(all)
            var ro = 0;
            // setInterval(()=>{
            //     scene.rotation.y = Math.PI/360*ro++;
            // },10)            
            
            if (all) {
                all = false;
                btn2.innerText = '室外';
                //三维坐标轴
                scene.add(axisHelper1);
                console.log(axisHelper1.parent)
                camera = new THREE.PerspectiveCamera(60, width / height, 1, 5000);
                camera.position.set(300, 120, 0);
                camera.lookAt(new THREE.Vector3(0, 120, 0));
                renderer.render(scene, camera);
                controls = new THREE.OrbitControls(camera, renderer.domElement)

                document.onkeydown = function (event) {
                    var e = event || window.event || arguments.callee.caller.arguments[0];
                    switch (event.keyCode) {
                        case 70:
                            console.log('f')
                    }
                }

                document.onkeydown = function (event) {
                    switch (event.keyCode) {
                        case 38: // up
                        case 70: // f
                            camera.position.set(camera.position.x - 4, camera.position.y, camera.position.z);
                            camera.lookAt(new THREE.Vector3(0, 0, 0));
                            break

                        case 37: // left
                        case 90: // z
                            camera.position.set(camera.position.x, camera.position.y, camera.position.z + 4);
                            camera.lookAt(new THREE.Vector3(0, 0, 0));
                            break

                        case 40: // down
                        case 88: // x
                            camera.position.set(camera.position.x + 4, camera.position.y, camera.position.z);
                            camera.lookAt(new THREE.Vector3(0, 0, 0));
                            break

                        case 39: // right
                        case 86: // v
                            camera.position.set(camera.position.x, camera.position.y, camera.position.z - 4);
                            camera.lookAt(new THREE.Vector3(0, 0, 0));
                            break
                        case 82://r
                            ro = ro + 5;
                            scene.rotation.y = Math.PI / 360 * ro;
                            break
                        case 81://q
                            ro = ro - 5;
                            scene.rotation.y = Math.PI / 360 * ro;
                            break
                    }
                }
            }
            else {
                all = true;
                btn2.innerText = '室内';
                axisHelper1.parent.remove(axisHelper1);
                camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 3000);
                camera.position.set(700, 400, 700); //设置相机位置
                camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
                controls = new THREE.OrbitControls(camera, renderer.domElement);
            }
        }


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


                    if (furniture[furniture.length - 1].furniture_id == furn.furniture_id) {
                        document.getElementById('loading').style.visibility = 'hidden';
                        document.getElementsByClassName('createpage')[0].style.opacity = 1;
                    }
                })
            })
        }



        /*-------------------------------------------------实现旋转，缩放-----------------------------------------------------*/
        const size = document.getElementById('create_sizebar_input');
        const sizeCon = document.getElementById("create_sizebar_con");
        const scaleCon = document.getElementById("create_scalebar_con");
        const scale = document.getElementById('create_scalebar_input');
        const height1 = document.getElementById('create_heightbar_input');
        var heightCon = document.getElementById("create_heightbar_con")
        var heightDot = document.getElementById("create_heightbar_dot")
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
                localStorage.setItem('furnheight', (intersects[0].object.position.y / 70).toFixed(2));
                var a = intersects[0].object.scale.x;
                var y = intersects[0].object.rotation.y;
                sizeCon.addEventListener("mouseup", (e) => {
                    // a = a + a * 0.1 * size.value;
                    const x = a + size.value * 0.05 * a;
                    if (x > 0) {
                        intersects[0].object.scale.set(x, x, x);
                    }

                    changeFurn(intersects[0])
                })
                size.oninput = () => {
                    const x = a + size.value * 0.05 * a;
                    if (x > 0) {
                        intersects[0].object.scale.set(x, x, x);
                    }

                    changeFurn(intersects[0])
                }
                scaleCon.addEventListener("mouseup", (e) => {
                    const m = y + Number(scale.value);
                    intersects[0].object.rotation.y = m;
                    changeFurn(intersects[0])
                })
                scale.oninput = () => {
                    const m = y + Number(scale.value);
                    intersects[0].object.rotation.y = m;
                    changeFurn(intersects[0])
                }
                heightCon.addEventListener('mouseup', (e) => {
                    // intersects[0].object.translateY(height1.value)
                    intersects[0].object.position.y = Number(height1.value * 70);
                    changeFurn(intersects[0])
                })
                height1.oninput = () => {
                    intersects[0].object.position.y = 0;
                    // intersects[0].object.translateY(height1.value)
                    // changeFurn(intersects[0])
                }
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
            // localStorage.setItem('furnheight',(event.object.position.y/70).toFixed(2))
            changeFurn(event)
        });
        // 获取家具的位置
        function changeFurn(event) {
            height1.value = (event.object.position.y / 70).toFixed(2);
            if ((event.object.position.y / 70).toFixed(2) < 0) {
                heightDot.style.left = 0 + "px"
            } else if ((event.object.position.y / 70).toFixed(2) > 10) {
                heightDot.style.left = 10 * 15 + "px"
            } else {
                heightDot.style.left = (event.object.position.y / 70).toFixed(2) * 15 + "px"
            }

            localStorage.setItem('furnheight', (event.object.position.y / 70).toFixed(2));
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
window.addEventListener('setItem', stere)





