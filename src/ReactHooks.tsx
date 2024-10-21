import React, { useReducer, useState } from "react";

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
    const test = () => null

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