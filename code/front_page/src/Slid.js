import React, { useEffect, useRef, useState } from "react";
import "./Slid.css"

const Slid = () => {

  const [wallHeight, setWallHeight] = useState(2)
  const [size, setSize] = useState(0)
  const [deg, setDeg] = useState(0)
  const [height, setHeight] = useState(localStorage.getItem('furnheight') || 0)
  // useEffect(() => {
    
  // }, [])
  useEffect(() => {
    var wallHeightP = document.getElementById("create_wall_height_p")
    wallHeightP.style.display = "block"

    // -----------------------------------------缩放------------------------------------------
    var sizeCon = document.getElementById("create_sizebar_con")
    var sizeBg = document.getElementById("create_sizebar_bg")
    var sizeDot = document.getElementById("create_sizebar_dot")
    var sizep = document.getElementById("create_sizebar_p")

    sizeDot.style.left = 75 + "px"
    sizep.style.display = "none"
    sizeCon.addEventListener("mouseup", (e) => {
      // console.log("sizeBg.getBoundingClientRect().left", sizeBg.getBoundingClientRect().left)
      var sizeBgLeftValue = sizeBg.getBoundingClientRect().left;
      // console.log(e.x)
      if (e.x > 150 + sizeBgLeftValue) {
        var leftValue = 150
      } else if (e.x < sizeBgLeftValue) {
        var leftValue = 0
      } else {
        var leftValue = e.x - sizeBgLeftValue
      }
      // console.log("leftValue", leftValue)
      sizeDot.style.left = leftValue + "px"
      sizeDot.style.transition = "all"
      sizeDot.style.transitionDuration = "0.2s"
      sizeDot.style.transitionTimingFunction = "linear"
      var size1 = parseInt((leftValue - 75) / 3.75)
      if (size1 > 20) {
        setSize(20)
      } else if (size1 < -20) {
        setSize(-20)
      } else {
        setSize(size1)
      }
      function rightCartData() {
        console.log(111)
        var item = localStorage.getItem('furnheight')
        if (item) {
          setHeight(item);
        }
      }
      window.addEventListener('storage', rightCartData)
  
      return () => {
        window.removeEventListener('storage', rightCartData)
      }
    }, []);

    //----------------------------------------------- 平面旋转-------------------------------------------
    var sclaeCon = document.getElementById("create_scalebar_con")
    var scaleBg = document.getElementById("create_scalebar_bg")
    var scaleDot = document.getElementById("create_scalebar_dot")
    var scalep = document.getElementById("create_scalebar_p")

    scaleDot.style.left = 75 + "px"
    scalep.style.display = "none"
    sclaeCon.addEventListener("mouseup", (e) => {
      // console.log("scaleBg.getBoundingClientRect().left", scaleBg.getBoundingClientRect().left)
      var scaleBgLeftValue = scaleBg.getBoundingClientRect().left;
      // console.log(e.x)
      if (e.x > 150 + scaleBgLeftValue) {
        var leftValue = 150
      } else if (e.x < scaleBgLeftValue) {
        var leftValue = 0
      } else {
        var leftValue = e.x - scaleBgLeftValue
      }
      scaleDot.style.left = leftValue + "px"
      scaleDot.style.transition = "all"
      scaleDot.style.transitionDuration = "0.2s"
      scaleDot.style.transitionTimingFunction = "linear"
      var deg1 = ((leftValue - 75) / 11.94).toFixed(2)
      if (deg1 > 6.28) {
        setDeg(6.28)
      } else if (deg1 < -6.28) {
        setDeg(-6.28)
      } else {
        setDeg(deg1)
      }
    })
    // ---------------------------------------------距离地面高度-----------------------------------------
    var heightCon = document.getElementById("create_heightbar_con")
    var heightBg = document.getElementById("create_heightbar_bg")
    var heightDot = document.getElementById("create_heightbar_dot")
    var heightp = document.getElementById("create_heightbar_p")
    
    heightDot.style.left = height * 15 + "px"
    heightp.style.display = "none"
    heightCon.addEventListener("mouseup", (e) => {
      // console.log("sizeBg.getBoundingClientRect().left", sizeBg.getBoundingClientRect().left)
      var heightBgLeftValue = heightBg.getBoundingClientRect().left;
      // console.log(e.x)
      if (e.x > 150 + heightBgLeftValue) {
        var leftValue = 150
      } else if (e.x < heightBgLeftValue) {
        var leftValue = 0
      } else {
        var leftValue = e.x - heightBgLeftValue
      }
      // console.log("leftValue", leftValue)
      heightDot.style.left = leftValue + "px"
      heightDot.style.transition = "all"
      heightDot.style.transitionDuration = "0.2s"
      heightDot.style.transitionTimingFunction = "linear"
      var height1 = parseInt((leftValue) / 15)
      if (height1 > 10) {
        setHeight(10)
      } else if (height1 < 0) {
        setHeight(0)
      } else {
        setHeight(height1)
      }
    })

  }, [])
  // -============================================墙高==============================================
  var wallHeightP = document.getElementById("create_wall_height_p")
  const changeWallHeight = (e) => {
    var v = e.target.value
    if (v > 10) {
      setWallHeight(10)
      console.log(">10")
      // wallHeightP.style.display = "block"
    } else if (v < 0) {
      setWallHeight(0)
      // wallHeightP.style.display = "block"
    } else {
      setWallHeight(v)
    }
    wallHeightP.style.display = "none"
  }

  // ===================================手动更改size数据=================================================
  var sizeDot = document.getElementById("create_sizebar_dot")
  var sizep = document.getElementById("create_sizebar_p")

  const changeSize = (e) => {
    var v = e.target.value;
    // console.log(v, e)
    if (v > 20) {
      setSize(20)
    } else if (v < -20) {
      setSize(-20)
    } else {
      setSize(v)
    }
    if ((v * 3.75 + 75) < 0) {
      sizeDot.style.left = 0 + "px"
      sizep.style.display = "block"
    } else if ((v * 3.75 + 75) > 150) {
      sizeDot.style.left = 150 + "px"
      sizep.style.display = "block"
    } else {
      sizeDot.style.left = v * 3.75 + 75 + "px"
      sizep.style.display = "none"
    }
  }
  // ===========================================手动更改scale数据===============================================
  var scaleDot = document.getElementById("create_scalebar_dot")
  var scalep = document.getElementById("create_scalebar_p")

  const changeScale = (e) => {
    var v = e.target.value;
    // console.log(v, e)
    if (v > 6.28) {
      setDeg(6.28)
    } else if (v < -6.28) {
      setDeg(-6.28)
    } else {
      setDeg(v)
    }
    if ((v * 11.94 + 75) < 0) {
      scaleDot.style.left = 0 + "px"
      scalep.style.display = "block"
    } else if ((v * 11.94 + 75) > 150) {
      scaleDot.style.left = 150 + "px"
      scalep.style.display = "block"
    } else {
      scaleDot.style.left = v * 11.94 + 75 + "px"
      scalep.style.display = "none"
    }
  }

  // ====================================手动更改height==================================
  var heightDot = document.getElementById("create_heightbar_dot")
  var heightp = document.getElementById("create_heightbar_p")

  const changeHeight = (e) => {
    var v = e.target.value;
    // console.log(v, e)
    if (v > 10) {
      setHeight(10)
    } else if (v < 0) {
      setHeight(0)
    } else {
      setHeight(v)
    }
    if ((v * 15) < 0) {
      heightDot.style.left = 0 + "px"
      heightp.style.display = "block"
    } else if ((v * 15) > 150) {
      heightDot.style.left = 150 + "px"
      heightp.style.display = "block"
    } else {
      heightDot.style.left = v * 15 + "px"
      heightp.style.display = "none"
    }
  }

  //缩放数据:-2π ~ 2π
  console.log("size&&deg&&height", size, deg, height)
  console.log("wallHeight", wallHeight)
  localStorage.setItem("wallHeight", wallHeight)

  return (
    <div style={{ width: "300px" }}>
      <div className="create_wall_height" >
        <span className="create_wall_height_span" >墙高</span>
        <input id="create_wall_height_input" value={wallHeight} onChange={(e) => { changeWallHeight(e) }} />
        <span className="create_wall_height_per">米</span>
        <p id="create_wall_height_p">墙高范围是0~10米</p>
      </div>
      <div className="create_processbar">
        <span>缩放</span>
        <div id="create_sizebar_con">
          <div id="create_sizebar_bg" >
            <span id="create_sizebar_dot"></span>
          </div>
        </div>
        <input id="create_sizebar_input" value={size} onChange={(e) => changeSize(e)} />
        <p id="create_sizebar_p">缩放范围是-20~20</p>
      </div>
      <div className="create_processbar">
        <span>平面旋转</span>
        <div id="create_scalebar_con">
          <div id="create_scalebar_bg" >
            <span id="create_scalebar_dot"></span>
          </div>
        </div>
        <input id="create_scalebar_input" value={deg} onChange={(e) => changeScale(e)} />
        <p id="create_scalebar_p">平面旋转范围是-6.28~6.28</p>
      </div>
      <div className="create_processbar">
        <span>距地面高度</span>
        <div id="create_heightbar_con">
          <div id="create_heightbar_bg" >
            <span id="create_heightbar_dot"></span>
          </div>
        </div>
        <input id="create_heightbar_input" value={height} onChange={(e) => changeHeight(e)} />
        <p id="create_heightbar_p">距地高度范围是0~10米</p>
      </div>
    </div>

  )
};


export default Slid