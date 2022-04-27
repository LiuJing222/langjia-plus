import React from 'react'
import './DesignSort.css'
import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import select from './images/des_select.mp4'
import { useLocation } from 'react-router-dom';
const Designsort = () => {
    const [list, setList] = useState([]);
    const history = useHistory();
    // const [partpath,setPartpath] = useState({style:'',space:'',house:'',area:'',scene:''});
    const [style, setStyle] = useState('');
    const [space, setSpace] = useState('');
    const [house, setHouse] = useState('');
    const [area, setArea] = useState('');
    const [scene, setScene] = useState('');
    const [name,setName] = useState('');
    // const [rec_data,setRec_data] = useState([]);
    let pinyin = require("pinyin");
    const location = useLocation(); 
    useEffect(() => {
        console.log(location)
        let name2 = '';
        if(location.state){
            const name1 = pinyin(location.state.val, {
                style: pinyin.STYLE_NORMAL,

            });
            name2 = name1.join('');
            console.log(name2)
            setName('?'+name2);
        }else if(location.search){
            name2 = location.search.slice(1);
            console.log(name2)
            setName('?'+name2);
        }
        
        let name = '?'+name2
        console.log(name)
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
                    if(name){
                        console.log(select_des)
                        let newDes= select_des.filter((item)=>{
                            const title = pinyin(item.title,{
                                style: pinyin.STYLE_NORMAL, // 设置拼音风格
                            })
                            const titles = title.join('');
                            console.log(item.title,name)
                            if(titles.indexOf(name.slice(1)) !== -1){
                                return item;
                            }
                        })
                        setList(newDes); 
                    }else{
                       setList(select_des); 
                    }
                    
                } else {
                    console.log(name)
                    if(name){

                        let newDes= rec_data.filter((item)=>{
                            const title = pinyin(item.title,{
                                style: pinyin.STYLE_NORMAL, // 设置拼音风格
                            })
                            const titles = title.join('');
                            console.log(titles,name.slice(1))
                            if(titles.indexOf(name.slice(1)) !== -1){
                                console.log(111)
                                return item;
                            }
                        })
                        console.log(newDes)
                        setList(newDes); 
                    }else{
                       setList(rec_data); 
                    }
                    
                }
            })

    }, [])
    return (
        <div className='des_container'>
            <div className='des_selector'>
                <div className='des_select_row'>
                    <a className='des_select_row_title'>风格:</a>
                    <a href={'/des' + '/t' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>不限</a>
                    <a name='_xiandaijianyue' href={'/des' + '/t' + '_xiandaijianyue' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>现代简约</a>
                    <a name='_xinzhongshi' href={'/des' + '/t' + '_xinzhongshi' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>新中式</a>
                    <a name='_beiou' href={'/des' + '/t' + '_beiou' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>北欧</a>
                    <a name='_oushi' href={'/des' + '/t' + '_oushi' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>欧式</a>
                    <a name='_jianou' href={'/des' + '/t' + '_jianou' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>简欧</a>
                    <a name='_rishi' href={'/des' + '/t' + '_rishi' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>日式</a>
                    <a name='_tianyuan' href={'/des' + '/t' + '_tianyuan' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>田园</a>
                    <a name='_meishi' href={'/des' + '/t' + '_meishi' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>美式</a>
                    <a name='_jianmei' href={'/des' + '/t' + '_jianmei' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>简美</a>
                    <a name='_hunda' href={'/des' + '/t' + '_hunda' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>混搭</a>
                    <a name='_houxiandai' href={'/des' + '/t' + '_houxiandai' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>后现代</a>
                    <a name='_qingshe' href={'/des' + '/t' + '_qingshe' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>轻奢</a>
                    <a name='_gangshi' href={'/des' + '/t' + '_gangshi' + space + house + area + scene + '_p_1'+name} className='des_select_row_text'>港式</a>
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
                    <a rel href={'/des' + '/t' + style + house + area + scene + '_p_1'+name} className='des_select_row_text'>不限</a>
                    <a rel name='_keting' href={'/des' + '/t' + style + '_keting' + house + area + scene + '_p_1'+name} className='des_select_row_text'>客厅</a>
                    <a rel name='_canting' href={'/des' + '/t' + style + '_canting' + house + area + scene + '_p_1'+name} className='des_select_row_text'>餐厅</a>
                    <a rel name='_kecanting' href={'/des' + '/t' + style + '_kecanting' + house + area + scene + '_p_1'+name} className='des_select_row_text'>客餐厅</a>
                    <a rel name='_chufang' href={'/des' + '/t' + style + '_chufang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>厨房</a>
                    <a rel name='_weishengjian' href={'/des' + '/t' + style + '_weishengjian' + house + area + scene + '_p_1'+name} className='des_select_row_text'>卫生间</a>
                    <a rel name='_zhuwo' href={'/des' + '/t' + style + '_zhuwo' + house + area + scene + '_p_1'+name} className='des_select_row_text'>主卧</a>
                    <a rel name='_ciwo' href={'/des' + '/t' + style + '_ciwo' + house + area + scene + '_p_1'+name} className='des_select_row_text'>次卧</a>
                    <a rel name='_kewo' href={'/des' + '/t' + style + '_kewo' + house + area + scene + '_p_1'+name} className='des_select_row_text'>客卧</a>
                    <a rel name='_ertongfang' href={'/des' + '/t' + style + '_ertongfang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>儿童房</a>
                    <a rel name='_nverfang' href={'/des' + '/t' + style + '_nverfang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>女儿房</a>
                    <a rel name='_baomufang' href={'/des' + '/t' + style + '_baomufang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>保姆房</a>
                    <a rel name='_laorenfang' href={'/des' + '/t' + style + '_laorenfang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>老人房</a>
                    <a rel name='_shufang' href={'/des' + '/t' + style + '_shufang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>书房</a>
                    <a rel name='_dougongnengshi' href={'/des' + '/t' + style + '_duogongnengshi' + house + area + scene + '_p_1'+name} className='des_select_row_text'>多功能室</a>
                    <a rel name='_chuwujian' href={'/des' + '/t' + style + '_chuwujian' + house + area + scene + '_p_1'+name} className='des_select_row_text'>储物间</a>
                    <a rel name='_xuanguan' href={'/des' + '/t' + style + '_xuanguan' + house + area + scene + '_p_1'+name} className='des_select_row_text'>玄关</a>
                    <a rel name='_tianjing' href={'/des' + '/t' + style + '_tianjing' + house + area + scene + '_p_1'+name} className='des_select_row_text'>天井</a>
                    <a rel name='_zoulang' href={'/des' + '/t' + style + '_zoulang' + house + area + scene + '_p_1'+name} className='des_select_row_text'>走廊</a>
                    <a rel name='_yangtai' href={'/des' + '/t' + style + '_yangtai' + house + area + scene + '_p_1'+name} className='des_select_row_text'>阳台</a>
                    <a rel name='_lutai' href={'/des' + '/t' + style + '_lutai' + house + area + scene + '_p_1'+name} className='des_select_row_text'>露台</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>户型:</a>
                    <a rel href={'/des' + '/t' + style + space + area + scene + '_p_1'+name} className='des_select_row_text'>不限</a>
                    <a rel name='_yiju' href={'/des' + '/t' + style + space + '_yiju' + area + scene + '_p_1'+name} className='des_select_row_text'>一居</a>
                    <a rel name='_erju' href={'/des' + '/t' + style + space + '_erju' + area + scene + '_p_1'+name} className='des_select_row_text'>二居</a>
                    <a rel name='_sanju' href={'/des' + '/t' + style + space + '_sanju' + area + scene + '_p_1'+name} className='des_select_row_text'>三居</a>
                    <a rel name='_siju' href={'/des' + '/t' + style + space + '_siju' + area + scene + '_p_1'+name} className='des_select_row_text'>四居</a>
                    <a rel name='_wujujiyishang' href={'/des' + '/t' + style + space + '_wujujiyishang' + area + scene + '_p_1'+name} className='des_select_row_text'>五居及以上</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>面积:</a>
                    <a rel href={'/des' + '/t' + style + space + house + scene + '_p_1'+name} className='des_select_row_text'>不限</a>
                    <a rel name='_50-80' href={'/des' + '/t' + style + space + house + '_50-80' + scene + '_p_1'+name} className='des_select_row_text'>50-80m²</a>
                    <a rel name='_80-100' href={'/des' + '/t' + style + space + house + '_80-100' + scene + '_p_1'+name} className='des_select_row_text'>80-100m²</a>
                    <a rel name='_100-130' href={'/des' + '/t' + style + space + house + '_100-130' + scene + '_p_1'+name} className='des_select_row_text'>100-130m²</a>
                    <a rel name='_130jiyishang' href={'/des' + '/t' + style + space + house + '_130jiyishang' + scene + '_p_1'+name} className='des_select_row_text'>130m²及以上</a>
                    <a rel name='_50jiyixia' href={'/des' + '/t' + style + space + house + '_50jiyixia' + scene + '_p_1'+name} className='des_select_row_text'>50m²及以下</a>
                </div>
                <div className='des_select_row'>
                    <a rel className='des_select_row_title'>场景:</a>
                    <a rel href={'/des' + '/t' + style + space + house + area + '_p_1'+name} className='des_select_row_text'>不限</a>
                    <a rel name='_jiazhuang' href={'/des' + '/t' + style + space + house + area + '_jiazhuang' + '_p_1'+name} className='des_select_row_text'>家装</a>
                    <a rel name='_bangong' href={'/des' + '/t' + style + space + house + area + '_bangong' + '_p_1'+name} className='des_select_row_text'>办公</a>
                    <a rel name='_canyin' href={'/des' + '/t' + style + space + house + area + '_canyin' + '_p_1'+name} className='des_select_row_text'>餐饮</a>
                    <a rel name='_yule' href={'/des' + '/t' + style + space + house + area + '_yule' + '_p_1'+name} className='des_select_row_text'>娱乐</a>
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
                        list.map((item, index) => {
                            if (index % 3 == 1) {
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
                        list.map((item, index) => {
                            if (index % 3 == 2) {
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

export default Designsort