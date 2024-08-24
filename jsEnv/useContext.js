//=====================    useContext  ====================== 
// Basically avoiding props drilling 
// in this we can send data and function from provider to child Component

// one File
import {createContext, useEffect} from 'react';
export default noteContext = createContext();


// second File
import React from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const data = {
        name:"Sunil",
        class:"First"
    }
    const [state, setState] = useState(data)
    const update = () => {
        setState(...state,{name:"Prajapati",class:"second"})
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;


// third File
// now wrap the root file with NoteState


// fourth step
import { useContext } from 'react';
import NoteContext from './noteContext'
const contextData = useContext(noteContext)

useEffect(() => {
    contextData.update()
},[])

<h1>{contextData?.state?.name}</h1>

