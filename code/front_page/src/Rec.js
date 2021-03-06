import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import HomeHeader from './HomeHeader'
import './Rec.css'
import praise from './images/rec_praise.png'
import unpraise from './images/rec_unpraise.png'
import more from './images/high_more.png'
import line from './images/rec_line2.png'

const Rec = () => {
    const [recs, setRecs] = useState([]);
    const three = [
        'https://qhrenderpicoss.kujiale.com/r/2019/03/16/L3D123S8ENDIGJUDVQUI5NZUEYN3P3XS888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        'https://qhrenderpicoss.kujiale.com/r/2021/08/25/L3D336S62ENDPQ5ODQ5SGHGZYLUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        'https://qhrenderpicoss.kujiale.com/r/2021/01/25/L3D206S21ENDPUI2ONFSGHIEWLUF3P3W6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
    ];
    
    const [designer, setDesigner] = useState([]);
    const history = useHistory();
    var i = -1;
    const email = localStorage.getItem('email')
    useEffect(() => {

        fetch('https://api.qasdwer.xyz:2019/getuserdesign/' + email)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    for (var j = 0; j < i; j++) {
                        if (res[i].praise_quantity > res[j].praise_quantity) {
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

    }, [])
    // console.log(1)
    // console.log(recs)
    // console.log(12)
    const intomydesign = (item) => {
        const furn = JSON.parse(item.design_furniture);
        var arr = [];
        for (var i = 0; i < furn.length; i++) {
            var obj = {
                furniture_id: furn[i].furniture,
                position: furn[i].point,
                rotate: furn[i].rotate,
                size: furn[i].size,
                objname: furn[i].objname,
                mtlname: furn[i].mtlname,
                imgname: furn[i].imgname,
                type: furn[i].type,
            };
            arr.push(obj);
        }
        localStorage.setItem('furniture', JSON.stringify(arr));
        localStorage.setItem('points', item.design_point);
        localStorage.setItem('dis3D', '{"display":"flex"}');
        localStorage.setItem('dis2D', '{"display":"none"}');
        localStorage.setItem('disStart', '{"display":"none"}');
        localStorage.setItem('intro', true);
        history.push('/create');
    }

    const addPraise = (designid, userid) => {
        console.log('????????????');
        fetch('https://api.qasdwer.xyz:2019/addfavordesign/' + designid + '/' + userid, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log('??????');
                console.log(res)
                for (var i = 0; i < res.length; i++) {
                    for (var j = 0; j < i; j++) {
                        if (res[i].praise_quantity > res[j].praise_quantity) {
                            var temp = res[i];
                            res[i] = res[j];
                            res[j] = temp;
                        }
                    }
                }
                setRecs(res)

            })



    }

    return (
        <div className='realRec_all'>
            <HomeHeader></HomeHeader>
            <div className='realRec_box'>
                {/* ????????? */}
                <div className='realRec_three'>
                    {
                        !recs[0] ?
                            <div>
                                <img src={three[0]} className='realRec_three_item' id={'realRec_three_item' + 0} />
                                <img src={three[1]} className='realRec_three_item' id={'realRec_three_item' + 1} />
                                <img src={three[2]} className='realRec_three_item' id={'realRec_three_item' + 2} />
                            </div>

                            :

                            recs.map((item, index) => {
                                // console.log(item)


                                if (item.is_recom == 1) {
                                    i++;
                                }
                                if (item.is_recom == 1 && i < 3) {

                                    return <div className='realRec_three_item' id={'realRec_three_item' + i}>
                                        <div className={'realRec_three_img_box' + i}>
                                            <img src={item.imgpath} alt="rec" className={i == 0 ? 'realRec_three_img0' : 'realRec_three_img'} onClick={() => intomydesign(item)} />
                                        </div>

                                        <div id={'realRec_three_praise' + i} className='realRec_three_praise'>
                                            <img src={praise} alt="zan" className='realRec_three_praise_img' />
                                            <div className='realRec_three_num'>{item.praise_quantity}</div>
                                        </div>

                                        <div className='realRec_three_name'>{item.design_name}</div>
                                    </div>
                                }


                            })


                    }


                </div>

                <div className='high_txt_item'>??????????????????</div>
                <img src={line} alt="line" style={{ width: '100%', marginTop: -20 }} />
                {/* ?????? */}
                <div className='high_content'>
                    {
                        recs.map(item => {
                            if (item.is_recom == 1) {
                                return <div className='high_content_item'>
                                    <div className='high_content_item_imgbox'>
                                        <img src={item.imgpath} alt="con" className='high_content_item_img' onClick={() => intomydesign(item)} />
                                    </div>

                                    <div className='high_content_item_box'>
                                        <div className='high_content_item_txt1'>{item.design_name}</div>
                                        {
                                            designer.map(inner => {
                                                if (item.user_id == inner.user_id) {
                                                    return <div className='high_content_designer'>
                                                        <img
                                                            className='high_content_item_headimg'
                                                            src={`https://api.qasdwer.xyz:2019/headPortrait/${inner.user_head_portrait}`} alt="designer" />
                                                        <div className='high_content_item_txt'>????????????{inner.user_name}</div>
                                                    </div>
                                                }
                                            })
                                        }

                                        <div className='high_content_item_txt2'>

                                            <img src={item.is_favor ? unpraise : praise} alt="zan" className='high_content_item_praise' onClick={() => addPraise(item.design_id, email)} />
                                            <span>{item.praise_quantity}</span>
                                        </div>
                                        {/* <div className='high_content_item_txt3'>?????????{item.create_time}</div> */}

                                    </div>
                                </div>
                            }
                        })
                    }
                </div>

            </div>
            {/* ?????? */}
            <div className='high_more'>
                <img src={more} alt="more" className='high_more_img' />
                <div className='high_more_txt'>??????????????????????????????</div>
            </div>
        </div>
    )
}

export default Rec