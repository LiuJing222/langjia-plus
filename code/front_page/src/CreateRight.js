import React from 'react'
import Slid from './Slid';
import Panorama from './Panorama';

const CreateRight = () => {
  return (
    <div className='createSiderBox' style={{width:315}} >
        <Panorama></Panorama>
        <Slid></Slid>
    </div>
  )
}

export default CreateRight