import CreatingContext from './ContextCreate';

import { Child1 } from './Child1';
import Child2 from './Child2';

type DataType = {
    name: string;   
    age: string;

}

export default function HomeMain(){
const data: DataType[] = [{name: "John", age: "25"},{name: "Jane", age: "30"}];

    

    

    return(
        <>
        <CreatingContext.Provider value={data}>
            <Child1/>
            <Child2/>
        </CreatingContext.Provider>
        
        </>
    );
}