import React,{ useEffect } from 'react'
import './InsContent.css'
import HomeHeader from './HomeHeader'
import { Link,NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import designer from './images/designer.png'
import top from './images/top.png'

const InsContent = (props) => {
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
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
    const toArr = [
        '//user-platform-oss.kujiale.com/design/video/perm/MJJCGGYKTFASIAABAAAAACA8.mp4',//马卡龙
        '//user-platform-oss.kujiale.com/design/video/perm/30231a7f5082ad34-1642748922125-1.mp4',//侘寂
        '//user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',//日式
        '//user-platform-oss.kujiale.com/design/video/perm/410d133f25a540b4-1637060574343-1.mp4',//摩登
        '//user-platform-oss.kujiale.com/design/video/perm/aee11f1f1fefcaf3-1635337583446-1.mp4',//原木
        '//user-platform-oss.kujiale.com/design/video/perm/c35d3ca1aefe8dc2-1631786206699-1.mp4',//loft
        '//user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',//浪漫
        '//user-platform-oss.kujiale.com/design/video/perm/dbc8c026d255b00e-1646115214264-1.mp4',//尘埃
        '//user-platform-oss.kujiale.com/design/video/perm/1e6b9e6686926d75-1641278738312-1.mp4',//禅意
    ]
    const house = [
        {
            title:'马卡龙',
            type:'3室2厅1卫1厨',
            area:'127m²',
            tag:'北欧、混搭、轻奢',
            detail:'用色彩治愈心灵。客厅设计格调清新自然，别致，粉绿色的云朵沙发显得宁静，红色配饰显得温情。唯美的客厅配上梦幻帘的观影效果，美得不可方物。',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHEU5AKTEM2KAABAAAAACA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHEUBAKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '书房',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHESKAKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHD2MIKTEM2KAABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHEVVIKTFASIAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/07/MJHEVPAKTEM2KAABAAAAAAI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
           
            
        },
        {
            title:'侘寂',
            type:'3室0厅1卫0厨',
            area:'117m²',
            tag:'现代简约、混搭、工业风',
            detail:'侘寂风别墅，给客户营造禅意与宁静的居住环境。',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO437XADKEI/c/img/MHTIF75MDHUZ6AABAAAAADA8panoguide.png?x-oss-process=image/resize,m_pad,w_1265,h_712/format,webp',
            message:[
                '客厅',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/17/L3D206S21ENDPT5554NSGEQZ4LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '餐厅',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/18/L3D206S21ENDPT47TW5SGFPIALUF3P3X4888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '书房',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/18/L3D222S21ENDPT4ZSEVSGE5H2LUF3P3WI888.0_3600x600.jpg_f?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/17/L3D123S21ENDPT557OVSGFUOULUF3P3W6888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/18/L3D206S21ENDPT47U3NSGFPIALUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '次卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/01/18/MHTGRGFMDHHGWAABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            ],
        },
        {
            title:'日式小院',
            type:'未定义',
            area:'140m²',
            tag:'日式、混搭、家族',
            detail:'对于业主来说，家是相对于自我，休闲的空间，是可以围坐在一起谈天说地，可以和朋友假期小聚，聊聊生活，探讨理想的空间。 通过沟通和了解，整体设计效果并没有复杂的造型与绚丽的色彩，整体空间以白色和原木为主基调，搭配曼妙的软装和舒适的灯光，营造出静谧雅致的居住空间。',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO43EPBRPWD/c/img/MHORFNVMDHVSWAABAAAAACQ8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESPI5SGEFD2LUF3P3WI888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3W4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3W6888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3W2888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '门厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '中庭',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp'
            ],
        },
        {
            title:'摩登时代',
            type:'2室2厅1卫0厨',
            area:'82m²',
            tag:'现代简约、混搭',
            detail:'过道复古红的拱门造型高级感满满，更能使电视背景墙得到延伸。客餐厅的拼色墙面配上橙色沙发和黑色的高柜，这些撞色营造了复古怀旧的氛围。',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO47OVJ9DSB/c/img/MGG4JRFMDE556AABAAAAADQ8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0kd6wZ0bcAAQAAAAc.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0kd6wZ0bcAAQAAAAM.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '厨房',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0l6KwZ0bcAAQAAAAI.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',          
                '卫生间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0lp6wZ0bcAAQAAAAk.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0k66wZ0bcAAQAAAAk.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '次卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/11/YY0k66wZ0bcAAQAAAAc.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            ],
        },
        {
            title:'原木温馨',
            type:'3室1厅1卫1厨',
            area:'183m²',
            tag:'日式、混搭、家族',
            detail:'全屋的原木色，营造轻盈的氛围感，让家更有温度。',
            img:'https://qhrenderpic-cos.kujiale.com/r/2021/10/13/L3D398S21ENDPR4Q265SGFBQ4LUF3P3W4888_2560x1440.jpg?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/10/13/MFTPWMNMDEE46AABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2021/10/16/L3D337S62ENDPR3F76FSGH54KLUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '阳台',
                'https://qhrenderpic-cos.kujiale.com/r/2021/10/13/L3D396S21ENDPR4Q2HFSGFBQ4LUF3P3X6888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderpic-cos.kujiale.com/r/2021/10/13/L3D396S21ENDPR4Q2PVSGEAJQLUF3P3XK888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2021/10/16/L3D336S62ENDPR3F76FSGH23YLUF3P3X4888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2021/10/16/L3D336S62ENDPR3F76FSGGZ22LUF3P3XO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
        {
            title:'北欧Loft',
            type:'1室2厅1卫1厨',
            area:'48m²',
            tag:'现代简约、混搭、北欧',
            detail:'用自然的材料，手工的肌理，朴素的原生木料，彻底摒弃一切装饰与华丽，追求高度真实且单纯自然的美。整体以白色及原木作为基调，凸显整个空间的氛围，空间大面积的留白就像一张动态的画布。',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO494CE358D/c/img/MFBQXFNMDGA42AABAAAAAEA8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/07/30/YQQTqawZjWAAAQAAAAw.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/07/31/YQQnGqwZjWAAAQAAAAU.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '厨房',
                'https://qhrenderpic-cos.kujiale.com/r/2021/07/31/L3D221S21ENDPQN5GSFSGETUKLUF3P3XO888.0_15000x2500.jpg_f?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/07/30/YQPoJKwZjWAAAQAAAAQ.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/08/01/YQV8y6wZjWAAAQAAABA.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '次卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/08/01/YQV8y6wZjWAAAQAAAAU.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                // '老人房',
                // 'https://qhrenderstorage-oss.kujiale.com/beautify/2021/07/30/YQPotqwZjWAAAQAAAAQ.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            ],
        },
        {
            title:'浪漫温馨',
            type:'3室2厅2卫1厨',
            area:'177m²',
            tag:'现代简约、混搭',
            detail:'用法式的优雅和浪漫，安放生活的诗意和疲惫。空间的设计感，并不在于装饰的堆砌，有时候恰到好处的留白，反而让设计更加的纯粹，更加的高级，又没线条和个性的色彩碰撞，成就了空间的品质和高度',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO494CE358D/c/img/MFBQXFNMDGA42AABAAAAAEA8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDTYUWFY24LUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD2AUWFY24LUF3P3WO888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDGAUWFY24LUF3P3UI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDEIUWFLLQLUF3P3XY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDZAUWFY24LUF3P3WQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD5IUWFY24LUF3P3XM888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDIQUWFLEKLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            ],
        },
        {
            title:'尘埃',
            type:'3室2厅2卫1厨',
            area:'170m²',
            tag:'现代简约、家装',
            detail:'低调内敛与现代简约的结合，没有明丽的色彩，没有夸张的线条，简约的舒适，如尘埃',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO494CE358D/c/img/MFBQXFNMDGA42AABAAAAAEA8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/02/MIPWCAIKTEJLKAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/27/MGRERV5MDE446AABAAAAACQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/04/L3D336S62ENDP47RASIUWFORGLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/04/L3D336S62ENDP47RASIUWFFC2LUF3P3WI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/28/MGRN55VMDF7RGAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/04/L3D336S62ENDP47RATYUWFORGLUF3P3X6888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/04/L3D336S62ENDP47RATYUWFORGLUF3P3XG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            ],
        },
        {
            title:'禅意',
            type:'3室2厅2卫1厨',
            area:'99m²',
            tag:'日式、新中式、家装',
            detail:'焚香，点茶，挂画，插花，四般闲事，不宜累家。宋式美学恰如其分的将日常生活提升至艺术境界。',
            img:'https://qhtbdoss.kujiale.com/fpimgnew/prod/imgs/3FO494CE358D/c/img/MFBQXFNMDGA42AABAAAAAEA8panoguide.png?x-oss-process=image/resize,m_pad,w_1440,h_810/format,webp',
            message:[
                '客厅',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/28/L3D206S21ENDPTKNVPVSGEQESLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/28/L3D206S21ENDPTKNVIFSGG2F4LUF3P3WU888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/31/L3D123S21ENDPTIQD4VSGEQF2LUF3P3WU888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/31/L3D123S21ENDPTIPI4FSGEMJMLUF3P3XS888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '主卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/28/L3D206S21ENDPTKNW5NSGH5HALUF3P3XW888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/28/L3D123S21ENDPTKNXHVSGEQESLUF3P3X6888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/28/L3D206S21ENDPTKNX75SGEQESLUF3P3XO888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
        
    ]
    console.log(props.location.state.id)
    
    console.log(123)
    const goTo = (i) =>{
        console.log(i)
        document.body.scrollTop = document.documentElement.scrollTop = (i/2+1)*800;
    }
    const goTop = () =>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  return (
    <div className='inscon_box'>
        {/* 导航栏 */}
        {/* <div className='inscon_nav'>
            <img src={logo}  className='inscon_nav_logo' />
            <div className='inscon_nav_logoTxt'>朗家</div>
            <ul className='inscon_nav_ul'>
                <NavLink to='/home'><li className='inscon_nav_li'>首页</li></NavLink>
                <NavLink to='/'><li className='inscon_nav_li'>推荐</li></NavLink>
                <NavLink to='/ins'><li className='inscon_nav_li' id="inscon_nav_ins">灵感</li></NavLink>
            </ul>
        </div> */}
        <HomeHeader></HomeHeader>
        {/* 标题 */}
        <div className='inscon_title'>
            {house[props.location.state.id].title}
        </div>
        {/* 返回 */}
        <div className='inscon_return'>
            <Link to='/home'><span>首页</span></Link>
            <span>◁◁</span>
            <Link to='/Ins'><span>灵感</span></Link>
        </div>
        {/* 介绍 */}
        <div className='inscon_item'>
            <ReactPlayer
                className="inscon_player"
                url={toArr[props.location.state.id]}
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                //   controls
                width='68%'
                height='100%'
            />
            <div className='inscon_txt'>
                <img src={designer} className='inscon_designer' />
                <div className='inscon_txt_name'>设计师：张伟</div>
                <div className='inscon_txt_line'></div>
                <div className='inscon_txt_box'>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>户型：</span>
                        <span className='inscon_txt_content'>{house[props.location.state.id].type}</span>
                    </div>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>面积：</span>
                        <span className='inscon_txt_content'>{house[props.location.state.id].area}</span>
                    </div>
                    <div className='inscon_txt_item'>
                        <span className='inscon_txt_title'>标签：</span>
                        <span className='inscon_txt_content'>{house[props.location.state.id].tag}</span>
                    </div>
                    <div className='inscon_txt_detail'>
                        {house[props.location.state.id].detail}
                    </div>
                </div>
            </div>
        </div>
        {/* 概览 */}
        <div className='inscon_view'>
            <div className='inscon_view_txt'>概览</div>
           
            {
                house[props.location.state.id].message.map((item,index)=>{
                    if(index % 2 == 0){
                        return <div className='inscon_view_name'>{item}</div>
                    }else{
                        return <img src={item} className='inscon_view_img'></img>
                    }
                    
                })
            }
            {
                 
                <ul className='inscon_view_txtnav'>{
                    house[props.location.state.id].message.map((item,index)=>{
                        if(index%2 == 0){
                            return(    
                                <li>
                                   <div className='inscon_view_nav_txt' onClick={()=>goTo(index)}>{item}</div>
                                   {/* <div className='inscon_view_nav_round'></div> */}
                                </li>      
                            )
                        }
                    })
                }
                </ul>
                
            }
            {               
                 <ul className='inscon_view_roundnav'>{
                     house[props.location.state.id].message.map((item,index)=>{
                         if(index%2 == 0){
                             return(    
                                 <li>
                                    {/* <div className='inscon_view_nav_txt'>{item}</div> */}
                                    <div className='inscon_view_nav_round'></div>
                                 </li>      
                             )
                         }
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