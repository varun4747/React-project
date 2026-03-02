import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement } from "./slices/CounterSlice";

export default function Counter() {
    const counterValue = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="container"style={{textAlign:"center"}}>
            <div className="row">
                <div className="col-lg">
                    <h2 className="mx-5 text-success" >Counter:{counterValue}</h2>
                    <button className="btn btn-primary me-2" onClick={() => dispatch(increment({}))}>Increment</button>
                    <button className="btn btn-danger me-2" onClick={() => dispatch(reset({}))}>Reset</button>
                    <button className="btn btn-warning me-2" onClick={() => dispatch(decrement({}))}>Decrement  </button>

                </div>

            </div>

        </div>
    );
}