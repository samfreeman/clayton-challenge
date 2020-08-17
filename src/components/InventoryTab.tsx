
import React, { Component } from 'react'
import { style, classes } from 'typestyle'
import { em } from 'csx'


const tabClass = style({
	$debugName: 'inventoryTab',
	textTransform: 'uppercase',
	fontSize: em(.75),
	fontWeight: 'bold',
	color: 'black',
	paddingBottom: em(.8),
	marginRight: em(5),
	borderBottom: '1px solid black',
	textAlign: 'center',
	cursor: 'pointer'
})


type Props = {
	text: string,
	selected: boolean,
	onSelected: () => void,
	gridArea: string
}


export class InventoryTab extends Component<Props> {
	render(){
		const { text, selected, onSelected, gridArea } = this.props
		const finalClass = classes(
			tabClass,
			style({ gridArea: gridArea }),
			selected && style({color: 'blue', borderBottom: '1px solid blue'}))
		return (
			<div className={finalClass} onClick={onSelected}>{text}</div>
		)
	}
}
