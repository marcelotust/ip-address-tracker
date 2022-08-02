import { IIPgeo } from "../interfaces/IIPGeo";
import { Api } from "../providers";
const getData = (term: string) => {

  return Api.get<IIPgeo>(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_x7ymUnevjvM15SGKtNeaACSIvsGgE" +
    term
  );
};
export const IPGeoService = {
  getData,
};
