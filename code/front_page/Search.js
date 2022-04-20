import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
import HomeHeader from './HomeHeader'
import demo from './images/school.png'
import pre from './images/pre.png'

const Search = (props) => {
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    console.log(props.location.state)

    const handleScroll = () =>{
        let scrollY = window.scrollY;
        console.log(scrollY)
    }
  return (
    <div>
        <HomeHeader></HomeHeader>
        <div className='search_box'>
            {/* 左侧导航 */}
            <ul className='search_nav'>
                <Link to='/help'><li className='search_nav_index'>帮助中心首页</li></Link>
                <li>
                    <a href="#">新手入门</a>
                    <ul>
                        <li>
                            <div className='search_nav_li1'>使用指南</div>
                            <ul>
                                <li className='search_nav_li2'>户型绘制</li>
                                <li className='search_nav_li2'>2D与3D转换</li>
                                <li className='search_nav_li2'>家具调整</li>
                                <li className='search_nav_li2'>撤销、清空与保存</li>
                                <li className='search_nav_li2'>户型模板</li>
                                {/* <li className='search_nav_li2'>查看收藏</li>
                                <li className='search_nav_li2'>推荐与灵感</li>               */}
                            </ul>
                        </li>
                        <li className='search_nav_li1'>如何上推荐</li>
                    </ul>
                </li>
                <li>
                    <a href="#">功能更新</a>
                    <ul>
                        <li className='search_nav_li2'>2021年</li>
                        <li className='search_nav_li2'>2022年</li>
                    </ul>
                </li>
                <li>
                    <a href="#">关于朗家</a>
                    <ul>
                        <li className='search_nav_li2'>加入我们</li>
                        <li className='search_nav_li2'>联系我们</li>
                    </ul>
                </li>
            </ul>

            {/* 内容 */}
            <div className='search_content'>
                {/* 新手入门 */}
                <div className='search_content_new'>
                    <div className='search_content_new_title'>新手入门</div>
                    {/* 使用指南 */}
                    <div>
                        <div className='search_content_new_title1'>使用指南</div>
                        {/* 户型绘制 */}
                        <div>
                            <div className='search_content_new_title2'>户型绘制</div>
                            <div className='search_content_txt'>您可以在2D页面绘制户型，以鼠标单击开始，鼠标双击结束。可多次绘制。</div>
                            <div className='search_content_txt'>绘制过程中，页面会显示您绘制的线条与实际长度的比例，方便您根据自身房屋绘制出准确的户型</div>
                            <img src={demo} className='search_content_img'/>
                        </div>
                        {/* 2D与3D转换 */}
                        <div>
                            <div className='search_content_new_title2'>2D与3D转换</div>
                            <div className='search_content_txt'>户型绘制完成后，您可以点击创建界面右上角的“2D转3D”按钮，实现2D与3D的转换。</div>
                            <div className='search_content_txt'>如果需要继续修改2D平面图，您可继续返回2D界面修改，支持实时转换</div>
                            <img src={demo} className='search_content_img'/>
                        </div>
                        {/* 家具调整 */}
                        <div>
                            <div className='search_content_new_title2'>家具调整</div>
                            <div className='search_content_txt'>在创建界面左侧选择心仪的家具模型后，点击便可导入到您的设计中</div>
                            <div className='search_content_txt'>您可以通过鼠标拖动改变家具的位置，通过键盘控制改变家具大小及方向</div>
                            <img src={demo} className='search_content_img'/>
                        </div>
                        {/* 撤销、清空与保存 */}
                        <div>
                            <div className='search_content_new_title2'>撤销、清空与保存</div>
                            <div className='search_content_txt'>在创建界面上方提供“撤销”、“清空家具”、“全部清空”功能</div>
                            <div className='search_content_txt'>点击“撤销”按钮后，界面会返回您上一步的设计结果；点击“清空家具”，界面中的家具会全部清空，但户型仍然保留；点击“全部清空”，界面所有内容将全部清空。</div>
                            <div className='search_content_txt'>关于保存：为您提供实时保存功能，您可以到到“个人中心--我的设计”中查看</div>
                            <img src={demo} className='search_content_img'/>
                        </div>
                        {/* 户型模板 */}
                        <div>
                            <div className='search_content_new_title2'>户型模板</div>
                            <div className='search_content_txt'>如果您还没有确定的户型，可在创建界面左侧“户型模板”中选择心仪的户型，点及便可对改户型进行设计。</div>
                            <div className='search_content_txt'>您也可以对选择的户型模板进行修改，绘制您满意的户型图。</div>
                            <img src={demo} className='search_content_img'/>
                        </div>
                    </div>   
                    {/* 如何上推荐 */}
                    <div>
                        <div className='search_content_new_title1'>如何上推荐</div>
                        <div className='search_content_txt'>您的设计完成后，会自动进入推荐池中，其他用户可对您的设计进行点赞。获赞数量越多，在推荐页面的排名就会越靠前。</div>
                        <div className='search_content_txt'>您也可以对推荐页面的作品进行点赞，让更多用户看到更好的设计。</div>
                        <img src={demo} className='search_content_img'/>
                    </div>                    
                </div>

                {/* 功能更新 */}
                <div>
                    <div className='search_content_new_title'>功能更新</div>
                    {/* 2021 */}
                    <div>
                        <div className='search_content_new_title2'>2021年——朗家1.0</div>
                        <div className='search_content_txt'>2021年为朗家首创年，朗家1.0主色调为黑白，整体沉稳大气，可实现3D设计的基本功能。</div>
                        <img src={pre} className='search_content_img'/>
                    </div>
                    {/* 2022 */}
                    <div>
                        <div className='search_content_new_title2'>2022年——朗家1.1</div>
                        <div className='search_content_txt'>2022年朗家进行了较大规模的调整。主色调变为蓝白，更显轻便快捷。在前端页面的设计上，增加动画效果及用户交互功能，并增设了“大咖秀”、“帮助中心”、“加入我们”板块。创建页面。。。</div>
                        <img src={demo} className='search_content_img'/>
                    </div>
                </div>
                {/* 关于朗家 */}
                <div>
                    <div className='search_content_new_title'>关于朗家</div>
                    {/* 加入我们 */}
                    <div>
                        <div className='search_content_new_title2'>加入我们</div>
                        <div className='search_content_txt'>组件</div>
                        <img src={demo} className='search_content_img'/>
                    </div>
                    {/* 联系我们 */}
                    <div>
                        <div className='search_content_new_title2'>联系我们</div>
                        <div className='search_content_txt'>组件</div>
                        <img src={demo} className='search_content_img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search