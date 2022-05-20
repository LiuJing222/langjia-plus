import React, { useEffect, useState } from 'react'
import HomeHeader from './HomeHeader'
import './Recommend.css'
import rec_banner from './images/rec_banner.mp4'
import ReactPlayer from 'react-player'
import good from './images/good.png'
import good2 from './images/good2.png'
import rainbow from './images/rainbow.png'
import rec_show from './images/rec_show.mp4'
import create from './images/create.jpg'
import { RightOutline } from 'antd-mobile-icons'
import { Link, useHistory } from 'react-router-dom'
import select from './images/des_select.mp4'


const Recommend = () => {
    const history = useHistory();
    const [sel, setSel] = useState(['none', 'none', 'none', 'none', 'none']);
    const [list, setList] = useState([]);
    const [val,setVal] = useState('');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getexcellenceworks')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setList(res);
            })
    }, [])
    const changeValue = (e) => {
        setVal(e.target.value)
    }
    const selectFore = (e)=>{
        if(e.keyCode == 13){
            history.push({pathname: '/des/t_p_1', state: {val: val}})
        }   
    }
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='select_top'>
                <div className='selector'>
                    <div className='selector_container selector_div' style={{ marginTop: 30 }}>
                        <div className='select_row selector_div' onMouseOver={() => setSel(['flex', 'none', 'none', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <RightOutline className='select_right' />
                            <span className='select_row_title'>风格</span>
                            <a className='select_row_text' >现代简约</a>
                            <a className='select_row_text'>新中式</a>

                        </div>
                        <div className='expand-container-outer' onMouseOver={() => setSel(['flex', 'none', 'none', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <div class="expand-container-inner" style={{ display: sel[0] }}>
                                <div style={{ marginRight: 20, marginLeft: 10 }}>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_xiandaijianyue_p_1" target="_blank">现代简约</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_qingshe_p_1" target="_blank">轻奢</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_oushi_p_1" target="_blank">欧式</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_rishi_p_1" target="_blank">日式</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_jianmei_p_1" target="_blank">简美</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_houxiandai_p_1" target="_blank">后现代</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_hunda_p_1" target="_blank">混搭</a>
                                    </span>
                                </div>
                                <div>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_xinzhongshi_p_1" target="_blank">新中式</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_beiou_p_1" target="_blank">北欧</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_jianou_p_1" target="_blank">简欧</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_meishi_p_1" target="_blank">美式</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_tianyuan_p_1" target="_blank">田园</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_gangshi_p_1" target="_blank">港式</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='selector_container selector_div'>
                        <div className='select_row select_row_two selector_div' onMouseOver={() => setSel(['none', 'flex', 'none', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <RightOutline className='select_right' />
                            <span className='select_row_title'>空间</span>
                            <a className='select_row_text'>客厅</a>
                            <a className='select_row_text'>主卧</a>
                            <a className='select_row_text'>餐厅</a>
                            <a className='select_row_text'>卫生间</a>

                        </div>
                        <div className='expand-container-outer' onMouseOver={() => setSel(['none', 'flex', 'none', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <div class="expand-container-inner" style={{ display: sel[1] }}>
                                <div style={{ marginRight: 20, marginLeft: 10 }}>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_keting_p_1" target="_blank">客厅</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_canting_p_1" target="_blank">餐厅</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_kecanting_p_1" target="_blank">客餐厅</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_chufang_p_1" target="_blank">厨房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_ciwo_p_1" target="_blank">次卧</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_kewo_p_1" target="_blank">客卧</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_ertongfang_p_1" target="_blank">儿童房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_tianjing_p_1" target="_blank">天井</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_zoulang_p_1" target="_blank">走廊</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_yangtai_p_1" target="_blank">阳台</a>
                                    </span>
                                </div>
                                <div>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_zhuwo_p_1" target="_blank">主卧</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_weishengjian_p_1" target="_blank">卫生间</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_nverfang_p_1" target="_blank">女儿房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_baomufang_p_1" target="_blank">保姆房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_laorenfang_p_1" target="_blank">老人房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_shufang_p_1" target="_blank">书房</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_duogongnengshi_p_1" target="_blank">多功能室</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_chucangjian_p_1" target="_blank">储物间</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_xuanguan_p_1" target="_blank">玄关</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_lutai_p_1" target="_blank">露台</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='selector_container selector_div'>
                        <div className='select_row selector_div' onMouseOver={() => setSel(['none', 'none', 'flex', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <RightOutline className='select_right' />
                            <span className='select_row_title'>户型</span>
                            <a className='select_row_text'>一居</a>
                            <a className='select_row_text'>二居</a>

                        </div>
                        <div className='expand-container-outer' onMouseOver={() => setSel(['none', 'none', 'flex', 'none', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <div class="expand-container-inner" style={{ display: sel[2] }}>
                                <div style={{ marginRight: 20, marginLeft: 10 }}>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_yiju_p_1" target="_blank">一居</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_sanju_p_1" target="_blank">三居</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_wujujiyishang_p_1" target="_blank">五居及以上</a>
                                    </span>
                                </div>
                                <div>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_erju_p_1" target="_blank">二居</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_siju_p_1" target="_blank">四居</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='selector_container selector_div'>
                        <div className='select_row selector_div' onMouseOver={() => setSel(['none', 'none', 'none', 'flex', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <RightOutline className='select_right' />
                            <span className='select_row_title'>面积</span>
                            <a className='select_row_text'>50-80m²</a>
                            <a className='select_row_text'>80-100m²</a>

                        </div>
                        <div className='expand-container-outer' onMouseOver={() => setSel(['none', 'none', 'none', 'flex', 'none'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <div class="expand-container-inner" style={{ display: sel[3] }}>
                                <div style={{ marginRight: 10, marginLeft: 10 }}>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_50-80_p_1" target="_blank">50-80m²</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_100-130_p_1" target="_blank">100-130m²</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_130jiyishang_p_1" target="_blank">130m²及以上</a>
                                    </span>
                                </div>
                                <div>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_80-100_p_1" target="_blank">80-100m²</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_50jiyixia_p_1" target="_blank">50m²及以下</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='selector_container selector_div'>
                        <div className='select_row selector_div' onMouseOver={() => setSel(['none', 'none', 'none', 'none', 'flex'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <RightOutline className='select_right' />
                            <span className='select_row_title'>场景</span>
                            <a className='select_row_text'>家居</a>
                            <a className='select_row_text'>办公</a>

                        </div>
                        <div className='expand-container-outer' onMouseOver={() => setSel(['none', 'none', 'none', 'none', 'flex'])} onMouseOut={() => setSel(['none', 'none', 'none', 'none', 'none'])}>
                            <div class="expand-container-inner" style={{ display: sel[4] }}>
                                <div style={{ marginRight: 20, marginLeft: 10 }}>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_jiazhuang_p_1" target="_blank">家装</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_canyin_p_1" target="_blank">餐饮</a>
                                    </span>
                                </div>
                                <div>
                                    <span class="expand-item" style={{ marginTop: 8 }}>
                                        <a href="/des/t_bangong_p_1" target="_blank">办公</a>
                                    </span>
                                    <span class="expand-item">
                                        <a href="/des/t_yule_p_1" target="_blank">娱乐</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='selector_bottom selector_div' style={{ marginTop: 30 }}>
                        <input value={val} type="text" placeholder='家居' className='select_input' onChange={changeValue} onKeyDown={selectFore}/>
                    </div>
                    <div className='select_bottom selector_bottom selector_div' style={{ marginTop: 30, height: 60 }}>
                        <div>
                            <img src={good} alt="" />
                            <span>精品单图</span>
                        </div>
                        <div>
                            <img src={good2} alt="" />
                            <span>精品专题</span>
                        </div>
                    </div>

                </div>
                <Link to={{ pathname: '/InsCon', search: JSON.stringify(list[10]) }} target='_blank' rel="opener">
                <div className="rec_player">
                    <ReactPlayer
                        className="reactPlayer"
                        // url={rec_banner}
                        url={list[10]?.vedio}
                        // url={'http://user-platform-oss.kujiale.com/design/video/perm/MJJCGGYKTFASIAABAAAAACA8.mp4'}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        //   controls
                        width='100%'
                        height='540px'

                    />
                    <div className='player_topleft'>视频动画</div>
                    <div className='player_bottomleft'>
                        <div>今日推荐</div>
                        <div>现代简约风格120平3方1厅2卫</div>
                    </div>
                    <div className='player_bottomright'>
                        <img src={rainbow} alt="" />
                        <span>张伟</span>
                    </div>
                </div>
                </Link>
            </div>
            {/* <div className='middle_list_div'>
                <ul className='middle_list'>
                    <li>我的关注</li>
                    <li>全部推荐</li>
                    <li>大咖秀</li>
                    <li>新锐力量</li>
                </ul>
            </div> */}
            <div className='all_recommend'>
                <Link to={{ pathname: '/InsCon', search: JSON.stringify(list[11]) }} target='_blank' rel="opener">
                <div className='rec_show_div'>
                    <ReactPlayer
                        className="reactPlayer2"
                        // url={rec_show}
                        url={list[11]?.vedio}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        width='100%'
                        height='450px'
                    />
                    <div className='rec_player_topleft'>大咖秀</div>
                    <div className='rec_player_bottomleft'>
                        <div className='rec_name'>
                            <img src={rainbow} alt="" />
                            <span>张伟</span>
                        </div>
                        <div className='big_show_title'>现代简约风格120平3方1厅2卫</div>
                    </div>
                </div>
                </Link>
                
                <div className='rec_createCenter'>
                <Link to='/uploadDes' target='_blank' rel="opener">
                    <div className='rec_createCenter_div1'>
                        <img src={create} alt="" />
                    </div>
                    </Link>
                    <div className='rec_createCenter_div2'>
                        <div>
                            <p>创作者中心上线啦！</p>
                            <p>投稿作品管理 | 投稿记录查询 | 活动抢先看</p>
                        </div>
                        <Link to='/uploadDes' target='_blank' rel="opener">
                        <div>
                            <span className='rec_look'>点击查看</span>
                        </div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className='all_rec_div'>
                <ul>
                    {
                        list.map((item) => {
                            if (item.work_id % 3 == 1) {
                                if (item.vedio) {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1 rec_all_li2'>
                                                <div className='rec_li1_img rec_li1_video'>
                                                    <ReactPlayer
                                                        className="reactPlayer3"
                                                        url={item.vedio}
                                                        playing={true}
                                                        autoPlay={true}
                                                        muted={true}
                                                        loop={true}
                                                        width='100%'
                                                        height='300px'
                                                    />
                                                    <div className='rec_li_div3 rec_play_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2 rec_play_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>


                                            </li>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1'>
                                                <div className='rec_li1_img'>
                                                    <img src={item.cover_img} alt="" />
                                                    <div className='rec_li_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                }
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
                <ul>
                    {
                        list.map((item) => {
                            if (item.work_id % 3 == 2) {
                                if (item.vedio) {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1 rec_all_li2'>
                                                <div className='rec_li1_img rec_li1_video'>
                                                    <ReactPlayer
                                                        className="reactPlayer3"
                                                        url={item.vedio}
                                                        playing={true}
                                                        autoPlay={true}
                                                        muted={true}
                                                        loop={true}
                                                        width='100%'
                                                        height='300px'
                                                    />
                                                    <div className='rec_li_div3 rec_play_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2 rec_play_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>


                                            </li>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1'>
                                                <div className='rec_li1_img'>
                                                    <img src={item.cover_img} alt="" />
                                                    <div className='rec_li_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                }
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
                <ul>
                    {
                        list.map((item) => {
                            if (item.work_id % 3 == 0) {
                                if (item.vedio) {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1 rec_all_li2'>
                                                <div className='rec_li1_img rec_li1_video'>
                                                    <ReactPlayer
                                                        className="reactPlayer3"
                                                        url={item.vedio}
                                                        playing={true}
                                                        autoPlay={true}
                                                        muted={true}
                                                        loop={true}
                                                        width='100%'
                                                        height='300px'
                                                    />
                                                    <div className='rec_li_div3 rec_play_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2 rec_play_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>


                                            </li>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Link to={{ pathname: '/InsCon', search: JSON.stringify(item) }} target='_blank' rel="opener">
                                            <li className='rec_all_li1'>
                                                <div className='rec_li1_img'>
                                                    <img src={item.cover_img} alt="" />
                                                    <div className='rec_li_div3'>
                                                        <span>{item.discribe}</span>
                                                    </div>
                                                </div>
                                                <div className='rec_li_div2'>
                                                    <div title={item.title}>{item.title}</div>
                                                    <div>
                                                        <img src={'https://api.qasdwer.xyz:2019/headPortrait/' + item.header} alt="" />
                                                        <span title={item.user_name}>{item.user_name}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                }
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
            </div>
            <div className='ins_more'>
                <ReactPlayer
                    className="ins_more_mp4"
                    style={{ marginTop: 0 }}
                    url={select}
                    playing={true}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    //   controls
                    width='250px'
                    height='250px'
                />
                <div className='ins_more_txt' style={{ marginLeft: 5, fontSize: 29 }}>更多精彩 敬请期待！</div>
            </div>
        </div>
    )
}

export default Recommend