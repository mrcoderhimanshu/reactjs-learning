import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();
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
            if(err.name === 'AbortError'){
                console.log('Request is abort.');
            }else{
                setError(err.message);
                setLoading(false);
            }
        })
        return () => abortCont.abort();
    },[url]);
    return {data, loading, error}
}
export default useFetch;