import React,{useEffect} from 'react'
import './Search.css'
import demo from './images/school.png'
import pre from './images/pre.png'
import ReactPlayer from 'react-player'
import test from './images/paint.mp4'
import to3d from './images/to3d.mp4'
import adjust from './images/adjust.mp4'
import save from './images/save.mp4'
import housetype from './images/type.mp4'
import fontpage from './images/fontpage.mp4'
import join from './images/join.png'
import you from './images/you.png'
import howrec from './images/howrec.png'

const Search = (props) => {
    var result = props.location.search;
    var que = decodeURI(result).slice(2,decodeURI(result).length-1);
    
    
    useEffect(()=>{   
        var alert = document.querySelector('.search_alert');
        if(que.includes('新手') || que.includes('入门') || que.includes('使用') || que.includes('指南') || que.includes('操作') || que.includes('户型') || que.includes('绘制')){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else if(que.includes('转换') || que.includes('3D') || que.includes('2D') || que.includes('切换')){
            document.body.scrollTop = document.documentElement.scrollTop = 700;
        }
        else if(que.includes('家具') || que.includes('调整') || que.includes('移动') || que.includes('旋转') || que.includes('缩放') || que.includes('摆放')){
            document.body.scrollTop = document.documentElement.scrollTop = 1300;
        }
        else if(que.includes('撤销') || que.includes('清空') || que.includes('清除') || que.includes('保存')){
            document.body.scrollTop = document.documentElement.scrollTop = 1860;
        }
        else if(que.includes('户型') || que.includes('模板')){
            document.body.scrollTop = document.documentElement.scrollTop = 2500;
        }
        else if(que.includes('规则') || que.includes('处罚') || que.includes('设计')){
            document.body.scrollTop = document.documentElement.scrollTop = 3000;
        }
        else if(que.includes('推荐') || que.includes('选上')){
            document.body.scrollTop = document.documentElement.scrollTop = 3350;
        }
        else if(que.includes('功能') || que.includes('更新') || que.includes('上新') || que.includes('版本')){
            document.body.scrollTop = document.documentElement.scrollTop = 3900;
        }
        else if(que.includes('关于') || que.includes('朗家') || que.includes('加入')){
            document.body.scrollTop = document.documentElement.scrollTop = 5100;
        }
        else if(que.includes('联系') || que.includes('沟通')){
            document.body.scrollTop = document.documentElement.scrollTop = 5800;
        }
        else if(que == ''){
            alert.style.display = 'block';
            alert.innerHTML='检测到您未输入搜索内容<br/>将为您呈现朗家帮助中心文档';
            setTimeout(()=>{
                alert.style.display='none';
                alert.style.transitionProperty='all'
                alert.style.transitionDuration = '2s';
                
            },2000)
        }
        else{
            alert.style.display = 'block';
            alert.innerHTML='抱歉，未搜索到您所需的内容<br/>将为您呈现朗家帮助中心文档';
            setTimeout(()=>{
                alert.style.display='none';
                alert.style.transitionProperty='all'
                alert.style.transitionDuration = '2s';
            },2000)
        }
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    // console.log(props.location.state.val)

    const handleScroll = () =>{
        let scrollY = window.scrollY;
        let li1 = document.getElementsByClassName('search_nav_li1')
        let li2 = document.getElementsByClassName('search_nav_li2')
        // console.log(scrollY)
        console.log(li1)
        li1[0].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        li2[0].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        li2[1].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 660;
        }
        li2[2].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 1200;
        }
        li2[3].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 1800;
        }
        li2[4].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 2360;
        }
        li1[1].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 3000;
        }
        li1[2].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 3355;
        }
        li2[5].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 3840;
        }
        li1[3].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 3840;
        }
        li2[6].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 4355;
        }
        li1[4].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 5000;
        }
        li2[7].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 5000;
        }
        li2[8].onclick = () =>{
            document.body.scrollTop = document.documentElement.scrollTop = 5500;
        }
        // console.log(li2[0])

        // 户型绘制
        if(scrollY>=0 && scrollY<640){
            // console.log('变蓝')
            li2[0].style.color = '#448CEF';
        }else{
            li2[0].style.color = '#000';
        }
        // 2D与3D
        if(scrollY>=640 && scrollY<1200){
            li2[1].style.color = '#448CEF';
        }else{
            li2[1].style.color = '#000';
        }
        // 家具调整
        if(scrollY>=1200 && scrollY<1800){
            li2[2].style.color = '#448CEF';
        }else{
            li2[2].style.color = '#000';
        }
        // 撤销
        if(scrollY>=1800 && scrollY<2350){
            li2[3].style.color = '#448CEF';
        }else{
            li2[3].style.color = '#000';
        }
        // 户型模板
        if(scrollY>=2350 && scrollY<3000){
            li2[4].style.color = '#448CEF';
        }else{
            li2[4].style.color = '#000';
        }
        // 设计师规则
        if(scrollY>=3000 && scrollY<3340){
            li1[1].style.color = '#448CEF';
            console.log(li1[1].style.color)
        }else{
            li1[1].style.color = '#000';
        }
        // 上推荐
        if(scrollY>=3340 && scrollY<3830){
            li1[2].style.color = '#448CEF';
        }else{
            li1[2].style.color = '#000';
        }
        // 2021
        if(scrollY>=3830 && scrollY<4350){
            li2[5].style.color = '#448CEF';
        }else{
            li2[5].style.color = '#000';
        }
        // 2022
        if(scrollY>=4350 && scrollY<5000){
            li2[6].style.color = '#448CEF';
        }else{
            li2[6].style.color = '#000';
        }
        // 联系
        if(scrollY>=5000 && scrollY<5500){
            li2[7].style.color = '#448CEF';
        }else{
            li2[7].style.color = '#000';
        }
        // 加入
        if(scrollY>=5500){
            li2[8].style.color = '#448CEF';
        }else{
            li2[8].style.color = '#000';
        }
    }

  return (
    <div>
       
        <div className='search_box'>
            {/* 左侧导航 */}
            <ul className='search_nav'>
                {/* <Link to='/help'><li className='search_nav_index'>帮助中心首页</li></Link> */}
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
                                <li className='search_nav_li2'>推荐与灵感</li>   */}
                            </ul>
                        </li>
                        <li className='search_nav_li1'>设计师规则</li>
                        <li className='search_nav_li1'>如何上推荐</li>
                    </ul>
                </li>
                <li>
                    <a className='search_nav_li1'>功能更新</a>
                    <ul>
                        <li className='search_nav_li2'>2021年</li>
                        <li className='search_nav_li2'>2022年</li>
                    </ul>
                </li>
                <li>
                    <a className='search_nav_li1'>关于朗家</a>
                    <ul>
                        <li className='search_nav_li2'>加入我们</li>
                        <li className='search_nav_li2'>联系我们</li>
                    </ul>
                </li>
            </ul>

            {/* 内容 */}
            <div className='search_content'>
                <div className='search_alert'></div>
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
                            {/* <img src={demo} className='search_content_img'/> */}
                            
                            <ReactPlayer
                        className="search_content_img"
                        url={test}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                        </div>
                        {/* 2D与3D转换 */}
                        <div>
                            <div className='search_content_new_title2'>2D与3D转换</div>
                            <div className='search_content_txt'>户型绘制完成后，您可以点击创建界面右上角的“2D转3D”按钮，实现2D与3D的转换。</div>
                            <div className='search_content_txt'>如果需要继续修改2D平面图，您可继续返回2D界面修改，支持实时转换</div>
                            {/* <img src={demo} className='search_content_img'/> */}
                            <ReactPlayer
                        className="search_content_img"
                        url={to3d}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                        </div>
                        {/* 家具调整 */}
                        <div>
                            <div className='search_content_new_title2'>家具调整</div>
                            <div className='search_content_txt'>在创建界面左侧选择心仪的家具模型后，点击便可导入到您的设计中</div>
                            <div className='search_content_txt'>您可以通过鼠标拖动改变家具的位置，通过右侧控制栏改变家具大小及方向</div>
                            {/* <img src={demo} className='search_content_img'/> */}
                            <ReactPlayer
                        className="search_content_img"
                        url={adjust}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                        </div>
                        {/* 撤销、清空与保存 */}
                        <div>
                            <div className='search_content_new_title2'>撤销、清空与保存</div>
                            <div className='search_content_txt'>在创建界面上方提供“撤销”、“清空家具”、“全部清空”功能</div>
                            <div className='search_content_txt'>点击“撤销”按钮后，界面会返回您上一步的设计结果；点击“清空家具”，界面中的家具会全部清空，但户型仍然保留；点击“全部清空”，界面所有内容将全部清空。</div>
                            <div className='search_content_txt'>关于保存：为您提供实时保存功能，您可以到到“个人中心--我的设计”中查看</div>
                            {/* <img src={demo} className='search_content_img'/> */}
                            <ReactPlayer
                        className="search_content_img"
                        url={save}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                        </div>
                        {/* 户型模板 */}
                        <div>
                            <div className='search_content_new_title2'>户型模板</div>
                            <div className='search_content_txt'>如果您还没有确定的户型，可在创建界面左侧“户型模板”中选择心仪的户型，点及便可对改户型进行设计。</div>
                            <div className='search_content_txt'>您也可以对选择的户型模板进行修改，绘制您满意的户型图。</div>
                            {/* <img src={demo} className='search_content_img'/> */}
                            <ReactPlayer
                        className="search_content_img"
                        url={housetype}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                        </div>
                    </div>  
                     {/*新手必看  */}
                     <div>
                        <div className='search_content_new_title1'>设计师规则</div>
                        <div className='search_content_txt'>为了避免网站不良行为的出现，为大家带来更好的使用体验，在此提出更完善的设计师规则。</div>
                        <div className='search_content_txt'>1、作品造假</div>
                        <div className='search_content_txt'>直接复制或抄袭他人方案投稿推荐设计或用于盈利，违规者处以账户封锁7天处罚，并下架优秀设计展示。</div>
                        <div className='search_content_txt'>2、作品违规</div>
                        <div className='search_content_txt'>以低俗恶搞的作品投稿推荐设计，违规者处以账户封锁7天处罚。</div>
                        <div className='search_content_txt'>3、言论不当</div>
                        <div className='search_content_txt'>在与本网站咨询人员沟通中，有侮辱、中伤、恐吓他人的言论以及宣扬暴力、迷信和色情淫秽的言论；违反中华人民共和国宪法和法律法规的言论；
