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
    sizeDot.style.left = 85 + "px"

    sizeCon.addEventListener("mouseup", (e) => {
      // console.log("sizeBg.getBoundingClientRect().left", sizeBg.getBoundingClientRect().left)
      var sizeBgLeftValue = sizeBg.getBoundingClientRect().left;
      // console.log(e.x)
      if (e.x > 170 + sizeBgLeftValue) {
        var leftValue = 170
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
      var size1 = parseInt((leftValue - 85) / 4.25)
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
    scaleDot.style.left = 85 + "px"

    sclaeCon.addEventListener("mouseup", (e) => {
      // console.log("scaleBg.getBoundingClientRect().left", scaleBg.getBoundingClientRect().left)
      var scaleBgLeftValue = sizeBg.getBoundingClientRect().left;
      // console.log(e.x)
      if (e.x > 170 + scaleBgLeftValue) {
        var leftValue = 170
      } else if (e.x < scaleBgLeftValue) {
        var leftValue = 0
      } else {
        var leftValue = e.x - scaleBgLeftValue
      }
      scaleDot.style.left = leftValue + "px"
      scaleDot.style.transition = "all"
      scaleDot.style.transitionDuration = "0.2s"
      scaleDot.style.transitionTimingFunction = "linear"
      var deg1 = ((leftValue - 85) / 42.5).toFixed(2)
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