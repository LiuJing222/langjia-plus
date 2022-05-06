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
    // ==========================删除家具============================
    const delF = (f) => {
        setDelf(f)
        console.log(f)
    }

    const delFSure = (id) => {
        fetch('https://api.qasdwer.xyz:2019/delfurniture/' + id, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
        })
            .then(res => res.json())
            .then(json => {
                json.sort(function (x, y) { return x.furniture_id - y.furniture_id });
                json && setFs(json)
                console.log(fs)
                alert('删除成功！')
            }).catch(err => {
                alert('删除失败！', err);
            })
        setDelf({})
    }
    const delFCancel = () => {
        setDelf({})
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
            {delf.furniture_id ? <div className='del_fur_mask'>
                <div className='del_fur_confirm'>
                    <div className='del_text'>确定删除家具{delf.furniture_id}吗？</div>
                    <img src={"https://api.qasdwer.xyz:2019/getDesignDatas/image/" + delf.imgname} />
                    <div className='del_fur_btns'>
                        <button onClick={() => { delFSure(delf.furniture_id) }}>确定删除</button>
                        <button onClick={() => { delFCancel() }}>不删了</button>
                    </div>
                </div>
            </div>
                : <div></div>}
        </div >
    )
}

export default Furniture