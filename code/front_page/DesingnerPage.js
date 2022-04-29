import React ,{useEffect,useState}from 'react'
import './DesignerPage.css'
import email from './images/designer_email.png'
import none from './images/designer_none.png'
import tag from './images/designer_tag.png'
import followed from './images/designer_followed.png'

const DesingnerPage = (props) => {
    const user_email = localStorage.getItem('email');
    const h = window.innerHeight;
    const result = props.location.search;
    const que = result.slice(4, result.length-3)
    console.log(que)
    console.log(user_email)

    const [designer,setDesigner] = useState([]);
    const [work,setWork] = useState([])

    useEffect(()=>{
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {        
                // console.log(res)
                setDesigner(res)
        })
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {        
                // console.log(res)
                setWork(res)
        })
        
    },[])
    const follow = () =>{
        fetch('https://api.qasdwer.xyz:2019/cancelfollowing/'+ user_email+'/'+ que)
            .then(res => res.text())
            .then(text => {        
                console.log(text)
        })
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {        
                // console.log(res)
                setDesigner(res)
        })
        // document.location.reload();
    }
  return (
    <div className='designer_box' style={{height:h}}>
        <div className='designer_box_inner' style={{height:h}}>
        {
            designer.map(item=>{
                if(item.user_id == que){  
                    var time = new Date(parseInt(item.user_create_time)).toLocaleString().replace(/:\d{1,2}$/,' '); 
                    var t = time.slice(0,time.length-6)
                    console.log(item.design_number)
                    return(
                        <div className='designer_content'>                                           
                            {/*内容*/}
                            <div className='designer_detail' style={{height:h}}>
                                {/* 头像图片*/}
                                <img 
                                className='designer_headimg'
                                src={`https://api.qasdwer.xyz:2019/headPortrait/${item.user_head_portrait}`} alt="designer" /> 
                                {/* 用户名 */}
                                <div className='designer_detail_name'>
                                    <div className='designer_detail_txt'>{item.user_name}</div>
                                    <div className='designer_detail_time'>创建于{t}</div>
                                </div>
                                {/* 粉丝 */}
                                <div className='designer_detail_followed'>
                                    <img src={followed} alt="followed" className='designer_detail_followed_img'/>
                                    <div className='designer_detail_followed_txt'>粉丝：
                                    {item.followed == ""?0:JSON.parse(item.followed).length}
                                    </div>
                                </div>
                                {/* 自我介绍 */}
                                <div className='designer_detail_intro'>
                                    <img src={tag} alt="tag" className='designer_detail_intro_img' />
                                    <div className='designer_detail_intro_txt'>{item.user_introduction}</div>
                                </div>
                                {/* 邮箱 */}
                                <div className='designer_detail_email'>
                                    <img src={email} alt="email" className='designer_detail_emailimg' />
                                    <div className='designer_detail_email_txt'>邮箱：{item.user_id}</div>
                                </div>
                                {/* 关注 */}
                                {   
                                    item.user_id == user_email?
                                    <div></div>
                                    :     
                                    item.followed.includes(user_email)?
                                    <div className='designer_detail_follow' onClick={()=>follow()}>取消关注</div>
                                    :
                                    <div className='designer_detail_follow' onClick={()=>follow()}>关注</div>
                                    
                                }
                                
                            </div>
                            {/* 发布设计 */}
                            <div className='designer_detail_design'>
                                    <div className='designer_detail_design_title'>发布设计：</div>
                                    <div className='designer_detail_design_num'>{item.design_number}</div>
                                    {
                                        item.design_number == 0 ?
                                        <div>
                                            <img src={none} className='designer_detail_none' />
                                            <div className='designer_detail_design_tip'>暂时没有发布设计哦~</div>
                                        </div>
                                        
                                        :
                                        <div className='designer_works'>
                                            {
                                                work.map(item=>{
                                                    if(item.user_id == que){
                                                        return <div className='designer_work'>
                                                            <img src={item.imgpath} alt="img" className='designer_work_img' />
                                                            <div className='designer_work_txt1'>{item.design_name}</div>
                                                            <div className='designer_work_txt2'>{item.create_time}</div>
                                                        </div>
                                                    }
                                                })
                                            }
                                        </div>
                                    }
                                    
                                </div>
                            
                        </div>
                    )
                }
            })
        }
        </div>
       
    </div>
  )
}

export default DesingnerPage