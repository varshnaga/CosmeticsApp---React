import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_BRANDS } from "../utils/constants";

let useShopBrands = () => {
    const [listOfBrands, setListOfBrands] = useState(ALL_BRANDS);
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