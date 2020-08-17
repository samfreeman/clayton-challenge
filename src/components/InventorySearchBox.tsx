
import React, { Component } from 'react'
import { style } from 'typestyle'
import { em } from 'csx'


const searchClass = style({
	$debugName: 'inventorySearch',
	paddingLeft: em(1),
	paddingTop: em(1),
	paddingBottom: em(1),
	border: 'none',
	height: em(1),
	marginLeft: em(1),
	marginTop: em(1),
	marginBottom: em(1),
})


type Props = {
	onSearchTextChanged: (value: string) => void
}


export class InventorySearchBox extends Component<Props> {
	render() {
		const { onSearchTextChanged } = this.props
		return (
			<input 
				className={searchClass}
				type='text'
				placeholder='&#x1F50D; Search for a home...'
				onChange={e => onSearchTextChanged(e.currentTarget.value)}
			/>
		)
	}
}
