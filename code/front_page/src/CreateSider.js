import React, { useEffect, useState } from 'react'
import './CreateSider.css'
import module_gray from './images/create_module_gray.svg'
import module_blue from './images/create_module_blue.svg'
import furniture_gray from './images/create_forniture_gray.svg'
import furniture_blue from './images/create_forniture_blue.svg'
import recommend_gray from './images/create_recommend_gray.svg'
import recommend_blue from './images/create_recommend_blue.svg'
import show_gray from './images/create_show_gray.svg'
import show_blue from './images/create_show_blue.svg'
import inspiration_gray from './images/create_inspiration_gray.svg'
import inspiration_blue from './images/create_inspiration_blue.svg'
import ReactPlayer from 'react-player'
import { CloseOutline } from 'antd-mobile-icons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntroJs from 'intro.js'
import 'intro.js/introjs.css';
import sofa from './images/create_sofa.svg'
import cabinet from './images/create_cabinet.svg'
import decoration from './images/create_decoration.svg'
import door from './images/create_door.svg'
import chair from './images/create_chair.svg'
import kitchen from './images/create_kitchen.svg'
import light from './images/create_light.svg'
import table from './images/create_table.svg'
import bed from './images/create_bed.svg'
import toilet from './images/create_toilet.svg'
import window from './images/create_window.svg'
import right from './images/create_right.svg'
import back from './images/create_back.svg'

