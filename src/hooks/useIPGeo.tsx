import { useCallback, useState } from "react"
import { IIPgeo } from "../interfaces/IIPGeo";
import { IPGeoService } from "../services/IPGeoService"

export const useIPGeo = () => {
    const [dataResponse, setDataResponse] = useState<IIPgeo>();

    const getIPGeo = useCallback( async (term : string) => {
        const {status, data} = await IPGeoService.getData(term);

        if (status != 200) throw new Error();
        setDataResponse(data);
    }, [])

    return {
        dataResponse,
        getIPGeo,
    }
}