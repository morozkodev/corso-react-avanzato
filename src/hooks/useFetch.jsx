import { useEffect, useState } from  'react';

function useFetch({providerFunc, initialParams}){
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [response, setResponse] = useState();
    const [params, setParams] = useState(initialParams);

    useEffect(() => {
        const fetch = async () => {
            setHasError(false);
            try{
                const { data } = await providerFunc(params);
                setResponse(data);
            }
            catch(error){
                setHasError(true);
            }
            setIsLoading(false);
        }
        fetch();
    }, [params]);
    return [{ isLoading, hasError, response }, setParams];
}

export default useFetch;