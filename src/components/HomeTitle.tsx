
import React, { Component } from 'react'
import { style, classes } from 'typestyle'


const titleClass = style({
	$debugName: 'homeTitle',
	fontWeight: 'bold'
})


type Props = {
	text: string,
	gridArea: string
}


export class HomeTitle extends Component<Props> {
	render() {
		const { text, gridArea } = this.props
		return (
			<div className={classes(titleClass, style({ gridArea: gridArea }))}>
				{text}
			</div>
		)
	}
}
