import React,{useEffect, useState} from 'react'
import './CreateContent.css'
// import ruler from './images/刻度.png'
// import ruler2 from './images/刻度2.png'
// import ruler3 from './images/刻度3.png'

const CreateContent = () => {
    const [show2d,setshow2] = useState(JSON.parse(localStorage.getItem('dis2D')));
    const [show3d,setshow3] = useState(JSON.parse(localStorage.getItem('dis3D')));
    const [buttonColor,setButtonColor] = useState({btn_2d:'rgba(68,146,239,0.6)',btn_3d:'rgba(68,146,239)'})
    const [left,setLeft] = useState({left2:370,left3:420})
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('dis2D'))?.display == 'flex'){
            setButtonColor({btn_2d:'rgba(68,146,239)',btn_3d:'rgba(68,146,239,0.6)'})
        }else{
            setButtonColor({btn_2d:'rgba(68,146,239,0.6)',btn_3d:'rgba(68,146,239)'})
        }
        console.log(111,localStorage.getItem('detailDis'))
        if(localStorage.getItem('detailDis') == '{"module":"none","furniture":"none","recommend":"none","show":"none","inspiration":"none"}'){
            console.log(111)
            setLeft({left2:70,left3:120})
        }else{
            console.log(222)
            setLeft({left2:370,left3:420})
        }
    },[])
    const get2D = ()=>{
        
        setshow2({display:'flex'})
        setshow3({display:'none'})
        localStorage.setItem('dis2D',JSON.stringify({display:'flex'}));
        localStorage.setItem('dis3D',JSON.stringify({display:'none'}));
        setButtonColor({btn_2d:'rgba(68,146,239)',btn_3d:'rgba(68,146,239,0.6)'})

    }
    const get3D = ()=>{
        
        setshow2({display:'none'})
        setshow3({display:'flex'})
        window.location.reload();
        localStorage.setItem('dis2D',JSON.stringify({display:'none'}));
        localStorage.setItem('dis3D',JSON.stringify({display:'flex'}));
        setButtonColor({btn_2d:'rgba(68,146,239,0.6)',btn_3d:'rgba(68,146,239)'})
    }
    return (
        <div className="content_outer">
            <div id='content3D' style={show3d}></div>
            <div id='content2D' style={show2d}></div>
            
            {/* <img src={ruler} className="top_ruler1"/>
            <img src={ruler} className="top_ruler2"/>
            <img src={ruler} className="top_ruler3"/>
            <img src={ruler2} className="top_ruler4"/>
            <img src={ruler3} className="top_ruler5"/> */}
            <button className='btn_3D' onClick={get3D} style={{backgroundColor:buttonColor.btn_3d,left:left.left3}}>3D</button>
            <button className='btn_2D' onClick={get2D} style={{backgroundColor:buttonColor.btn_2d,left:left.left2}}>2D</button>

        </div>
    )
}

export default CreateContent