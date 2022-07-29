import { IIPgeo } from '../interfaces/IIPGeo';
import { Api } from '../providers';
const getData = (ip : string) => Api.get<IIPgeo>("https://geo.ipify.org/api/v2/country?apiKey=at_x7ymUnevjvM15SGKtNeaACSIvsGgE" + ip);

export const IPGeoService = {
    getData,
}