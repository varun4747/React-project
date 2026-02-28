import CreatingContext from "./ContextCreate";
export default function child2(){
    return(
        <div>
            <CreatingContext.Consumer>
                {(data: any)=>{
                    return(
                        <>
                        <h2>child2 component</h2>
                        <h3>{data[0]}</h3>
                        <h3>{data[1]}</h3>
                        </>
                    );
                }}
            </CreatingContext.Consumer>
        </div>
    );
    
}

