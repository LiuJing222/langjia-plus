import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Cover.css'
import HomeBelong from './HomeBelong'

import v2 from './images/v2.mp4'
import intro1 from './images/intro1.jpg'
import intro2 from './images/intro2.jpg'
import intro3 from './images/intro3.png'
import intro4 from './images/intro4.png'
import email from './images/email.png'
import top from './images/top.png'

import ReactPlayer from 'react-player'

const Cover = () => {

    // 滑进动画
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    
    const handleScroll = () =>{
        let item1 = document.querySelector(".cover_intro_item1")
        let item2 = document.querySelector(".cover_intro_item2")
        let item3 = document.querySelector(".cover_intro_item3")
        let item4 = document.querySelector(".cover_intro_item4")
        let topbtn = document.getElementsByClassName("cover_serve_item")
 
        let scrollY = window.scrollY;
        console.log(scrollY)
        // 动画

        if(scrollY>=156){
            item1.style.display='block';
            item2.style.display='block';
            item3.style.display='block';
            item4.style.display='block';
        }else{
            item1.style.display='none';
            item2.style.display='none';
            item3.style.display='none';
            item4.style.display='none';
        }
        if(scrollY>=300){
            item1.setAttribute("id","cover_intro_item1_move")
            console.log('超过了')
                     
            item1.style.left='200px';
            item1.style.transitionProperty='all';
            item1.style.transitionDuration = '0.5s';
            item1.style.transitionTimingFunction='ease'
          
            item2.style.right='200px';
            item2.style.transitionProperty='all';
            item2.style.transitionDuration = '0.5s';
            item2.style.transitionTimingFunction='ease'
        }else{
            
            item1.style.left='-600px';
            item1.style.transitionProperty='all';
            item1.style.transitionDuration = '0.5s';
            item1.style.transitionTimingFunction='ease'
     
            item2.style.right='-600px';
            item2.style.transitionProperty='all';
            item2.style.transitionDuration = '0.5s';
            item2.style.transitionTimingFunction='ease'
        }
        if(scrollY>=540){
            item1.setAttribute("id","cover_intro_item1_move")
            console.log('超过了')
            
            item3.style.left='200px';
            item3.style.transitionProperty='all';
            item3.style.transitionDuration = '0.5s';
            item3.style.transitionTimingFunction='ease'
 
            item4.style.right='200px';
            item4.style.transitionProperty='all';
            item4.style.transitionDuration = '0.5s';
            item4.style.transitionTimingFunction='ease'
        }else{           
            item3.style.left='-600px';
            item3.style.transitionProperty='all';
            item3.style.transitionDuration = '0.5s';
            item3.style.transitionTimingFunction='ease'
         
            item4.style.right='-600px';
            item4.style.transitionProperty='all';
            item4.style.transitionDuration = '0.5s';
            item4.style.transitionTimingFunction='ease'
        }
        // 置顶
        if(scrollY > 500){
            topbtn[0].style.display = 'block';
            topbtn[1].style.display = 'block';

        }else{
            topbtn[1].style.display = 'none';
        }
    }

    const goTop = () =>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

   
    return (
        <div className='cover_box'>
            {/* 导航栏 */}
            <div className='cover_nav'>
                <Link to='/home'><div className='cover_nav_txt1'>朗家首页</div></Link>
                {
                localStorage.getItem("email") ?
                    <Link to="personalcenter" className='cover_nav_txt2' ><span>个人中心</span></Link>
                    : <Link to="/login"><div className="cover_nav_txt2"><span>登录</span></div></Link>
                }
                {/* <Link to='/login'><div className='cover_nav_txt2'>登录</div></Link> */}
                <div className='cover_nav_line'>|</div>
                <Link to='/help'><div className='cover_nav_txt3'>帮助中心</div></Link>
            </div>
            {/* 主图 */}
            <div className='cover_img'>
                <div className='cover_react-player'>
                    <ReactPlayer
                        className="cover_img_player"
                        url={v2}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        //   controls
                        width='110%'
                        height='1000px'
                    />
                </div>
                <div className='cover_img_surface'></div>
                <div className='cover_img_txt1'>朗家·专注于室内设计</div>
                <div className='cover_img_txt2'>
                    <div className='cover_img_txt2_item'>3D</div>
                    <div className='cover_img_txt2_item'>高效</div>
                    <div className='cover_img_txt2_item'>家装</div>
                    <div className='cover_img_txt2_item'>设计</div>
                </div>
                <Link to='/home'><button className='cover_img_btn'>开始体验</button></Link>


            </div>
            {/* 介绍 */}
            <div className='cover_intro'>
                <div className='cover_intro_txt1'>专注于室内设计</div>
                <div className='cover_intro_item1'>
                    <img src={intro1} className="cover_intro_img1" alt='请刷新'></img>
                    <div className='cover_intro_item1_txt'>
                        <div className='cover_intro_item1_txt1'>全景搭建设计住宅</div>
                        <div className='cover_intro_item1_txt2'>摆脱传统的二维平面设计形式，使用3D 技术直观全面地展现房屋设计，给您更好的使用体验</div>
                    </div>
                </div>
                <div className='cover_intro_item2'>
                    <div className='cover_intro_item2_txt'>
                        <div className='cover_intro_item2_txt1'>2D与3D轻松转换</div>
                        <div className='cover_intro_item2_txt2'>2D与3D视角一键转换，设计过程中您可以快速切换，方便从不同视角阅览您的设计</div>
                    </div>
                    <img src={intro2} className="cover_intro_img2" alt='请刷新'></img>
                </div>
                <div className='cover_intro_item3'>
                    <div className='cover_intro_item2_txt'>
                        <div className='cover_intro_item2_txt1'>家具素材随心搭配</div>
                        <div className='cover_intro_item2_txt2'>朗家为您提供全面的家具模型以及户型模板，随心搭配，畅享设计</div>
                    </div>
                    <img src={intro3} className="cover_intro_img2" alt='请刷新'></img>
                </div>
                <div className='cover_intro_item4'>
                    <img src={intro4} className="cover_intro_img1" alt='请刷新'></img>
                    <div className='cover_intro_item1_txt'>
                        <div className='cover_intro_item1_txt1'>智能推荐装修灵感</div>
                        <div className='cover_intro_item1_txt2'>没有灵感？不必担心，朗家为您提供多种风格的设计灵感，收藏之后更便于查看</div>
                    </div>
                </div>
                
            </div>

            {/* 声明 */}
            {/* <div className='cover_declare'>
                <div className='cover_declare_item1'>
                    <div>借鉴网站</div>
                    <ul>
                        <li>酷家乐</li>
                        <li>npm</li>
                        <li>花瓣网</li>
                    </ul>
                </div>
                <div className='cover_declare_item2'>
                    <div>关于</div>
                    <ul>
                        <li>加入我们</li>
                    </ul>
                </div>
                <div className='cover_declare_item3'>
                    <div>联系我们</div>
                    <ul>
                        <li>联系方式：2505469033@qq.com  </li>
                        <li>周一至周日：9:00-17:00</li>
                        <li>营业执照</li>
                    </ul>
                </div>
            </div> */}
            <div className='cover_none'></div>
            <HomeBelong></HomeBelong>
            {/* 客服 */}
            <div className='cover_serve'>
                <Link to='/'>
                    <div className='cover_serve_item'>
                        <img src={email} className='cover_serve_img' alt='img'/>
                        <div className='cover_serve_txt'>联系我们</div>
                    </div>
                </Link>       
                <div className='cover_serve_item' onClick={()=>goTop()}>
                    <img src={top} className='cover_serve_img' alt='img'/>
                    <div className='cover_serve_txt'>TOP</div>
                </div>
            </div>
        </div>
    )
}

export default Cover