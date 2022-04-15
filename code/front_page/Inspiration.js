import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Inspiration.css'


import logo from './images/logoBW.png'
import bg2 from './images/insbg3.jpg'
import topline from './images/topline.png'
import downline from './images/downline.png'
import img1 from './images/insimg1.png'
import img2 from './images/insimg2.png'
import img3 from './images/insimg3.png'
import img4 from './images/insimg4.png'
import img5 from './images/insimg5.png'
import img6 from './images/insimg6.png'
import vins from './images/ins.mp4'

import ReactPlayer from 'react-player'

const Inspiration = () => {
  return (
    <div className='ins_box'>
        {/* 导航栏 */}
        <div className='ins_nav'>
            <img src={logo}  className='ins_nav_logo' />
            <div className='ins_nav_logoTxt'>朗家</div>
            <ul className='ins_nav_ul'>
                <NavLink to='/home'><li className='ins_nav_li'>首页</li></NavLink>
                <NavLink to='/'><li className='ins_nav_li'>推荐</li></NavLink>
                <NavLink to='/ins'><li className='ins_nav_li' id="ins_nav_ins">灵感</li></NavLink>
            </ul>
        </div>
        {/* 背景图 */}
        <div className='ins_bg'>
            <img src={bg2} className="ins_bg_img" />
            <div className='ins_bg_box'>
                <div className='ins_bg_txt'>思维的碰撞激起灵感的火花</div>
                <img src={topline} className='ins_bg_line1' />
                <img src={downline} className='ins_bg_line2' />
            </div>
        </div>
        {/* 内容 */}
        <div className='ins_content'>
            <Link to={{pathname:'/InsCon',state:{id:0}}}>
            <div className='ins_content_item'>
                <img src='https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHEU5AKTEM2KAABAAAAACA8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp' className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《马卡龙》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>唯美的客厅配上梦幻帘的观影效果，美得不可方物</div>
                </div>
            </div>
            </Link>
            <Link to={{pathname:'/InsCon',state:{id:1}}}>
            <div className='ins_content_item'>
                <img src="https://qhrenderpic-cos.kujiale.com/r/2022/01/17/L3D206S21ENDPT5554NSGEQZ4LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp" className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《侘寂》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>侘寂风别墅，给客户营造禅意与宁静的居住环境。</div>
                </div>
            </div>
            </Link>
            <Link to={{pathname:'/InsCon',state:{id:2}}}>
            <div className='ins_content_item'>
                <img src="https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESOGVSGH2Z6LUF3P3XY888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp" className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《日式小院》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>在这个空间里，可以尽情享受每一刻的光阴，每一份独有的美好</div>
                </div>
            </div>
            </Link>
            <Link to={{pathname:'/InsCon',state:{id:3}}}>
            <div className='ins_content_item'>
                <img src="https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0kd6wZ0bcAAQAAAAc.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp" className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《摩登时代》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>温馨复古的家，不需要太多浮华的装饰。</div>
                </div>
            </div>
            </Link>
            <Link to={{pathname:'/InsCon',state:{id:4}}}>
            <div className='ins_content_item'>
                <img src="https://qhrenderstorage-oss.kujiale.com/beautify/2021/10/13/MFTPXOFMDFXFAAABAAAAACI8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp" className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《原木温馨》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>全屋的原木色，营造轻盈的氛围感，让家更有温度</div>
                </div>
            </div>
            </Link>
            <Link to={{pathname:'/InsCon',state:{id:5}}}>
            <div className='ins_content_item'>
                <img src="https://qhrenderstorage-oss.kujiale.com/beautify/2021/07/31/YQQsvqwZjWAAAQAAAAY.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp" className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《北欧Loft》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>小小的logt客厅通过变化家具的摆放位置，也能获取不同的新鲜感</div>
                </div>
            </div>
            </Link>
        </div>
        {/* 敬请期待 */}
        <div className='ins_more'>    
            <ReactPlayer
                className="ins_more_mp4"
                url={vins}
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                //   controls
                width='230px'
                height='230px'
            />
            <div className='ins_more_txt'>更多灵感 敬请期待！</div>
        </div>
    </div>
  )
}

export default Inspiration