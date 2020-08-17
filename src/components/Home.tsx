
import React, { Component } from 'react'
import { style } from 'typestyle'
import { em } from 'csx'

import { DTO } from '../api/HomesApi'
import { HomeTitle } from './HomeTitle'
import { HomeData } from './HomeData'
import { HomeThumbnail } from './HomeThumbnail'


const homeClass = style({
	$debugName: 'home',
	display: 'grid',
	gridTemplateColumns: '30em 10em',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `
		"TITLE TITLE THUMB"
		"DATA1 DATA2 THUMB"
	`,
	padding: em(2)
})


type Props = {
	home: DTO.Home
}

export class Home extends Component<Props>{
	render() {
		const home = this.props.home
		return (
			<div className={homeClass}>
				<HomeTitle
					gridArea='TITLE'
					text={home.Description}
				/>
				<HomeData
					gridArea='DATA1' 
					label={home.IsModel ? 'Model #' : 'Stock #'}
					value={home.HomeId}
				/>
				<HomeThumbnail
					gridArea='THUMB'
					url={home.ThumbnailImage}
				/>
			</div>
		)
	}
}
