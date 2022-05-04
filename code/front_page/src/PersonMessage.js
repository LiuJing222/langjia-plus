import React,{useState,useEffect} from 'react'
import './PersonMessage.css'
import axios from 'axios'
import upload from './images/upload.png'

const PersonMessage = () => {
    const [name,setName] = useState('');
    const [intro,setIntro] = useState('');
    const [message,setMessage] = useState({});
    const [imgfile,setImgfile] = useState({});

    var email = localStorage.getItem('email');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {
                res.map(item=>{
                    if(item.user_id==email){
                        setMessage(item);
                    }
                })
            })
            .catch(err => console.log(err.message));
    },[])

    const changeMessage = ()=>{
        console.log(name);
        console.log(intro);
        let oFd = new FormData();
        oFd.append('username',name);
        oFd.append('userintro',intro);
        axios.post('https://api.qasdwer.xyz:2019/addheadPortrait/'+email, oFd, {
            headers:{'content-type': 'text/plain;charset=utf-8'},
            responseType: 'text'
        }).then(dat => {
            console.log(dat);
            window.location.reload();
        })

    }
    const changeHeader=()=>{
        let oFd = new FormData();
        oFd.append('upImg', document.getElementById('head-image').files[0]);
        axios.post('https://api.qasdwer.xyz:2019/addheadPortrait/'+email, oFd, {
            headers:{'content-type': 'text/plain;charset=utf-8'},
            responseType: 'text'
        }).then(dat => {
            console.log(dat);
            window.location.reload();
        })
    }

    return (
        <div className="personalcenter_setting_personmessage">
            <div>
                <div>
                    <p>昵称</p>
                    <input type="text" placeholder={message.user_name} value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <p>个性签名</p>
                    <textarea rows="7" cols="30" placeholder={message.user_introduction}  value={intro} onChange={(e)=>setIntro(e.target.value)}/>
                </div>
                <div onClick={()=>changeMessage()}>更新信息</div>
            </div>
            <div>
                <p>头像</p>
                <img src={'https://api.qasdwer.xyz:2019/headPortrait/'+message.user_head_portrait}></img>
                <div>
                    <input type="file" accept='image/*' placeholder="点击更换头像" id="head-image"/>
                    <div onClick={()=>changeHeader()}><img src={upload}/></div>
                </div>
            </div>
        </div>
    )
}

export default PersonMessage
