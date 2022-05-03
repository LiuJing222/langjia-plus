import React, { useEffect, useState } from 'react'
import BackLeftNav from './BackLeftNav'
import './Furniture.css'
const Furniture = () => {
    const [fs, setFs] = useState([])
    const [delf, setDelf] = useState({})
    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/getDesignDatas")
            .then(res => res.json())
            .then(res => {
                res.sort(function (x, y) { return x.furniture_id - y.furniture_id });
                setFs(res)
            })
    }, [])
    const delF = (f) => {
        setDelf(f)
    }
    return (
        <div className='back_furniture'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_furniture_con'>
                <h3>家具素材</h3>
                <div className='back_f'>
                    <div className='back_f_id'>家具id</div>
                    <div>家具缩略图</div>
                    <div>操作</div>
                </div>
                {fs.map(f => {
                    return <div className='back_f'>
                        <div className='back_f_id'>{f.furniture_id}</div>
                        <img src={"https://api.qasdwer.xyz:2019/getDesignDatas/image/" + f.imgname} />
                        {/* <div>{f.size}</div> */}
                        {/* <div>{f.rotate}</div> */}
                        <button className='back_f_del' onClick={() => { delF(f) }}>移除</button>
                    </div>
                })}
            </div>
        </div >
    )
}

export default Furniture