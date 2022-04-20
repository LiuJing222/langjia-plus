import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Help.css'
import HomeHeader from './HomeHeader'
import light from './images/light.png'
import houseBig1 from './images/house_big1.png'
import houseBig2 from './images/house_big2.png'
import house1 from './images/house1.png'
import house2 from './images/house2.png'




const Help = () => {
  const [val,setVal] = useState('');
  const chVal = (e) =>{
    setVal(e.target.value)
  }
  
  return (
    <div className='help_box'>
        <HomeHeader></HomeHeader>
        {/* 搜索框 */}
        <div className='help_search_box'>
            <dir className='help_search_txt'>欢迎来到朗家帮助中心</dir>
            <div className='help_search_inputbox'>
                <input type="text" placeholder='请输入您遇到的问题' className='help_search_input' onChange={chVal} value={val} />
                <Link to={{pathname:'/search',state:{val:val}}}><div>Search</div></Link>                      
            </div>
        </div>
        {/* 使用指南 */}
        <div className='help_guide_box'>
          <div className='help_guide_title'>新手入门</div>
          <div className='help_guide_item'>          
            <img src={light} />
            <div>使用指南</div>
          </div>
          <div className='help_guide_item'>
            <img src={houseBig1} />
            <div>如何入驻灵感页</div>
          </div>
          <div className='help_guide_item'>
            <img src={houseBig2} />
            <div>如何上推荐</div>
          </div>
        </div>
        {/* 版本更新 */}
        <div className='help_about_box'>
          <div className='help_about_title'>版本更新</div>
            <div className='help_about_item'>          
              <img src={house1} />
              <div>朗家1.0</div>
            </div>
            <div className='help_about_item'>
              <img src={house2} />
            <div>朗家1.1</div>
          </div>
        </div>
    </div>
  )
}

export default Help