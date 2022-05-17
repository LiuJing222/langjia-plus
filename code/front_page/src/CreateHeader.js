import React, { useEffect, useState } from 'react'
// import logo from './images/logo.png'
import './CreateHeader.css'
// import { Link } from 'react-router-dom';
import backlogo from './images/arrow-go-back-fill.svg'
import storagelogo from './images/save-3-fill.svg'
import emptylogo from './images/close-circle-fill.svg'
import clearlogo from './images/close-fill.svg'
import help from './images/help.svg'
import logo from './images/bluetlogo.png'
import { useHistory } from 'react-router';
import { CloseOutline } from 'antd-mobile-icons'
import module_gray from './images/create_module_gray.svg'
import furniture_gray from './images/create_forniture_gray.svg'
import recommend_gray from './images/create_recommend_gray.svg'
import show_gray from './images/create_show_gray.svg'
import cut_img from './images/cutimg.svg'
import create_cancel from './images/create_cancel.svg'
import inspiration_gray from './images/create_inspiration_gray.svg'
import kscreenshot from 'kscreenshot'

const CreateHeader = () => {
    const [userdata, setUserdata] = useState({});
    const [storageDis, setStorageDis] = useState('none');
    const [value, setValue] = useState('')
    const history = useHistory();
    const [cutDis,setCutDis] = useState('none');
    useEffect(() => {
        const email = localStorage.getItem('email');
        fetch('https://api.qasdwer.xyz:2019/isLogin/' + email)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUserdata(res);
            })
    }, [])

    const clearAll = () => {
        localStorage.removeItem('points');
        localStorage.removeItem('pointerArray');
        localStorage.removeItem('furniture');
        window.location.reload();
    }
    const storageAll = () => {
        setStorageDis('flex')
        // var name = prompt('请输入该设计的名字');
        // if (name !== null) {
        //     if (name) {
        //         const points = JSON.parse(localStorage.getItem('points'));
        //         const furniture = JSON.parse(localStorage.getItem('furniture'));
        //         const email = localStorage.getItem('email');
        //         fetch('https://api.qasdwer.xyz:2019/storageall/' + email, {
        //             method: 'post',
        //             body: JSON.stringify({ points: points, furniture: furniture, name: name }),
        //             headers: { 'content-type': 'text/json' }
        //         })
        //             .then(res => res.text())
        //             .then(res => {
        //                 if (res === 'ok') {
        //                     console.log(111)
        //                     history.replace('/personalcenter/designs');
        //                     localStorage.removeItem('points');
        //                     localStorage.removeItem('pointerArray');
        //                     localStorage.removeItem('furniture');
        //                 } else {
        //                     alert('户型或家具不能为空')
        //                 }
        //             })
        //             .catch(err => console.log(err.message));
        //     } else {
        //         alert('名字不能为空')
        //     }

        // }


    }
    const clearfurn = () => {
        localStorage.removeItem('furniture');
        window.location.reload();
    }
    const removeall = () => {
        const points = localStorage.getItem('points');
        const pointerArray = localStorage.getItem('pointerArray');
        const furniture = localStorage.getItem('furniture');
        if (points || pointerArray || furniture) {
            const isclear = window.confirm('回到首页将会清空所有，你确定返回吗？');
            if (isclear) {
                localStorage.removeItem('points');
                localStorage.removeItem('pointerArray');
                localStorage.removeItem('furniture');
                history.replace('/home');
            }
        } else {
            history.replace('/home');
        }


    }
    // const fallback = () => {
    //     if (JSON.parse(localStorage.getItem('points'))) {
    //         const pointers = JSON.parse(localStorage.getItem('points'));
    //         console.log(pointers)
    //         const length = pointers.length;
    //         if ((pointers[length - 1].x === pointers[length - 2].x && pointers[length - 1].y === pointers[length - 2].y
    //             && pointers[length - 1].z === pointers[length - 2].z) || length === 2) {
    //             pointers.splice(length - 2, 2)
    //         } else {
    //             pointers.pop();
    //         }
    //         console.log(pointers);
    //         localStorage.setItem('points', JSON.stringify(pointers));
    //         window.location.reload();
    //     }

    // }
    const toNew = () => {
        localStorage.removeItem('intro');
        window.location.reload();
    }
    const showHelp = () => {
        document.getElementsByClassName('createHeaderHelpBox')[0].style.display === 'none' ?
            document.getElementsByClassName('createHeaderHelpBox')[0].style.display = 'flex' :
            document.getElementsByClassName('createHeaderHelpBox')[0].style.display = 'none';
    }
    function showPic(imgStr, imgName) {
        setStorageDis('flex');
        setCutDis('flex');
        var result = document.getElementById("result")
        if (result.childElementCount) {
            var imgOld = document.getElementById("imgPrtSc")
            result.removeChild(imgOld)
        }
        let imgNew = document.createElement('img');
        imgNew.setAttribute('src', imgStr);
        // imgNew.style.transform.scale = `260/${imgNew.clientHeight}`
        imgNew.style.maxHeight = '100%';
        imgNew.style.maxWidth = '100%';
        imgNew.setAttribute('id', "imgPrtSc");
        result.appendChild(imgNew)
    }
    const ocrPic = () => {
        setStorageDis('none')
        new kscreenshot({
            key: 65,
            immediately: true,
            needDownload: false,
            endCB(e) { //截图成功回调
                // setStorageDis('flex');
                console.log(111)
                showPic(e, "image1")
            },
            cancelCB(e) {
                console.log(222)
                console.log("fail", e)
            }
        }).startScreenShot()
    }
    const storageOk = () => {
        if (value) {
            if (document.getElementById('imgPrtSc')) {
                const imgName = document.getElementById('imgPrtSc').currentSrc;
                const points = JSON.parse(localStorage.getItem('points'));
                const furniture = JSON.parse(localStorage.getItem('furniture'));
                const email = localStorage.getItem('email');
                const wallheight = localStorage.getItem('wallHeight');
                if (furniture && points && wallheight) {
                    fetch('https://api.qasdwer.xyz:2019/storageall/' + email, {
                        method: 'post',
                        body: JSON.stringify({ points: points, furniture: furniture, name: value, imgpath: imgName, wall_height: wallheight }),
                        headers: { 'content-type': 'text/json' }
                    })
                        .then(res => res.text())
                        .then(res => {
                            if (res === 'ok') {
                                console.log(111)
                                history.replace('/personalcenter/designs');
                                localStorage.removeItem('points');
                                localStorage.removeItem('pointerArray');
                                localStorage.removeItem('furniture');
                            }
                        })
                        .catch(err => console.log(err.message));
                } else {
                    alert('户型或家具不能为空')
                }

            } else {
                alert('请截图')
            }

        } else {
            alert('请输入设计名')
        }
    }
    return (
        <div data-step="1" data-title="基本操作" data-intro="实现操作过程中的后退清空与保存">
            <div className="createHeaderBox"> 
            <img className='create_logo' src={logo} onClick={removeall} alt="" />
            {/* <Link to='/' onClick={removeall}><img src={logo} className="createHeaderLogo" /></Link> */}
            {/* <img src={logo} className="createHeaderLogo" onClick={removeall} /> */}
            {/* <div className="createHeaderNavItem createHeaderNavItem1" onClick={fallback}><img src={backlogo} className="createHeaderLogo1" /><span>回退</span></div> */}
            <div className="createHeaderNavItem" onClick={storageAll}><img src={storagelogo} className="createHeaderLogo2" />保存</div>
            <div className="createHeaderNavItem"><img src={backlogo} className="createHeaderLogo1" />回退</div>
            <div className="createHeaderNavItem" onClick={clearfurn}><img src={clearlogo} className="createHeaderLogo4" />清空家具</div>
            <div className="createHeaderNavItem" onClick={clearAll}><img src={emptylogo} className="createHeaderLogo3" />清空全部</div>
            {/* <el-button type="warning" onClick={(e) => { ocrPic(e) }} icon="el-icon-camera">开始截图</el-button> */}
            </div>
            <div style={{position:'absolute',top:0,left:0,width:'100%',height:45,backgroundColor:'rgba(0,0,0,0.7)',zIndex: 10,display:cutDis,justifyContent:'center'}}>
                <img style={{width:30,marginRight:60}} src={cut_img} alt="" />
                <img style={{width:28}} src={create_cancel} alt="" />
                
            </div>
            <div className='userData'>
                <div className='help' data-step="2" data-title="帮助中心" data-intro="查看用法，快速上手" >
                    <img src={help} alt="" onClick={() => showHelp()} />
                    <span className="createHeaderHelpBox">
                        <span onClick={() => toNew()} className="helpbox_toNew">重启新手指导</span>
                        <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={module_gray} /> 户型</strong> <p>可在2D页面手绘户型或直接在户型库挑选心仪的户型</p></span>
                        <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={furniture_gray} /> 家具</strong> <p>家居库</p></span>
                        <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={recommend_gray} /> 推荐</strong> <p>随时查看其他人的优秀设计</p></span>
                        <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={show_gray} /> 大咖秀&灵感</strong> <p>给您提供创作灵感</p></span>
                        <span className="helpobox_key">
                            <strong style={{ fontSize: '15px' }}>快捷键</strong>
                            <p>w——放大</p>
                            <p>s——缩小</p>
                            <p>a——左旋</p>
                            <p>d——右旋</p>
                        </span>
                    </span>
                </div>

                <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userdata.user_head_portrait} alt="" />
            </div>

            <div className='storageBoxOuter' style={{ display: storageDis }}>
                <div className='storageBoxInner'>
                    <div className='storage_top'>
                        <CloseOutline onClick={() => setStorageDis('none')} style={{ fontSize: 19, float: 'right', marginRight: 10, marginTop: 6 }} />
                    </div>
                    <div className='storage_design_name'>
                        <span>设计名:</span>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>

                    <div className='storage_design_prt'>
                        <span>截图保存:</span>

                        <button class='storage_btn1' onClick={(e) => { ocrPic(e) }}>开始截图</button>

                    </div>
                    <div className='storage_design_prt_show' id='result' >


                    </div>
                    <div className='storage_design_bottom'>
                        <button onClick={() => storageOk()}>确定</button>
                        <button onClick={() => setStorageDis('none')}>取消</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateHeader
