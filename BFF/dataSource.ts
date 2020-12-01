import { RESTDataSource } from 'apollo-datasource-rest';

const API_URL = 'https://restcountries.eu/rest/v2';

export class ProcotizaAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = API_URL;
    }
    async getAllCountries() {
        return this.get("/all");
    }
    async getCountryByName(name: string) {
        return this.get(`/name/${name}`);
    }
}

export const dataSources = () => ({ProcotizaAPI : new ProcotizaAPI()});