攻击中华人民共和国政府、中国共产党及其领导人的言论，对违规者处以账户封锁10天处罚，并下架优秀设计展示。</div>
                       
                    </div> 
                    {/* 如何上推荐 */}
                    <div>
                        <div className='search_content_new_title1'>如何上推荐</div>
                        <div className='search_content_txt'>您的设计完成后，会自动进入推荐池中，其他用户可对您的设计进行点赞。获赞数量越多，在推荐页面的排名就会越靠前。</div>
                        <div className='search_content_txt'>您也可以对推荐页面的作品进行点赞，让更多用户看到更好的设计。</div>
                        <img src={howrec} className='search_content_img'/>
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
                        <div className='search_content_new_title2'>2022年——朗家2.0</div>
                        <div className='search_content_txt'>2022年朗家进行了较大规模的调整。主色调变为蓝白，更显轻便快捷。在前端页面的设计上，增加动画效果及用户交互功能，并增设了“大咖秀”、“帮助中心”、“加入我们”板块。创建页面增加了右侧功能栏，主要功能有：全方位选择视图、室内室外视角转换、家具详细信息以及家具调整按钮，为您提供更方便的操作。</div>
                        
                        {/* <img src={demo} className='search_content_img'/> */}
                        <ReactPlayer
                        className="search_content_img"
                        url={fontpage}
                        playing={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        height='450px'
                        //   controls
                       
                    />
                    </div>
                </div>
                {/* 关于朗家 */}
                <div>
                    <div className='search_content_new_title'>关于朗家</div>
                    {/* 加入我们 */}
                    <div>
                        <div className='search_content_new_title2'>加入我们</div>
                        <div className='search_content_txt'>支持设计师及daV博主入驻、同时欢迎3D建模师、家具产品经销商等加入</div>
                        
                        <img src={you} className='search_content_img'/>
                    </div>
                    {/* 联系我们 */}
                    <div>
                        <div className='search_content_new_title2'>联系我们</div>
                        <div className='search_content_txt'>您可以通过以下两种方式联系我们：</div>
                        <div className='search_content_txt'>联系电话：15176655211</div>
                        <div className='search_content_txt'>邮箱：2505469033@qq.com</div>
                        <img src={join} className='search_content_img'/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Search