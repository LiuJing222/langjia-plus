import React from 'react'
import './Tip.css'

import BalconyTip1 from './images/tipsImg/balconyTipImg1.jpeg'
import BalconyTip2 from './images/tipsImg/balconyTipImg2.jpeg'
import BalconyTip3 from './images/tipsImg/balconyTipImg3.jpeg'
import BalconyTip4 from './images/tipsImg/balconyTipImg4.jpeg'
import BalconyTip5 from './images/tipsImg/balconyTipImg5.jpeg'
import BalconyTip6 from './images/tipsImg/balconyTipImg6.jpeg'

import TipNav from './TipNav'

const BalconyTip = () => {
    return (
        <div className='home_tip_page'>
            <div className='tip_con'>
                <h2>充满花花的阳台真的很可爱！</h2>
                <br />
                <span>阳台是连接客厅和外界的一个区域，阳台也是自然光的来源，阳光装修重中之重，阳台如何装修呢？以下装酷网整理出了关于阳台装修的要点以及阳台装修的技巧，还有阳台装修案例图，快来一起看看阳台怎么装修吧！</span>
                <img src={BalconyTip1} />
                <h4>一、阳台怎么装修</h4>
                <span>阳光装修必不可少，有客厅阳台一体的，有储物室阳台、办公室式阳台、花园式阳台、休闲式阳台等等，这些都需要注意一个问题，就是阳台装修的注重事项：</span>
                <span>①通常每平方米的承重不超过250公斤。不过不同空间大小的阳台承重稍微有点差异；一般阳台不建议使用大型家具以及大盆栽。</span>
                <span>②遮阳工作，夏天的时候有些地方最高温度可达到30多度，可以利用比较坚实的纺织品做成遮阳篷。遮阳篷不但具有装饰作用，而且还可遮挡风雨。</span>
                <img src={BalconyTip2} />
                <span>我们都知道阳台一般分成两种、一种是开放式的阳台、另一种是封闭式的阳台，那么这两种阳台各有什么好优点和缺点呢？</span>
                <span><strong>①开放式</strong></span>
                <span>优点：视野变开阔，采光和空气流通也变好；</span>
                <span>缺点：安全性很低，需要防水防潮耐老化，且防水、排水不能马虎；</span>
                <span>装修建议：设计成一个小型的花园，种一些有机蔬菜，自产自销安全又放心，不过不可以使用过大过重的盆栽。</span>
                <span>也可以一个小型休闲区，放上一些小型轻巧的桌椅，三两好友喝茶聊天的宝地。</span>
                <img src={BalconyTip3} />
                <span><strong>②封闭式</strong></span>
                <span>优点：一来可以遮风挡雨，二则能有效防止灰尘进入。</span>
                <span>缺点：装修时要注意它的抗风力，确保安装牢固。同时也要做好密封。</span>
                <span>装修建议：也可以做小花园，相较于开放式的小花园更加安全而已。</span>
                <span>封闭式的装修建议可太多了，其中休闲区以及储物区等这些是业主朋友们选择最多的。</span>
                <img src={BalconyTip4} />
                <img src={BalconyTip5} />
                <span>二、阳台装修要点技巧</span>
                <span><strong>①开放式</strong></span>
                <span>相较于封闭式面积稍大些，也可装修做用餐区和休闲区，放置绿植的话，植物不建议选择过大盆栽的，否则会占用空间，同时还会影响采光。家具也不建议选择过大的，考虑到阳台整体的承重力，考虑到日常的防水和排水的措施。</span>
                <span>装修建议：顶面安装一个遮雨棚、安装钢化玻璃对阳台进行封闭（阳光房）。</span>
                <img src={BalconyTip6} />
                <span><strong>②封闭式</strong></span>
                <span>窗扇下口最容易渗水的地方，一般是窗框下预留2厘米间隙，用专用密封剂或用水泥填死。有窗台的，要向外面做流水坡，避免雨水回流。</span>
                <p>——来自百度百科</p>
            </div>
            <div className='living_nav'><TipNav></TipNav></div>
        </div>
    )
}
export default BalconyTip