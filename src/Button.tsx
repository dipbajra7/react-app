import { ReactNode } from "react"
import { useDispatch } from "react-redux"
import { increment, decrement } from "./redux/counterSlice"

interface Props {
    children: ReactNode
    onClickButton: () => void

}

export function Button({ children, onClickButton }: Props) {
    const dispatch = useDispatch()
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={onClickButton}>{children}</button>
            <button type="button" className="btn btn-secondary">{children}</button>
            <button type="button" className="btn btn-success">{children}</button>
            <button type="button" className="btn btn-danger">{children}</button>
            <button type="button" className="btn btn-warning">{children}</button>
            <button type="button" className="btn btn-info">{children}</button>
            <button type="button" className="btn btn-light" onClick={() => dispatch(increment())}>increment using redux</button>
            <button type="button" className="btn btn-dark" onClick={() => dispatch(decrement())}>decrement using redux</button>

            <button type="button" className="btn btn-link">Link</button>
        </>
    )
}