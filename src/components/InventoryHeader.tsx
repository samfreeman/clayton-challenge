
import React, { Component } from 'react'
import { style } from 'typestyle'
import { em } from 'csx'


const headerClass = style({
	fontFamily: "'Roboto', sans- serif",
	fontSize: em(1.4),
	fontWeight: 'bold',
	paddingBottom: em(2)
})


type Props = {
	text: string
}


export class InventoryHeader extends Component<Props> {
	render() {
		const text = this.props.text
		return (
			<div className={headerClass}>{text}</div>
		)
	}
}
