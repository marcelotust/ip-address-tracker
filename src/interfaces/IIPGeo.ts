export interface IIPgeo {
    ip: string;
    location: {
        country: string;
        region: string;
        timezone: string;
    };
    domains: string[];
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    };
    isp: string;
}