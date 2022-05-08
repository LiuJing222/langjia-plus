import React,{useState, useEffect} from 'react'

const CreateWallHeight = () => {
    
  const [wallHeight, setWallHeight] = useState(2)

  useEffect(()=>{
    var wallHeightP = document.getElementById("create_wall_height_p")

    wallHeightP.addEventListener("onBlur",()=>{
        if(wallHeightP.target.value === ""){
            setWallHeight(2)
        }
    })
  },[])
   // -============================================墙高==============================================
   var wallHeightP = document.getElementById("create_wall_height_p")

   const changeWallHeight = (e) => {
     var v = e.target.value
     if (v > 10) {
       setWallHeight(10)
       console.log(">10")
     } else if (v < 0) {
       setWallHeight(0)
     } else {
       setWallHeight(v)
     }
   }



   console.log("wallHeight", wallHeight)
   localStorage.setItem("wallHeight", wallHeight)
  return (
    <div className="create_wall_height" >
        <span className="create_wall_height_span" >墙高</span>
        <input id="create_wall_height_input" value={wallHeight} onChange={(e) => { changeWallHeight(e) }} />
        <span className="create_wall_height_per">米</span>
    <p id="create_wall_height_p">墙高范围是0~10米</p>
  </div>  )
}

export default CreateWallHeight