import React from 'react'

import './Tip.css'
import StudyroomTip1 from './images/tipsImg/studyroomTipImg1.jpg'
import StudyroomTip2 from './images/tipsImg/studyroomTipImg2.jpg'

import TipNav from './TipNav'

const StudyRoomTip = () => {
    return (
        <div className='home_tip_page'>
            <div className='tip_con'>
                <h2>沉淀思想的书房更要好好装修</h2>
                <br />
                <h4>一、安静的阅读环境：安静的材料</h4>
                <span>安静对于书房来讲是十分必要的，因为人在嘈杂的环境中读书、工作效率要比安静的环境中低得多。所以书房装修的时候从材料选购到装修施工都要贯彻这一原则。</span>
                <span>具体来说，让书房密不透“音”，可以从吊顶、墙面、地面、门、窗五大部分的装修下手。</span>
                <h4>二、充足的光源：自然光+人工照明</h4>
                <span>书房应该尽量占据朝向好的房间。窗户改造的时候，可以将窗户朝向开在一年光线进入*的方向。此外，可以把书房写字台安排在窗前，一般朝南的房间，光线会比较强烈。</span>
                <img src={StudyroomTip1} />
                <span>书房内的写字台或电脑台，在台面上方应装电源线、电脑线、*线、电视线终端接口;从安全角度考虑，应在写字台或电脑下方装电源插口1-2个，以备电脑配套设备电源用;照明灯光若为多头灯应增加分控器，开关可安装在书房门内侧。</span>
                <h4>三、良好的通风：空气的流通</h4>
                <span>书房装修必须考虑到通风条件。这不仅是因为健康的需要，也因为电脑等设备工作后需要通风散热;此外，空气流通还有利于调节书房的湿度，有利于保护书籍。</span>
                <span>所以设计和装修书房时，不能选择无法进行空气对流的空间为书房。</span>
                <h4>四、舒适至上： 符合人体健康设计</h4>
                <span>书房家具是书房非常重要的一个组成部分，其中书橱、书桌、书椅等是书房不可缺少的家具。</span>
                <span>在家具选购安装上，除了重视书房家具的造型、质量和色彩外，必须考虑到家具要适应人们的活动范围，符合人体健康美学的基本要求。</span>
                <img src={StudyroomTip2} />
                <span><strong>写字台高度：</strong></span>
                <span>按照我国正常人体生理测算，写字台高度应为750-800mm，考虑到腿在桌子下面的活动区域，要求桌下净高不小于580mm。</span>
                <span><strong>座椅高度：</strong></span>
                <span>座椅应与写字台配套，高低适中，柔软舒适，有条件的，*能购买转椅，座椅一般高度宜为380-450mm，以方便人的活动需求。</span>
                <span><strong>书柜尺寸：</strong></span>
                <span>书柜首先要保证有较大的贮藏书籍的空间，书柜间的深度宜以30 厘米为好，深度过大既浪费材料和空间，又给取书带来诸多不便。书柜的搁架和分隔可搞成任意调节型，根据书本的大小，按需要加以调整。</span>
                <p>——来自百度百科</p>
            </div>
            <div className='living_nav'><TipNav></TipNav></div>
        </div>
    )
}
export default StudyRoomTip