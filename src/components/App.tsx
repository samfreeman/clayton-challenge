
import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { InventoryPanel } from './InventoryPanel'


@observer
export class App extends Component {
	render() {
		return (<InventoryPanel />)
	}
}
