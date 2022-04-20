import React from 'react'
import './DesignSort.css'
import { useState } from 'react'
const Designsort = () => {
    const changePage = (e)=>{
        const aa = document.querySelectorAll('.des_select_row_text');
        console.log(aa)
        for(var i=0;i<aa.length;i++){
            aa[i].className='des_select_row_text';
        }
        e.target.className = 'des_select_row_text des_selected';
        console.log(e.target.innerText)
    }
  return (
    <div className='des_container'>
        <div className='des_selector'>
                    <div className='des_select_row'>
                        <a className='des_select_row_title'>风格:</a>
                        {/* <a onClick={changePage} href='des/p_1' className='des_select_row_text'>不限</a>
                        <a onClick={changePage} href='des/t_xiandaijianyue_p_1' className='des_select_row_text'>现代简约</a>
                        <a onClick={changePage} href='des/t_xinzhongshi_p_1' className='des_select_row_text'>新中式</a>
                        <a onClick={changePage} href='des/t_beiou_p_1' className='des_select_row_text'>北欧</a>
                        <a onClick={changePage} href='des/t_oushi_p_1' className='des_select_row_text'>欧式</a>
                        <a onClick={changePage} href='des/t_jianou_p_1' className='des_select_row_text'>简欧</a>
                        <a onClick={changePage} href='des/t_rishi_p_1' className='des_select_row_text'>日式</a>
                        <a onClick={changePage} href='des/t_tianyuan_p_1' className='des_select_row_text'>田园</a>
                        <a onClick={changePage} href='des/t_meishi_p_1' className='des_select_row_text'>美式</a>
                        <a onClick={changePage} href='des/t_jianmei_p_1' className='des_select_row_text'>简美</a>
                        <a onClick={changePage} href='des/t_hunda_p_1' className='des_select_row_text'>混搭</a>
                        <a onClick={changePage} href='des/t_houxiandai_p_1' className='des_select_row_text'>后现代</a>
                        <a onClick={changePage} href='des/t_qingshe_p_1' className='des_select_row_text'>轻奢</a>
                        <a onClick={changePage} href='des/t_gangshi_p_1' className='des_select_row_text'>港式</a> */}
                        <a onClick={changePage} className='des_select_row_text'>不限</a>
                        <a onClick={changePage} className='des_select_row_text'>现代简约</a>
                        <a onClick={changePage} className='des_select_row_text'>新中式</a>
                        <a onClick={changePage} className='des_select_row_text'>北欧</a>
                        <a onClick={changePage} className='des_select_row_text'>欧式</a>
                        <a onClick={changePage} className='des_select_row_text'>简欧</a>
                        <a onClick={changePage} className='des_select_row_text'>日式</a>
                        <a onClick={changePage} className='des_select_row_text'>田园</a>
                        <a onClick={changePage} className='des_select_row_text'>美式</a>
                        <a onClick={changePage} className='des_select_row_text'>简美</a>
                        <a onClick={changePage} className='des_select_row_text'>混搭</a>
                        <a onClick={changePage} className='des_select_row_text'>后现代</a>
                        <a onClick={changePage} className='des_select_row_text'>轻奢</a>
                        <a onClick={changePage} className='des_select_row_text'>港式</a>
                    </div>
                    <div className='des_select_row'>
                        <a rel className='des_select_row_title'>空间:</a>
                        <a rel className='des_select_row_text'>不限</a>
                        <a rel className='des_select_row_text'>客厅</a>
                        <a rel className='des_select_row_text'>餐厅</a>
                        <a rel className='des_select_row_text'>客餐厅</a>
                        <a rel className='des_select_row_text'>厨房</a>
                        <a rel className='des_select_row_text'>卫生间</a>
                        <a rel className='des_select_row_text'>主卧</a>
                        <a rel className='des_select_row_text'>次卧</a>
                        <a rel className='des_select_row_text'>客卧</a>
                        <a rel className='des_select_row_text'>儿童房</a>
                        <a rel className='des_select_row_text'>女儿房</a>
                        <a rel className='des_select_row_text'>保姆房</a>
                        <a rel className='des_select_row_text'>老人房</a>
                        <a rel className='des_select_row_text'>书房</a>
                        <a rel className='des_select_row_text'>多功能室</a>
                        <a rel className='des_select_row_text'>储物间</a>
                        <a rel className='des_select_row_text'>玄关</a>
                        <a rel className='des_select_row_text'>天井</a>
                        <a rel className='des_select_row_text'>走廊</a>
                        <a rel className='des_select_row_text'>阳台</a>
                        <a rel className='des_select_row_text'>露台</a>
                    </div>
                    <div className='des_select_row'>
                        <a rel className='des_select_row_title'>户型:</a>
                        <a rel className='des_select_row_text'>不限</a>
                        <a rel className='des_select_row_text'>一居</a>
                        <a rel className='des_select_row_text'>二居</a>
                        <a rel className='des_select_row_text'>三居</a>
                        <a rel className='des_select_row_text'>四居</a>
                        <a rel className='des_select_row_text'>五居及以上</a>
                    </div>
                    <div className='des_select_row'>
                        <a rel className='des_select_row_title'>面积:</a>
                        <a rel className='des_select_row_text'>不限</a>
                        <a rel className='des_select_row_text'>50-80m²</a>
                        <a rel className='des_select_row_text'>80-100m²</a>
                        <a rel className='des_select_row_text'>100-130m²</a>
                        <a rel className='des_select_row_text'>130m²及以上</a>
                        <a rel className='des_select_row_text'>50m²及以下</a>
                    </div>
                    <div className='des_select_row'>
                        <a rel className='des_select_row_title'>场景:</a>
                        <a rel className='des_select_row_text'>不限</a>
                        <a rel className='des_select_row_text'>家居</a>
                        <a rel className='des_select_row_text'>办公</a>
                        <a rel className='des_select_row_text'>餐饮</a>
                        <a rel className='des_select_row_text'>娱乐</a>
                    </div>
                </div>
    </div>
  )
}

export default Designsort