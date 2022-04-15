import React from 'react'

import HomeBg from './images/homeBg.jpg'
import SqurIcon from './images/3DSqur.png'
import RateIcon from './images/home_rate_icon.png'
import HomeIcon from './images/home_home_icon.png'
import DesignIcon from './images/home_design_icon.png'
import DoIcon from './images/doitIcon.png'
import InsptIcon from './images/spirationIcon.png'
import RmdIcon from './images/rmdIcon.png'
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


const HomeTop = () => {
    return (
        <div className="home_top">
            <img src={HomeBg} className="home_top_bg"></img>
            <p className="fp">设计你的房间</p>
            <p className="sp">实现你的设计梦</p>
            <div className="home_characters">
                <div className="home_character"><img src={SqurIcon} className="home_icon"></img><span className="home_top_text">3D</span></div>
                <div className="home_character"><img src={RateIcon} className="home_icon"></img><span className="home_top_text">高效</span></div>
                <div className="home_character"><img src={HomeIcon} className="home_icon"></img><span className="home_top_text">家装</span></div>
                <div className="home_character"><img src={DesignIcon} className="home_icon"></img><span className="home_top_text">设计</span></div>
            </div>
            <button class="home_start">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                快速开始</button>
        </div>
    )
}
const Btns = () => {
    return (
        <div className="home_btns">
            <button><img src={DoIcon}></img><span>免费体验</span></button>
            <button><img src={InsptIcon}></img><span>寻找灵感</span></button>
            <button><img src={RmdIcon}></img><span>逛逛推荐</span></button>
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
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={LivingRoom}></img>
                        <div className="home_tip_con">
                            <span>房间的门面就是客厅，客厅如何设计？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="home_tip">
                    <span className="home_tip_title">餐厅</span>
                    <br></br>
                    <span className="home_tip_text">餐厅自然也是干净又卫生，如何不留卫生死角？</span>
                    <br></br>
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={Kitchen}></img>
                        <div className="home_tip_con">
                            <span>餐厅自然也是干净又卫生，如何不留卫生死角？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="home_tip">
                    <span className="home_tip_title">洗手间</span>
                    <br></br>
                    <span className="home_tip_text">洗手间与淋浴间的卫生最体现房子主人的卫生，如何给客人留下好印象呢？</span>
                    <br></br>
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={WashRoom}></img>
                        <div className="home_tip_con">
                            <span>洗手间与淋浴间的卫生最体现房子主人的卫生，如何给客人留下好印象呢？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="home_tip">
                    <span className="home_tip_title">卧室</span>
                    <br></br>
                    <span className="home_tip_text">卧室又要干净又要舒服，到底要怎样设计？</span>
                    <br></br>
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={BedRoom}></img>
                        <div className="home_tip_con">
                            <span>卧室又要干净又要舒服，到底要怎样设计？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="home_tip">
                    <span className="home_tip_title">书房</span>
                    <br></br>
                    <span className="home_tip_text">书房是家中最安静的地方，如何布局才能显得不局促？</span>
                    <br></br>
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={StudyRoom}></img>
                        <div className="home_tip_con">
                            <span>书房是家中最安静的地方，如何布局才能显得不局促？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="home_tip">
                    <span className="home_tip_title">阳台</span>
                    <br></br>
                    <span className="home_tip_text">阳台是种些花花草草，还是干干净净的？</span>
                    <br></br>
                    <a href="">看看大家怎么说→</a>
                    <div className="home_tip_hover">
                        <img src={Balcony}></img>
                        <div className="home_tip_con">
                            <span>阳台是种些花花草草，还是干干净净的？</span>
                            <a href="">看看大家怎么说→</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
const Chater = ()=>{
    return(
        <div className='home_chaters'>
            <div class="home_chater">
                <img src={TDBubble}></img>
                <span className="home_chater_title">3D</span>
                <br></br>
                <span className="home_chater_text">3D 技术的使用直观全面地展现房屋设计，增强您的体验感和沉浸感</span>
            </div>
            <div class="home_chater">
                <img src={FreeBubble}></img>
                <span className="home_chater_title">Free</span>
                <br></br>
                <span className="home_chater_text">海量户型模板及家具模型任您选择，随心搭配，主宰自己的家</span>
            </div>
            <div class="home_chater">
                <img src={RferBubble}></img>
                <span className="home_chater_title">Reference</span>
                <br></br>
                <span className="home_chater_text">没有灵感？没有经验？多种风格的灵感及优秀作品供您参考</span>
            </div>
            <div class="home_chater">
                <img src={StartBubble}></img>
                <span className="home_chater_title">Start</span>
                <br></br>
                <span className="home_chater_text">家装从这里开始</span>
            </div>
        </div>
    )
}
const Belong = ()=>{
    return(
        <div className='home_belong'>
            <div className='home_belong_con'>
                <p className='home_belong_title'>借鉴网站</p>
                <p>酷家乐</p>
                <p>npm官网</p>
                <p>花瓣网</p>
            </div>
            <div className='home_belong_con'>
                <p className='home_belong_title'>关于</p>
                <p>加入我们</p>
            </div>
            <div className='home_belong_con'>
                <p className='home_belong_title'>联系我们</p>
                <p>联系方式：2505469033@qq.com</p>
                <p>周一至周日：9:00-17:00</p>
                <p>侵权投诉</p>
                <p>营业执照</p>
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
            <Belong></Belong>



        </div>
    )
}

export default HomeContent
