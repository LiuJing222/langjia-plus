import React,{useEffect,useState} from 'react'
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

const CreateHeader = () => {
    const [userdata,setUserdata] = useState({});
    const history = useHistory();
    useEffect(()=>{
        const email = localStorage.getItem('email');
        fetch('https://api.qasdwer.xyz:2019/isLogin/'+email)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setUserdata(res);
        })
    },[])
    
    const clearAll = () => {
        localStorage.removeItem('points');
        localStorage.removeItem('pointerArray');
        localStorage.removeItem('furniture');
        window.location.reload();
    }
    const storageAll = () => {
        var name = prompt('请输入该设计的名字');
        if (name !== null) {
            if (name) {
                const points = JSON.parse(localStorage.getItem('points'));
                const furniture = JSON.parse(localStorage.getItem('furniture'));
                const email = localStorage.getItem('email');
                fetch('https://api.qasdwer.xyz:2019/storageall/' + email, {
                    method: 'post',
                    body: JSON.stringify({ points: points, furniture: furniture, name: name }),
                    headers: { 'content-type': 'text/json' }
                })
                    .then(res => res.text())
                    .then(res => {
                        if (res === 'ok') {
                            history.replace('/owner/design');
                        } else {
                            alert('户型或家具不能为空')
                        }
                    })
                    .catch(err => console.log(err.message));
            } else {
                alert('名字不能为空')
            }
            localStorage.removeItem('points');
            localStorage.removeItem('pointerArray');
            localStorage.removeItem('furniture');
        }


    }
    const clearfurn = () => {
        localStorage.removeItem('furniture');
        window.location.reload();
    }
    const removeall = () => {
        // const points = localStorage.getItem('points');
        // const pointerArray = localStorage.getItem('pointerArray');
        // const furniture = localStorage.getItem('furniture');
        // if(points||pointerArray||furniture){
        //     const isclear = window.confirm('回到首页将会清空所有，你确定返回吗？');
        // if(isclear){
        //     localStorage.removeItem('points');
        //     localStorage.removeItem('pointerArray');
        //     localStorage.removeItem('furniture');
        //     history.replace('/home');
        // }
        // }else{
        //     history.replace('/home');
        // }
        
        
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
    return (
        <div className="createHeaderBox">
            <img className='create_logo' src={logo}  onClick={removeall} alt="" />
            {/* <Link to='/' onClick={removeall}><img src={logo} className="createHeaderLogo" /></Link> */}
            {/* <img src={logo} className="createHeaderLogo" onClick={removeall} /> */}
            {/* <div className="createHeaderNavItem createHeaderNavItem1" onClick={fallback}><img src={backlogo} className="createHeaderLogo1" /><span>回退</span></div> */}
            <div className="createHeaderNavItem" onClick={storageAll}><img src={storagelogo} className="createHeaderLogo2" />保存</div>
            <div className="createHeaderNavItem"><img src={backlogo} className="createHeaderLogo1" />回退</div>
            <div className="createHeaderNavItem" onClick={clearfurn}><img src={clearlogo} className="createHeaderLogo4" />清空家具</div>
            <div className="createHeaderNavItem" onClick={clearAll}><img src={emptylogo} className="createHeaderLogo3" />清空全部</div>
            <div className='userData'>
                <div className='help'>
                    <img src={help} alt="" />
                </div>
                
                <img src={'https://api.qasdwer.xyz:2019/headPortrait/'+userdata.user_head_portrait} alt="" />
            </div>
        </div>
    )
}

export default CreateHeader
