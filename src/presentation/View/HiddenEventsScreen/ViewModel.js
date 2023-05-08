
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterAll } from '../../../domain/utils'

export const useViewModel=()=>{
    const result = useSelector((state) => state.userdata.items)
    const selectFilter = { "className": "", "myClassToggle": false, "parallels": { "1": true, "10": true, "11": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true }, "refreshItems": true, "value": "Все" }
    const access = 'Учитель'
    const refreshItems = useSelector((state) => state.filter.refreshItems)
    const [response, setResponse] = useState();

    useEffect(() => {
      setResponse(filterAll(result, selectFilter, access, true))
    }, [refreshItems]);


    return {
        response
    }
}