import React,{useEffect,useState} from 'react'
import HomeHeader from './HomeHeader'
import './Rec.css'
import praise from './images/rec_praise.png'
import how from './images/high_txt.png'
import more from './images/high_more.png'

const Rec = () => {
    const [recs,setRecs] = useState([]);
    // const recs = [];
    const [sortRec,setSortRec] = useState([]);
    var i = 0;
    useEffect(()=>{
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {        
                console.log(res);
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
        
    },[])
    console.log(recs)
    
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
            {/* 文字  */}
            <div className='high_txt'>
                <img src={how} alt="how" className='high_txt_img' />
                <div className='high_txt_box'>
                    <div className='high_txt_item'>为您推荐优秀设计</div>
                    <div className='high_txt_item' id='high_txt_item2'>让设计更懂生活</div>
                </div>
                
                <div></div>
                
            </div>
            {/* 所有 */}
            <div className='high_content'>
                {
                    recs.map(item=>{
                        return <div className='high_content_item'>
                            <img src={item.imgpath} alt="con" className='high_content_item_img'/>
                            <div className='high_content_item_box'>
                                <div className='high_content_item_txt1'>{item.design_name}</div>
                                <div className='high_content_item_txt'>设计师：{item.user_id}</div>
                                <div className='high_content_item_txt2'>
                                    <img src={praise} alt="zan" className='high_content_item_praise' />
                                    <span>获赞：{item.praise_quantity}</span>
                                    
                                </div>
                                <div className='high_content_item_txt3'>发布于{item.create_time}</div>
                                
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