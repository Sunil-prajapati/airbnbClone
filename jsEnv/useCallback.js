// useMemo does not return the function only return value 
// callBack returning entire function 
// when you have to create a function only one time
import {useCallback, useState} from 'react'
const [number,setNumber] = useState(0)
const getItems = useCallback(() => {
    return [number,number +1,number +2 ]
},[number])