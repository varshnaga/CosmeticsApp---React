import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_BRANDS } from "../utils/constants";

let useShopBrands = () => {
    const [listOfBrands, setListOfBrands] = useState(ALL_BRANDS);

    /* Temporarily removed since the mock API's reached the maximum limit */

    // useEffect(() => {
    //     fetchAllBrands();
    // }, []);

    // const fetchAllBrands = () => {
    //     axios
    //     .get(ALL_BRANDS)
    //     .then((response) => {
    //         setListOfBrands(response.data);
    //     });
    // }
    return listOfBrands;

}   

export default useShopBrands;