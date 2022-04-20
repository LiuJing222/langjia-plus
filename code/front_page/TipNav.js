import LivingIconsml from './images/tipsImg/sofaIcon.png'
import KitchenIconsml from './images/tipsImg/kitchenIcon.png'
import WashIconsml from './images/tipsImg/washIcon.png'
import BedIconsml from './images/tipsImg/bedIcon.png'
import StudyIconsml from './images/tipsImg/studyIcon.png'
import BalconyIconsml from './images/tipsImg/balconyIcon.png'

import LivingIcon from './images/tipsImg/tips_icons_living.png'
import KitchenIcon from './images/tipsImg/tips_icons_kitchen.png'
import WashIcon from './images/tipsImg/tips_icons_washroom.png'
import BedIcon from './images/tipsImg/tips_icons_bedroom.png'
import StudyIcon from './images/tipsImg/tips_icons_studyroom.png'
import BalconyIcon from './images/tipsImg/tips_icons_balcony.png'


import { NavLink } from 'react-router-dom'

const TipNav = () => {
    return (
        <div className='tip_nav'>
            <span><strong>相关推荐</strong></span>
            <NavLink to="livingtip" activeClassName="tip_active"><div className='tip_item'><img className='tip_nav_icon' src={LivingIcon}></img><span>客厅装修9条小技巧，快来戳一戳</span><img src={LivingIconsml} className="stamp" /></div></NavLink>
            <NavLink to="kitchentip" activeClassName="tip_active"><div className='tip_item'><img  className='tip_nav_icon' src={KitchenIcon}></img><span>实用的餐厅装修技巧，快来围观</span><img src={KitchenIconsml} className="stamp" /></div></NavLink>
            <NavLink to="washroomtip" activeClassName="tip_active"><div className='tip_item'><img  className='tip_nav_icon' src={WashIcon}></img><span>干干净净的洗手间谁能不爱？</span><img src={WashIconsml} className="stamp" /></div></NavLink>
            <NavLink to="bedroomtip" activeClassName="tip_active"><div className='tip_item'><img  className='tip_nav_icon' src={BedIcon}></img><span>温馨的卧室让人心情舒畅，快戳看小妙招</span><img src={BedIconsml} className="stamp" /></div></NavLink>
            <NavLink to="studyroomtip" activeClassName="tip_active"><div className='tip_item'><img  className='tip_nav_icon' src={StudyIcon}></img><span>沉淀思想的书房更要好好装修</span><img src={StudyIconsml} className="stamp" /></div></NavLink>
            <NavLink to="balconytip" activeClassName="tip_active"><div className='tip_item'><img  className='tip_nav_icon' src={BalconyIcon}></img><span>充满花花的阳台真的很可爱！</span><img src={BalconyIconsml} className="stamp" /></div></NavLink>
            {/* <div>我也要推荐</div> */}
        </div>
    )

}
export default TipNav