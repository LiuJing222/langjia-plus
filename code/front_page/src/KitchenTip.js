import React from 'react'
import './Tip.css'
import KitchenTip0 from './images/tipsImg/kitchenTipImg0.jpeg'
import KitchenTip1 from './images/tipsImg/kitchenTipImg1.jpeg'
import KitchenTip2 from './images/tipsImg/kitchenTipImg2.jpeg'
import KitchenTip3 from './images/tipsImg/kitchenTipImg3.jpeg'
import KitchenTip4 from './images/tipsImg/kitchenTipImg4.jpeg'
import KitchenTip5 from './images/tipsImg/kitchenTipImg5.jpeg'
import KitchenTip6 from './images/tipsImg/kitchenTipImg6.jpeg'
import KitchenTip7 from './images/tipsImg/kitchenTipImg7.jpeg'
import KitchenTip8 from './images/tipsImg/kitchenTipImg8.jpeg'

import TipNav from './TipNav'

const KitchenTip = () => {
    return (
        <div className='home_tip_page'>
            <div className='tip_con'>
                <h2>厨房餐厅的装修也是家庭装修中特殊的部分，合理布局，正确选材也是关键</h2>
                <br />
                <span>家庭装修有两个比较特殊的部位：第一个部位就是厨房；第二个部位就是卫生间。而其中厨房的使用率又非常的高。像我们家用的厨房是都不是很大，但是所需要设计安装的东西又有很多。所以一定要做好各个位置细节的处理，否则的话，用起来就会非常的憋手。在这篇文章中，家居杂坛就来给大家介绍4个非常实用的装修技巧，避免大家再去踩坑，而且会让大家用起来越用越舒心。</span>
                <h4>技巧（一）：厨房装修要先测量厨房电器</h4>
                <span>厨房装修，很多朋友就盲目去装修了，完以后再去购买厨房各种各样的厨房电器。这时就会发现很多电器装不了了。所以在这里首先给大家提的第一个技巧就是厨房装修时电器选择时间要对，这里最终得到的是我们需要电器的尺寸。</span>
                <img src={KitchenTip0} />
                <span><strong>原因分析：</strong>①、厨房需要安装很多电器，大都是与我们橱柜配套的。如果安装的厨房电器没有准确的尺寸，则是无法设计橱柜的图纸的，更不用说去安装了。而且我们没有办法安装厨房的水电。②、厨房装修完了，很难改变我安装位置。例如很多电器没有办法安装，或者是安装以后没有电源，没有预留插座。③、后期选用的厨房电器与我们所预留的尺寸有误差，导致很多缝隙的出现。没有办法做好收边。④、厨房水电施工的时候，没有办法准确的预留水电的点位。</span>
                <span><strong>举例说明：</strong>①、厨房冰箱是多大尺寸的，是双开门还是单开门的，高度是多少，与我们的橱柜是息息相关的。②、厨房的微波炉或者电烤箱是如何安装的，在橱柜里预留多大尺寸，在哪里预留电源。③、是否需要安装前置过滤器又或者安装净水器，电源预留在哪里，安装位置预留又在哪里。④、选择的集成灶还是传统的分体式的油烟机和灶具等等一系列的尺寸问题啊，都要提前考虑。</span>
                <img src={KitchenTip1}></img>
                <br />
                <h4>技巧（二）：厨房电路布置要到位</h4>
                <span>对于厨房电路，我们除了布置好用电的点位以外，大家还要重点关注的一点就是选好厨房电路的导线。对于现在的商品房所预留的厨房的主线，基本上是2.5平方的。虽然2.5平方对于普通家庭都是够用的，但是对于一些后期需要增加很多充电器的，其实是不用的。因此在布置厨房电路的时候，个人给大家推荐以下的建议。</span>
                <span><strong>选择建议：</strong>①、厨房回路的主电源线建议大家使用4平方的铜芯导线。而对于各个分支回路的电线，可以选择2.5平方的铜芯导线，也就是说我们的布置厨房电路的时候，从配电箱布置三根4平方的电线到我们厨房的最后一个插座内。然后在各个分线盒内向外接2.5平方的铜线。②、对于厨房的照明，一定要与厨房的插座回路分开。也就是说我们的照明回路不是与其它回路是一个回路，厨房的插座是单独一个回路，这样是避免电路出现故障，方便维修和使用。③、还有一点非常重要，就是厨房如果有电冰箱，要单独把它设置成一个回路。选择2.5平方的铜芯导线就可以了，上口单独的开关进行控制。</span>
                <img src={KitchenTip2} />
                <span><strong>原因分析：</strong>①、因为厨房使用的电器比较多，虽然一开始2.5平方的导线可能是完全够用的，可是我们没有考虑后期可能会增加的厨房电器。例如厨房中增加了微波炉，增加了电烤箱，又或者增加其它的一些大功率电器，这时2.5平方的电线就不够用了。所以厨房主线做成4平方的很合理，而且做成4平方的铜芯主线也增加不了几百元。②、因为如果照明和插座放在一起，出现故障影响范围比较大。而且还有重要的一点，就是后期检修的话，是非常困难的。而如果厨房照明和插座分开，后期检修电路就方便多了。③、对于厨房的电冰箱单独设置一个回路，就是考虑我们出门时断电的。像很多家庭出门，就是把家庭的电断掉了。但是厨房这个电冰箱是不能断电的，所以单独设置一个回路。</span>
                <span><strong>布置建议：</strong>对于厨房的电路布置，大家也是需要了解的，因为我们需要预留很多的插座。个人给出的预留建议如下。厨房台面上，一般靠近水槽预留两个插座。靠近门边预留两个插座。在水槽的下面预留两个插座。在橱柜台面的位置预留对应的三四个插座。然后还要预留好油烟机和电冰箱，电冰柜的插座。对于这些插座，我们提前可以简单的画出来，最后就进行布置。</span>
                <img src={KitchenTip3} />
                <br />
                <h4>技巧（三）：厨房吊顶尽量选择铝扣板吊顶</h4>
                <span>为什么单独给大家提厨房的吊顶问题呢？因为现在出现了一种新型的吊顶，就是轻钢龙骨石膏板吊顶，而且这种吊顶出现在了厨房。而对于这种吊顶，其实是不建议大家在厨房使用的。另外就是对于pvc板材的吊顶，也不建议大家使用在厨房。因为我们厨房除了要求美观以外，还要考虑厨房环境特点。因此建议大家选择铝扣板吊顶。如果条件允许的话，可以选择集成吊顶。</span>
                <span><strong>选择建议：</strong>对于厨房的吊顶，个人给大家推荐的首选就是铝扣板吊顶。因为它耐油污性能非常强，而且具有可拆卸性。如果大家觉得铝扣板吊顶不好看，可以选择大板的铝扣板吊顶。当然了，如果我们条件允许的话，选择大板集成吊顶效果会更好。不仅将好看，而且更适合于厨房油污潮湿的环境。</span>
                <img src={KitchenTip4} />
                <span><strong>原因分析：</strong>①、因为厨房吊顶如果使用石膏板吊顶，会受到厨房的潮湿的空气，还有就是厨房油烟的影响，出现发霉的情况。轻则石膏板的表面脱落，重则变形坍塌。②、还有另外一个点非常重要，就是石膏板吊顶如果有油烟沾附上，却是很难清洁掉的。③、我们对于厨房还要考虑吊顶上面的操作。因为吊顶上面有油烟机的管道。而对石膏板吊顶。如果忘记留检修口，后期需要拆吊顶，非常不方便。</span>
                <span><strong>选择建议：</strong>对于厨房的吊顶，个人给大家推荐的首选就是铝扣板吊顶。因为它耐油污性能非常强，而且具有可拆卸性。如果大家觉得铝扣板吊顶不好看，可以选择大板的铝扣板吊顶。当然了，如果我们条件允许的话，选择大板集成吊顶效果会更好。不仅将好看，而且更适合于厨房油污潮湿的环境。</span>
                <img src={KitchenTip5}></img>
                <br />
                <h4>技巧（四）：橱柜材质要选择正确</h4>
                <span>在最后再提示一点，就是厨房选择橱柜，一定要掌握技巧，并不是所有的材质的橱柜都是适合用于厨房的。而且橱柜在厨房中占的比例非常的高。一套橱柜可能都上万元，甚至好几万元。所以选择合适的橱柜是尤为关键的。</span>
                <span>①、橱柜的尺寸大家一定要控制好。像我们家庭的橱柜有台面是我们最常使用的一个部位。而对于台面的高度，个人建议大家就是按照身高的1/2，再加上十公分。例如身高1.7米的家庭主妇，那么橱柜台面的高度就是90公分到95公分左右，这样按照身高的设计，更加的人性化。</span>
                <img src={KitchenTip6} />
                <span>②、橱柜台面材质的选择。对于厨柜台面一定要选择好了。个人建议大家选择石英石台面，更耐磨，更耐油污。其次就可以选择不锈钢的台面，耐油性能很好，只是耐磨性的不太好。另外还是注意台面的细节部位，也就是做挡水条，例如后面尽量做挡水条。这样就避免出现发霉的情况。</span>
                <span>③、对于橱柜的材质，个人给大家推荐的首选的建议，其实就是我们的常见的颗粒板的橱柜。只是表面一定要做好处理的。因为颗粒板的材质，它的耐潮湿的性能还是很高的。其次大家可以考虑一下铝合金材质的橱柜。铝合金材质橱柜除了怕磕碰以外，其它的优势都是很明显的。</span>
                <img src={KitchenTip7}></img>
                <br />
                <h4>结束语</h4>
                <span>对于厨房的装修，大家一定要特别上心。我们首先要做的就是简单的厨房布置。也就是说我们厨房的打算放置哪些物品或者是厨房电器，之后确认我们所需要购买的厨房电器，这里需要确认的就是其尺寸，最后来设计我们的厨房。在装修的过程中，也要特别注意一些细节。总而言之，就是厨房虽然是很小的空间，但是它的使用功能要求非常的高。所以尽量把一些细节提前考虑到，这样会用着更加的舒适。</span>
                <img src={KitchenTip8}></img>
                <p>——来自百度百科</p>
            </div>
            <div className='living_nav'><TipNav></TipNav></div>
        </div>
    )
}
export default KitchenTip