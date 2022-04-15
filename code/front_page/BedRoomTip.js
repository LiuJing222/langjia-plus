import React from 'react'

import './Tip.css'
import BedroomTip1 from './images/tipsImg/bedroomTipImg1.jpeg'
import BedroomTip2 from './images/tipsImg/bedroomTipImg2.jpeg'
import BedroomTip3 from './images/tipsImg/bedroomTipImg3.jpeg'
import BedroomTip4 from './images/tipsImg/bedroomTipImg4.jpeg'
import BedroomTip5 from './images/tipsImg/bedroomTipImg5.jpeg'
import BedroomTip6 from './images/tipsImg/bedroomTipImg6.jpeg'
import BedroomTip7 from './images/tipsImg/bedroomTipImg7.jpeg'
import BedroomTip8 from './images/tipsImg/bedroomTipImg8.jpeg'

import TipNav from './TipNav'

const BedRoomTip = () => {
    return (
        <div className='home_tip_page'>
            <div className='tip_con'>
                <h2>温馨的卧室不仅能提高人们睡眠质量，也能让人们得到心灵上的放松</h2>
                <br />
                <span>俗话说：睡眠质量很重要。所以卧室装饰设计的好坏决定了这三分之一的质量。</span>
                <img src={BedroomTip1} />
                <span>怎样装修布置温暖实用的卧室？接下来小蜜分享卧室的装修技巧。装修效果绝对让邻居追着你问，怎么样让小面积空间变大。</span>
                <img src={BedroomTip2} />
                <h4>◆◆1.确定需求◆◆</h4>
                <span>卧室的装饰设计首先要考虑到各个家庭对舒适性和隐私的要求。可以根据居住者的年龄、个性和兴趣来设计。</span>
                <img src={BedroomTip3} />
                <h4>◆◆2.区域划分◆◆</h4>
                <span>现将卧室的空间进行定义，根据需求可以分为休息区、活动区和衣服储藏区，根据分好的区域进行相对应的装修设计。</span>
                <img src={BedroomTip4} />
                <h4>◆◆3.家具布置◆◆</h4>
                <span>卧室的家具布置以个人需求为中心，在实用的前提下进行适当的装饰布置，家具的布置尽量沿着墙壁摆放，把活动空间集中在卧室的中心，这样的空间布局更显空间大。</span>
                <img src={BedroomTip5} />
                <h4>◆◆4.照明应用◆◆</h4>
                <span>卧室照明一般分为基础照明和气氛照明。基础照明一般是灯带或主灯设计，气氛照明一般设计壁灯、筒灯、落地灯、台灯。为了不让光线直接照射到眼睛上，应该选择少晃眼的乳白色半透明型照明器具。</span>
                <img src={BedroomTip6} />
                <h4>◆◆5.色彩选择◆◆</h4>
                <span>卧室为了保证睡眠，一般推荐设计统一、协调、沉稳的色调。在布置的时候床单、窗帘、枕头套最好用同一种颜色。</span>
                <img src={BedroomTip7} />
                <h4>◆◆6.装饰材料◆◆</h4>
                <span>卧室的地板选择用地板和地毯，可以给人营造温暖舒适的感觉。</span>
                <span>卧室的墙面选用墙纸和木质装饰更加美观大方，颜色的花纹也可以根据居住者年龄和喜好来选择。</span>
                <img src={BedroomTip8} />
                <span>卧室作为人们休息的场所，装修布置一定不能忽视，为了创造舒适的睡眠空间，掌握好这6个装修的诀窍。</span>    
                <p>——来自百度百科</p>       
                </div>
            <div className='living_nav'><TipNav></TipNav></div>
        </div>
    )
}
export default BedRoomTip