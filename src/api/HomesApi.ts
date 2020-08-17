
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import * as DTO from './DTO'


const rootUrl = 'https://fast-everglades-97829.herokuapp.com/homes'


export class HomesApi {
	private api: AxiosInstance

	constructor(){
		this.api = axios.create({baseURL: rootUrl})
	}

	get = (): Promise<DTO.Home[]> => {
		return new Promise((resolve, reject) => {
			this.api.get<DTO.Homes>(rootUrl)
				.then(response => resolve(response.data.Homes))
				.catch(e => reject(e))
		})
	}
}

export { DTO }
