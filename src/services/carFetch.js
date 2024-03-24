import luxeApi from "./api";

const getQueriedCars = async ({carType}) => {
    const carModelsUrl = `/cars?q=${carType}`;
    
    try {
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

export { getQueriedCars };