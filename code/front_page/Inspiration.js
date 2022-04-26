import React ,{useEffect,useState}from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Inspiration.css'
import HomeHeader from './HomeHeader'
import Child from './InsContent'

import bg2 from './images/insbg3.jpg'
import topline from './images/topline.png'
import downline from './images/downline.png'
import vins from './images/ins.mp4'

import ReactPlayer from 'react-player'

const Inspiration = () => {
    const [state,setState] = useState([]);
    const email = localStorage.getItem('email');
    useEffect(()=>{      
        fetch('https://api.qasdwer.xyz:2019/getinspiredatas/'+email)
            .then(res => res.json())
            .then(res => {        
                console.log(res)
                setState(res)

        })
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {        
                console.log(res)
        })
    },[])

  return (
    <div className='ins_box'>
        {/* 导航栏 */}
        <HomeHeader></HomeHeader>
        {/* 背景图 */}
        <div className='ins_bg'>
            <img src={bg2} className="ins_bg_img" />
            <div className='ins_bg_box'>
                <div className='ins_bg_txt'>思维的碰撞激起灵感的火花</div>
                <img src={topline} className='ins_bg_line1' />
                <img src={downline} className='ins_bg_line2' />
            </div>
        </div>
        {/* 内容 */}
        <div className='ins_content'>
            {
                state.map(item=>{
                    return(
                        // 需在a标签添加rel="opener"，否则子页面的window.opener为null
                        <Link to={{pathname:'/InsCon',search:JSON.stringify(state[item.inspire_id-1])}} target='_blank' rel="opener">
                            <div className='ins_content_item'>
                                <img src={JSON.parse(item.message)[0].imgpath} className='ins_content_img' />
                                <div className='ins_content_txt_box'>
                                    <div className='ins_content_txt1'>《{item.title}》</div>
                                    <div className='ins_content_txt2'>设计师：{item.designer}</div>
                                    <div className='ins_content_txt3'>{item.detail}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            
        </div>
        {/* 敬请期待 */}
        <div className='ins_more'>    
            <ReactPlayer
                className="ins_more_mp4"
                url={vins}
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                //   controls
                width='230px'
                height='230px'
            />
            <div className='ins_more_txt'>更多灵感 敬请期待！</div>
        </div>
    </div>
  )
}

export default Inspiration