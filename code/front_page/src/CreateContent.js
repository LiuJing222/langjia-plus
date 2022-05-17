import React, { useEffect, useState } from 'react'
import './CreateContent.css'
import createStart from './images/createStart.jpg'
import CreateRight from './CreateRight.js'
// import ruler from './images/刻度.png'
// import ruler2 from './images/刻度2.png'
// import ruler3 from './images/刻度3.png'

const CreateContent = () => {
    const [show2d, setshow2] = useState(JSON.parse(localStorage.getItem('dis2D')));
    const [show3d, setshow3] = useState(JSON.parse(localStorage.getItem('dis3D')));
    const [showStart, setShowStart] = useState(JSON.parse(localStorage.getItem('disStart')))
    const [buttonColor, setButtonColor] = useState({ btn_2d: 'rgba(68,146,239,0.6)', btn_3d: 'rgba(68,146,239)' })
    // const [left, setLeft] = useState({ left2: 370, left3: 420 })

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('dis2D'))?.display == 'flex') {
            setButtonColor({ btn_2d: 'rgba(68,146,239)', btn_3d: 'rgba(68,146,239,0.6)' })
        } else {
            setButtonColor({ btn_2d: 'rgba(68,146,239,0.6)', btn_3d: 'rgba(68,146,239)' })
        }
        // if (localStorage.getItem('detailDis') == '{"module":"none","furniture":"none","recommend":"none","show":"none","inspiration":"none"}') {
        //     console.log(111)
        //     setLeft({ left2: 70, left3: 120 })
        // } else {
        //     console.log(222)
        //     setLeft({ left2: 370, left3: 420 })
        // }
        // if (localStorage.getItem('tip') === 'false') {
        //     localStorage.setItem('disStart',JSON.stringify({display:'flex'}));
        //     localStorage.setItem('tip', true);
        // }else{
        //     localStorage.setItem('disStart',JSON.stringify({display:'none'}));
        // }
    }, [])
    const get2D = () => {

        setshow2({ display: 'flex' })
        setshow3({ display: 'none' })
        setShowStart({ display: 'none' })
        localStorage.setItem('dis2D', JSON.stringify({ display: 'flex' }));
        localStorage.setItem('dis3D', JSON.stringify({ display: 'none' }));
        localStorage.setItem('disStart', JSON.stringify({ display: 'none' }))
        setButtonColor({ btn_2d: 'rgba(68,146,239)', btn_3d: 'rgba(68,146,239,0.6)' })

    }
    const get3D = () => {

        setshow2({ display: 'none' })
        setshow3({ display: 'flex' })
        setShowStart({ display: 'none' })
        window.location.reload();
        localStorage.setItem('dis2D', JSON.stringify({ display: 'none' }));
        localStorage.setItem('dis3D', JSON.stringify({ display: 'flex' }));
        localStorage.setItem('disStart', JSON.stringify({ display: 'none' }))
        setButtonColor({ btn_2d: 'rgba(68,146,239,0.6)', btn_3d: 'rgba(68,146,239)' })
    }
    const change = () => {
        setshow2({ display: 'flex' })
        setshow3({ display: 'none' })
        setShowStart({ display: 'none' })
        localStorage.setItem('dis2D', JSON.stringify({ display: 'flex' }));
        localStorage.setItem('dis3D', JSON.stringify({ display: 'none' }));
        localStorage.setItem('disStart', JSON.stringify({ display: 'none' }))
        setButtonColor({ btn_2d: 'rgba(68,146,239)', btn_3d: 'rgba(68,146,239,0.6)' })
        window.location.reload();
    }
    return (
        <div className="content_outer">
            <div id='content3D' style={show3d}>
                <button className='btn_3D' onClick={get3D} style={{ backgroundColor: buttonColor.btn_3d }}>3D</button>
                <button className='btn_2D' onClick={get2D} style={{ backgroundColor: buttonColor.btn_2d }}>2D</button>
            </div>
            <div id='content2D' style={show2d}>
                <button className='btn_3D' onClick={get3D} style={{ backgroundColor: buttonColor.btn_3d }}>3D</button>
                <button className='btn_2D' onClick={get2D} style={{ backgroundColor: buttonColor.btn_2d }}>2D</button>
            </div>
            <div className='create_start_page' style={showStart} onClick={change}>
                <img src={createStart} alt="" />
            </div>
            {/* <img src={ruler} className="top_ruler1"/>
            <img src={ruler} className="top_ruler2"/>
            <img src={ruler} className="top_ruler3"/>
            <img src={ruler2} className="top_ruler4"/>
            <img src={ruler3} className="top_ruler5"/> */}
            <div className='create_right' style={show3d}>
                <CreateRight></CreateRight>
            </div>



        </div>
    )
}

export default CreateContent