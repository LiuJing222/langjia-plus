import React,{ useEffect,useState } from 'react'
import './InsContent.css'
import HomeHeader from './HomeHeader'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import top from './images/top.png'
import pen from './images/pen.png'


const InsContent = (props) => {
    const email = localStorage.getItem('email');
    var result = props.location.search;
    var que = decodeURI(result).slice(1,decodeURI(result).length);
    const [data,setData] = useState(JSON.parse(que))
    var inspire_id = JSON.parse(que).inspire_id;

    const [user,setUser] = useState([])
   
    // console.log(data)
 
    useEffect(()=>{
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {        
                console.log(res)
                setUser(res)
        })
        
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])
    console.log(user[inspire_id])

    const handleScroll = () =>{
        let view1 = document.querySelector(".inscon_view_txtnav");
        let view2 = document.querySelector(".inscon_view_roundnav");
        let txt = document.getElementsByClassName("inscon_view_nav_txt");
        let round = document.getElementsByClassName('inscon_view_nav_round');
        let top = document.querySelector('.inscon_serve_item');
        let scrollY = window.scrollY;
        console.log(scrollY)
        if(scrollY >= 500){
            top.style.opacity=1;
            top.style.position='fixed';
            top.style.right='50px';
            top.style.top='500px';
            view1.style.opacity=1;
            view1.style.position='fixed';
            view1.style.top='240px';
            view1.style.left='4%';
            view2.style.opacity=1;
            view2.style.position='fixed';
            view2.style.top='240px';
            view2.style.left='8%';
            if(parseInt(scrollY/850)<=round.length-1){
                for(var i=0;i<round.length;i++){
                    round[i].style.backgroundColor='#ccc';
                    txt[i].style.color='#ccc';    
                }
                round[parseInt(scrollY/850)].style.backgroundColor='#448CEF';
                txt[parseInt(scrollY/850)].style.color='#448CEF'
            }else{
                return;
            }
            
            view1.style.transitionProperty='all';
            view1.style.transitionDuration = '0.5s';
            view1.style.transitionTimingFunction='ease';
            view2.style.transitionProperty='all';
            view2.style.transitionDuration = '0.5s';
            view2.style.transitionTimingFunction='ease';
        }else{
            // view.style.display='none';
            top.style.opacity=0;
            top.style.position='fixed';
            top.style.right='50px';
            top.style.top='300px';
            view1.style.opacity=0;
            view1.style.position='fixed';
            view1.style.top='300px';
            view1.style.left=0;
            view1.style.transitionProperty='all';
            view1.style.transitionDuration = '0.5s';
            view1.style.transitionTimingFunction='ease';
            view2.style.opacity=0;
            view2.style.position='fixed';
            view2.style.top='300px';
            view2.style.left=0;
            view2.style.transitionProperty='all';
            view2.style.transitionDuration = '0.5s';
            view2.style.transitionTimingFunction='ease';
        }
        
    }
    
    
    const goTo = (i) =>{
        console.log(i)
        document.body.scrollTop = document.documentElement.scrollTop = (i+1)*800;
    }
    const goTop = () =>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    const Collect = (id) => {
        fetch('https://api.qasdwer.xyz:2019/addcollection/' + id+'/'+email, {
            method: 'post',
        })
        .then(res => res.json())
        .then(res => {
           
            // console.log(res)
            // if(res.message){
            //     alert(res.message)
            // }else{
            //    setData(res[inspire_id-1]) 
            // }
            res.map(item=>{
                if(item.inspire_id == data.inspire_id){
                    setData(item)
                }
            })
        
        })
        console.log(window.opener)
        window.opener.location.href=window.opener.location.href; 
    }
    // console.log(ins[que])
  return (
    <div className='inscon_box'>
        {/* 导航栏 */}
        <HomeHeader></HomeHeader>
        {/* 标题 */}
        <div className='inscon_title'>
            {data.title}
        </div>
        {/* 上传时间 */}
        <div className='inscon_time'>更新于{data.create_time}</div>
        {/* 收藏 */}
        <div onClick={() => Collect(data.inspire_id)} className='inscon_collect_box'>
            {/* <div>收藏</div> */}
            {data.is_collect?          
            <div className='inscon_collect_txt'>取消收藏</div>
            :        
            <div className='inscon_uncollect_txt'>收藏</div>   
            }
        </div>
        {/* 介绍 */}
        <div className='inscon_item'>
            <ReactPlayer
                className="inscon_player"
                url={data.vedio}
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                // controls
                width='68%'
                height='100%'
            />
            <div className='inscon_txt'>
                {
                    user.map(item=>{
                        if(item.user_id == data.user_id){
                            return <img src={`https://api.qasdwer.xyz:2019/headPortrait/${item.user_head_portrait}`} className='inscon_designer' />
                        }
                    })
                }
                <div className='inscon_txt_name'>设计师：{data.user_id}</div>
                <div className='inscon_txt_line'></div>
                <div className='inscon_txt_box'>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>户型：</span>
                        <span className='inscon_txt_content'>{data.type}</span>
                    </div>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>面积：</span>
                        <span className='inscon_txt_content'>{data.area}</span>
                    </div>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>标签：</span>
                        <span className='inscon_txt_content'>{data.tag}</span>
                    </div>
                    <div className='inscon_txt_detail'>
                        <img src={pen} className='inscon_txt_detail_img' />
                        <div>{data.detail}</div>       
                    </div>
                </div>
            </div>
        </div>
        {/* 概览 */}
        <div className='inscon_view'>
            <div className='inscon_view_txt'>概览</div>
           
            {
                JSON.parse(data.message).map(item=>{       
                    return (
                        <div>
                            <div className='inscon_view_name'>{item.place}</div>
                            <img src={item.imgpath} className='inscon_view_img'></img>
                        </div>
                    )   
                    
                })
            }
            {
                 
                <ul className='inscon_view_txtnav'>{
                    JSON.parse(data.message).map((item,index)=>{                    
                        return(    
                            <li>
                               <div className='inscon_view_nav_txt' onClick={()=>goTo(index)}>{item.place}</div>
                               
                            </li>      
                        )             
                    })
                }
                </ul>
                
            }
            {               
                 <ul className='inscon_view_roundnav'>{
                    JSON.parse(data.message).map((item,index)=>{
                             return(    
                                 <li>                             
                                    <div className='inscon_view_nav_round'></div>
                                 </li>      
                             )
                     })
                 }
                 </ul>
                 
             }
        </div>
        {/* 去顶部 */}
        <div className='inscon_serve_item' onClick={()=>goTop()}>
            <img src={top} className='inscon_serve_img' />
            <div className='inscon_serve_txt'>TOP</div>
        </div>
        
    </div>
  )
}

export default InsContent