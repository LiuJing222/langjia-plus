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
import { Dialog } from 'antd-mobile'

const CreateHeader = () => {
    const [userdata, setUserdata] = useState({});
    const [storageDis, setStorageDis] = useState('none');
    const [value, setValue] = useState('')
    const history = useHistory();
    const [cutDis, setCutDis] = useState('none');
    const [saveMsg, setSaveMsg] = useState('');
    useEffect(() => {
        const email = localStorage.getItem('email');
        fetch('https://api.qasdwer.xyz:2019/isLogin/' + email)
            .then(res => res.json())
            .then(res => {
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
        // setStorageDis('flex')
        const points = JSON.parse(localStorage.getItem('points'));
        const furniture = JSON.parse(localStorage.getItem('furniture'));
        const wallheight = localStorage.getItem('wallHeight');
        if (points && wallheight && furniture) {
            setStorageDis('flex')
        } else {
            setSaveMsg("housetype&furn")
        }
    }
    const clearfurn = () => {
        localStorage.removeItem('furniture');
        window.location.reload();
    }
    const removeall = async () => {
        const points = localStorage.getItem('points');
        const pointerArray = localStorage.getItem('pointerArray');
        const furniture = localStorage.getItem('furniture');
        if (points || pointerArray || furniture) {
            const result = await Dialog.confirm({
                content: '??????????????????????????????????????????????????????',
            })
            if (result) {
                localStorage.removeItem('points');
                localStorage.removeItem('pointerArray');
                localStorage.removeItem('furniture');
                history.replace('/home');
            }
        } else {
            history.replace('/home');
        }
    }
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
        setCutDis('none');
        localStorage.setItem("cutDis", "none")
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

        new kscreenshot({
            key: 65,
            immediately: true,
            needDownload: false,
            endCB(e) { //??????????????????
                // setStorageDis('flex');
                showPic(e, "image1")
            },
            cancelCB(e) {
                // console.log("fail", e)
            }
        }).startScreenShot()
    }
    const cutImg = () => {
        setStorageDis('none')
        setCutDis('flex');
        localStorage.setItem("cutDis", "flex")

    }
    const cancelImg = () => {
        setStorageDis('flex')
        setCutDis('none');
        localStorage.setItem("cutDis", "none")

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
                                history.replace('/personalcenter/designs');
                                localStorage.removeItem('points');
                                localStorage.removeItem('pointerArray');
                                localStorage.removeItem('furniture');
                            }
                        })
                        .catch(err => console.log(err.message));
                    setSaveMsg("")
                }
            } else {
                setSaveMsg("pleasePrtSc")
           }

        } else {
            setSaveMsg("pleaseName")
        }
    }
    console.log(saveMsg)
    return (
        <div data-step="1" data-title="????????????" data-intro="?????????????????????????????????????????????">
            {cutDis == "none" ?
                <div>
                    <div className="createHeaderBox">
                        <img className='create_logo' src={logo} onClick={removeall} alt="" />
                        {/* <Link to='/' onClick={removeall}><img src={logo} className="createHeaderLogo" /></Link> */}
                        {/* <img src={logo} className="createHeaderLogo" onClick={removeall} /> */}
                        {/* <div className="createHeaderNavItem createHeaderNavItem1" onClick={fallback}><img src={backlogo} className="createHeaderLogo1" /><span>??????</span></div> */}
                        <div className="createHeaderNavItem" onClick={storageAll}><img src={storagelogo} className="createHeaderLogo2" />??????</div>
                        <div className="createHeaderNavItem"><img src={backlogo} className="createHeaderLogo1" />??????</div>
                        <div className="createHeaderNavItem" onClick={clearfurn}><img src={clearlogo} className="createHeaderLogo4" />????????????</div>
                        <div className="createHeaderNavItem" onClick={clearAll}><img src={emptylogo} className="createHeaderLogo3" />????????????</div>
                        {/* <el-button type="warning" onClick={(e) => { ocrPic(e) }} icon="el-icon-camera">????????????</el-button> */}
                    </div>

                    <div className='userData'>
                        <div className='help' data-step="2" data-title="????????????" data-intro="???????????????????????????" >
                            <img src={help} alt="" onClick={() => showHelp()} />
                            <span className="createHeaderHelpBox">
                                <span onClick={() => toNew()} className="helpbox_toNew">??????????????????</span>
                                <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={module_gray} /> ??????</strong> <p>??????2D????????????????????????????????????????????????????????????</p></span>
                                <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={furniture_gray} /> ??????</strong> <p>?????????</p></span>
                                <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={recommend_gray} /> ??????</strong> <p>????????????????????????????????????</p></span>
                                <span><strong className="helpbox_title" style={{ fontSize: '15px' }}><img src={show_gray} /> ?????????&??????</strong> <p>????????????????????????</p></span>
                                <span className="helpobox_key">
                                    <strong style={{ fontSize: '15px' }}>?????????</strong>
                                    <p>w????????????</p>
                                    <p>s????????????</p>
                                    <p>a????????????</p>
                                    <p>d????????????</p>
                                </span>
                            </span>
                        </div>

                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userdata.user_head_portrait} alt="" />
                    </div>
                </div>
                : <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 45, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10, display: cutDis, justifyContent: 'center' }}>
                    <img style={{ width: 30, marginRight: 60 }} src={cut_img} alt="" onClick={() => ocrPic()} />
                    <img style={{ width: 28 }} src={create_cancel} alt="" onClick={() => cancelImg()} />
                </div>
            }

            <div className='storageBoxOuter' style={{ display: storageDis }}>
                <div className='storageBoxInner'>
                    <div className='storage_top'>
                        <CloseOutline onClick={() => setStorageDis('none')} style={{ fontSize: 19, float: 'right', marginRight: 10, marginTop: 6 }} />
                    </div>
                    <div className='storage_design_name'>
                        <span>?????????:</span>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div className='storage_design_prt'>
                        <span>????????????:</span>
                        <button class='storage_btn1' onClick={() => { cutImg() }}>????????????</button>
                    </div>
                    <div className='storage_design_prt_show' id='result' >
                    </div>
                    <div className='storage_design_bottom'>
                        <button onClick={() => storageOk()} >??????</button>
                        <button onClick={() => setStorageDis('none')}>??????</button>
                    </div>
                </div>
            </div>
            <div className="alertConfirm" style={saveMsg == "housetype&furn" ? { display: "flex" } : { display: "none" }} >
                <p>????????????????????????</p>
                <button onClick={() => setSaveMsg("")}>??????</button>
            </div>
            <div className="alertConfirm" style={saveMsg == "pleasePrtSc" ? { display: "flex" } : { display: "none" }} >
                <p>?????????</p>
                <button onClick={() => setSaveMsg("")}>??????</button>
            </div>
            <div className="alertConfirm" style={saveMsg == "pleaseName" ? { display: "flex" } : { display: "none" }} >
                <p>??????????????????</p>
                <button onClick={() => setSaveMsg("")}>??????</button>
            </div>
        </div >
    )
}

export default CreateHeader
