import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

import BackLeftNav from './BackLeftNav'
import "./BackHouseTyp.css"
const BackHouseType = () => {
    const [houseList, setHouseList] = useState([])
    const [addhouse, setAddhouse] = useState(false)
    const [delhouse, setDelhouse] = useState('')
    const [housename, setHousename] = useState('')

    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/gethousetype")
            .then(res => res.json())
            .then(res => {
                res.sort(function (x, y) { return x.house_id - y.house_id });
                setHouseList(res)
            })
        console.log(delhouse)
    }, [])

    const onRightDel = (id) => {
        fetch("https://api.qasdwer.xyz:2019/delhousetype/" + id)
            .then(res => res.json())
            .then(res => {
                alert('删除成功！');
                window.location.reload();
            })
        // history.replace('/backhousetype')
        
    }
    const addHouse = () => {
        setAddhouse(true);
    }
    const concelHouse = () => {
        setAddhouse(false)
    }
    const cancelDel = () => {
        setDelhouse('')
    }
    const history = useHistory();
    const fileInput = React.createRef();
    const addHousetypeSure = () => {
        var housetypeName = document.getElementById('add_housetype_name');
        var housetypeData = document.getElementById('add_housetype_data');
        // event.preventDefault();
        let oFd = new FormData();

        for (var i = 0; i < fileInput.current.files.length; i++) {
            oFd.append(`upfile${i}`, fileInput.current.files[i]);
        }

        oFd.append('title', housetypeName.value);
        oFd.append('content', housetypeData.value);
        if (housetypeName.value === '' || housetypeData.value === '' || fileInput.current.files[0] === undefined) {
            alert('请检查输入数据！')
            return;
        }
        axios.post('https://api.qasdwer.xyz:2019/addhousetype', oFd, {

            headers: { 'content-type': 'text/plain;charset=utf-8' },
            responseType: 'text'
        }).then(dat => {
            alert('上传成功！', dat);
            window.location.reload();
        }).catch(err => {
            alert('上传失败！', err)
        })
        // history.replace('/backhousetype')
        
    }
    return (
        <div className='back_user_data'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_home_con'>
                <h3>户型数据</h3>
                <button className='add_housetype_button' onClick={() => addHouse()}>新增户型</button>
                <div className='back_home_list'>
                    <div className='back_housetype_item' style={{ height: 60 }}>
                        <div className='back_housetype_item_id' style={{ paddingTop: 20,fontWeight:600}}>户型id</div>
                        <div className='back_housetype_item_name' style={{ paddingTop: 20,fontWeight:600}}>户型名称</div>
                        <div className='back_housetype_item_2d' style={{ paddingTop: 20,fontWeight:600 }}>户型2D图</div>
                        <div className='back_housetype_item_3d' style={{ paddingTop: 20 ,fontWeight:600}}>户型3D图</div>
                        <div className='back_housetype_item_del' style={{ paddingTop: 20 ,fontWeight:600}}>操作</div>
                    </div>
                    <div className='back_housetype_item_box'>
                    {houseList[0] ? houseList.map(token => {
                        return <div className='back_housetype_item' >
                            <div className='back_housetype_item_id' style={{marginTop:70}}>{token.house_id}</div>
                            <div className='back_housetype_item_name' style={{marginTop:70}}>{token.house_name}</div>
                            <img className='back_housetype_item_2d' src={'https://api.qasdwer.xyz:2019/gethousetype/' + JSON.parse(token.imgname)[1]} />
                            <img className='back_housetype_item_3d' src={'https://api.qasdwer.xyz:2019/gethousetype/' + JSON.parse(token.imgname)[0]} />
                            <div className='back_housetype_item_del'>
                                <button className='back_housetype_item_delbtn' onClick={() => { setDelhouse(token.house_id); setHousename(token.house_name) }}>删除</button>

                            </div>
                        </div>
                    })
                        : <div></div>}
                    </div>
                </div>

            </div>
            {
                addhouse ?
                    <div className='back_addhouse_mask'>
                        <div className='back_addhouse_con'>
                            <h3>请上传户型的数据</h3>
                            <div className='add_housetype_title'>
                                <span>户型名称</span>
                                <input id='add_housetype_name' type="text" placeholder='请输入户型名称' />
                            </div>
                            <div className='add_housetype_data'>
                                <span>点数据/字符串格式</span>
                                <textarea id='add_housetype_data' cols="30" rows="10"></textarea>
                            </div>
                            <div className='add_housetype_upimg'>
                                <span>上传图片</span>
                                <input type="file" id="add_housetype_imgs" ref={fileInput} multiple />
                            </div>
                            <div className='add_housetype_btns'>
                                <button className='add_housetype_sure' onClick={() => addHousetypeSure()}>确认上传</button>
                                <button className='add_housetype_cancel' onClick={() => concelHouse()}>取消上传</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div></div>
            }
            {
                delhouse ?
                    <div className='del_housetype_mask'>
                        <div className='del_housetype_box'>
                            <h3 className="del_housetype_title">请确认是否删除该户型</h3>
                            <div className="del_housetype_desc">户型：{housename}</div>
                            <div className="del_housetype_btns">
                                <button className="del_housetype_cancelbtn" onClick={() => cancelDel()}>取消删除</button>
                                <button className="del_housetype_surebtn" onClick={() => onRightDel(delhouse)}>确认删除</button>
                            </div>
                        </div>

                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default BackHouseType