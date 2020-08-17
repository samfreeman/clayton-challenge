
import { observable, computed, action } from 'mobx'
import { DTO, HomesApi } from '../api/HomesApi'


class HomesService {
	private _listOfHomes: DTO.Home[]
	@observable private _homes: DTO.Home[]
	@observable private _useInventory: boolean
	@observable private _searchFilter: string

	constructor() {
		this._listOfHomes = []
		this._homes = []
		this._useInventory = true
		this._searchFilter = ''
		this._getHomes()
	}

	@computed get homes(): DTO.Home[] {
		return this._homes
	}

	@computed get useInventory(): boolean {
		return this._useInventory
	}

	@action setUseInventory = (value: boolean): void => {
		this._useInventory = value
		this._updateHomes()
	}

	@computed get searchFilter(): string {
		return this._searchFilter
	}

	@action setSearchFilter = (value: string): void => {
		this._searchFilter = value
		this._updateHomes()
	}

	@action private _getHomes = async(): Promise<void> => {
		this._listOfHomes = await (new HomesApi()).get()
		console.log(this._listOfHomes)
		this._updateHomes()
	}

	private _updateHomes = (): void => {
		this._homes.splice(0, this._homes.length)
		this._homes.push(
			...this._listOfHomes
				.filter(home =>
					this.useInventory == !home.IsModel
					&& this._matchesSearchFilter(home))
				.map(home => ({
					...home,
					Description: `${home.Description[0]}${home.Description.slice(1).toLowerCase()}`
				})))
	}

	private _matchesSearchFilter = (home: DTO.Home) : boolean => {
		const filter = this.searchFilter.toLowerCase()
		return !filter
			|| home.Description.toLowerCase().includes(filter)
			|| home.HomeId.toLowerCase().includes(filter)
	}
}

export const homesService = new HomesService()
