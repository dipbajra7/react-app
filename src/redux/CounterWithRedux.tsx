import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./ReduxStore";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counterSlice";

export function CounterWithRedux() {
    const count = useSelector((state:RootState) => state?.counter);
    const dispatch = useDispatch();

    return (
        <>
        <h1> counter with redux</h1>
        <h1>{count.value}</h1>
        <button key='increment' type="button" className="btn btn-secondary" onClick={() => dispatch(increment())}>Increment</button>
        <button key='decrement' type="button" className="btn btn-secondary" onClick={() => dispatch(decrement())}>Decrement</button>
        <button key='increment' type="button" className="btn btn-secondary" onClick={() => dispatch(incrementByAmount(10))}>IncrementBy10</button>
        <button key='decrement' type="button" className="btn btn-secondary" onClick={() => dispatch(incrementByAmount(10))}>DecrementBy10</button>
        </>
    )
}