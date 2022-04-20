import React from 'react'
import HomeHeader from './HomeHeader'
import './Recommend.css'
import rec_banner from './images/rec_banner.mp4'
import ReactPlayer from 'react-player'
import good from './images/good.png'
import good2 from './images/good2.png'
import rainbow from './images/rainbow.png'
import rec_show from './images/rec_show.mp4'
import create from './images/create.jpg'
const rec = [
    {
        title:'《永恒》一123平米奶咖现代轻奢两房',
        type:'2室2厅1卫1厨',
        area:'123 m2',
        tag:'现代简约 、 后现代 、 轻奢 、 家装',
        detail:'',
        img:'',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3W6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '休闲区',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/10/L3D123S3ENDP5HG3LYUWF6SYLUF3P3XM888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG3LYUWF6SYLUF3P3WC888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D396S3ENDP5HG3LYUWF6SYLUF3P3WY888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG2IQUWF6SYLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3X4888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'现代简约低调奢华风',
        type:'5室2厅2卫1厨',
        area:'151 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36TIUWFOFGLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '书房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWEJU2LUF3P3WA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'简约风｜loft公寓',
        type:'0室1厅0卫0厨',
        area:'62 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGUSAKTFASIAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卧室',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLHRKAKTEM2KAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
        ],
    },
    {
        title:'三水丨常乐府丨现代轻奢',
        type:'3室2厅0卫0厨',
        area:'83 m2',
        tag:'现代简约 、 轻奢 、 家装',
        detail:'',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKZM2YKTFASIAABAAAAADQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJK2GGIKTFASIAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D37KQUWFOFCLUF3P3UK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '客卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D326S62ENDP5D37NAUWF6KCLUF3P3WS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'新中式风格80平米二层',
        type:'3室1厅1卫1厨',
        area:'79 m2',
        tag:'新中式 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/25/L3D397S21ENDP4RMI6IUWFFT6LUF3P3X4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EU2XIUWF6ROLUF3P3XA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧1',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/27/L3D123S21ENDP4QDSAYUWFFTALUF3P3XY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧2',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVBNIUWF6X4LUF3P3XC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'龙湖观澜-现代轻奢风格',
        type:'2室2厅0卫2厨',
        area:'113 m2',
        tag:'现代简约 、 港式 、 轻奢 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRMSYUWFGM6LUF3P3X6888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GROPIUWF6X4LUF3P3WC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTQUWFOFALUF3P3WG888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTAUWFOFCLUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '生活阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRNQIUWF6X4LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'融创轻法119平3室效果',
        type:'3室2厅2卫0厨',
        area:'109 m2',
        tag:'现代简约 、 简美 、 轻奢 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFCLUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3W4888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卧',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKPLVYKTEM2KAABAAAAAAI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWF6KCLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'简约风简约色彩',
        type:'3室2厅2卫1厨',
        area:'115 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKUAUWF6KCLUF3P3WO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFALUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '老人房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'蜗居装饰—宁夏同心县前红别墅',
        type:'3室2厅2卫1厨',
        area:'200 m2',
        tag:'现代简约 、 后现代 、 轻奢 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWVUQUWFDVILUF3P3XC888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D124S21ENDP5EBY2AUWFAE6LUF3P3WA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWOIUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '尔麦里房',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXGIUWFDV6LUF3P3XU888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWRQUWFDV6LUF3P3WY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWW3AUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客厅2',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXJIUWFDVILUF3P3XE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWX3YUWFDV4LUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
        ],
    },
    {
        title:'【予你】--现代美式--140平三房两厅一厨两卫',
        type:'3室2厅2卫1厨',
        area:'164 m2',
        tag:'现代简约 、 简美 、 家装',
        detail:'清雅的生活方式，演绎对生命的深层感悟。现代、时尚、经典瞬间铸成，彰显生活的惬意质感，弹奏一首和谐的前卫之歌。简单之中蕴含精致，洒脱、雕琢之处不失简约。',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D206S21ENDP5C72GIUWFQHSLUF3P3XY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNBOGAKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMM5JYKTEO2AAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA7DAKTEO2AAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA34YKTEO2AAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'轻奢样板间',
        type:'3室2厅3卫1厨',
        area:'108 m2',
        tag:' 现代简约 、 混搭 、 后现代 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '干湿区',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3KDNYKTEDZ6AABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VXVCIUWFLHKLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36VIUWFOFGLUF3P3XC888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VZP6IUWF2R2LUF3P3WW888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/20/L3D123S41ENDP4UWIOIUWFLHKLUF3P3XA888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'美式三居',
        type:'3室2厅2卫1厨',
        area:'134 m2',
        tag:'简欧 、 美式 、 家装',
        detail:'',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXFAUWFAE6LUF3P3WQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXGYUWFAE4LUF3P3WS888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '书房',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMHEQKTEO2AAABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFCLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D123S21ENDP5DUNUIUWFQBKLUF3P3W2888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWF6KCLUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D222S21ENDP5EA7FYUWFAE4LUF3P3WQ888.0_4200x700.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFGLUF3P3VI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'中交滨江国际',
        type:'1室2厅1卫0厨',
        area:'183 m2',
        tag:' 现代简约 、 混搭 、 轻奢 、 家装',
        detail:'',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/01/06/MHLNETFMDECLMAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpic-cos.kujiale.com/r/2021/12/24/L3D124S21ENDPTNL4QVSGH5HALUF3P3XS888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D124S21ENDPTN3YENSGGYLQLUF3P3XK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '女儿房',
            'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D187S21ENDPTN3ATNSGFD3MLUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '自定义',
            'https://qhrenderpic-cos.kujiale.com/r/2021/12/14/L3D124S21ENDPST24XVSGEFGKLUF3P3XA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'现代无主灯设计',
        type:'2室2厅1卫1厨',
        area:'143 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWFOFALUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERQEIUWF6X6LUF3P3X6888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ESPWQUWFHTKLUF3P3XU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWEJU2LUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERRJQUWF6X4LUF3P3XI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'极简黑白灰',
        type:'2室2厅2卫1厨',
        area:'110 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客餐厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEGFOIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHK6AUWFOFCLUF3P3XY888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/03/L3D396S41ENDP5LWUDIUWFAOWLUF3P3XW888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWFOFALUF3P3VA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWF6KCLUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'现代风格110平三居室',
        type:'3室2厅2卫1厨',
        area:'115 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFALUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFALUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3W4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSIUWFOFGLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSYUWFOFGLUF3P3WK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'香颂美地G238户型',
        type:'7室2厅3卫1厨',
        area:'260 m2',
        tag:'现代简约 、 家装',
        detail:'',
        img:'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D336S62ENDP5DGBTYUWF6KCLUF3P3UK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWF6KCLUF3P3XW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间1',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卫生间2',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFCLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卫生间3',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3UK888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '书房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFALUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3XU888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '老人房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '保姆房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '观景阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWF6KCLUF3P3XS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'雙城和美-163m²現代日式三居',
        type:'3室2厅2卫1厨',
        area:'164 m2',
        tag:'现代简约 、 日式 、 家装',
        detail:'利用传统日式和室木材,白色及米色颜色应用,以隐形门与牆面合一设计，让空间是可留宿的大起居室，以合一墙面装饰的型态应用广大的客餐厅空间。以大面积黑色古砖、木材与白配色创造强烈视觉印象，充满人文气息的沙发背景间断牆，让空间个性立显鲜明。主卧运用了榻榻米与自然木质为空间注入温润触感与蔺草馨香，其他卧室运用白色及浅色运用在清和淡丽的日式氛围中，跳脱传统质朴色彩.',
        img:'http:////user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EYJLQUWFHTKLUF3P3XE888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            '观景阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EFCCIUWF6X6LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQIUWFOFGLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EGJ5AUWF6ROLUF3P3W4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EWUFQUWF6X4LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D123S21ENDP5EW7UQUWF6X4LUF3P3WO888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQQUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '储物间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/04/L3D397S21ENDP5KSW3YUWFAOWLUF3P3XO888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
        ],
    },
    {
        title:'135平四房现代混搭风',
        type:'4室2厅3卫1厨',
        area:'169 m2',
        tag:'现代简约 、 混搭 、 轻奢 、 家装',
        detail:'',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7VSGEGF2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '书房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7NSGEGF2LUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF5TKLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF4A2LUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGE7K2LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳光房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'三亚650㎡新中式院落别墅',
        type:'未定义',
        area:'474 m2',
        tag:'新中式 、 家装',
        detail:'',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
        message:[
            '中庭',
            'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33R3NSGH2RULUF3P3WC888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '天井',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/25/L3D123S21ENDPSAF54FSGG5YOLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '天井2',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFDJ5SGG5YOLUF3P3XK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卫2',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JWPTIUWFLPYLUF3P3UK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '家庭厅',
            'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33RCNSGH2RULUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '楼梯间',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JYACIUWFLIOLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧2',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGI5SGFL2SLUF3P3W4888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卫2',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGBFSGHQCELUF3P3WS888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '沐浴区',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFCSVSGFL2SLUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/28/L3D222S21ENDPS622LFSGG5YOLUF3P3WE888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '客卧',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCET7NSGHIFYLUF3P3UI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '卫生间',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/27/L3D206S21ENDPS64DTVSGHIHOLUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '会客厅',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/29/L3D123S21ENDPS5R3K5SGG5YOLUF3P3WG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '园路',
            'https://qhrenderpicoss.kujiale.com/r/2021/11/30/L3D336S21ENDPS5YUXNSGFL2SLUF3P3XO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '庭院',
            'https://qhrenderpicoss.kujiale.com/r/2021/12/01/L3D326S21ENDPS4OBAFSGH2RULUF3P3WW888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '泳池',
            'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCFDYVSGE572LUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'日式混搭小院改造',
        type:'未定义',
        area:'140 m2',
        tag:'日式 、 北欧 、 混搭 、 家装',
        detail:'',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',
        message:[
            '客厅',
            'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESOGVSGH2Z6LUF3P3XY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '门厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '一楼公卫',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '一楼洗手间',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '一楼过道',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '中庭',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '姑姑房',
            'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERQZ5SGF5NQLUF3P3WW888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '洗衣房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X2888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '父母房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼休闲厅',
            'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERRHVSGH2BWLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '婴儿房',
            'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X6888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房',
            'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERTYVSGEQGELUF3P3XO888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'《九里》新古典奢华|三层别墅',
        type:'1室2厅2卫1厨',
        area:'92 m2',
        tag:' 欧式 、 混搭 、 轻奢 、 家装',
        detail:'新古典奢华风格别墅，大理石地面及金属材质的搭配，古典新作，保留复古气息，融合现代质感，整体别墅体现奢华的感觉。',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',
        message:[
            '客厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVYJ5MDGSQKAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVXNVMDHQ3EAABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '洗漱间',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAU5INMDHQ3EAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHE2BZNMDE5TEAABAAAAACI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼卧室A',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/16/MG5DMVVMDGVGAAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼卧室B',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEWYRVMCADFCAABAAAAADA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼卧室C',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEW7RNMCAERIAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼过道',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEZ4OFMDE5TEAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '三楼主卧',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/31/MHG56FVMDECLMAABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '三楼书房',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3SS6YKTEDZ6AABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '三楼主卫',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/26/MHEFITFMDHVH2AABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '三楼礼佛堂',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/21/MHA4IT5MDE5TEAABAAAAACQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '三楼衣帽间',
            'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/17/MG5X6WVMDE5TEAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'150平简约美式顶跃',
        type:'2室2厅2卫1厨',
        area:'133 m2',
        tag:' 现代简约 、 简美 、 家装',
        detail:'简约的小美式，尽显业主的文艺范！',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWF6KCLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWEJU2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '阳台',
            'https://qhrenderpic-cos.kujiale.com/r/2021/10/18/L3D206S21ENDPRZH3HNSGG6F2LUF3P3UI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房1',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWFOFGLUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童房2',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EZDVAUWFAE6LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWF6KCLUF3P3XS888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XYUWFOFCLUF3P3XG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼多功能区域',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5E4VNIUWF6X6LUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '露台',
            'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'图森·北京润泽御府',
        type:'1室1厅0卫0厨',
        area:'329 m2',
        tag:'轻奢 、 家装',
        detail:'低调奢华，静谧幽雅。轻奢风格追求以最简洁的设计手法来打造奢华气派，造型上的简洁是为了赋予材质上的奢华。意式轻奢，简约线条在讲述真正的永恒经典，脱离一切浮华和不实用，从生活的本质出发，以极简的设计演绎最本质的轻奢美学。',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',
        message:[
            '客厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D187S21ENDP4IOU6IUWFDVMLUF3P3X4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY5AUWFFIYLUF3P3XQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '玄关',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYUAUWFZWYLUF3P3W2888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '会客室',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYVAUWFAQALUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '楼梯间',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY6AUWFAQALUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '西厨',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYYIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼起居室',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCLIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCCQUWFZZSLUF3P3WC888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '二楼衣帽间',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCMIUWFZZSLUF3P3WS888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
    {
        title:'《浪漫温馨》+140平奶油色法式轻奢',
        type:'3室2厅2卫1厨',
        area:'177 m2',
        tag:'简美 、 家装',
        detail:'用法式的优雅和浪漫，安放生活的诗意和疲惫。空间的设计感，并不在于装饰的堆砌，有时候恰到好处的留白，反而让设计更加的纯粹，更加的高级，又没线条和个性的色彩碰撞，成就了空间的品质和高度',
        img:'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
        message:[
            '客餐厅',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDTYUWFY24LUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '厨房',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDGAUWFY24LUF3P3UI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
            '卫生间',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDEIUWFLLQLUF3P3XY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '主卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDZAUWFY24LUF3P3WQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '次卧',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD5IUWFY24LUF3P3XM888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            '儿童书房',
            'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDIQUWFLEKLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
        ],
    },
]
const rec_data = [
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG3LYUWF6SYLUF3P3W6888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '《永恒》一123平米奶咖现代轻奢两房',
        logo: 'https://user-platform-oss.kujiale.com/2020/03/19/S4IUUTGOS3SUIZ4XLQM6YLI8_1200x1930.jpg?x-oss-process=image/format,webp',
        writer_name: '张煜强',
        discribe: ' 现代简约  后现代  轻奢',
        detail:{
            title:'《永恒》一123平米奶咖现代轻奢两房',
            type:'2室2厅1卫1厨',
            area:'123 m2',
            tag:'现代简约 、 后现代 、 轻奢 、 家装',
            detail:'',
            img:'',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3W6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '休闲区',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/10/L3D123S3ENDP5HG3LYUWF6SYLUF3P3XM888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG3LYUWF6SYLUF3P3WC888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D396S3ENDP5HG3LYUWF6SYLUF3P3WY888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D123S3ENDP5HG2IQUWF6SYLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/09/L3D206S3ENDP5HG2IQUWF6SYLUF3P3X4888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代简约低调奢华风',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/07/28/VBRM2QLI4BQ7SZ4XLQM6YNY8.jpg?x-oss-process=image/format,webp',
        writer_name: '郭涛',
        discribe: ' 现代简约 轻奢',
        detail:{
            title:'现代简约低调奢华风',
            type:'5室2厅2卫1厨',
            area:'151 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36TIUWFOFGLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '书房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TAUWFOFALUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWEJU2LUF3P3WA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36TIUWFOFGLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '简约风｜loft公寓',
        logo: 'https://user-platform-oss.kujiale.com/siteassets/829e8047feef1b5d-1599355503666.png?x-oss-process=image/format,webp',
        writer_name: 'JPrice',
        discribe: ' 现代简约',
        detail:{
            title:'简约风｜loft公寓',
            type:'0室1厅0卫0厨',
            area:'62 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGPMIKTFASIAABAAAAAAY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLGUSAKTFASIAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卧室',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJLHRKAKTEM2KAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '三水丨常乐府丨现代轻奢',
        logo: 'https://qhstaticssl.kujiale.com/siteassets/663c029023c17dd7-1620997746887.png?x-oss-process=image/format,webp',
        writer_name: '七彩虹Next',
        discribe: ' 现代简约  轻奢',
        detail:{
            title:'三水丨常乐府丨现代轻奢',
            type:'3室2厅0卫0厨',
            area:'83 m2',
            tag:'现代简约 、 轻奢 、 家装',
            detail:'',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKYDBIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKZM2YKTFASIAABAAAAADQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/13/MJK2GGIKTFASIAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D37KQUWFOFCLUF3P3UK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '客卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D326S62ENDP5D37NAUWF6KCLUF3P3WS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '新中式风格80平米二层',
        logo: 'https://user-platform-oss.kujiale.com/uat/MJH22DYKTEM2KAABAAAAACI8.png?x-oss-process=image/format,webp',
        writer_name: '鸿庭设计',
        discribe: ' 新中式',
        detail:{
            title:'新中式风格80平米二层',
            type:'3室1厅1卫1厨',
            area:'79 m2',
            tag:'新中式 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVHOYUWFHTKLUF3P3WA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/25/L3D397S21ENDP4RMI6IUWFFT6LUF3P3X4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EU2XIUWF6ROLUF3P3XA888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧1',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/27/L3D123S21ENDP4QDSAYUWFFTALUF3P3XY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧2',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D397S21ENDP5EVBNIUWF6X4LUF3P3XC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '龙湖观澜-现代轻奢风格',
        logo: 'https://qhyxpicoss.kujiale.com/avatars/2017/04/18/origin7379701042819469591.jpg?x-oss-process=image/format,webp',
        writer_name: '王朝霞',
        discribe: ' 现代简约  轻奢  港式',
        detail:{
            title:'龙湖观澜-现代轻奢风格',
            type:'2室2厅0卫2厨',
            area:'113 m2',
            tag:'现代简约 、 港式 、 轻奢 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/02/27/L3D397S21ENDP4CHHOAUWFZWYLUF3P3XU888_3200x3200.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRMSYUWFGM6LUF3P3X6888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GROPIUWF6X4LUF3P3WC888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHKTAUWFOFCLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTQUWFOFALUF3P3WG888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHKTAUWFOFCLUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '生活阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D397S21ENDP5GRNQIUWF6X4LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },   
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '融创轻法119平3室效果',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2022/04/08/VMZ63GWOMD6XIZ4XLQM6YLA8?x-oss-process=image/format,webp',
        writer_name: '赖帅强',
        discribe: ' 现代简约  轻奢  简美',
        detail:{
            title:'融创轻法119平3室效果',
            type:'3室2厅2卫0厨',
            area:'109 m2',
            tag:'现代简约 、 简美 、 轻奢 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5F2XDYUWF6X4LUF3P3XQ888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWEJU2LUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFCLUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7IUWFOFCLUF3P3W4888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKPLVYKTEM2KAABAAAAAAI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWF6KCLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '简约风简约色彩',
        logo: 'https://user-platform-oss.kujiale.com/2022/03/28/VMRX2KWOMD3VQZ4XLQM6YPI8_1000x1363.jpg?x-oss-process=image/format,webp',
        writer_name: 'Jimcz',
        discribe: ' 现代简约',
        detail:{
            title:'简约风简约色彩',
            type:'3室2厅2卫1厨',
            area:'115 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D206S21ENDP5DNOWAUWFQBKLUF3P3WY888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3W2888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKUAUWF6KCLUF3P3WO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFALUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVYUWFOFCLUF3P3WY888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '老人房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHKVQUWFOFGLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '蜗居装饰—宁夏同心县前红别墅',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHXJMVFMDGZG4AABAAAAAAI8.png?x-oss-process=image/format,webp',
        writer_name: '轩奕设计工作室',
        discribe: ' 现代简约  后现代  轻奢',
        detail:{
            title:'蜗居装饰—宁夏同心县前红别墅',
            type:'3室2厅2卫1厨',
            area:'200 m2',
            tag:'现代简约 、 后现代 、 轻奢 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWV2YUWFDVOLUF3P3UK888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWVUQUWFDVILUF3P3XC888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D124S21ENDP5EBY2AUWFAE6LUF3P3WA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWOIUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '尔麦里房',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXGIUWFDV6LUF3P3XU888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWWRQUWFDV6LUF3P3WY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWW3AUWFDV4LUF3P3WK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客厅2',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWXJIUWFDVILUF3P3XE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D124S21ENDP4IWX3YUWFDV4LUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '【予你】--现代美式--140平三房两厅一厨两卫',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHKRPQNMDGAZEAABAAAAACQ8.png?x-oss-process=image/format,webp',
        writer_name: 'HUI视觉空间设计',
        discribe: ' 现代简约  简美',
        detail:{
            title:'【予你】--现代美式--140平三房两厅一厨两卫',
            type:'3室2厅2卫1厨',
            area:'164 m2',
            tag:'现代简约 、 简美 、 家装',
            detail:'清雅的生活方式，演绎对生命的深层感悟。现代、时尚、经典瞬间铸成，彰显生活的惬意质感，弹奏一首和谐的前卫之歌。简单之中蕴含精致，洒脱、雕琢之处不失简约。',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNAY3YKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D206S21ENDP5C72GIUWFQHSLUF3P3XY888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNBOGAKTEO2AAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMM5JYKTEO2AAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA7DAKTEO2AAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/16/MJNA34YKTEO2AAABAAAAABI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '轻奢样板间',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2022/03/20/VNK6SXGOMDT2EZ4XLQM6YNQ8?x-oss-process=image/format,webp',
        writer_name: 'HOU全案设计师',
        discribe: ' 现代简约  混搭  后现代',
        detail:{
            title:'轻奢样板间',
            type:'3室2厅3卫1厨',
            area:'108 m2',
            tag:' 现代简约 、 混搭 、 后现代 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D206S41ENDP4V4OVYUWFLBOLUF3P3UK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '干湿区',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3KDNYKTEDZ6AABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VXVCIUWFLHKLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D337S62ENDP5D36VIUWFOFGLUF3P3XC888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/18/L3D123S41ENDP4VZP6IUWF2R2LUF3P3WW888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/20/L3D123S41ENDP4UWIOIUWFLHKLUF3P3XA888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '美式三居',
        logo: 'https://user-platform-oss.kujiale.com/2022/03/22/VNNJROGOMDDQKZ4XLQM6YOA8_1116x1624.jpg?x-oss-process=image/format,webp',
        writer_name: '山山ss',
        discribe: ' 简欧  美式',
        detail:{
            title:'美式三居',
            type:'3室2厅2卫1厨',
            area:'134 m2',
            tag:'简欧 、 美式 、 家装',
            detail:'',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMEIIKTEZTGAABAAAAABQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXFAUWFAE6LUF3P3WQ888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D206S21ENDP5EAXGYUWFAE4LUF3P3WS888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '书房',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/15/MJMMHEQKTEO2AAABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFCLUF3P3XC888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D123S21ENDP5DUNUIUWFQBKLUF3P3W2888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWF6KCLUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D222S21ENDP5EA7FYUWFAE4LUF3P3WQ888.0_4200x700.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK6IUWFOFGLUF3P3VI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '中交滨江国际',
        logo: 'https://qhyxpicoss.kujiale.com/avatars/72.jpg?x-oss-process=image/format,webp',
        writer_name: '邓小群Oh',
        discribe: ' 现代简约  混搭  轻奢',
        detail:{
            title:'中交滨江国际',
            type:'1室2厅1卫0厨',
            area:'183 m2',
            tag:' 现代简约 、 混搭 、 轻奢 、 家装',
            detail:'',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJD2WFQKTFASIAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/01/06/MHLNETFMDECLMAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/24/L3D124S21ENDPTNL4QVSGH5HALUF3P3XS888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D124S21ENDPTN3YENSGGYLQLUF3P3XK888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '女儿房',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/23/L3D187S21ENDPTN3ATNSGFD3MLUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '自定义',
                'https://qhrenderpic-cos.kujiale.com/r/2021/12/14/L3D124S21ENDPST24XVSGEFGKLUF3P3XA888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代无主灯设计',
        logo: 'https://user-platform-oss.kujiale.com/siteassets/7008a536dc16a0e6-1603172921322.png?x-oss-process=image/format,webp',
        writer_name: '上海华锋国际设计工作室李锋',
        discribe: ' 现代简约',
        detail:{
            title:'现代无主灯设计',
            type:'2室2厅1卫1厨',
            area:'143 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/11/L3D206S21ENDP5F3GAAUWF6X4LUF3P3XK888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWFOFALUF3P3XK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERQEIUWF6X6LUF3P3X6888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ESPWQUWFHTKLUF3P3XU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D366IUWEJU2LUF3P3WQ888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S21ENDP5ERRJQUWF6X4LUF3P3XI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '极简黑白灰',
        logo: 'https://qhstaticssl.kujiale.com/siteassets/594d573b0e76ec81-1617614337930.png?x-oss-process=image/format,webp',
        writer_name: 'HT一空间创意',
        discribe: ' 现代简约',
        detail:{
            title:'极简黑白灰',
            type:'2室2厅2卫1厨',
            area:'110 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEHD7YKTEM2KAABAAAAAEA8.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/02/MJEGFOIKTFASIAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D326S62ENDP5BHK6AUWFOFCLUF3P3XY888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/03/L3D396S41ENDP5LWUDIUWFAOWLUF3P3XW888_2400x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWFOFALUF3P3VA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D336S62ENDP5BHK7YUWF6KCLUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代风格110平三居室',
        logo: 'https://user-platform-oss.kujiale.com/2022/04/12/VMYFWMWOMDGVSZ4XLQM6YMI8_603x462.jpg?x-oss-process=image/format,webp',
        writer_name: '巢品汇全案设计',
        discribe: ' 现代简约',
        detail:{
            title:'现代风格110平三居室',
            type:'3室2厅2卫1厨',
            area:'115 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D123S21ENDP5EAJRYUWF6X6LUF3P3W4888_3200x2400.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFALUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3WY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/19/L3D337S62ENDP5BHK7IUWFOFALUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSQUWFOFCLUF3P3W4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSIUWFOFGLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSYUWFOFGLUF3P3WK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '香颂美地G238户型',
        logo: 'https://user-platform-oss.kujiale.com/siteassets/62d965a9e77af44a-1603782132930.png?x-oss-process=image/format,webp',
        writer_name: '皓德设计',
        discribe: ' 现代简约',
        detail:{
            title:'香颂美地G238户型',
            type:'7室2厅3卫1厨',
            area:'260 m2',
            tag:'现代简约 、 家装',
            detail:'',
            img:'https://qhrenderpicoss.kujiale.com/r/2022/04/08/L3D206S21ENDP5H3BZYUWFGM6LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_1715,h_1010/format,webp',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D336S62ENDP5DGBTYUWF6KCLUF3P3UK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWF6KCLUF3P3XW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间1',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间2',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFCLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间3',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3UK888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WM888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '书房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWEJU2LUF3P3WA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFALUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWFOFALUF3P3XU888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '老人房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBSAUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '保姆房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBTYUWFOFGLUF3P3XG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '观景阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D326S62ENDP5DGBTYUWF6KCLUF3P3XS888_4000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',
        house_name: '雙城和美-163m²現代日式三居',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHGR44FMDECLMAABAAAAAAA8.png?x-oss-process=image/format,webp',
        writer_name: '廸偉',
        discribe: ' 现代简约  日式',
        detail:{
            title:'雙城和美-163m²現代日式三居',
            type:'3室2厅2卫1厨',
            area:'164 m2',
            tag:'现代简约 、 日式 、 家装',
            detail:'利用传统日式和室木材,白色及米色颜色应用,以隐形门与牆面合一设计，让空间是可留宿的大起居室，以合一墙面装饰的型态应用广大的客餐厅空间。以大面积黑色古砖、木材与白配色创造强烈视觉印象，充满人文气息的沙发背景间断牆，让空间个性立显鲜明。主卧运用了榻榻米与自然木质为空间注入温润触感与蔺草馨香，其他卧室运用白色及浅色运用在清和淡丽的日式氛围中，跳脱传统质朴色彩.',
            img:'http:////user-platform-oss.kujiale.com/design/video/perm/MJMZMKIKTEZTGAABAAAAACY8.mp4',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EYJLQUWFHTKLUF3P3XE888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '观景阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EFCCIUWF6X6LUF3P3WI888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQIUWFOFGLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/14/L3D397S21ENDP5EGJ5AUWF6ROLUF3P3W4888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EWUFQUWF6X4LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1265,h_712/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D123S21ENDP5EW7UQUWF6X4LUF3P3WO888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/16/L3D337S62ENDP5DGBQQUWFOFCLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '储物间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/04/L3D397S21ENDP5KSW3YUWFAOWLUF3P3XO888_3200x3200.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp'
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',
        house_name: '135平四房现代混搭风',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
        writer_name: '王磊',
        discribe: ' 现代简约  混搭  轻奢',
        detail:{
            title:'135平四房现代混搭风',
            type:'4室2厅3卫1厨',
            area:'169 m2',
            tag:'现代简约 、 混搭 、 轻奢 、 家装',
            detail:'',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/d10c46e6a00dc877-1641540656791-1.mp4',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7VSGEGF2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '书房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XK888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D336S62ENDPTB2E7NSGEGF2LUF3P3XA888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF5TKLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGF4A2LUF3P3UI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGE7K2LUF3P3XA888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7FSGH356LUF3P3XO888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳光房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/11/L3D337S62ENDPTB2E7NSGEGF2LUF3P3XI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
        house_name: '三亚650㎡新中式院落别墅',
        logo: 'https://user-platform-oss.kujiale.com/uat/MGTRLA5MDFDRQAABAAAAAAA8.png?x-oss-process=image/format,webp',
        writer_name: '菜刀屠龙侠',
        discribe: '新中式',
        detail:{
            title:'三亚650㎡新中式院落别墅',
            type:'未定义',
            area:'474 m2',
            tag:'新中式 、 家装',
            detail:'',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
            message:[
                '中庭',
                'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33R3NSGH2RULUF3P3WC888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '天井',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/25/L3D123S21ENDPSAF54FSGG5YOLUF3P3WI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '天井2',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFDJ5SGG5YOLUF3P3XK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卫2',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JWPTIUWFLPYLUF3P3UK888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '家庭厅',
                'https://qhrenderpicoss.kujiale.com/r/2021/12/02/L3D326S21ENDPS33RCNSGH2RULUF3P3X6888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '楼梯间',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/16/L3D123S21ENDP4JYACIUWFLIOLUF3P3XG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧2',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGI5SGFL2SLUF3P3W4888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卫2',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D222S21ENDPSAFGBFSGHQCELUF3P3WS888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '沐浴区',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/26/L3D123S21ENDPSAFCSVSGFL2SLUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/28/L3D222S21ENDPS622LFSGG5YOLUF3P3WE888.0_6000x1000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '客卧',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCET7NSGHIFYLUF3P3UI888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '卫生间',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/27/L3D206S21ENDPS64DTVSGHIHOLUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '会客厅',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/29/L3D123S21ENDPS5R3K5SGG5YOLUF3P3WG888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '园路',
                'https://qhrenderpicoss.kujiale.com/r/2021/11/30/L3D336S21ENDPS5YUXNSGFL2SLUF3P3XO888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '庭院',
                'https://qhrenderpicoss.kujiale.com/r/2021/12/01/L3D326S21ENDPS4OBAFSGH2RULUF3P3WW888_24000x4000.jpg_f?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '泳池',
                'https://qhrenderpic-cos.kujiale.com/r/2021/11/23/L3D123S21ENDPSCFDYVSGE572LUF3P3WY888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',
        house_name: '日式混搭小院改造',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/09/28/VAYYBGLI4AA4WZ4XLQM6YNY8?x-oss-process=image/format,webp',
        writer_name: '楚瑜设计',
        discribe: ' 北欧  日式  混搭',
        detail:{
            title:'日式混搭小院改造',
            type:'未定义',
            area:'140 m2',
            tag:'日式 、 北欧 、 混搭 、 家装',
            detail:'',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/23a90231c85b08a2-1641540035905-1.mp4',
            message:[
                '客厅',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTESOGVSGH2Z6LUF3P3XY888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WG888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRIIUWFDKMLUF3P3WI888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '门厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XU888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '一楼公卫',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XS888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '一楼洗手间',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3XE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '一楼过道',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WW888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '中庭',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3WE888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '姑姑房',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERQZ5SGF5NQLUF3P3WW888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '洗衣房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X2888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '父母房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3X4888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FQWQUWFDKMLUF3P3XY888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼休闲厅',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERRHVSGH2BWLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '婴儿房',
                'https://qhrenderpicoss.kujiale.com/r/2022/01/15/L3D337S62ENDPT7FRJYUWFDKMLUF3P3X6888_8000x6000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房',
                'https://qhrenderpic-cos.kujiale.com/r/2022/01/06/L3D124S21ENDPTERTYVSGEQGELUF3P3XO888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',
        house_name: '《九里》新古典奢华|三层别墅',
        logo: 'https://user-platform-oss.kujiale.com/siteassets/3524bfe3e379fbe2-1584195912886.png?x-oss-process=image/format,webp',
        writer_name: '黄建',
        discribe: ' 欧式  混搭  轻奢',
        detail:{
            title:'《九里》新古典奢华|三层别墅',
            type:'1室2厅2卫1厨',
            area:'92 m2',
            tag:' 欧式 、 混搭 、 轻奢 、 家装',
            detail:'新古典奢华风格别墅，大理石地面及金属材质的搭配，古典新作，保留复古气息，融合现代质感，整体别墅体现奢华的感觉。',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/MJA2UOAKTEM2KAABAAAAABI8.mp4',
            message:[
                '客厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVYJ5MDGSQKAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAVXNVMDHQ3EAABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '洗漱间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/11/02/MGAU5INMDHQ3EAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHE2BZNMDE5TEAABAAAAACI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼卧室A',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/16/MG5DMVVMDGVGAAABAAAAAAQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼卧室B',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEWYRVMCADFCAABAAAAADA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼卧室C',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEW7RNMCAERIAABAAAAABY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼过道',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/27/MHEZ4OFMDE5TEAABAAAAAAA8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '三楼主卧',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/31/MHG56FVMDECLMAABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '三楼书房',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/20/MI3SS6YKTEDZ6AABAAAAAEI8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '三楼主卫',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/26/MHEFITFMDHVH2AABAAAAACY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '三楼礼佛堂',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/21/MHA4IT5MDE5TEAABAAAAACQ8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '三楼衣帽间',
                'https://qhrenderstorage-oss.kujiale.com/beautify/2021/12/17/MG5X6WVMDE5TEAABAAAAADY8.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    // 123456789
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
        house_name: '150平简约美式顶跃',
        logo: 'https://user-platform-oss.kujiale.com/uat/MJKDERIKTFASIAABAAAAADY8.png?x-oss-process=image/format,webp',
        writer_name: '大熊设计事务所',
        discribe: ' 现代简约  简美',
        detail:{
            title:'150平简约美式顶跃',
            type:'2室2厅2卫1厨',
            area:'133 m2',
            tag:' 现代简约 、 简美 、 家装',
            detail:'简约的小美式，尽显业主的文艺范！',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWF6KCLUF3P3WG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36WQUWEJU2LUF3P3WK888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '阳台',
                'https://qhrenderpic-cos.kujiale.com/r/2021/10/18/L3D206S21ENDPRZH3HNSGG6F2LUF3P3UI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房1',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWFOFGLUF3P3XU888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童房2',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EZDVAUWFAE6LUF3P3XI888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XIUWF6KCLUF3P3XS888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XYUWFOFCLUF3P3XG888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼多功能区域',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5E4VNIUWF6X6LUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '露台',
                'https://qhrenderpicoss.kujiale.com/r/2022/04/15/L3D336S62ENDP5D36XAUWFOFALUF3P3UI888_7680x4320.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',
        house_name: '图森·北京润泽御府',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHGR44FMDECLMAABAAAAAAA8.png?x-oss-process=image/format,webp',
        writer_name: 'TUCSONWOOD_',
        discribe: '轻奢',
        detail:{
            title:'图森·北京润泽御府',
            type:'1室1厅0卫0厨',
            area:'329 m2',
            tag:'轻奢 、 家装',
            detail:'低调奢华，静谧幽雅。轻奢风格追求以最简洁的设计手法来打造奢华气派，造型上的简洁是为了赋予材质上的奢华。意式轻奢，简约线条在讲述真正的永恒经典，脱离一切浮华和不实用，从生活的本质出发，以极简的设计演绎最本质的轻奢美学。',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/MITKI4QKTEDRSAABAAAAABQ8.mp4',
            message:[
                '客厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/02/18/L3D187S21ENDP4IOU6IUWFDVMLUF3P3X4888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY5AUWFFIYLUF3P3XQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '玄关',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYUAUWFZWYLUF3P3W2888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '会客室',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYVAUWFAQALUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '楼梯间',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARY6AUWFAQALUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '西厨',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4ARYYIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼起居室',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCLIUWFZZSLUF3P3WU888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCCQUWFZZSLUF3P3WC888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '二楼衣帽间',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/02/L3D187S21ENDP4APCMIUWFZZSLUF3P3WS888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
        house_name: '《浪漫温馨》+140平奶油色法式轻奢',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
        writer_name: '王磊',
        discribe: '简美',
        detail:{
            title:'《浪漫温馨》+140平奶油色法式轻奢',
            type:'3室2厅2卫1厨',
            area:'177 m2',
            tag:'简美 、 家装',
            detail:'用法式的优雅和浪漫，安放生活的诗意和疲惫。空间的设计感，并不在于装饰的堆砌，有时候恰到好处的留白，反而让设计更加的纯粹，更加的高级，又没线条和个性的色彩碰撞，成就了空间的品质和高度',
            img:'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
            message:[
                '客餐厅',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDTYUWFY24LUF3P3WY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '厨房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDGAUWFY24LUF3P3UI888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',          
                '卫生间',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDEIUWFLLQLUF3P3XY888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '主卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDZAUWFY24LUF3P3WQ888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '次卧',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TD5IUWFY24LUF3P3XM888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
                '儿童书房',
                'https://qhrenderpicoss.kujiale.com/r/2022/03/08/L3D187S21ENDP44TDIQUWFLEKLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_1440,h_810/format,webp',
            ],
        },
    },
]

const Recommend = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='select_top'>
                <div className='selector'>
                    <div className='select_row'>
                        <span className='select_row_title'>风格</span>
                        <span className='select_row_text'>现代简约</span>
                        <span className='select_row_text'>新中式</span>
                    </div>
                    <div className='select_row select_row_two'>
                        <span className='select_row_title'>空间</span>
                        <span className='select_row_text'>客厅</span>
                        <span className='select_row_text'>主卧</span>
                        <span className='select_row_text'>客厅</span>
                        <span className='select_row_text'>卫生间</span>
                    </div>
                    <div className='select_row'>
                        <span className='select_row_title'>户型</span>
                        <span className='select_row_text'>一居</span>
                        <span className='select_row_text'>二居</span>
                    </div>
                    <div className='select_row'>
                        <span className='select_row_title'>面积</span>
                        <span className='select_row_text'>50-80m²</span>
                        <span className='select_row_text'>80-100m²</span>
                    </div>
                    <div className='select_row'>
                        <span className='select_row_title'>场景</span>
                        <span className='select_row_text'>家居</span>
                        <span className='select_row_text'>店装</span>
                    </div>
                    <div>
                        <input type="text" placeholder='家居' className='select_input' />
                    </div>
                    <div className='select_bottom'>
                        <div>
                            <img src={good} alt="" />
                            <span>精品单图</span>
                        </div>
                        <div>
                            <img src={good2} alt="" />
                            <span>精品专题</span>
                        </div>
                    </div>

                </div>
                <div className="rec_player">
                    <ReactPlayer
                        className="reactPlayer"
                        url={rec_banner}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        //   controls
                        width='100%'
                        height='440px'

                    />
                    <div className='player_topleft'>视频动画</div>
                    <div className='player_bottomleft'>
                        <div>今日推荐</div>
                        <div>现代简约风格120平3方1厅2卫</div>
                    </div>
                    <div className='player_bottomright'>
                        <img src={rainbow} alt="" />
                        <span>张伟</span>
                    </div>
                </div>
            </div>
            {/* <div className='middle_list_div'>
                <ul className='middle_list'>
                    <li>我的关注</li>
                    <li>全部推荐</li>
                    <li>大咖秀</li>
                    <li>新锐力量</li>
                </ul>
            </div> */}
            <div className='all_recommend'>
                <div className='rec_show_div'>
                    <ReactPlayer
                        className="reactPlayer2"
                        url={rec_show}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        width='100%'
                        height='420px'
                    />
                    <div className='rec_player_topleft'>大咖秀</div>
                    <div className='rec_player_bottomleft'>
                        <div className='rec_name'>
                            <img src={rainbow} alt="" />
                            <span>张伟</span>
                        </div>
                        <div>现代简约风格120平3方1厅2卫</div>
                    </div>
                </div>
                <div className='rec_createCenter'>
                    <div className='rec_createCenter_div1'>
                        <img src={create} alt="" />
                    </div>
                    <div className='rec_createCenter_div2'>
                        <div>
                            <p>创作者中心上线啦！</p>
                            <p>投稿作品管理 | 投稿记录查询 | 活动抢先看</p>
                        </div>
                        <div>
                            <span>点击查看</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='all_rec_div'>
                <ul>
                    {
                        rec_data.map((item, index) => {
                            if (index < 8) {
                                return (
                                    <li className='rec_all_li1'>
                                        <div className='rec_li1_img'>
                                            <img src={item.img} alt="" />
                                            <div className='rec_li_div3'>
                                                <span>{item.discribe}</span>
                                            </div>
                                        </div>
                                        <div className='rec_li_div2'>
                                            <div title={item.house_name}>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span title={item.writer_name}>{item.writer_name}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
                <ul>
                    {
                        rec_data.map((item) => {
                            if (item['video']) {
                                return (
                                    <li className='rec_all_li1 rec_all_li2'>
                                        <div className='rec_li1_img rec_li1_video'>
                                            <ReactPlayer
                                                className="reactPlayer3"
                                                url={item.video}
                                                playing={true}
                                                autoPlay={true}
                                                muted={true}
                                                loop={true}
                                                width='100%'
                                                height='300px'
                                            />
                                            <div className='rec_li_div3 rec_play_div3'>
                                                <span>{item.discribe}</span>
                                            </div>
                                        </div>
                                        <div className='rec_li_div2 rec_play_div2'>
                                            <div title={item.house_name}>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span title={item.writer_name}>{item.writer_name}</span>
                                            </div>
                                        </div>


                                    </li>
                                )
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
                <ul>
                    {
                        rec_data.map((item, index) => {
                            if (index >= 8 && index < 17) {
                                return (
                                    <li className='rec_all_li1'>
                                        <div className='rec_li1_img'>
                                            <img src={item.img} alt="" />
                                            <div className='rec_li_div3'>
                                                <span>{item.discribe}</span>
                                            </div>
                                        </div>
                                        <div className='rec_li_div2'>
                                            <div title={item.house_name}>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span title={item.writer_name}>{item.writer_name}</span>
                                            </div>
                                        </div>

                                    </li>
                                )
                            } else {
                                return;
                            }

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Recommend