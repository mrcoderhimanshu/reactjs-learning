import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        fetch(url).then(res => {
            if(res.ok !== true){
                throw Error("Could not find the address.");
            }
            return res.json();
        }).then(data =>{
            setData(data);
            setLoading(false);
            setError(null);
        }).catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    },[url]);
    return {data, loading, error}
}
export default useFetch;