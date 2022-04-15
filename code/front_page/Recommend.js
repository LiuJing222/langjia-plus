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
const rec_data = [
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/07/L3D327S21ENDP5I3KBAUWFAOQLUF3P3WC888_1024x576.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '徐州雅苑新中式',
        logo: 'https://qhsaas-oss.kujiale.com/saas-personal-center/2022/03/23/MI5MYIAKTEDZ6AABAAAAAAQ8.png?x-oss-process=image/format,webp',
        writer_name: '春秋释甲',
        discribe: '新中式',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S55ENDP5FOE6AUWF6X6LUF3P3WA888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代简约低调奢华风',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/07/28/VBRM2QLI4BQ7SZ4XLQM6YNY8.jpg?x-oss-process=image/format,webp',
        writer_name: '郭涛',
        discribe: '现代简约 轻奢',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D123S21ENDP5FOJJAUWF6X4LUF3P3XM888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代简约-3居',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2020/08/26/SYS6DA6OS3SXAZ4XLQM6YOI8?x-oss-process=image/format,webp',
        writer_name: '品牌赋能中心',
        discribe: '现代简约',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5FLKYAUWF6ROLUF3P3WM888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代、定制',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2022/02/10/VNQAPDOOMD2N2Z4XLQM6YNA8.jpg?x-oss-process=image/format,webp',
        writer_name: '单纯 | 最美',
        discribe: '现代简约',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D186S21ENDP5FSCLQUWFHTKLUF3P3UK888_1920x1080.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '按摩推拿店',
        logo: 'https://user-platform-oss.kujiale.com/2020/11/10/S3FAQVLI4DZUAZ4XLQM6YOY8_988x678.jpg?x-oss-process=image/format,webp',
        writer_name: '一品设计YP',
        discribe: '新中式',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/10/L3D123S21ENDP5GUDXAUWF6X4LUF3P3XA888_3200x2400.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '一人居-北欧',
        logo: 'https://user-platform-oss.kujiale.com/avatars/0a680e4fbe9411eaa60527a173472d69.jpg?x-oss-process=image/format,webp',
        writer_name: '小喃WkEV',
        discribe: '北欧',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D186S21ENDP5FMVLQUWF6X4LUF3P3X4888_1920x1080.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '简欧复式',
        logo: 'https://user-platform-oss.kujiale.com/2020/11/10/S3FAQVLI4DZUAZ4XLQM6YOY8_988x678.jpg?x-oss-process=image/format,webp',
        writer_name: '一品设计YP',
        discribe: '简欧',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D187S41ENDP5E4PYAUWF6X4LUF3P3WS888_3840x2160.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '朗诗上林熙华府160m²',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHAZNDFMDHVH2AABAAAAACQ8.png?x-oss-process=image/format,webp',
        writer_name: '四川分公司2020景春梅',
        discribe: '现代简约 轻奢',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/27/L3D206S41ENDP4QL3SAUWFFTALUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '新中式风格',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2022/03/23/VNMWN6WOMDX42Z4XLQM6YNA8?x-oss-process=image/format,webp',
        writer_name: '秦治华',
        discribe: '新中式',
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/12/MJKWIVQKTFASIAABAAAAABQ8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '仓库-烘焙——现代轻奢',
        logo: 'https://user-platform-oss.kujiale.com/uat/MIM5TCQKTEJLKAABAAAAAAY8.png?x-oss-process=image/format,webp',
        writer_name: '',
        discribe: '现代简约 轻奢',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/12/L3D206S21ENDP5FQ2ZYUWFHTKLUF3P3WO888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '津南区中海南开郡300平四层年轻人的现代家居',
        logo: 'https://user-platform-oss.kujiale.com/uat/MIHAPCYKTEIIEAABAAAAAEA8.png?x-oss-process=image/format,webp',
        writer_name: '胖头鱼设计',
        discribe: '现代简约 北欧 轻奢',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/30/L3D206S21ENDP5OF4WIUWF7K4LUF3P3W2888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '二层别墅',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2022/04/06/VMXKEFOOMDWW4Z4XLQM6YOY8?x-oss-process=image/format,webp',
        writer_name: '张其星',
        discribe: '现代简约 新中式 轻奢',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/04/13/L3D206S21ENDP5EURPQUWFAE6LUF3P3XU888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '现代别墅设计',
        logo: 'https://qhstaticssl.kujiale.com/siteassets/447af8cab718607d-1626416310040.png?x-oss-process=image/format,webp',
        writer_name: '罗兰帝装饰设计有限公司',
        discribe: '现代简约',
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/04/11/MJJYJVQKTEM2KAABAAAAADI8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '132平现代三居',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHAXVY5MDE5TEAABAAAAACI8.png?x-oss-process=image/format,webp',
        writer_name: '赵海霞',
        discribe: '现代简约 轻奢',
    },
    {
        img: 'https://qhrenderstorage-oss.kujiale.com/beautify/2022/03/21/MI4EDYAKTESZSAABAAAAABA8.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '德信海德公园83.00㎡A2’3室2厅1卫1厨',
        logo: 'https://user-platform-oss.kujiale.com/uat/MIYD3YYKTEJCEAABAAAAADY8.png?x-oss-process=image/format,webp',
        writer_name: '张晓阳',
        discribe: '现代简约 北欧',
    },
    {
        img: 'https://qhrenderpicoss.kujiale.com/r/2022/03/21/L3D124S21ENDP4UDFPQUWFLBMLUF3P3XG888_4000x3000.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '侘寂北欧风全屋定制',
        logo: 'https://qhsaas-oss.kujiale.com/saas-personal-center/2021/11/19/MGLSAGNMDE4H2AABAAAAABI8.png?x-oss-process=image/format,webp',
        writer_name: '6脉神剑TNHT',
        discribe: '新中式 北欧 混搭',
    },
    {
        img: 'https://qhrenderpic-cos.kujiale.com/r/2021/09/03/L3D206S21ENDPQXD4V5SGFVRALUF3P3WU888_2560x1440.jpg?x-oss-process=image/resize,m_mfit,w_645/format,webp',
        house_name: '创产剧本杀店大厅方案',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2019/09/03/SQG7KQ6OS3UIOZ4XLQM6YPY8?x-oss-process=image/format,webp',
        writer_name: 'CAGE巢',
        discribe: '现代简约 后现代 工业风',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJLNVGIKTEM2KAABAAAAAAA8.mp4',
        house_name: '《撞色设计》+118平奶油系法式复古风',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
        writer_name: '王磊',
        discribe: '田园 美式 简美',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/84065bbf59a9e80a-1645423691765-1.mp4',
        house_name: '四季贵州椿棠府150：黄昏下的阴影：现代简约',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/09/13/VBORMWTI4CYGIZ4XLQM6YNA8.jpg?x-oss-process=image/format,webp',
        writer_name: 'ANWANGSHENGAmzh',
        discribe: '现代简约',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJKD6LIKTEM2KAABAAAAADA8.mp4',
        house_name: '150平简约美式顶跃',
        logo: 'https://user-platform-oss.kujiale.com/uat/MJKDERIKTFASIAABAAAAADY8.png?x-oss-process=image/format,webp',
        writer_name: '大熊设计事务所',
        discribe: '现代简约 简美',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MIXOMKIKTESZSAABAAAAACI8.mp4',
        house_name: '图森·东莞紫云雅墅',
        logo: 'https://qhsaas-oss.kujiale.com/saas-personal-center/2022/03/16/MIY2K2IKTESZSAABAAAAADA8.png?x-oss-process=image/format,webp',
        writer_name: 'TUCSONWOOD_',
        discribe: '现代简约',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MJDTHTAKTFASIAABAAAAADQ8.mp4',
        house_name: '《房山》现代极简|3层别墅',
        logo: 'https://user-platform-oss.kujiale.com/siteassets/3524bfe3e379fbe2-1584195912886.png?x-oss-process=image/format,webp',
        writer_name: '黄建',
        discribe: '现代简约',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MI6XNOAKTFASIAABAAAAAEA8.mp4',
        house_name: '保利第五灣',
        logo: 'https://user-platform-oss.kujiale.com/uat/MHGR44FMDECLMAABAAAAAAA8.png?x-oss-process=image/format,webp',
        writer_name: '廸偉',
        discribe: '现代简约',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4',
        house_name: '《浪漫温馨》+140平奶油色法式轻奢',
        logo: 'https://user-platform-oss.kujiale.com/avatars/2021/06/22/VGZHUK3I4DSBKZ4XLQM6YNY8?x-oss-process=image/format,webp',
        writer_name: '王磊',
        discribe: '简美',
    },
    {
        video: 'http://user-platform-oss.kujiale.com/design/video/perm/974c5e60ff842436-1644978620754-1.mp4',
        house_name: '三亚650㎡新中式院落别墅',
        logo: 'https://user-platform-oss.kujiale.com/uat/MGTRLA5MDFDRQAABAAAAAAA8.png?x-oss-process=image/format,webp',
        writer_name: '菜刀屠龙侠',
        discribe: '新中式',
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
            <div className='middle_list_div'>
                <ul className='middle_list'>
                    <li>我的关注</li>
                    <li>全部推荐</li>
                    <li>大咖秀</li>
                    <li>新锐力量</li>
                </ul>
            </div>
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
                                        </div>
                                        <div>
                                            <div>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span>{item.writer_name}</span>
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
                                        <div className='rec_li1_video'>
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
                                        </div>
                                        <div>
                                            <div>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span>{item.writer_name}</span>
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
                                        </div>
                                        <div>
                                            <div>{item.house_name}</div>
                                            <div>
                                                <img src={item.logo} alt="" />
                                                <span>{item.writer_name}</span>
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