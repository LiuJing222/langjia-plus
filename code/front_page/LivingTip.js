import React from 'react'

import './Tip.css'
import LivingTip1 from './images/tipsImg/livingTipImg1.jpeg'
import LivingTip2 from './images/tipsImg/livingTipImg2.jpeg'
import LivingTip3 from './images/tipsImg/livingTipImg3.jpeg'
import LivingTip4 from './images/tipsImg/livingTipImg4.jpeg'
import LivingTip5 from './images/tipsImg/livingTipImg5.jpeg'
import LivingTip6 from './images/tipsImg/livingTipImg6.jpeg'
import LivingTip7 from './images/tipsImg/livingTipImg7.jpeg'
import LivingTip8 from './images/tipsImg/livingTipImg8.jpeg'
import LivingTip9 from './images/tipsImg/livingTipImg9.jpeg'
import LivingTip10 from './images/tipsImg/livingTipImg10.jpeg'

import TipNav from './TipNav'

const LivingTip = () => {
  return (
    <div className='home_tip_page'>
      <div className='tip_con'>
        <h2>客厅装修9条小技巧，解决你的客厅装修难题</h2>
        <br />
        <span>客厅装饰，是一个家的门脸儿，一个家的想象，因此在家装的过程中，也会变得愈发重要一点儿。
          客厅装饰不单单要自己看的舒服，同样的，家中来宾客，亲戚朋友也需要感到舒服放松。在客厅装饰这项大工程，小细节处理也很重要。客厅装饰9点常见问题，需要大伙特别注意，如果当初设计的阶段没搞好，后面家装可就得花糊涂钱了。</span>
        <img src={LivingTip1} />
        <br />
        <h4>1. 电视墙设计常见问题</h4>
        <span>客厅装饰电视墙也是客厅设计的一个重要构成部分，可是，电视墙的设计，不建议花大钱，要以简洁大气为核心，与此同时，色调尽量不要太太过鲜亮绚丽，防止看电视会导致眼疲劳。此外，一定要给电视机留足位置，假如地儿过于小，后面要换大电视就麻烦了。</span>
        <img src={LivingTip2} />
        <br />
        <h4>2. 吊顶装修注意事项</h4>
        <span>如今许多家庭的吊顶并没做过多的设计，除过那种相对奢华的欧式风格、古典风格等。假如家中楼层相对比较高的情况下，可以在周围做下吊顶，如此显得室内的有更强的空间立体感；假如楼层高度没有太高，最好是就别做吊顶了，要不然，会使人感到很压抑。</span>
        <img src={LivingTip3} />
        <br />
        <h4>3. 客厅装修灯安装常见问题</h4>
        <span>客厅的灯，没必要安装过多，倘若灯过多的话，一方面是浪费电，另一方面，免不了导致刺眼的状况，假如光线相对繁杂，还可能会使人产生晕眩。现在有部分人，向往时尚华丽，想要用许多灯光效果来体现这种前卫，我觉得还是省省吧。</span>
        <img src={LivingTip4} />
        <br />
        <h4>4. 灯饰样式不必太复杂</h4>
        <span>灯饰简单一点还是比较好的，如果是造型复杂的灯饰，这样子后面清理的时候也是非常复杂的事，如今许多家庭客厅装饰采用吸顶灯或其他简洁的装饰，也是挺美观的。</span>
        <img src={LivingTip5} />
        <br />
        <h4>5. 电视柜最好是带个抽屉</h4>
        <span>我们在家装的过程中都会充分考虑到收纳，因此，客厅里的电视柜，最好是还是带上收纳功能的设计，这样子即使如今用不到，以后也会用到。此外，如今许多茶几也是带抽屉的，我们在挑选的过程中可以依据自身的需要而定，也不必为了能做收纳弄得满是抽屉了。</span>
        <img src={LivingTip6} />
        <br />
        <h4>6. 客厅最好是有个地面插座</h4>
        <span>假如家中来宾客，需要泡茶怎么办？没地面插座还得拉很长的线，都比不上直接在地面上做一个地插，如此也就不用那么的麻烦了。</span>
        <img src={LivingTip7} />
        <h4>7. 客厅沙发挑选常见问题</h4>
        <span>客厅沙发挑选还是选有靠背的，如此看电视等休息的时候就不会那么的累，会相对舒服一点儿，这类沙发靠背与座面的夹角很重要，角度过大或过小都将导致使用者的腹部肌肉产生疲劳。同样的，沙发座面的宽度也不宜过大，通常按标准要求在540毫米之内，这样使用者的小腿可随时调整坐姿，休息得更舒服。</span>
        <img src={LivingTip8} />
        <h4>8. 绿植装饰</h4>
        <span>房子装好可以在客厅摆放一些绿色植物，这样子能点缀整个空间起到美化的作用。一般来讲，植物宜摆放在室内的的四个角落，不单单使室内的环境有平衡之感，而且植物本身的活力生气可以得到最大发挥。另外，靠近大窗户的地方常有不好处理的空间，光线又好，将植物摆放于此，既有效弥补了空间上的不足，同时植物在阳光的照射下使室内充满春色。</span>
        <img src={LivingTip9} />
        <h4>9. 客厅地垫</h4>
        <span>客厅最好别买地垫，地垫铺上去当时可能会觉得好看，可是时间久了容易藏脏东西，清洗起来也不方便，这钱还是省了吧。</span>
        <img src={LivingTip10} />
        <p>——来自百度百科</p>
      </div>
      <div className='living_nav'><TipNav></TipNav></div>
    </div>
  )
}

export default LivingTip