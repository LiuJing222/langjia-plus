import React from 'react'
import Slid from './Slid';
import Panorama from './Panorama';

const CreateRight = () => {
  return (
    <div  data-step="9" data-title="配置栏" data-intro="方便操作，随时调整"  className='createSiderBox' style={{width:300}} >
        <Panorama></Panorama>
        <Slid></Slid>
    </div>
  )
}

export default CreateRight