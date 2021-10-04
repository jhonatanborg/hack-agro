import api from "../config";

const getCompany = () =>
    api({
        method: "GET",
        url: "/company/0x248e4A9dA571a4549014FfBE690ae299be6088A1"
    });

const getStock = () =>
    api({
        method: "GET",
        url: "/inventory/0x67899097b9E707688DD12FCe8851F20B88f7620C",
    });
const getMoviments = () =>
    api({
        method: "GET",
        url: "/moves/0xaa6e85661141446e3e7C4355E4E376e3bE034AF8",
    });
const getSupplies = () =>
    api({
        method: "GET",
        url: "/supplies/0x308E23F7BEcAB8BE712831758A75Aa68243b861dr",
    });

export { getCompany, getSupplies, getMoviments, getStock }
