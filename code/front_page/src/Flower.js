import React from 'react'
import './Flower.css'

const Flower = () => {
  return (
    <div class="out">
	<div class="fade-in">
		<div class="container">
			<div class="one common"></div>
			<div class="two common"></div>
			<div class="three common"></div>
			<div class="four common"></div>
			<div class="five common"></div>
			<div class="six common"></div>
			<div class="seven common"></div>
			<div class="eight common"></div>
		</div>
		<div className='flower_click'>点击开始设计</div>
		{/* <div class="bar">
			<div class="progress"></div>
		</div> */}
	</div>
</div>
  )
}

export default Flower