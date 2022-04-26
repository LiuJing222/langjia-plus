import React from 'react'
import './DesignSort.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactPlayer from 'react-player'
import select from './images/des_select.mp4'
const Designsort = () => {
    const [list, setList] = useState([]);
    const history = useHistory();
    // const [partpath,setPartpath] = useState({style:'',space:'',house:'',area:'',scene:''});
    const [style, setStyle] = useState('');
    const [space, setSpace] = useState('');
    const [house, setHouse] = useState('');
    const [area, setArea] = useState('');
    const [scene, setScene] = useState('');
    // const [rec_data,setRec_data] = useState([]);
    let pinyin = require("pinyin");
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getexcellenceworks')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const rec_data = res;
                const path = history.location.pathname.slice(history.location.pathname.lastIndexOf('/'));

                const all = history.location.pathname.slice(history.location.pathname.lastIndexOf('/'), history.location.pathname.lastIndexOf('_p_1'));


                const reg = /_[a-z0-9-]*/g;
                const allsel = all.match(reg);     //url中所有的属性 ['','','','']
                // setPartpath(history.location.pathname.slice(0,history.location.pathname.lastIndexOf('_p_1')));
                const aa = document.querySelectorAll('.des_select_row_text');
                for (var i = 0; i < aa.length; i++) {

                    if (aa[i].name) {
                        for (var j = 0; j < allsel?.length; j++) {
                            if (allsel[j] == aa[i].name) {
                                if (i > 0 && i < 14) {
                                    setStyle(allsel[j])
                                } else if (i >= 14 && i < 35) {
                                    setSpace(allsel[j]);
                                } else if (i >= 35 && i < 41) {
                                    setHouse(allsel[j]);
                                } else if (i >= 41 && i < 47) {
                                    setArea(allsel[j]);
                                } else if (i >= 47 && i < 52) {
                                    setScene(allsel[j]);
                                }
                            }
                        }
                    }

                }
                for (var i = 0; i < aa.length; i++) {
                    const target = aa[i].href.slice(aa[i].href.indexOf('/t'), aa[i].href.indexOf('_p_1'));  //
                    if (!allsel) {
                        if (aa[i].innerText == '不限') {
                            aa[i].className = 'des_select_row_text des_selected';
                        }
                    } else {
                        for (var j = 0; j < allsel.length; j++) {
                            console.log(allsel[j], 2222222, target)
                            // if (allsel[j] == target) {
                            //     console.log(allsel[j], 1111111, target)
                            //     aa[i].className = 'des_select_row_text des_selected';
                            // }
                            if (all == target) {
                                aa[i].className = 'des_select_row_text des_selected';
                            }
                        }
                    }


                    // if(style==''){
                    //     aa[0].className = 'des_select_row_text des_selected';
                    // }else{
                    //     aa[0].className = 'des_select_row_text';
                    // }
                    // if(space==''){
                    //     aa[14].className = 'des_select_row_text des_selected';
                    // }
                    // if(house ==''){
                    //     aa[35].className = 'des_select_row_text des_selected';
                    // }
                    // if(area ==''){
                    //     aa[41].className = 'des_select_row_text des_selected';
                    // }
                    // if(scene ==''){
                    //     aa[47].className = 'des_select_row_text des_selected';
                    // }
                    // console.log(style+space+house+area+scene)
                    // if(target==style+space+house+area+scene){
                    //     aa[i].className = 'des_select_row_text des_selected';
                    // }

                }
                // setPartpath({...partpath,space:'_yiju'})

                // const design = path.slice(path.indexOf('_')+1,path.indexOf('_p_1'));
                // if(design == ''){
                //     setList(rec_data);
                // }else{
                //     const select_des = [];
                //     for(var i=0;i<rec_data.length;i++){
                //         const p = pinyin(rec_data[i].detail.tag,{
                //             style: pinyin.STYLE_NORMAL, // 设置拼音风格

                //         })
                //         let ps = '';
                //         p.map((item)=>ps = ps+item[0]);
                //         if(ps.indexOf(design) !== -1){
                //             select_des.push(rec_data[i]);
                //         }
                //     }
                //     setList(select_des);
                // }

                if (allsel) {
                    const select_des = [];
                    for (var i = 0; i < rec_data.length; i++) {
                        let flag = true;
                        let alldes = [];
                        const p1 = pinyin(rec_data[i].tag, {
                            style: pinyin.STYLE_NORMAL, // 设置拼音风格

                        })
                        const message = JSON.parse(rec_data[i].message);
                        for (var k = 0; k < message.length; k++) {
                            const p2 = pinyin(message[k].place, {
                                style: pinyin.STYLE_NORMAL,
                            })
                            alldes = [...alldes, ...p2];
                        }
                        const p3 = pinyin(rec_data[i].living_rooms, {
                            style: pinyin.STYLE_NORMAL, // 设置拼音风格

                        })
                        alldes = [...alldes, ...p1, ...p3];
                        let ps = '';
                        alldes.map((item) => ps = ps + item[0]);
                        ps = ps + '50-8080-100100-130130jiyishang50jiyixia'
                        // let allsel_ = [];
                        for (var j = 0; j < allsel.length; j++) {
                            const allsel_ = allsel[j].slice(1);
                            if (ps.indexOf(allsel_) == -1) {
                                flag = false;
                                break;
                            }
                        }
                        if (flag == true) {
                            let reg2 = /[0-9]+/g;
                            let allsels = '';
                            allsel.map((item) => allsels = allsels + item);
                            const areas = allsels.match(reg2);
                            if (!areas) {
                                select_des.push(rec_data[i]);
                            } else if (areas.length == 1) {
                                if (areas[0] == 50 && rec_data[i].area <= areas[0]) {
                                    select_des.push(rec_data[i])
                                } else if (areas[0] == 130 && rec_data[i].area >= areas[0]) {
                                    select_des.push(rec_data[i])
                                }
                            } else if (areas.length == 2 && rec_data[i].area >= areas[0] && rec_data[i].area <= areas[1]) {

                                select_des.push(rec_data[i])


                            }
                        }

                    }
                    setList(select_des);
                } else {
                    setList(rec_data);
                }
            })

    }, [])
    return (
        <div className='des_container'>
            <div className='des_selector'>
                <div className='des_select_row'>
                    <a className='des_select_row_title'>风格:</a>
                    <a href={'/des' + '/t' + space + house + area + scene + '_p_1'} className='des_select_row_text'>不限</a>
                    <a name='_xiandaijianyue' href={'/des' + '/t' + '_xiandaijianyue' + space + house + area + scene + '_p_1'} className='des_select_row_text'>现代简约</a>
                    <a name='_xinzhongshi' href={'/des' + '/t' + '_xinzhongshi' + space + house + area + scene + '_p_1'} className='des_select_row_text'>新中式</a>
                    <a name='_beiou' href={'/des' + '/t' + '_beiou' + space + house + area + scene + '_p_1'} className='des_select_row_text'>北欧</a>
                    <a name='_oushi' href={'/des' + '/t' + '_oushi' + space + house + area + scene + '_p_1'} className='des_select_row_text'>欧式</a>
                    <a name='_jianou' href={'/des' + '/t' + '_jianou' + space + house + area + scene + '_p_1'} className='des_select_row_text'>简欧</a>
                    <a name='_rishi' href={'/des' + '/t' + '_rishi' + space + house + area + scene + '_p_1'} className='des_select_row_text'>日式</a>
                    <a name='_tianyuan' href={'/des' + '/t' + '_tianyuan' + space + house + area + scene + '_p_1'} className='des_select_row_text'>田园</a>
                    <a name='_meishi' href={'/des' + '/t' + '_meishi' + space + house + area + scene + '_p_1'} className='des_select_row_text'>美式</a>
                    <a name='_jianmei' href={'/des' + '/t' + '_jianmei' + space + house + area + scene + '_p_1'} className='des_select_row_text'>简美</a>
                    <a name='_hunda' href={'/des' + '/t' + '_hunda' + space + house + area + scene + '_p_1'} className='des_select_row_text'>混搭</a>
                    <a name='_houxiandai' href={'/des' + '/t' + '_houxiandai' + space + house + area + scene + '_p_1'} className='des_select_row_text'>后现代</a>
                    <a name='_qingshe' href={'/des' + '/t' + '_qingshe' + space + house + area + scene + '_p_1'} className='des_select_row_text'>轻奢</a>
                    <a name='_gangshi' href={'/des' + '/t' + '_gangshi' + space + house + area + scene + '_p_1'} className='des_select_row_text'>港式</a>
                    {/* <a onClick={changePage} className='des_select_row_text'>不限</a>
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
                        <a onClick={changePage} className='des_select_row_text'>港式</a> */}
                </div>
                <div className='des_select_row'>
                    <a className='des_select_row_title'>空间:</a>
                    <a rel href={'/des' + '/t' + style + house + area + scene + '_p_1'} className='des_select_row_text'>不限</a>
                    <a rel name='_keting' href={'/des' + '/t' + style + '_keting' + house + area + scene + '_p_1'} className='des_select_row_text'>客厅</a>
                    <a rel name='_canting' href={'/des' + '/t' + style + '_canting' + house + area + scene + '_p_1'} className='des_select_row_text'>餐厅</a>
                    <a rel name='_kecanting' href={'/des' + '/t' + style + '_kecanting' + house + area + scene + '_p_1'} className='des_select_row_text'>客餐厅</a>
                    <a rel name='_chufang' href={'/des' + '/t' + style + '_chufang' + house + area + scene + '_p_1'} className='des_select_row_text'>厨房</a>
                    <a rel name='_weishengjian' href={'/des' + '/t' + style + '_weishengjian' + house + area + scene + '_p_1'} className='des_select_row_text'>卫生间</a>
                    <a rel name='_zhuwo' href={'/des' + '/t' + style + '_zhuwo' + house + area + scene + '_p_1'} className='des_select_row_text'>主卧</a>
                    <a rel name='_ciwo' href={'/des' + '/t' + style + '_ciwo' + house + area + scene + '_p_1'} className='des_select_row_text'>次卧</a>
                    <a rel name='_kewo' href={'/des' + '/t' + style + '_kewo' + house + area + scene + '_p_1'} className='des_select_row_text'>客卧</a>
                    <a rel name='_ertongfang' href={'/des' + '/t' + style + '_ertongfang' + house + area + scene + '_p_1'} className='des_select_row_text'>儿童房</a>
                    <a rel name='_nverfang' href={'/des' + '/t' + style + '_nverfang' + house + area + scene + '_p_1'} className='des_select_row_text'>女儿房</a>
                    <a rel name='_baomufang' href={'/des' + '/t' + style + '_baomufang' + house + area + scene + '_p_1'} className='des_select_row_text'>保姆房</a>
                    <a rel name='_laorenfang' href={'/des' + '/t' + style + '_laorenfang' + house + area + scene + '_p_1'} className='des_select_row_text'>老人房</a>
                    <a rel name='_shufang' href={'/des' + '/t' + style + '_shufang' + house + area + scene + '_p_1'} className='des_select_row_text'>书房</a>
                    <a rel name='_dougongnengshi' href={'/des' + '/t' + style + '_duogongnengshi' + house + area + scene + '_p_1'} className='des_select_row_text'>多功能室</a>
                    <a rel name='_chuwujian' href={'/des' + '/t' + style + '_chuwujian' + house + area + scene + '_p_1'} className='des_select_row_text'>储物间</a>
                    <a rel name='_xuanguan' href={'/des' + '/t' + style + '_xuanguan' + house + area + scene + '_p_1'} className='des_select_row_text'>玄关</a>
                    <a rel name='_tianjing' href={'/des' + '/t' + style + '_tianjing' + house + area + scene + '_p_1'} className='des_select_row_text'>天井</a>
                    <a rel name='_zoulang' href={'/des' + '/t' + style + '_zoulang' + house + area + scene + '_p_1'} className='des_select_row_text'>走廊</a>
                    <a rel name='_yangtai' href={'/des' + '/t' + style + '_yangtai' + house + area + scene + '_p_1'} className='des_select_row_text'>阳台</a>
                    <a rel name='_lutai' href={'/des' + '/t' + style + '_lutai' + house + area + scene + '_p_1'} className='des_select_row_text'>露台</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>户型:</a>
                    <a rel href={'/des' + '/t' + style + space + area + scene + '_p_1'} className='des_select_row_text'>不限</a>
                    <a rel name='_yiju' href={'/des' + '/t' + style + space + '_yiju' + area + scene + '_p_1'} className='des_select_row_text'>一居</a>
                    <a rel name='_erju' href={'/des' + '/t' + style + space + '_erju' + area + scene + '_p_1'} className='des_select_row_text'>二居</a>
                    <a rel name='_sanju' href={'/des' + '/t' + style + space + '_sanju' + area + scene + '_p_1'} className='des_select_row_text'>三居</a>
                    <a rel name='_siju' href={'/des' + '/t' + style + space + '_siju' + area + scene + '_p_1'} className='des_select_row_text'>四居</a>
                    <a rel name='_wujujiyishang' href={'/des' + '/t' + style + space + '_wujujiyishang' + area + scene + '_p_1'} className='des_select_row_text'>五居及以上</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>面积:</a>
                    <a rel href={'/des' + '/t' + style + space + house + scene + '_p_1'} className='des_select_row_text'>不限</a>
                    <a rel name='_50-80' href={'/des' + '/t' + style + space + house + '_50-80' + scene + '_p_1'} className='des_select_row_text'>50-80m²</a>
                    <a rel name='_80-100' href={'/des' + '/t' + style + space + house + '_80-100' + scene + '_p_1'} className='des_select_row_text'>80-100m²</a>
                    <a rel name='_100-130' href={'/des' + '/t' + style + space + house + '_100-130' + scene + '_p_1'} className='des_select_row_text'>100-130m²</a>
                    <a rel name='_130jiyishang' href={'/des' + '/t' + style + space + house + '_130jiyishang' + scene + '_p_1'} className='des_select_row_text'>130m²及以上</a>
                    <a rel name='_50jiyixia' href={'/des' + '/t' + style + space + house + '_50jiyixia' + scene + '_p_1'} className='des_select_row_text'>50m²及以下</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>场景:</a>
                    <a rel href={'/des' + '/t' + style + space + house + area + '_p_1'} className='des_select_row_text'>不限</a>
                    <a rel name='_jiazhuang' href={'/des' + '/t' + style + space + house + area + '_jiazhuang' + '_p_1'} className='des_select_row_text'>家装</a>
                    <a rel name='_bangong' href={'/des' + '/t' + style + space + house + area + '_bangong' + '_p_1'} className='des_select_row_text'>办公</a>
                    <a rel name='_canyin' href={'/des' + '/t' + style + space + house + area + '_canyin' + '_p_1'} className='des_select_row_text'>餐饮</a>
                    <a rel name='_yule' href={'/des' + '/t' + style + space + house + area + '_yule' + '_p_1'} className='des_select_row_text'>娱乐</a>
                </div>
            </div>
            {/* <div className='all_rec_div' style={{ flexWrap: 'wrap', justifyContent: 'start', paddingLeft: 60 }}>
                {
                    list.map((item) => {
                        if (item.cover_img) {
                            return (
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
                            )
                        } else {
                            return (
                                <li className='rec_all_li1 rec_all_li2'>
                                    <div className='rec_li1_img rec_li1_video'>
                                        <ReactPlayer
                                            className="reactPlayer3"
                                            url={item.cover_vedio}
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
                            )
                        }

                    })
                }
            </div> */}
            <div className='all_rec_div' style={{ flexWrap: 'wrap', justifyContent: 'start', paddingLeft: 70 }}>
                <ul>
                    {
                        list.map((item, index) => {
                            if (index % 3 == 0) {
                                if (item.cover_vedio) {
                                    return (
                                        <li className='rec_all_li1 rec_all_li2'>
                                            <div className='rec_li1_img rec_li1_video'>
                                                <ReactPlayer
                                                    className="reactPlayer3"
                                                    url={item.cover_vedio}
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
                                    )
                                } else {
                                    return (
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
                        list.map((item, index) => {
                            if (index % 3 == 1) {
                                if (item.cover_vedio) {
                                    return (
                                        <li className='rec_all_li1 rec_all_li2'>
                                            <div className='rec_li1_img rec_li1_video'>
                                                <ReactPlayer
                                                    className="reactPlayer3"
                                                    url={item.cover_vedio}
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
                                    )
                                } else {
                                    return (
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
                        list.map((item, index) => {
                            if (index % 3 == 2) {
                                if (item.cover_vedio) {
                                    return (
                                        <li className='rec_all_li1 rec_all_li2'>
                                            <div className='rec_li1_img rec_li1_video'>
                                                <ReactPlayer
                                                    className="reactPlayer3"
                                                    url={item.cover_vedio}
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
                                    )
                                } else {
                                    return (
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
                style={{marginTop:0}}
                url={select}
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                //   controls
                width='250px'
                height='250px'
            />
            <div className='ins_more_txt' style={{marginLeft:5,fontSize:29}}>更多精彩 敬请期待！</div>
        </div>
        </div>
    )
}
// const rec_data = [
//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG3LYUWF6SYLUF3P3W6888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '《永恒》一123平米奶咖现代轻奢两房',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: '现代简约  后现代  轻奢',



//         type: '2室2厅1卫1厨',



//         living_room: '二居',



//         area: 123,



//         tag: '现代简约、后现代、轻奢、家装',



//         detail: '',



//         message: [



//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3W6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '休闲区', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/10/L3D123S3ENDP5HG3LYUWF6SYLUF3P3XM888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG3LYUWF6SYLUF3P3WC888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D396S3ENDP5HG3LYUWF6SYLUF3P3WY888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG2IQUWF6SYLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3X4888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ]



//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '现代简约低调奢华风',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: '现代简约 轻奢',



//         type: '5室2厅2卫1厨',



//         living_room: '五居及以上',



//         area: 151,



//         tag: '现代简约、家装',



//         detail: '',



//         message: [



//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36TIUWFOFGLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '书房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2 022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWEJU2LUF3P3WA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ]



//     },



//     {



//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '简约风｜loft公寓',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约',



//         type: '0室1厅0卫0厨',



//         living_room: '零居',



//         area: 62,



//         tag: '现代简约 、 家装',



//         detail: '',



//         message: [



//             { place: '客厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGUSAKTFASIAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卧室', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLHRKAKTEM2KAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ]



//     },



//     {



//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '三水丨常乐府丨现代轻奢',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约  轻奢',



//         type: '3室2厅0卫0厨',



//         living_room: '三居',



//         area: 83,



//         tag: '现代简约 、 轻奢 、 家装',



//         detail: '',



//         message: [



//             { place: '客餐厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKZM2YKTFASIAABAAAAADQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJK2GGIKTFASIAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D37KQUWFOFCLUF3P3UK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D326S62ENDP5D37NAUWF6KCLUF3P3WS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ],



//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '新中式风格80平米二层',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 新中式',



//         type: '3室1厅1卫1厨',



//         living_room: '三居',



//         area: 79,



//         tag: '新中式 、 家装',



//         detail: '',



//         message: [



//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/25/L3D397S21ENDP4RMI6IUWFFT6LUF3P3X4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EU2XIUWF6ROLUF3P3XA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧1', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/27/L3D123S21ENDP4QDSAYUWFFTALUF3P3XY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧2', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVBNIUWF6X4LUF3P3XC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ]







//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '龙湖观澜-现代轻奢风格',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约  轻奢  港式',



//         type: '2室2厅0卫2厨',



//         living_room: '二居',



//         area: 113,



//         tag: '现代简约 、 港式 、 轻奢 、 家装',



//         detail: '',



//         message: [



//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRMSYUWFGM6LUF3P3X6888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GROPIUWF6X4LUF3P3WC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTQUWFOFALUF3P3WG888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTAUWFOFCLUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '生活阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRNQIUWF6X4LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ]



//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '融创轻法119平3室效果',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约  轻奢  简美',



//         type: '3室2厅2卫0厨',



//         living_room: '三居',



//         area: 109,



//         tag: '现代简约 、 简美 、 轻奢 、 家装',



//         detail: '',



//         message: [



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3W4888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客卧', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKPLVYKTEM2KAABAAAAAAI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFCLUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWF6KCLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ],



//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '简约风简约色彩',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约',



//         type: '3室2厅2卫1厨',



//         living_room: '三居',



//         area: 115,



//         tag: '现代简约 、 家装',



//         detail: '',



//         message: [



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKUAUWF6KCLUF3P3WO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFALUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '老人房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ],



//     },



//     {



//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '蜗居装饰—宁夏同心县前红别墅',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约  后现代  轻奢',



//         type: '3室2厅2卫1厨',



//         living_room: '三居',



//         area: 200,



//         tag: '现代简约 、 后现代 、 轻奢 、 家装',



//         detail: '',



//         message: [



//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWVUQUWFDVILUF3P3XC888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D124S21ENDP5EBY2AUWFAE6LUF3P3WA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWOIUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWRQUWFDV6LUF3P3WY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWW3AUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客厅2', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXJIUWFDVILUF3P3XE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '客卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWX3YUWFDV4LUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '尔麦里房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXGIUWFDV6LUF3P3XU888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ],



//     },



//     {



//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',



//         cover_vedio: '',



//         title: '【予你】--现代美式--140平三房两厅一厨两卫',



//         user_id: '1537523736@qq.com',



//         user_name: 'langjia',



//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',



//         discribe: ' 现代简约  简美',



//         type: '3室2厅2卫1厨',



//         living_room: '三居',



//         area: 164,



//         tag: '现代简约 、 简美 、 家装',



//         detail: '清雅的生活方式，演绎对生命的深层感悟。现代、时尚、经典瞬间铸成，彰显生活的惬意质感，弹奏一首和谐的前卫之歌。简单之中蕴含精致，洒脱、雕琢之处不失简约。',



//         message: [



//             { place: '客餐厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D206S21ENDP5C72GIUWFQHSLUF3P3XY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '厨房', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNBOGAKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '卫生间', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMM5JYKTEO2AAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '主卧', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA7DAKTEO2AAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },



//             { place: '次卧', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA34YKTEO2AAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }



//         ],







//     },

//     {

//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '轻奢样板间',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约  混搭  后现代',

//         type: '3室2厅3卫1厨',

//         living_room: '三居',

//         area: 108,

//         tag: ' 现代简约 、 混搭 、 后现代 、 家装',

//         detail: '',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '干湿区', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3KDNYKTEDZ6AABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VXVCIUWFLHKLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36VIUWFOFGLUF3P3XC888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VZP6IUWF2R2LUF3P3WW888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/20/L3D123S41ENDP4UWIOIUWFLHKLUF3P3XA888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '美式三居',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 简欧  美式',

//         type: '3室2厅2卫1厨',

//         living_room: '三居',

//         area: 134,

//         tag: '简欧 、 美式 、 家装',

//         detail: '',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXFAUWFAE6LUF3P3WQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXGYUWFAE4LUF3P3WS888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '书房', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMHEQKTEO2AAABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFCLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D123S21ENDP5DUNUIUWFQBKLUF3P3W2888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWF6KCLUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D222S21ENDP5EA7FYUWFAE4LUF3P3WQ888.0_4200x700.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFGLUF3P3VI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '中交滨江国际',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约  混搭  轻奢',

//         type: '1室2厅1卫0厨',

//         living_room: '一居',

//         area: 183,

//         tag: ' 现代简约 、 混搭 、 轻奢 、 家装',

//         detail: '',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/01/06/MHLNETFMDECLMAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '阳台', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/12/24/L3D124S21ENDPTNL4QVSGH5HALUF3P3XS888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D124S21ENDPTN3YENSGGYLQLUF3P3XK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '女儿房', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D187S21ENDPTN3ATNSGFD3MLUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '自定义', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/12/14/L3D124S21ENDPST24XVSGEFGKLUF3P3XA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '现代无主灯设计',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约',

//         type: '2室2厅1卫1厨',

//         living_room: '二居',

//         area: 143,

//         tag: '现代简约 、 家装',

//         detail: '',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWFOFALUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERQEIUWF6X6LUF3P3X6888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ESPWQUWFHTKLUF3P3XU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWEJU2LUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERRJQUWF6X4LUF3P3XI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '极简黑白灰',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约',

//         type: '2室2厅2卫1厨',

//         living_room: '二居',

//         area: 110,

//         tag: '现代简约 、 家装',

//         detail: '',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEGFOIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHK6AUWFOFCLUF3P3XY888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/03/L3D396S41ENDP5LWUDIUWFAOWLUF3P3XW888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWFOFALUF3P3VA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWF6KCLUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '现代风格110平三居室',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约',

//         type: '3室2厅2卫1厨',

//         living_room: '三居',

//         area: 115,

//         tag: '现代简约 、 家装',

//         detail: '',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFALUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFALUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3W4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSIUWFOFGLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSYUWFOFGLUF3P3WK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',

//         cover_vedio: '',

//         title: '香颂美地G238户型',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约',

//         type: '7室2厅3卫1厨',

//         living_room: '五居及以上',

//         area: 260,

//         tag: '现代简约 、 家装',

//         detail: '',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D336S62ENDP5DGBTYUWF6KCLUF3P3UK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWF6KCLUF3P3XW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间1', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间2', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFCLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间3', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3UK888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '客卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '书房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFALUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3XU888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '老人房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '保姆房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '观景阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWF6KCLUF3P3XS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',

//         title: '雙城和美-163m²現代日式三居',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约  日式',

//         type: '3室2厅2卫1厨',

//         living_room: '三居',

//         area: 164,

//         tag: '现代简约 、 日式 、 家装',

//         detail: '利用传统日式和室木材,白色及米色颜色应用,以隐形门与牆面合一设计，让空间是可留宿的大起居室，以合一墙面装饰的型态应用广大的客餐厅空间。以大面积黑色古砖、木材与白配色创造强烈视觉印象，充满人文气息的沙发背景间断牆，让空间个性立显鲜明。主卧运用了榻榻米与自然木质为空间注入温润触感与蔺草馨香，其他卧室运用白色及浅色运用在清和淡丽的日式氛围中，跳脱传统质朴色彩.',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EYJLQUWFHTKLUF3P3XE888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp' },

//             { place: '观景阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EFCCIUWF6X6LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQIUWFOFGLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EGJ5AUWF6ROLUF3P3W4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EWUFQUWF6X4LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D123S21ENDP5EW7UQUWF6X4LUF3P3WO888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQQUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '储物间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/04/L3D397S21ENDP5KSW3YUWFAOWLUF3P3XO888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' }

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',

//         title: '135平四房现代混搭风',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约  混搭  轻奢',

//         type: '4室2厅3卫1厨',

//         living_room: '四居',

//         area: 169,

//         tag: '现代简约 、 混搭 、 轻奢 、 家装',

//         detail: '',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7VSGEGF2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '书房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7NSGEGF2LUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF5TKLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '客卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF4A2LUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGE7K2LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '阳台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '阳光房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',

//         title: '三亚650㎡新中式院落别墅',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: '新中式',

//         type: '未定义',

//         living_room: '五居及以上',

//         area: 474,

//         tag: '新中式 、 家装',

//         detail: '',

//         message: [

//             { place: '中庭', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33R3NSGH2RULUF3P3WC888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '天井', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/25/L3D123S21ENDPSAF54FSGG5YOLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '天井2', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFDJ5SGG5YOLUF3P3XK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '客卫2', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JWPTIUWFLPYLUF3P3UK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '家庭厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33RCNSGH2RULUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '楼梯间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JYACIUWFLIOLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧2', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGI5SGFL2SLUF3P3W4888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卫2', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGBFSGHQCELUF3P3WS888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '沐浴区', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFCSVSGFL2SLUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/28/L3D222S21ENDPS622LFSGG5YOLUF3P3WE888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '客卧', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCET7NSGHIFYLUF3P3UI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/27/L3D206S21ENDPS64DTVSGHIHOLUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '会客厅', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/29/L3D123S21ENDPS5R3K5SGG5YOLUF3P3WG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '园路', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2021/11/30/L3D336S21ENDPS5YUXNSGFL2SLUF3P3XO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '庭院', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2021/12/01/L3D326S21ENDPS4OBAFSGH2RULUF3P3WW888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '泳池', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCFDYVSGE572LUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',

//         title: '日式混搭小院改造',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 北欧  日式  混搭',

//         type: '未定义',

//         living_room: '五居及以上',

//         area: 140,

//         tag: '日式 、 北欧 、 混搭 、 家装',

//         detail: '',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESOGVSGH2Z6LUF3P3XY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '门厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '一楼公卫', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '一楼洗手间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '一楼过道', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '中庭', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '姑姑房', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERQZ5SGF5NQLUF3P3WW888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '洗衣房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X2888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '父母房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼休闲厅', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERRHVSGH2BWLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '婴儿房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X6888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERTYVSGEQGELUF3P3XO888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',

//         title: '《九里》新古典奢华|三层别墅',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 欧式  混搭  轻奢',

//         type: '1室2厅2卫1厨',

//         living_room: '一居',

//         area: 92,

//         tag: ' 欧式 、 混搭 、 轻奢 、 家装',

//         detail: '新古典奢华风格别墅，大理石地面及金属材质的搭配，古典新作，保留复古气息，融合现代质感，整体别墅体现奢华的感觉。',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVYJ5MDGSQKAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVXNVMDHQ3EAABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '洗漱间', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAU5INMDHQ3EAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHE2BZNMDE5TEAABAAAAACI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼卧室A', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/16/MG5DMVVMDGVGAAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼卧室B', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEWYRVMCADFCAABAAAAADA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼卧室C', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEW7RNMCAERIAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼过道', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEZ4OFMDE5TEAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '三楼主卧', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/31/MHG56FVMDECLMAABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '三楼书房', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3SS6YKTEDZ6AABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '三楼主卫', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/26/MHEFITFMDHVH2AABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '三楼礼佛堂', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/21/MHA4IT5MDE5TEAABAAAAACQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '三楼衣帽间', imgpath: 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/17/MG5X6WVMDE5TEAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],



//     },

//     // 123456789

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',

//         title: '150平简约美式顶跃',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: ' 现代简约  简美',

//         type: '2室2厅2卫1厨',

//         living_room: '二居',

//         area: 133,

//         tag: ' 现代简约 、 简美 、 家装',

//         detail: '简约的小美式，尽显业主的文艺范！',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWF6KCLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWEJU2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '阳台', imgpath: 'https://qhrenderpic-cos.kujiale.com/r/2021/10/18/L3D206S21ENDPRZH3HNSGG6F2LUF3P3UI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房1', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWFOFGLUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房2', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EZDVAUWFAE6LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWF6KCLUF3P3XS888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XYUWFOFCLUF3P3XG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼多功能区域', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5E4VNIUWF6X6LUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '露台', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],



//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',

//         title: '图森·北京润泽御府',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: '轻奢',

//         type: '1室1厅0卫0厨',

//         living_room: '一居',

//         area: 329,

//         tag: '轻奢 、 家装',

//         detail: '低调奢华，静谧幽雅。轻奢风格追求以最简洁的设计手法来打造奢华气派，造型上的简洁是为了赋予材质上的奢华。意式轻奢，简约线条在讲述真正的永恒经典，脱离一切浮华和不实用，从生活的本质出发，以极简的设计演绎最本质的轻奢美学。',

//         message: [

//             { place: '客厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D187S21ENDP4IOU6IUWFDVMLUF3P3X4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY5AUWFFIYLUF3P3XQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '玄关', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYUAUWFZWYLUF3P3W2888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '会客室', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYVAUWFAQALUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '楼梯间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY6AUWFAQALUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '西厨', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYYIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼起居室', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCLIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCCQUWFZZSLUF3P3WC888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '二楼衣帽间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCMIUWFZZSLUF3P3WS888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },

//     {

//         cover_img: '',

//         cover_vedio: 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',

//         title: '《浪漫温馨》+140平奶油色法式轻奢',

//         user_id: '1537523736@qq.com',

//         user_name: 'langjia',

//         header: 'lQDPDhrpKyKrhjTMxMzFsIqTNNQgMYD2AatEHWfAZgA_197_196.jpg_720x720q90g.jpg',

//         discribe: '简美',

//         type: '3室2厅2卫1厨',

//         living_room: '三居',

//         area: 177,

//         tag: '简美 、 家装',

//         detail: '用法式的优雅和浪漫，安放生活的诗意和疲惫。空间的设计感，并不在于装饰的堆砌，有时候恰到好处的留白，反而让设计更加的纯粹，更加的高级，又没线条和个性的色彩碰撞，成就了空间的品质和高度',

//         message: [

//             { place: '客餐厅', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDTYUWFY24LUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '厨房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDGAUWFY24LUF3P3UI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '卫生间', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDEIUWFLLQLUF3P3XY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '主卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDZAUWFY24LUF3P3WQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '次卧', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD5IUWFY24LUF3P3XM888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//             { place: '儿童房', imgpath: 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDIQUWFLEKLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' },

//         ],

//     },
// ]
// const rec_data = [
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG3LYUWF6SYLUF3P3W6888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '《永恒》一123平米奶咖现代轻奢两房',
//         logo: 'https://user-platform-oss.kujiale.com/2020/03/19/S4IUUTGOS3SUIZ4XLQM6YLI8_1200x1930.jpg?x-oss-process=image/format,webp',
//         writer_name: '张煜强',
//         discribe: ' 现代简约  后现代  轻奢',
//         detail: {
//             title: '《永恒》一123平米奶咖现代轻奢两房',
//             type: '2室2厅1卫1厨',
//             area: '123 m2',
//             tag: '现代简约 、 后现代 、 轻奢 、 家装',
//             detail: '',
//             img: '',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3W6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '休闲区',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/10/L3D123S3ENDP5HG3LYUWF6SYLUF3P3XM888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG3LYUWF6SYLUF3P3WC888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D396S3ENDP5HG3LYUWF6SYLUF3P3WY888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG2IQUWF6SYLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3X4888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '现代简约低调奢华风',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2021/07/28/VBRM2QLI4BQ7SZ4XLQM6YNY8.jpg?x-oss-process=image/format,webp',
//         writer_name: '郭涛',
//         discribe: ' 现代简约 轻奢',
//         detail: {
//             title: '现代简约低调奢华风',
//             type: '5室2厅2卫1厨',
//             area: '151 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36TIUWFOFGLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '书房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWEJU2LUF3P3WA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '简约风｜loft公寓',
//         logo: 'https://user-platform-oss.kujiale.com/siteassets/829e8047feef1b5d-1599355503666.png?x-oss-process=image/format,webp',
//         writer_name: 'JPrice',
//         discribe: ' 现代简约',
//         detail: {
//             title: '简约风｜loft公寓',
//             type: '0室1厅0卫0厨',
//             area: '62 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGUSAKTFASIAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卧室',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLHRKAKTEM2KAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '三水丨常乐府丨现代轻奢',
//         logo: 'https://qhstaticssl.kujiale.com/siteassets/663c029023c17dd7-1620997746887.png?x-oss-process=image/format,webp',
//         writer_name: '七彩虹Next',
//         discribe: ' 现代简约  轻奢',
//         detail: {
//             title: '三水丨常乐府丨现代轻奢',
//             type: '3室2厅0卫0厨',
//             area: '83 m2',
//             tag: '现代简约 、 轻奢 、 家装',
//             detail: '',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKZM2YKTFASIAABAAAAADQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJK2GGIKTFASIAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D37KQUWFOFCLUF3P3UK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D326S62ENDP5D37NAUWF6KCLUF3P3WS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '新中式风格80平米二层',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MJH22DYKTEM2KAABAAAAACI8.png?x-oss-process=image/format,webp',
//         writer_name: '鸿庭设计',
//         discribe: ' 新中式',
//         detail: {
//             title: '新中式风格80平米二层',
//             type: '3室1厅1卫1厨',
//             area: '79 m2',
//             tag: '新中式 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/25/L3D397S21ENDP4RMI6IUWFFT6LUF3P3X4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EU2XIUWF6ROLUF3P3XA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧1',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/27/L3D123S21ENDP4QDSAYUWFFTALUF3P3XY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧2',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVBNIUWF6X4LUF3P3XC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '龙湖观澜-现代轻奢风格',
//         logo: 'https://qhyxpicoss.kujiale.com/avatars/2017/04/18/origin7379701042819469591.jpg?x-oss-process=image/format,webp',
//         writer_name: '王朝霞',
//         discribe: ' 现代简约  轻奢  港式',
//         detail: {
//             title: '龙湖观澜-现代轻奢风格',
//             type: '2室2厅0卫2厨',
//             area: '113 m2',
//             tag: '现代简约 、 港式 、 轻奢 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRMSYUWFGM6LUF3P3X6888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GROPIUWF6X4LUF3P3WC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTQUWFOFALUF3P3WG888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTAUWFOFCLUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '生活阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRNQIUWF6X4LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '融创轻法119平3室效果',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2022/04/08/VMZ63GWOMD6XIZ4XLQM6YLA8?x-oss-process=image/format,webp',
//         writer_name: '赖帅强',
//         discribe: ' 现代简约  轻奢  简美',
//         detail: {
//             title: '融创轻法119平3室效果',
//             type: '3室2厅2卫0厨',
//             area: '109 m2',
//             tag: '现代简约 、 简美 、 轻奢 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFCLUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3W4888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKPLVYKTEM2KAABAAAAAAI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWF6KCLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '简约风简约色彩',
//         logo: 'https://user-platform-oss.kujiale.com/2022/03/28/VMRX2KWOMD3VQZ4XLQM6YPI8_1000x1363.jpg?x-oss-process=image/format,webp',
//         writer_name: 'Jimcz',
//         discribe: ' 现代简约',
//         detail: {
//             title: '简约风简约色彩',
//             type: '3室2厅2卫1厨',
//             area: '115 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKUAUWF6KCLUF3P3WO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFALUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '老人房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '蜗居装饰—宁夏同心县前红别墅',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MHXJMVFMDGZG4AABAAAAAAI8.png?x-oss-process=image/format,webp',
//         writer_name: '轩奕设计工作室',
//         discribe: ' 现代简约  后现代  轻奢',
//         detail: {
//             title: '蜗居装饰—宁夏同心县前红别墅',
//             type: '3室2厅2卫1厨',
//             area: '200 m2',
//             tag: '现代简约 、 后现代 、 轻奢 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWVUQUWFDVILUF3P3XC888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D124S21ENDP5EBY2AUWFAE6LUF3P3WA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWOIUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '尔麦里房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXGIUWFDV6LUF3P3XU888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWRQUWFDV6LUF3P3WY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWW3AUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客厅2',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXJIUWFDVILUF3P3XE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWX3YUWFDV4LUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '【予你】--现代美式--140平三房两厅一厨两卫',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MHKRPQNMDGAZEAABAAAAACQ8.png?x-oss-process=image/format,webp',
//         writer_name: 'HUI视觉空间设计',
//         discribe: ' 现代简约  简美',
//         detail: {
//             title: '【予你】--现代美式--140平三房两厅一厨两卫',
//             type: '3室2厅2卫1厨',
//             area: '164 m2',
//             tag: '现代简约 、 简美 、 家装',
//             detail: '清雅的生活方式，演绎对生命的深层感悟。现代、时尚、经典瞬间铸成，彰显生活的惬意质感，弹奏一首和谐的前卫之歌。简单之中蕴含精致，洒脱、雕琢之处不失简约。',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D206S21ENDP5C72GIUWFQHSLUF3P3XY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNBOGAKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMM5JYKTEO2AAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA7DAKTEO2AAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA34YKTEO2AAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '轻奢样板间',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2022/03/20/VNK6SXGOMDT2EZ4XLQM6YNQ8?x-oss-process=image/format,webp',
//         writer_name: 'HOU全案设计师',
//         discribe: ' 现代简约  混搭  后现代',
//         detail: {
//             title: '轻奢样板间',
//             type: '3室2厅3卫1厨',
//             area: '108 m2',
//             tag: ' 现代简约 、 混搭 、 后现代 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '干湿区',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3KDNYKTEDZ6AABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VXVCIUWFLHKLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36VIUWFOFGLUF3P3XC888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VZP6IUWF2R2LUF3P3WW888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/20/L3D123S41ENDP4UWIOIUWFLHKLUF3P3XA888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '美式三居',
//         logo: 'https://user-platform-oss.kujiale.com/2022/03/22/VNNJROGOMDDQKZ4XLQM6YOA8_1116x1624.jpg?x-oss-process=image/format,webp',
//         writer_name: '山山ss',
//         discribe: ' 简欧  美式',
//         detail: {
//             title: '美式三居',
//             type: '3室2厅2卫1厨',
//             area: '134 m2',
//             tag: '简欧 、 美式 、 家装',
//             detail: '',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXFAUWFAE6LUF3P3WQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXGYUWFAE4LUF3P3WS888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '书房',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMHEQKTEO2AAABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFCLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D123S21ENDP5DUNUIUWFQBKLUF3P3W2888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWF6KCLUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D222S21ENDP5EA7FYUWFAE4LUF3P3WQ888.0_4200x700.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFGLUF3P3VI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '中交滨江国际',
//         logo: 'https://qhyxpicoss.kujiale.com/avatars/72.jpg?x-oss-process=image/format,webp',
//         writer_name: '邓小群Oh',
//         discribe: ' 现代简约  混搭  轻奢',
//         detail: {
//             title: '中交滨江国际',
//             type: '1室2厅1卫0厨',
//             area: '183 m2',
//             tag: ' 现代简约 、 混搭 、 轻奢 、 家装',
//             detail: '',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/01/06/MHLNETFMDECLMAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/12/24/L3D124S21ENDPTNL4QVSGH5HALUF3P3XS888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D124S21ENDPTN3YENSGGYLQLUF3P3XK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '女儿房',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D187S21ENDPTN3ATNSGFD3MLUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '自定义',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/12/14/L3D124S21ENDPST24XVSGEFGKLUF3P3XA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '现代无主灯设计',
//         logo: 'https://user-platform-oss.kujiale.com/siteassets/7008a536dc16a0e6-1603172921322.png?x-oss-process=image/format,webp',
//         writer_name: '上海华锋国际设计工作室李锋',
//         discribe: ' 现代简约',
//         detail: {
//             title: '现代无主灯设计',
//             type: '2室2厅1卫1厨',
//             area: '143 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWFOFALUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERQEIUWF6X6LUF3P3X6888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ESPWQUWFHTKLUF3P3XU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWEJU2LUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERRJQUWF6X4LUF3P3XI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '极简黑白灰',
//         logo: 'https://qhstaticssl.kujiale.com/siteassets/594d573b0e76ec81-1617614337930.png?x-oss-process=image/format,webp',
//         writer_name: 'HT一空间创意',
//         discribe: ' 现代简约',
//         detail: {
//             title: '极简黑白灰',
//             type: '2室2厅2卫1厨',
//             area: '110 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEGFOIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHK6AUWFOFCLUF3P3XY888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/03/L3D396S41ENDP5LWUDIUWFAOWLUF3P3XW888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWFOFALUF3P3VA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWF6KCLUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '现代风格110平三居室',
//         logo: 'https://user-platform-oss.kujiale.com/2022/04/12/VMYFWMWOMDGVSZ4XLQM6YMI8_603x462.jpg?x-oss-process=image/format,webp',
//         writer_name: '巢品汇全案设计',
//         discribe: ' 现代简约',
//         detail: {
//             title: '现代风格110平三居室',
//             type: '3室2厅2卫1厨',
//             area: '115 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFALUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFALUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3W4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSIUWFOFGLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSYUWFOFGLUF3P3WK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
//         house_name: '香颂美地G238户型',
//         logo: 'https://user-platform-oss.kujiale.com/siteassets/62d965a9e77af44a-1603782132930.png?x-oss-process=image/format,webp',
//         writer_name: '皓德设计',
//         discribe: ' 现代简约',
//         detail: {
//             title: '香颂美地G238户型',
//             type: '7室2厅3卫1厨',
//             area: '260 m2',
//             tag: '现代简约 、 家装',
//             detail: '',
//             img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D336S62ENDP5DGBTYUWF6KCLUF3P3UK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWF6KCLUF3P3XW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间1',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间2',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFCLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间3',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3UK888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '书房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFALUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3XU888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '老人房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '保姆房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '观景阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWF6KCLUF3P3XS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',
//         house_name: '雙城和美-163m²現代日式三居',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MHGR44FMDECLMAABAAAAAAA8.png?x-oss-process=image/format,webp',
//         writer_name: '廸偉',
//         discribe: ' 现代简约  日式',
//         detail: {
//             title: '雙城和美-163m²現代日式三居',
//             type: '3室2厅2卫1厨',
//             area: '164 m2',
//             tag: '现代简约 、 日式 、 家装',
//             detail: '利用传统日式和室木材,白色及米色颜色应用,以隐形门与牆面合一设计，让空间是可留宿的大起居室，以合一墙面装饰的型态应用广大的客餐厅空间。以大面积黑色古砖、木材与白配色创造强烈视觉印象，充满人文气息的沙发背景间断牆，让空间个性立显鲜明。主卧运用了榻榻米与自然木质为空间注入温润触感与蔺草馨香，其他卧室运用白色及浅色运用在清和淡丽的日式氛围中，跳脱传统质朴色彩.',
//             img: 'http:////user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EYJLQUWFHTKLUF3P3XE888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
//                 '观景阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EFCCIUWF6X6LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQIUWFOFGLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EGJ5AUWF6ROLUF3P3W4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EWUFQUWF6X4LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D123S21ENDP5EW7UQUWF6X4LUF3P3WO888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQQUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '储物间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/04/L3D397S21ENDP5KSW3YUWFAOWLUF3P3XO888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',
//         house_name: '135平四房现代混搭风',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
//         writer_name: '王磊',
//         discribe: ' 现代简约  混搭  轻奢',
//         detail: {
//             title: '135平四房现代混搭风',
//             type: '4室2厅3卫1厨',
//             area: '169 m2',
//             tag: '现代简约 、 混搭 、 轻奢 、 家装',
//             detail: '',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7VSGEGF2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '书房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7NSGEGF2LUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF5TKLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF4A2LUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGE7K2LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳光房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
//         house_name: '三亚650㎡新中式院落别墅',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MGTRLA5MDFDRQAABAAAAAAA8.png?x-oss-process=image/format,webp',
//         writer_name: '菜刀屠龙侠',
//         discribe: '新中式',
//         detail: {
//             title: '三亚650㎡新中式院落别墅',
//             type: '未定义',
//             area: '474 m2',
//             tag: '新中式 、 家装',
//             detail: '',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
//             message: [
//                 '中庭',
//                 'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33R3NSGH2RULUF3P3WC888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '天井',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/25/L3D123S21ENDPSAF54FSGG5YOLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '天井2',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFDJ5SGG5YOLUF3P3XK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卫2',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JWPTIUWFLPYLUF3P3UK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '家庭厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33RCNSGH2RULUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '楼梯间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JYACIUWFLIOLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧2',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGI5SGFL2SLUF3P3W4888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卫2',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGBFSGHQCELUF3P3WS888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '沐浴区',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFCSVSGFL2SLUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/28/L3D222S21ENDPS622LFSGG5YOLUF3P3WE888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '客卧',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCET7NSGHIFYLUF3P3UI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/27/L3D206S21ENDPS64DTVSGHIHOLUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '会客厅',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/29/L3D123S21ENDPS5R3K5SGG5YOLUF3P3WG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '园路',
//                 'https://qhrenderpicoss.kujiale.com/r/2021/11/30/L3D336S21ENDPS5YUXNSGFL2SLUF3P3XO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '庭院',
//                 'https://qhrenderpicoss.kujiale.com/r/2021/12/01/L3D326S21ENDPS4OBAFSGH2RULUF3P3WW888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '泳池',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCFDYVSGE572LUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',
//         house_name: '日式混搭小院改造',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2021/09/28/VAYYBGLI4AA4WZ4XLQM6YNY8?x-oss-process=image/format,webp',
//         writer_name: '楚瑜设计',
//         discribe: ' 北欧  日式  混搭',
//         detail: {
//             title: '日式混搭小院改造',
//             type: '未定义',
//             area: '140 m2',
//             tag: '日式 、 北欧 、 混搭 、 家装',
//             detail: '',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',
//             message: [
//                 '客厅',
//                 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESOGVSGH2Z6LUF3P3XY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '门厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '一楼公卫',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '一楼洗手间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '一楼过道',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '中庭',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '姑姑房',
//                 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERQZ5SGF5NQLUF3P3WW888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '洗衣房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X2888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '父母房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼休闲厅',
//                 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERRHVSGH2BWLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '婴儿房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X6888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房',
//                 'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERTYVSGEQGELUF3P3XO888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',
//         house_name: '《九里》新古典奢华|三层别墅',
//         logo: 'https://user-platform-oss.kujiale.com/siteassets/3524bfe3e379fbe2-1584195912886.png?x-oss-process=image/format,webp',
//         writer_name: '黄建',
//         discribe: ' 欧式  混搭  轻奢',
//         detail: {
//             title: '《九里》新古典奢华|三层别墅',
//             type: '1室2厅2卫1厨',
//             area: '92 m2',
//             tag: ' 欧式 、 混搭 、 轻奢 、 家装',
//             detail: '新古典奢华风格别墅，大理石地面及金属材质的搭配，古典新作，保留复古气息，融合现代质感，整体别墅体现奢华的感觉。',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',
//             message: [
//                 '客厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVYJ5MDGSQKAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVXNVMDHQ3EAABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '洗漱间',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAU5INMDHQ3EAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHE2BZNMDE5TEAABAAAAACI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼卧室A',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/16/MG5DMVVMDGVGAAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼卧室B',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEWYRVMCADFCAABAAAAADA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼卧室C',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEW7RNMCAERIAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼过道',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEZ4OFMDE5TEAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '三楼主卧',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/31/MHG56FVMDECLMAABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '三楼书房',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3SS6YKTEDZ6AABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '三楼主卫',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/26/MHEFITFMDHVH2AABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '三楼礼佛堂',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/21/MHA4IT5MDE5TEAABAAAAACQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '三楼衣帽间',
//                 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/17/MG5X6WVMDE5TEAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     // 123456789
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
//         house_name: '150平简约美式顶跃',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MJKDERIKTFASIAABAAAAADY8.png?x-oss-process=image/format,webp',
//         writer_name: '大熊设计事务所',
//         discribe: ' 现代简约  简美',
//         detail: {
//             title: '150平简约美式顶跃',
//             type: '2室2厅2卫1厨',
//             area: '133 m2',
//             tag: ' 现代简约 、 简美 、 家装',
//             detail: '简约的小美式，尽显业主的文艺范！',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWF6KCLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWEJU2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '阳台',
//                 'https://qhrenderpic-cos.kujiale.com/r/2021/10/18/L3D206S21ENDPRZH3HNSGG6F2LUF3P3UI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房1',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWFOFGLUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童房2',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EZDVAUWFAE6LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWF6KCLUF3P3XS888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XYUWFOFCLUF3P3XG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼多功能区域',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5E4VNIUWF6X6LUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '露台',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',
//         house_name: '图森·北京润泽御府',
//         logo: 'https://user-platform-oss.kujiale.com/uat/MHGR44FMDECLMAABAAAAAAA8.png?x-oss-process=image/format,webp',
//         writer_name: 'TUCSONWOOD_',
//         discribe: '轻奢',
//         detail: {
//             title: '图森·北京润泽御府',
//             type: '1室1厅0卫0厨',
//             area: '329 m2',
//             tag: '轻奢 、 家装',
//             detail: '低调奢华，静谧幽雅。轻奢风格追求以最简洁的设计手法来打造奢华气派，造型上的简洁是为了赋予材质上的奢华。意式轻奢，简约线条在讲述真正的永恒经典，脱离一切浮华和不实用，从生活的本质出发，以极简的设计演绎最本质的轻奢美学。',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',
//             message: [
//                 '客厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D187S21ENDP4IOU6IUWFDVMLUF3P3X4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY5AUWFFIYLUF3P3XQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '玄关',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYUAUWFZWYLUF3P3W2888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '会客室',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYVAUWFAQALUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '楼梯间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY6AUWFAQALUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '西厨',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYYIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼起居室',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCLIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCCQUWFZZSLUF3P3WC888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '二楼衣帽间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCMIUWFZZSLUF3P3WS888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
//     {
//         video: 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
//         house_name: '《浪漫温馨》+140平奶油色法式轻奢',
//         logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
//         writer_name: '王磊',
//         discribe: '简美',
//         detail: {
//             title: '《浪漫温馨》+140平奶油色法式轻奢',
//             type: '3室2厅2卫1厨',
//             area: '177 m2',
//             tag: '简美 、 家装',
//             detail: '用法式的优雅和浪漫，安放生活的诗意和疲惫。空间的设计感，并不在于装饰的堆砌，有时候恰到好处的留白，反而让设计更加的纯粹，更加的高级，又没线条和个性的色彩碰撞，成就了空间的品质和高度',
//             img: 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
//             message: [
//                 '客餐厅',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDTYUWFY24LUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '厨房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDGAUWFY24LUF3P3UI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '卫生间',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDEIUWFLLQLUF3P3XY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '主卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDZAUWFY24LUF3P3WQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '次卧',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD5IUWFY24LUF3P3XM888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//                 '儿童书房',
//                 'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDIQUWFLEKLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
//             ],
//         },
//     },
// ]
export default Designsort