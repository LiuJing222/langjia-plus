import React, { useEffect, useState } from 'react'
import BackLeftNav from './BackLeftNav'
import axios from 'axios'
import { useHistory } from 'react-router'
import './Furniture.css'
const Furniture = () => {
    const [fs, setFs] = useState([])
    const [delf, setDelf] = useState({})
    const [addf,setAddf] = useState(false)
    const history = useHistory();
    const size = React.createRef();
    const fileInput = React.createRef();
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
    const handleSubmit = (event) =>{
        event.preventDefault();
        if ((fileInput.current.files).length !== 3) {
            alert('请检查上传文件数量！')
            return;
        }
        let oFd = new FormData();
        oFd.append('upfile0',fileInput.current.files[0]);
        oFd.append('upfile1',fileInput.current.files[1]);
        oFd.append('upfile2',fileInput.current.files[2]);
        oFd.append('size',size.current.value)

        axios.post('https://api.qasdwer.xyz:2019/addfurniture', oFd, {
            headers: { 'content-type': 'text/plain;charset=utf-8' },
            responseType: 'text'
        }).then(dat => {
            alert('上传成功！',dat);
            window.location.reload()
        }).catch(err=>{
            alert('上传失败！',err)
        })
        // history.replace('/home/backFurniture')
    }

    const cancelUpload = ()=>{
        setAddf(false)
        history.replace('/backfurniture')
    }
    return (
        <div className='back_furniture'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_furniture_con'>
                <h3>家具素材</h3>
                <div className='back_add_fbtn' onClick={()=>setAddf(true)}>新增家具</div>
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
                : 
                <div></div>
            }
            {
                addf?
                <div className='add_fur_mask'>
                    <div className="add_fur_box">
                    <form onSubmit={handleSubmit} className="add_fur_form">
                        <h3 className="add_fur_tip">请完善上传家具的内容</h3>
                        <label>
                            <div className='add_fur_title'>初始大小</div>
                            <input type="text" ref={size} className="add_fur_input_title"></input>
                        </label>
                        <label>
                            <div className='add_fur_title'>上传obj,mtl及图片文件</div>
                            <input type="file" accept='image/*' multiple ref={fileInput} className='add_fur_choose'></input>
                        </label>
                        <br />
                        <div className="add_fur_btns">
                            <button className="sub_btn" onClick={cancelUpload}>取消上传</button>
                            <button type="submit" className="sub_btn">确认上传</button>
                        </div>
                    </form>
                </div>
                </div>
                :
                <div></div>
            }
        </div >
    )
}

export default Furniture