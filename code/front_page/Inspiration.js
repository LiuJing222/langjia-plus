import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/home'><li className='ins_nav_li'>首页</li></Link>
                <Link to='/'><li className='ins_nav_li'>推荐</li></Link>
                <Link to='/ins'><li className='ins_nav_li'>灵感</li></Link>
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
            <div className='ins_content_item'>
                <img src={img1} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《温柔宝藏》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>“世事千帆过 路的尽头会是温柔和月光”</div>
                </div>
            </div>
            <div className='ins_content_item'>
                <img src={img2} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《奶油》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>轻盈的氛围感，简约大气又不失温柔</div>
                </div>
            </div>
            <div className='ins_content_item'>
                <img src={img3} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《烟熏玫瑰》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>玫瑰色格调高雅，传达的是一种浪漫情怀</div>
                </div>
            </div>
            <div className='ins_content_item'>
                <img src={img4} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《朱莉》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>法式装修风格线条柔美而富有韵味，灯光浓烈而淡雅，强调轴线的对称</div>
                </div>
            </div>
            <div className='ins_content_item'>
                <img src={img5} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《侘寂》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>装饰线条大胆、奔放，追求自然而纯朴的意境</div>
                </div>
            </div>
            <div className='ins_content_item'>
                <img src={img6} className='ins_content_img' />
                <div className='ins_content_txt_box'>
                    <div className='ins_content_txt1'>《时光》</div>
                    <div className='ins_content_txt2'>设计师：张伟</div>
                    <div className='ins_content_txt3'>小小的logt客厅通过变化家具的摆放位置，也能获取不同的新鲜感</div>
                </div>
            </div>
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