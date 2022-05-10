import React from 'react'
import './Panorama.css'

const Panorama = () => {
    return (
        <div id="copyid">
            <span>旋转</span>
            <input id="range" type="range" min="-360" max="360" defaultValue="0"  step="1" />
            <span id="value">0</span>
            <br />
            <span>上下</span>
            <input id="range2" type="range" min="-300" max="300" defaultValue="300" step="1" />
            <span id="value2">300</span>
        </div>
    )
}

export default Panorama
