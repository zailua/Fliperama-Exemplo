import React from 'react'
import ReactRain from 'react-rain-animation'
import 'react-rain-animation/lib/style.css'
import './Rain.css'

const Rain = props => {
	return (
		<div className="Rain">
			<ReactRain numDrops="25" />
		</div>
	)
}

export default Rain
