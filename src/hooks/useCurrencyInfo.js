import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())   //as most api return reslt in string, so we need to convert it to json
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data;    
}

export default useCurrencyInfo;