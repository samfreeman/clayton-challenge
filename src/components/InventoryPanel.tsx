
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { style } from 'typestyle'
import { em } from 'csx'

import { homesService } from '../services/HomesService'
import { Home } from './Home'
import { InventoryHeader } from './InventoryHeader'
import { InventoryTabs } from './InventoryTabs'
import { InventorySearchBox } from './InventorySearchBox'


const inventoryClass = style({
	$debugName: 'inventoryPanel',
	marginLeft: em(10),
	marginRight: em(10),
	marginTop: em(4),
	marginBottom: em(4),
	paddingLeft: em(10),
	paddingRight: em(10),
	paddingTop: em(4),
	paddingBottom: em(4),
	border: '1px solid #999'
})


@observer
export class InventoryPanel extends Component {
	render() {
		return (
			<div className={inventoryClass}>
				<InventoryHeader text='Home Inventory' />
				<InventoryTabs
					useInventory={homesService.useInventory}
					onUseInventoryChanged={homesService.setUseInventory}
				/>
				<InventorySearchBox
					onSearchTextChanged={homesService.setSearchFilter}
				/>
				{homesService.homes.map(home => <Home key={home.Id} home={home} />)}
			</div>
		)
	}
}
