
import React, { Component } from 'react'
import { style, classes } from 'typestyle'


const thumbnailClass = style({
	$debugName: 'homeThumbnail'
})


type Props = {
	url: string,
	gridArea: string
}


export class HomeThumbnail extends Component<Props> {
	render(){
		const { url, gridArea } = this.props
		return (
			<img
				className={classes(thumbnailClass, style({gridArea: gridArea}))}
				alt='Thumbnail'
				src={url}
				width='200px'
			/>
		)
	}
}
