import React,{useEffect,useState} from 'react'
import HomeHeader from './HomeHeader'
import './Rec.css'
import praise from './images/rec_praise.png'
import unpraise from './images/rec_unpraise.png'
import more from './images/high_more.png'
import line from './images/rec_line2.png'

const Rec = () => {
    const [recs,setRecs] = useState([]);
    const [designer, setDesigner] = useState([]);
    const [favor,setFavor] = useState([]);
    useEffect(()=>{
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {        
                // console.log(res);
                for(var i=0;i<res.length;i++){
                    for(var j=0;j<i;j++){
                        if(res[i].is_recom && res[i].praise_quantity>res[j].praise_quantity){
                            var temp = res[i];
                            res[i] = res[j];
                            res[j] = temp;
                        }
                    }
                }
                setRecs(res)       
        })
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {
                setDesigner(res)
        })
        
    },[])
    // console.log(recs)

    const addPraise = (designid,userid)=>{
        fetch('https://api.qasdwer.xyz:2019/addfavordesign/'+ designid +'/' + userid,{
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setFavor(res);
            window.location.reload()
        })
        
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {        
                // console.log(res);
                for(var i=0;i<res.length;i++){
                    for(var j=0;j<i;j++){
                        if(res[i].is_recom && res[i].praise_quantity>res[j].praise_quantity){
                            var temp = res[i];
                            res[i] = res[j];
                            res[j] = temp;
                        }
                    }
                }
                setRecs(res)       
        })
        console.log(recs)
        
    }
    
  return (
    <div className='realRec_all'>
        <HomeHeader></HomeHeader>
        <div className='realRec_box'>
            {/* 前三名 */}
            <div className='realRec_three'>
                {
                    recs.map((item,index)=>{
                        if(index<3){
                            // className={index==0?'realRec_three_item0':'realRec_three_item'}
                            return <div className='realRec_three_item' id={'realRec_three_item'+index}>
                                <div className={'realRec_three_img_box'+index}>
                                    <img src={item.imgpath} alt="rec" className={index == 0 ?'realRec_three_img0':'realRec_three_img'}/>
                                </div>
                                
                                <div id={'realRec_three_praise'+index} className='realRec_three_praise'>
                                    <img src={praise} alt="zan" className='realRec_three_praise_img'/>
                                    <div className='realRec_three_num'>{item.praise_quantity}</div>
                                </div>
                                
                                <div className='realRec_three_name'>{item.design_name}</div>
                            </div>
                        }
                    })
                }

            </div>
            
            <div className='high_txt_item'>优秀设计推荐</div>
            <img src={line} alt="line" style={{width:'100%',marginTop:-20}} />
            {/* 所有 */}
            <div className='high_content'>
                {
                    recs.map(item=>{
                        
                        return <div className='high_content_item'>
                            <div className='high_content_item_imgbox'>
                                <img src={item.imgpath} alt="con" className='high_content_item_img'/>
                            </div>
                            
                            <div className='high_content_item_box'>
                                <div className='high_content_item_txt1'>{item.design_name}</div>
                                {
                                    designer.map(inner=>{
                                        if(item.user_id == inner.user_id){
                                            return <div className='high_content_designer'>
                                                <img 
                                                className='high_content_item_headimg'
                                                src={`https://api.qasdwer.xyz:2019/headPortrait/${inner.user_head_portrait}`} alt="designer" />
                                                <div className='high_content_item_txt'>设计师：{inner.user_name}</div>
                                            </div>
                                        }
                                    })
                                }
                                
                                <div className='high_content_item_txt2'>
                                    {/* {
                                        favor.map(fitem=>{
                                            
                                                if(fitem.is_favor == true){
                                                    return <div>
                                                        <img src={unpraise} alt="zan" className='high_content_item_praise' onClick={()=>addPraise(item.design_id,item.user_id)} />
                                                        <span>{item.praise_quantity}</span>   
                                                    </div>
                                                }else{
                                                    return <div>
                                                        <img src={praise} alt="zan" className='high_content_item_praise' onClick={()=>addPraise(item.design_id,item.user_id)} />
                                                        <span>{item.praise_quantity}</span> 
                                                    </div>

                                                    
                                                }
                                            
                                        })
                                    } */}
                                    <img src={praise} alt="zan" className='high_content_item_praise' onClick={()=>addPraise(item.design_id,item.user_id)} />
                                    <span>{item.praise_quantity}</span>    
                                </div>
                                {/* <div className='high_content_item_txt3'>发布于{item.create_time}</div> */}
                                
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
        {/* 更多 */}
        <div className='high_more'>
            <img src={more} alt="more" className='high_more_img' />
            <div className='high_more_txt'>更多精彩，敬请期待！</div>
        </div>
    </div>
  )
}

export default Rec