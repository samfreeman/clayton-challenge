
import React, { Component } from 'react'
import { style, classes } from 'typestyle'
import { em } from 'csx'


const dataClass = style({
	$debugName: 'homeData',
	display: 'grid',
	gridTemplateRows: '1em 1em',
	gridTemplateAreas: `
		'LABEL'
		'VALUE'
	`
})

const labelClass = style({
	$debugName: 'homeDataLabel',
	fontSize: em(.7),
	gridArea: 'LABEL'
})

const valueClass = style({
	$debugName: 'homeDataValue',
	fontSize: em(.8),
	color: '#aaa',
	gridArea: 'VALUE'
})


type Props = {
	label: string,
	value: string,
	gridArea: string
}


export class HomeData extends Component<Props> {
	render(){
		const { label, value, gridArea } = this.props
		return (
			<div className={classes(dataClass, style({gridArea: gridArea}))}>
				<div className={labelClass}>{label}</div>
				<div className={valueClass}>{value}</div>
			</div>
		)
	}
}
