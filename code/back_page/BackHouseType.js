import React, { useEffect, useState } from 'react'

import BackLeftNav from './BackLeftNav'
import "./BackHouseTyp.css"
const BackHouseType = () => {
    const [houseList, setHouseList] = useState([])
    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/gethousetype")
            .then(res => res.json())
            .then(res => {
                res.sort(function (x, y) { return x.house_id - y.house_id });
                setHouseList(res)
            })
    }, [])
    console.log(houseList[0])
    const delHouseType = (token) => {
        fetch("https://api.qasdwer:2019/delhousetype/" + token.id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className='back_user_data'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_home_con'>
                <h3>户型数据</h3>
                <button className='add_housetype_button'>新增户型</button>
                <div className='back_home_list'>
                    <div className='back_housetype_item' style={{ height: 60 }}>
                        <div className='back_housetype_item_id'>户型id</div>
                        <div className='back_housetype_item_name'>户型名称</div>
                        <div className='back_housetype_item_2d'>户型2D图</div>
                        <div className='back_housetype_item_3d'>户型3D图</div>
                        <div></div>
                    </div>
                    {houseList[0] ? houseList.map(token => {
                        return <div className='back_housetype_item' >
                            <div className='back_housetype_item_id'>{token.house_id}</div>
                            <div className='back_housetype_item_name'>{token.house_name}</div>
                            <img className='back_housetype_item_2d' src={'https://api.qasdwer.xyz:2019/gethousetype/' + JSON.parse(token.imgname)[0]} />
                            <img className='back_housetype_item_3d' src={'https://api.qasdwer.xyz:2019/gethousetype/' + JSON.parse(token.imgname)[1]} />
                            <button onClick={delHouseType(token)}>删除</button>
                        </div>
                    })
                        : <div></div>}
                </div>

            </div>
        </div>
    )
}

export default BackHouseType