import React, { useEffect, useRef, useState } from "react";
import "./Slid.css"

const Slid = () => {

  const [size, setSize] = useState(0)
  const [deg, setDeg] = useState(0)
  useEffect(() => {
    // -----------------------------------------大小------------------------------------------
    var sizeCon = document.getElementById("create_sizebar_con")
    var sizeBg = document.getElementById("create_sizebar_bg")
    var sizeDot = document.getElementById("create_sizebar_dot")
    sizeDot.style.left = 90 + "px"
    sizeCon.addEventListener("mousedown", (e) => {
      if (e.x > 220) {
        var leftValue = 155 + "px"
      } else if (e.x < 55) {
        var leftValue = 0 + "px"
      } else {
        var leftValue = e.x - 40 + "px"
      }
      sizeDot.style.left = leftValue
      sizeDot.style.transition = "all"
      sizeDot.style.transitionDuration = "0.2s"
      sizeDot.style.transitionTimingFunction = "linear"
      var size1 = parseInt((e.x - 130) / 4.2)
      if (size1 > 20) {
        setSize(20)
      } else if (size1 < -20) {
        setSize(-20)
      } else {
        setSize(size1)
      }
    })
    sizeCon.addEventListener("mouseup", (e) => {
      if (e.x > 230) {
        var leftValue = 155 + "px"
      } else if (e.x < 55) {
        var leftValue = 0 + "px"
      } else {
        var leftValue = e.x - 40 + "px"
      }
      sizeDot.style.left = leftValue
      sizeDot.style.transition = "all"
      sizeDot.style.transitionDuration = "0.2s"
      sizeDot.style.transitionTimingFunction = "linear"
      var size1 = parseInt((e.x - 130) / 4.2)
      if (size1 > 20) {
        setSize(20)
      } else if (size1 < -20) {
        setSize(-20)
      } else {
        setSize(size1)
      }
    })
    //----------------------------------------------- 缩放-------------------------------------------
    var sclaeCon = document.getElementById("create_scalebar_con")
    var scaleBg = document.getElementById("create_scalebar_bg")
    var scaleDot = document.getElementById("create_scalebar_dot")
    scaleDot.style.left = 90 + "px"
    sclaeCon.addEventListener("mousedown", (e) => {
      if (e.x > 230) {
        var leftValue = 140 + "px"
      } else if (e.x < 55) {
        var leftValue = 0 + "px"
      } else {
        var leftValue = e.x - 40 + "px"
      }
      scaleDot.style.left = leftValue
      scaleDot.style.transition = "all"
      scaleDot.style.transitionDuration = "0.2s"
      scaleDot.style.transitionTimingFunction = "linear"
      var deg1 = ((e.x - 130) / 43).toFixed(2)
      if (deg1 > 2) {
        setDeg(2)
      } else if (deg1 < -2) {
        setDeg(-2)
      } else {
        setDeg(deg1)
      }
    })
    sclaeCon.addEventListener("mouseup", (e) => {
      if (e.x > 230) {
        var leftValue = 140 + "px"
      } else if (e.x < 55) {
        var leftValue = 0 + "px"
      } else {
        var leftValue = e.x - 40 + "px"
      }
      scaleDot.style.left = leftValue
      scaleDot.style.transition = "all"
      scaleDot.style.transitionDuration = "0.2s"
      scaleDot.style.transitionTimingFunction = "linear"
      var deg1 = ((e.x - 130) / 43).toFixed(2)
      if (deg1 > 2) {
        setDeg(2)
      } else if (deg1 < -2) {
        setDeg(-2)
      } else {
        setDeg(deg1)
      }
    })
  }, [])
  //缩放数据:-2π ~ 2π
  console.log("size&&deg", size, deg)

  return (
    <div>
      <div id="create_size">
        <div className="create_processbar">
          <span>大小</span>
          <div id="create_sizebar_con">
            <div id="create_sizebar_bg" >
              <span id="create_sizebar_dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="create_processbar">
        <span>缩放</span>
        <div id="create_scalebar_con">
          <div id="create_scalebar_bg" >
            <span id="create_scalebar_dot"></span>
          </div>
        </div>
      </div>
    </div>

  )
};


export default Slid