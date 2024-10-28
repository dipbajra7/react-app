import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./redux/ReduxStore";

//useState hook ------------------------------------------------

export function Counter() {
    const [currentCount, setCurrentCount] = useState(0)
    const increment = () => setCurrentCount(currentCount + 1)

    return (
        <>
            <div>{currentCount} </div>
            < button type="button" className="btn btn-primary" onClick={
                increment
            } > Click Me </button>
        </>
    )
}


export function TextUpdater() {
    const [text, setText] = useState("Test");

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
    
    //setText(event.target.value)
    return (
        <>
            <h1> {text} </h1>
            < input onChange={changeText} />
        </>
    )
}

//useReducer hook--------------------------------------------------------------
//useReducer hook is used to manage multiple states at the same time.

export function UseReducerHook() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { currentCount: state.currentCount + 1, showText: state.showText }
            case "toggleText":
                return { currentCount: state.currentCount, showText: !state.showText }
            default:
                return state;
        }

    }
    const [state, dispatch] = useReducer(reducer, { currentCount: 0, showText: true });
    return (
        <>
            <div>{state.currentCount} </div>
            < button type="button" className="btn btn-primary" onClick={() => {
                dispatch({ type: "increment" });
                dispatch({ type: "toggleText" })
            }

            }> Increment Count </button>
            {state.showText && <h1> Test </h1>}

        </>
    )
} 

export function DisplayBackendData() {
    const [backendData, setBackendData] = useState("");
    axios.get('http://localhost:8081/api/home')
        .then(response => setBackendData(JSON.stringify(response.data)))
        .catch(error => console.log(error))
       
    return (
        <>
       
        <h1>{backendData}</h1>
        
        

        </>
    )
}



export function Test() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log('The count is ', num)
    }, [num])

    const increment = () => (
        setNum(num + 1)
    )

    const decrement = () => (
        setNum(num - 1)
    )


    const currentCount = useSelector((state:RootState) => (state?.counter.value))
   
    return (
        <>
        <h1>{num}</h1>
        <button key='increment' type="button" className="btn btn-secondary" onClick={increment}>Increment</button>
        <button key='decrement' type="button" className="btn btn-secondary" onClick={decrement}>Decrement</button>

        <h2>this is counter with redux inside another component</h2>
        <h3>{currentCount}</h3>
        </>
    )
}