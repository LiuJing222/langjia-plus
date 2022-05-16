import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import HomeBelong from './HomeBelong'
import HomeBg from './images/homeBg.jpg'
import SqurIcon from './images/3DSqur.png'
import RateIcon from './images/home_rate_icon.png'
import HomeIcon from './images/home_home_icon.png'
import DesignIcon from './images/home_design_icon.png'
import DoIcon from './images/doitIcon.png'
import InsptIcon from './images/spirationIcon.png'
import RmdIcon from './images/rmdIcon.png'
import StarIcon from './images/starShow.png'
import LivingRoom from './images/livingRoom.jfif'
import BedRoom from './images/bedRoom.jfif'
import Kitchen from './images/kitchen.jfif'
import StudyRoom from './images/studyRoom.jfif'
import WashRoom from './images/washRoom.jfif'
import Balcony from './images/balcony.jfif'
import TDBubble from './images/3DBubble.png'
import FreeBubble from './images/FBubble.png'
import RferBubble from './images/RBubble.png'
import StartBubble from './images/SBubble.png'

import './HomeContent.css'
import { Dialog, Toast, } from 'antd-mobile'

const history = createBrowserHistory({
    basename: '',             //基链接
    forceRefresh: true        //是否强制刷新
});
const go = async () => {
    const result = await Dialog.confirm({
            content: `登陆之后才能开始创建哦，要去登陆吗？`,
        })
    result ? history.push("/login") : history.push("/home")
}
const HomeTop = () => {
    return (
        <div className="home_top">
            <img src='https://qhrenderpicoss.kujiale.com/r/2022/05/11/L3D206S41ENDP5SICZQUWFVDYLUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp' className="home_top_bg"></img>
            <p className="fp">设计你的房间</p>
            <p className="sp">实现你的设计梦</p>
            <div className="home_characters">
                <div className="home_character"><img src={SqurIcon} className="home_icon"></img><span className="home_top_text">3D</span></div>
                <div className="home_character"><img src={RateIcon} className="home_icon"></img><span className="home_top_text">高效</span></div>
                <div className="home_character"><img src={HomeIcon} className="home_icon"></img><span className="home_top_text">家装</span></div>
                <div className="home_character"><img src={DesignIcon} className="home_icon"></img><span className="home_top_text">设计</span></div>
            </div>
            {localStorage.getItem("email") ?
                <Link to="/create" class="home_start">
                    快速开始</Link>
                : <div onClick={() => go()} class="home_start">快速开始</div>
            }
        </div>
    )
}
const Btns = () => {

    return (
        <div className="home_btns">
            {localStorage.getItem("email") ?
                <Link to="/create"><button><img src={DoIcon}></img><span>开始创建</span></button></Link>
                : <button onClick={() => go()}><img src={DoIcon}></img><span>开始创建</span></button>
            }
            <Link to="/highquality"><button><img src={RmdIcon}></img><span>逛逛推荐</span></button></Link>
            <Link to="/Ins"><button><img src={InsptIcon}></img><span>寻找灵感</span></button></Link>
            <Link to="/rec"><button><img src={StarIcon}></img><span>大咖秀</span></button></Link>
        </div>
    )
}
const HomeTips = () => {
    return (
        <div className="home_tips">
            <span className="home_tips_title">家装Tips：</span>
            <div className="home_tips_content">
                {/* 1 */}
                <div className="home_tip">
                    <span className="home_tip_title">客厅</span>
                    <br></br>
                    <span className="home_tip_text">房间的门面就是客厅，客厅如何设计？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={LivingRoom}></img>
                        <div className="home_tip_con">
                            <span>房间的门面就是客厅，客厅如何设计？</span>
                            <Link target="_blank" to="/livingtip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="home_tip">
                    <span className="home_tip_title">餐厅</span>
                    <br></br>
                    <span className="home_tip_text">餐厅自然也是干净又卫生，如何不留卫生死角？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={Kitchen}></img>
                        <div className="home_tip_con">
                            <span>餐厅自然也是干净又卫生，如何不留卫生死角？</span>
                            <Link target="_blank" to="/kitchentip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="home_tip">
                    <span className="home_tip_title">洗手间</span>
                    <br></br>
                    <span className="home_tip_text">洗手间与淋浴间的卫生最体现房子主人的卫生，如何给客人留下好印象呢？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={WashRoom}></img>
                        <div className="home_tip_con">
                            <span>洗手间与淋浴间的卫生最体现房子主人的卫生，如何给客人留下好印象呢？</span>
                            <Link target="_blank" to="/washroomtip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="home_tip">
                    <span className="home_tip_title">卧室</span>
                    <br></br>
                    <span className="home_tip_text">卧室又要干净又要舒服，到底要怎样设计？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={BedRoom}></img>
                        <div className="home_tip_con">
                            <span>卧室又要干净又要舒服，到底要怎样设计？</span>
                            <Link target="_blank" to="/bedroomtip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="home_tip">
                    <span className="home_tip_title">书房</span>
                    <br></br>
                    <span className="home_tip_text">书房是家中最安静的地方，如何布局才能显得不局促？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={StudyRoom}></img>
                        <div className="home_tip_con">
                            <span>书房是家中最安静的地方，如何布局才能显得不局促？</span>
                            <Link target="_blank" to="/studyroomtip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="home_tip">
                    <span className="home_tip_title">阳台</span>
                    <br></br>
                    <span className="home_tip_text">阳台是种些花花草草，还是干干净净的？</span>
                    <br></br>
                    <div className="home_tip_hover">
                        <img src={Balcony}></img>
                        <div className="home_tip_con">
                            <span>阳台是种些花花草草，还是干干净净的？</span>
                            <Link target="_blank" to="/balconytip">看看大家怎么说→</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
const Chater = () => {
    useEffect(() => {
        window.addEventListener("scroll", handleChater);
        handleChater();
        return () => {
            window.removeEventListener("scroll", handleChater)
        }
    }, [])

    const handleChater = () => {
        let chaterImg = document.getElementsByClassName("home_chater_img")

        let scrollY = window.scrollY;
        if (scrollY >= 700) {
            chaterImg[0].style.transform = "scale(1.3)";
            chaterImg[0].style.transitionProperty = "all";
            chaterImg[0].style.transitionDuration = "1s";
            chaterImg[0].style.transitionTimingFunction = "ease";
            chaterImg[0].style.transitionDelay = "0.5s";

            chaterImg[1].style.transform = "scale(1.3)";
            chaterImg[1].style.transitionProperty = "all";
            chaterImg[1].style.transitionDuration = "1s";
            chaterImg[1].style.transitionTimingFunction = "ease";
            chaterImg[1].style.transitionDelay = "0.75s";


            chaterImg[2].style.transform = "scale(1.3)";
            chaterImg[2].style.transitionProperty = "all";
            chaterImg[2].style.transitionDuration = "1s";
            chaterImg[2].style.transitionTimingFunction = "ease";
            chaterImg[2].style.transitionDelay = "1s";


            chaterImg[3].style.transform = "scale(1.3)";
            chaterImg[3].style.transitionProperty = "all";
            chaterImg[3].style.transitionDuration = "1s";
            chaterImg[3].style.transitionTimingFunction = "ease";
            chaterImg[3].style.transitionDelay = "1.25s";
        } else if (scrollY >= 650) {
            chaterImg[0].style.transform = "scale(1)";
            chaterImg[1].style.transform = "scale(1)";
            chaterImg[2].style.transform = "scale(1)";
            chaterImg[3].style.transform = "scale(1)";
        }
    }
    return (
        <div className='home_chaters'>
            <div className="home_chater">
                <img className='home_chater_img' src={TDBubble}></img>
                <span className="home_chater_title">3D</span>
                <br></br>
                <span className="home_chater_text">3D 技术的使用直观全面地展    现房屋设计，增强您的体验感和沉浸感</span>
            </div>
            <div className="home_chater">
                <img className='home_chater_img' src={FreeBubble}></img>
                <span className="home_chater_title">Free</span>
                <br></br>
                <span className="home_chater_text">海量户型模板及家具模型任您选择，随心搭配，主宰自己的家</span>
            </div>
            <div className="home_chater">
                <img className='home_chater_img' src={RferBubble}></img>
                <span className="home_chater_title">Reference</span>
                <br></br>
                <span className="home_chater_text">没有灵感？没有经验？多种风格的灵感及优秀作品供您参考</span>
            </div>
            <div className="home_chater">
                <img className='home_chater_img' src={StartBubble}></img>
                <span className="home_chater_title">Start</span>
                <br></br>
                <span className="home_chater_text">家装从这里开始</span>
            </div>
        </div>
    )
}


const HomeContent = () => {

    return (
        <div className="home_content">
            <HomeTop></HomeTop>
            <Btns></Btns>
            <HomeTips></HomeTips>
            <hr className='home_hr'></hr>
            <Chater></Chater>
            <HomeBelong></HomeBelong>
        </div>
    )
}

export default HomeContent
