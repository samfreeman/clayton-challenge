
import React, { Component } from 'react'
import { style } from 'typestyle'

import { InventoryTab } from './InventoryTab'


const tabsClass = style({
	$debugName: 'inventoryTabs',
	display: 'grid',
	gridTemplateColumns: '10em 10em',
	gridTemplateAreas: "'INVENTORY AVAILABLE'"
})


type Props = {
	useInventory: boolean
	onUseInventoryChanged: (value: boolean) => void
}


export class InventoryTabs extends Component<Props> {
	render() {
		const { useInventory, onUseInventoryChanged } = this.props
		return (
			<div className={tabsClass}>
				<InventoryTab
					text='Inventory'
					gridArea='INVENTORY'
					selected={useInventory}
					onSelected={() => onUseInventoryChanged(true)}
				/>
				<InventoryTab
					text='Available'
					gridArea='AVAILABLE'
					selected={!useInventory}
					onSelected={() => onUseInventoryChanged(false)}
				/>
			</div>
		)
	}
}