const CreateSider = () => {
  const [display_text, setDisplay_text] = useState('none');
  const [img_color, setImg_color] = useState({ module: module_gray, furniture: furniture_gray, recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray })
  const [click_img_color, setClick_img_color] = useState({ module: module_gray, furniture: '', recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray })
  const [text_color, setText_color] = useState({ module: '#707070', furniture: '#707070', recommend: '#707070', show: '#707070', inspiration: '#707070' })
  const [click_text_color, setClick_text_color] = useState({ module: '', furniture: '#448cef', recommend: '', show: '', inspiration: '' })
  const [click_text_weight, setClick_text_weight] = useState({ module: 'normal', furniture: 'bolder', recommend: 'normal', show: 'normal', inspiration: 'normal' })
  const [click_background, setClick_background] = useState({ module: '', furniture: 'rgba(3,9,17,0.04)', recommend: '', show: '', inspiration: '' });
  const [furniture_img, setFurniture_img] = useState([]);
  const [sideDetail, setSideDetail] = useState({ module: 'none', furniture: 'flex', recommend: 'none', show: 'none', inspiration: 'none' })
  const [inspiration, setInspiration] = useState([]);
  const [slideDis, setSlideDis] = useState({ display: 'none', message: {}, img: [] });
  const [house, setHouse] = useState([]);
  const [designlist, setDesignlist] = useState([]);
  const [showlist, setShowList] = useState([]);
  const [display_furn, setDisplay_furn] = useState(JSON.parse(localStorage.getItem('display_furn'))||{ page1: 'flex', page2: 'none' })
  const [show_furn, setShow_furn] = useState(localStorage.getItem('show_furn')||'');
  useEffect(() => {
    if (localStorage.getItem('detailDis')) {
      console.log(localStorage.getItem('detailDis'))
      setSideDetail(JSON.parse(localStorage.getItem('detailDis')))

    } else {
      localStorage.setItem('detailDis', JSON.stringify(sideDetail));

    }
    if (localStorage.getItem('click_img_color')) {
      setClick_img_color(JSON.parse(localStorage.getItem('click_img_color')));
    } else {
      localStorage.setItem('click_img_color', JSON.stringify(click_img_color));
    }
    if (localStorage.getItem('click_text_color')) {
      setClick_text_color(JSON.parse(localStorage.getItem('click_text_color')))
    } else {
      localStorage.setItem('click_text_color', JSON.stringify(click_text_color));
    }
    if (localStorage.getItem('click_text_weight')) {
      setClick_text_weight(JSON.parse(localStorage.getItem('click_text_weight')));
    } else {
      localStorage.setItem('click_text_weight', JSON.stringify(click_text_weight));
    }
    if (localStorage.getItem('click_background')) {
      setClick_background(JSON.parse(localStorage.getItem('click_background')));
    } else {
      localStorage.setItem('click_background', JSON.stringify(click_background));
    }
    fetch('https://api.qasdwer.xyz:2019/getuserdesign')
      .then(res => res.json())
      .then(res => {
        const newlist = [];
        res.map((val) => {
          if (val.is_recom === 1) {
            newlist.push(val);
          }
        })
        console.log(res)
        res && setDesignlist(newlist);

      })
      .catch(err => {
        console.error(err)
      })
      fetch('https://api.qasdwer.xyz:2019/getDesignDatas')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setFurniture_img(res);
      })
    if(localStorage.getItem('detailDis')){
      const dis = JSON.parse(localStorage.getItem('detailDis'));
      for(var key in dis){
        if(dis[key] == 'flex'){
          f(key);
          break;
        }
      }
    }
   
  }, [])
  const f = (i)=>{
    const email = localStorage.getItem('email');
    if(i == 'module'){
      fetch('https://api.qasdwer.xyz:2019/gethousetype')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        res && setHouse(res);


      }).catch(err => {
        console.error(err)
      }) 
    }else if(i == 'inspiration'){
      fetch('https://api.qasdwer.xyz:2019/getinspiredatas/' + email)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setInspiration(res);

      })
    }else if(i == 'show'){
      fetch('https://api.qasdwer.xyz:2019/getexcellenceworks')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setShowList(res);
      })
    }
  }
  const iconClick = (i) => {
    // console.log(this)
    setClick_img_color({ module: module_gray, furniture: furniture_gray, recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray, [i]: '' })
    localStorage.setItem('click_img_color', JSON.stringify({ module: module_gray, furniture: furniture_gray, recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray, [i]: '' }));
    setClick_text_color({ module: '', furniture: '', recommend: '', show: '', inspiration: '', [i]: '#448cef' })
    localStorage.setItem('click_text_color', JSON.stringify({ module: '', furniture: '', recommend: '', show: '', inspiration: '', [i]: '#448cef' }))
    setClick_text_weight({ module: 'normal', furniture: 'normal', recommend: 'normal', show: 'normal', inspiration: 'normal', [i]: 'bolder' })
    localStorage.setItem('click_text_weight', JSON.stringify({ module: 'normal', furniture: 'normal', recommend: 'normal', show: 'normal', inspiration: 'normal', [i]: 'bolder' }));
    setClick_background({ module: '', furniture: '', recommend: '', show: '', inspiration: '', [i]: 'rgba(3,9,17,0.04)' });
    localStorage.setItem('click_background', JSON.stringify({ module: '', furniture: '', recommend: '', show: '', inspiration: '', [i]: 'rgba(3,9,17,0.04)' }));
    localStorage.setItem('detailDis', JSON.stringify({ module: 'none', furniture: 'none', recommend: 'none', show: 'none', inspiration: 'none', [i]: 'flex' }));
    setSideDetail({ module: 'none', furniture: 'none', recommend: 'none', show: 'none', inspiration: 'none', [i]: 'flex' })
    setSlideDis({ ...slideDis, display: 'none' })
    f(i);
  }
  const divEmerge = (e) => {
    localStorage.setItem('detailDis', JSON.stringify({ module: 'none', furniture: 'none', recommend: 'none', show: 'none', inspiration: 'none' }))
    setSideDetail({ module: 'none', furniture: 'none', recommend: 'none', show: 'none', inspiration: 'none' });
    setClick_img_color({ module: module_gray, furniture: furniture_gray, recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray })
    localStorage.setItem('click_img_color', JSON.stringify({ module: module_gray, furniture: furniture_gray, recommend: recommend_gray, show: show_gray, inspiration: inspiration_gray }));
    setClick_text_color({ module: '', furniture: '', recommend: '', show: '', inspiration: '' })
    localStorage.setItem('click_text_color', JSON.stringify({ module: '', furniture: '', recommend: '', show: '', inspiration: '' }))
    setClick_text_weight({ module: 'normal', furniture: 'normal', recommend: 'normal', show: 'normal', inspiration: 'normal' })
    localStorage.setItem('click_text_weight', JSON.stringify({ module: 'normal', furniture: 'normal', recommend: 'normal', show: 'normal', inspiration: 'normal' }));
    setClick_background({ module: '', furniture: '', recommend: '', show: '', inspiration: '' });
    localStorage.setItem('click_background', JSON.stringify({ module: '', furniture: '', recommend: '', show: '', inspiration: '' }));
    console.log(e.target)
    // f(i);
  }
  // const slideShow = (item)=>{
  //   console.log(item)
  // }
  const storagef = (item, index) => {
    const furniture = JSON.parse(localStorage.getItem('furniture')) || [];
    furniture.push(item);
    localStorage.setItem('furniture', JSON.stringify(furniture));
    window.location.reload();
  }
  const getHouseType = (item) => {
    const housePoints = JSON.parse(item.points);
    localStorage.removeItem('furniture');
    localStorage.setItem('points', JSON.stringify(housePoints));
    localStorage.removeItem('pointerArray')
    window.location.reload();
  }
  const getdesignmodel = (id) => {
    const furniturearr = [];
    designlist.map(val => {
      if (val.design_id === id) {
        const furn = JSON.parse(val.design_furniture)
        for (var i = 0; i < furn.length; i++) {
          var obj = {
            furniture_id: furn[i].furniture,
            position: furn[i].point,
            rotate: furn[i].rotate,
            size: furn[i].size,
            objname: furn[i].objname,
            mtlname: furn[i].mtlname,
            imgname: furn[i].imgname
          };
          furniturearr.push(obj)
        }
        localStorage.setItem('points', val.design_point);
      }
    })
    localStorage.setItem('furniture', JSON.stringify(furniturearr));
    window.location.reload();
  }

  return (
    <div className='createSiderBox'>
      <div data-step="3" data-title="工具栏" data-intro="获得家具及灵感" className='createSiderContainer' onMouseOver={() => setDisplay_text('inline-block')} onMouseOut={() => setDisplay_text('none')}>
        <div data-step="4" data-title="户型" data-intro="挑选心仪的户型练手" className='createSiderIcon' style={{ backgroundColor: click_background.module }} onClick={() => iconClick('module')} onMouseOver={() => { setImg_color({ ...img_color, module: module_blue }); setText_color({ ...text_color, module: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, module: module_gray }); setText_color({ ...text_color, module: '#707070' }) }}>
          <img src={click_img_color.module == '' ? module_blue : img_color.module} alt="" />
        </div>
        <div data-step="5" data-title="家具" data-intro="在此选择家具进行装饰" className='createSiderIcon' style={{ backgroundColor: click_background.furniture }} onClick={() => iconClick('furniture')} onMouseOver={() => { setImg_color({ ...img_color, furniture: furniture_blue }); setText_color({ ...text_color, furniture: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, furniture: furniture_gray }); setText_color({ ...text_color, furniture: '#707070' }) }}>
          <img src={click_img_color.furniture == '' ? furniture_blue : img_color.furniture} alt="" />
        </div>
        <div data-step="6" data-title="推荐" data-intro="随时查看其他人的优秀设计" className='createSiderIcon' style={{ backgroundColor: click_background.recommend }} onClick={() => iconClick('recommend')} onMouseOver={() => { setImg_color({ ...img_color, recommend: recommend_blue }); setText_color({ ...text_color, recommend: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, recommend: recommend_gray }); setText_color({ ...text_color, recommend: '#707070' }) }}>
          <img src={click_img_color.recommend == '' ? recommend_blue : img_color.recommend} alt="" />
        </div>
        <div data-step="7" data-title="大咖秀" data-intro="不一样的视野，更好的设计" className='createSiderIcon' style={{ backgroundColor: click_background.show }} onClick={() => iconClick('show')} onMouseOver={() => { setImg_color({ ...img_color, show: show_blue }); setText_color({ ...text_color, show: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, show: show_gray }); setText_color({ ...text_color, show: '#707070' }) }}>
          <img src={click_img_color.show == '' ? show_blue : img_color.show} alt="" />
        </div>
        <div data-step="8" data-title="灵感" data-intro="灵感带给你新思路" className='createSiderIcon' style={{ backgroundColor: click_background.inspiration }} onClick={() => iconClick('inspiration')} onMouseOver={() => { setImg_color({ ...img_color, inspiration: inspiration_blue }); setText_color({ ...text_color, inspiration: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, inspiration: inspiration_gray }); setText_color({ ...text_color, inspiration: '#707070' }) }}>
          <img src={click_img_color.inspiration == '' ? inspiration_blue : img_color.inspiration} alt="" />
        </div>
      </div>

      <div className='createSider_over' style={{ display: display_text }} onMouseOver={() => setDisplay_text('inline-block')} onMouseOut={() => setDisplay_text('none')}>
        {
          click_text_color.module ?
            <div className='create_over_text' onClick={() => iconClick('module')} style={{ color: click_text_color.module, fontWeight: click_text_weight.module, backgroundColor: click_background.module }} onMouseOver={() => { setImg_color({ ...img_color, module: module_blue }); setText_color({ ...text_color, module: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, module: module_gray }); setText_color({ ...text_color, module: '#707070' }) }}>户型库</div> :
            <div className='create_over_text' onClick={() => iconClick('module')} style={{ color: text_color.module, fontWeight: click_text_weight.module, backgroundColor: click_background.module }} onMouseOver={() => { setImg_color({ ...img_color, module: module_blue }); setText_color({ ...text_color, module: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, module: module_gray }); setText_color({ ...text_color, module: '#707070' }) }}>户型库</div>
        }
        {
          click_text_color.furniture ?
            <div className='create_over_text' onClick={() => iconClick('furniture')} style={{ color: click_text_color.furniture, fontWeight: click_text_weight.furniture, backgroundColor: click_background.furniture }} onMouseOver={() => { setImg_color({ ...img_color, furniture: furniture_blue }); setText_color({ ...text_color, furniture: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, furniture: furniture_gray }); setText_color({ ...text_color, furniture: '#707070' }) }}>家具库</div> :
            <div className='create_over_text' onClick={() => iconClick('furniture')} style={{ color: text_color.furniture, fontWeight: click_text_weight.furniture, backgroundColor: click_background.furniture }} onMouseOver={() => { setImg_color({ ...img_color, furniture: furniture_blue }); setText_color({ ...text_color, furniture: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, furniture: furniture_gray }); setText_color({ ...text_color, furniture: '#707070' }) }}>家具库</div>
        }
        {
          click_text_color.recommend ?
            <div className='create_over_text' onClick={() => iconClick('recommend')} style={{ color: click_text_color.recommend, fontWeight: click_text_weight.recommend, backgroundColor: click_background.recommend }} onMouseOver={() => { setImg_color({ ...img_color, recommend: recommend_blue }); setText_color({ ...text_color, recommend: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, recommend: recommend_gray }); setText_color({ ...text_color, recommend: '#707070' }) }}>推荐</div> :
            <div className='create_over_text' onClick={() => iconClick('recommend')} style={{ color: text_color.recommend, fontWeight: click_text_weight.recommend, backgroundColor: click_background.recommend }} onMouseOver={() => { setImg_color({ ...img_color, recommend: recommend_blue }); setText_color({ ...text_color, recommend: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, recommend: recommend_gray }); setText_color({ ...text_color, recommend: '#707070' }) }}>推荐</div>
        }
        {
          click_text_color.show ?
            <div className='create_over_text' onClick={() => iconClick('show')} style={{ color: click_text_color.show, fontWeight: click_text_weight.show, backgroundColor: click_background.show }} onMouseOver={() => { setImg_color({ ...img_color, show: show_blue }); setText_color({ ...text_color, show: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, show: show_gray }); setText_color({ ...text_color, show: '#707070' }) }}>大咖秀</div> :
            <div className='create_over_text' onClick={() => iconClick('show')} style={{ color: text_color.show, fontWeight: click_text_weight.show, backgroundColor: click_background.show }} onMouseOver={() => { setImg_color({ ...img_color, show: show_blue }); setText_color({ ...text_color, show: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, show: show_gray }); setText_color({ ...text_color, show: '#707070' }) }}>大咖秀</div>
        }
        {
          click_text_color.inspiration ?
            <div className='create_over_text' onClick={() => iconClick('inspiration')} style={{ color: click_text_color.inspiration, fontWeight: click_text_weight.inspiration, backgroundColor: click_background.inspiration }} onMouseOver={() => { setImg_color({ ...img_color, inspiration: inspiration_blue }); setText_color({ ...text_color, inspiration: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, inspiration: inspiration_gray }); setText_color({ ...text_color, inspiration: '#707070' }) }}>灵感</div> :
            <div className='create_over_text' onClick={() => iconClick('inspiration')} style={{ color: text_color.inspiration, fontWeight: click_text_weight.inspiration, backgroundColor: click_background.inspiration }} onMouseOver={() => { setImg_color({ ...img_color, inspiration: inspiration_blue }); setText_color({ ...text_color, inspiration: '#448cef' }) }} onMouseOut={() => { setImg_color({ ...img_color, inspiration: inspiration_gray }); setText_color({ ...text_color, inspiration: '#707070' }) }}>灵感</div>
        }



      </div>
      <div className='createSiderDetail_outer'>
        {/* -------------------户型----------------------------- */}
        <div className='createSiderDetail' style={{ display: sideDetail.module }}>
          <div className='createSiderDetail_top'>
            <div className="house_tag">
              <span>3D图示</span>
              <span>2D图示</span>
            </div>
            {
              house.map((item) => {
                return (
                  <li key={item.house_id} style={{display:'flex',justifyContent:'space-around'}} className='createSiderDetail_li' onClick={() => { getHouseType(item) }}>
                    <img src={"https://api.qasdwer.xyz:2019/gethousetype/" + JSON.parse(item.imgname)[0]} alt="" />
                    <img src={"https://api.qasdwer.xyz:2019/gethousetype/" + JSON.parse(item.imgname)[1]} alt="" />
                  </li>
                )
              })
            }
          </div>
          <div className='createSiderDetail_bottom' onClick={(e) => divEmerge(e)}>

          </div>
        </div>
        {/* -------------------------家具-------------------- */}
        <div className='createSiderDetail' style={{ display: sideDetail.furniture }} >
          <div className='createSiderDetail_top'>
            <div style={{ display: display_furn.page1, flexDirection: 'column' }}>
              <div className='furniture_classify_title'>
                <div className='furniture_classify_title_inner'>
                  <span>家具榜单分类</span>
                  <img style={{ width: 15, position: 'relative', top: 2 }} src={right} alt="" />
                </div>
              </div>
              <div className='furniture_classify_all'>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('sofa');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','sofa') }}>
                  <img src={sofa} alt="" />
                  <span>沙发</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('cabinet');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','cabinet') }}>
                  <img src={cabinet} alt="" />
                  <span>柜子</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('decoration');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','decoration') }}>
                  <img src={decoration} alt="" />
                  <span>装饰</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('door');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','door') }}>
                  <img src={door} alt="" />
                  <span>门</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('chair');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','chair') }}>
                  <img src={chair} alt="" />
                  <span>椅子</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('kitchen');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','kitchen') }}>
                  <img src={kitchen} alt="" />
                  <span>厨具</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('light');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','light') }}>
                  <img src={light} alt="" />
                  <span>灯</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('table');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','table') }}>
                  <img src={table} alt="" />
                  <span>桌子</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('bed');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','bed') }}>
                  <img style={{ marginTop: 13 }} src={bed} alt="" />
                  <span style={{ marginTop: 11 }}>床</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('toilet');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','toilet') }}>
                  <img src={toilet} alt="" />
                  <span>马桶</span>
                </div>
                <div className='furniture_classify_item' onClick={() => { setDisplay_furn({ page1: 'none', page2: 'flex' }); setShow_furn('window');localStorage.setItem('display_furn',JSON.stringify({ page1: 'none', page2: 'flex' }));localStorage.setItem('show_furn','window') }}>
                  <img src={window} alt="" />
                  <span>窗</span>
                </div>

              </div>
            </div>
            <div style={{ display: display_furn.page2, flexDirection: 'column' }}>
              <div className='createSiderDetail_top_inner_close'>
                <div style={{ width: 25, height: 25,marginLeft:30 }} onClick={() => {setDisplay_furn({ page1: 'flex', page2: 'none' });localStorage.setItem('display_furn',JSON.stringify({ page1: 'flex', page2: 'none' }));localStorage.setItem('show_furn','')}}>
                  <img src={back} style={{width:24}} alt="" />
                </div>

              </div>
              <div className='createSiderDetail_top_inner'>


                {
                  furniture_img.map((item, index) => {
                    if (item.type == show_furn) {
                      return (
                        <li key={item.furniture_id} style={{display:'flex',justifyContent:'center',width: 145,height: 130}}  className='createSiderDetail_li' onClick={() => storagef(item, index)}>
                          <img src={'https://api.qasdwer.xyz:2019/getDesignDatas/image/' + item.imgname} alt="" />
                        </li>
                      )
                    }

                  })
                }
              </div>
            </div>
          </div>
          <div className='createSiderDetail_bottom' onClick={(e) => divEmerge(e)}>

          </div>
        </div>
        {/* --------------------------推荐---------------------------- */}
        <div className='createSiderDetail' style={{ display: sideDetail.recommend }}>
          <div className='createSiderDetail_top'>
            {
              designlist.map((item) => {
                return (
                  <li key={item.design_id} style={{display:'flex',justifyContent:'center'}} className='createSiderDetail_li' onClick={() => getdesignmodel(item.design_id)}>
                    <img className='createSiderDetail_recom_img' src={item.imgpath} alt="" />
                  </li>
                )
              })
            }
          </div>
          <div className='createSiderDetail_bottom' onClick={(e) => divEmerge(e)}>

          </div>
        </div>
        {/* ---------------------大咖秀------------------------- */}
        <div className='createSiderDetail' style={{ display: sideDetail.show, width: 900 }}>
          <div className='createSiderDetail_top'>
            {
              showlist.map((item) => {
                if (item.vedio) {
                  return (
                    <li key={item.work_id} style={{display:'flex',justifyContent:'center'}} className='createSiderDetail_li' onMouseOver={() => setSlideDis({ display: 'flex', message: item, img: JSON.parse(item.message) })}>
                      <ReactPlayer
                        url={item.vedio}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        //   controls
                        width='300px'
                        height='150px'
                      />
                    </li>
                  )
                } else {
                  return (
                    <li key={item.work_id} style={{display:'flex',justifyContent:'center'}} className='createSiderDetail_li' onMouseOver={() => setSlideDis({ display: 'flex', message: item, img: JSON.parse(item.message) })}>
                      <img src={item.cover_img} style={{ width: 266, height: 150 }} alt="" />
                    </li>
                  )
                }


              })
            }
          </div>
          <div className='createSiderDetail_bottom' onClick={(e) => divEmerge(e)}>
          </div>
          <div className="slideshow" style={{ display: slideDis.display }}>
            <div className='slideshow_top'>
              <span onClick={() => setSlideDis({ ...slideDis, display: 'none' })}>
                <CloseOutline />
              </span>
            </div>
            <div className='slideshow111'>
              <div>
                <Slider {...{
                  //   dots: true,
                  // dotsClass:'slick-dots1',//自定义指示器的样式
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  height: 310,
                }}>
                  {
                    slideDis.img.map(item => {
                      return (
                        <li key={item.imgpath}>
                          <img style={{ width: 550, height: 310 }} src={item.imgpath} alt="" />
                          <div className='slide_place'>{item.place}</div>
                        </li>
                      )
                    })
                  }
                </Slider>
              </div>

            </div>
            <div className='slide_bottom'>
              <div>
                <span>面积:</span>
                <span>{slideDis.message.area}</span>
              </div>
              <div>
                <span>类型:</span>
                <span>{slideDis.message.type}</span>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------灵感---------------------------------- */}
        <div className='createSiderDetail' style={{ display: sideDetail.inspiration, width: 900 }}>
          <div className='createSiderDetail_top'>
            {
              inspiration.map(item => {
                return (
                  <li key={item.inspire_id} className='createSiderDetail_li' onMouseOver={() => setSlideDis({ display: 'flex', message: item, img: JSON.parse(item.message) })}>
                    <ReactPlayer
                      url={'http:' + item.vedio}
                      playing={true}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      //   controls
                      width='300px'
                      height='150px'
                    />
                    <div className='createSider_ins_text'>
                      <div className='createSider_ins_title'>{item.title}</div>
                      <div className='createSider_ins_tag'>{item.tag}</div>
                    </div>
                  </li>
                )
              })
            }
          </div>
          <div className='createSiderDetail_bottom' onClick={(e) => divEmerge(e)}>
          </div>
          <div className="slideshow" style={{ display: slideDis.display }}>
            <div className='slideshow_top'>
              <span onClick={() => setSlideDis({ ...slideDis, display: 'none' })}>
                <CloseOutline />
              </span>
            </div>
            <div className='slideshow111'>
              <div>
                <Slider {...{
                  //   dots: true,
                  // dotsClass:'slick-dots1',//自定义指示器的样式
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  height: 310,
                  auto:1000,
                }}>
                  {
                    slideDis.img.map(item => {
                      return (
                        <li key={item.imgpath}>
                          <img style={{ width: 550, height: 310 }} src={item.imgpath} alt="" />
                          <div className='slide_place'>{item.place}</div>
                        </li>
                      )
                    })
                  }
                </Slider>
              </div>

            </div>
            <div className='slide_bottom'>
              <div>
                <span>面积:</span>
                <span>{slideDis.message.area}</span>
              </div>
              <div>
                <span>类型:</span>
                <span>{slideDis.message.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='siderDetailAway'>
        <div className='siderDetailAwayInner'></div>
      </div> */}

    </div >
  )
}

export default CreateSider