
export type Homes = {
	Homes: Home[]
	OriginAbsoluteUri: null
	OriginBaseUrl: null
	OriginScheme: null
	InventoryAndModelDescriptions: null
	GoogleMapKey: null
}


export type Home = {
	Features: string[]
	ImagesCount: number
	Id: number
	IsMultiSection: boolean
	IsOnLand: boolean
	IsPreOwned: boolean
	Description: string
	HomeId: string
	IsModel: boolean
	ThumbnailImage: string
	SquareFeet: number
	Beds: number
	Baths: number
}
