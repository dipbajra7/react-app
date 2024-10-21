import { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClickButton: () => void

}

export function Button({ children, onClickButton }: Props) {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={onClickButton}>{children}</button>
            <button type="button" className="btn btn-secondary">{children}</button>
            <button type="button" className="btn btn-success">{children}</button>
            <button type="button" className="btn btn-danger">{children}</button>
            <button type="button" className="btn btn-warning">{children}</button>
            <button type="button" className="btn btn-info">{children}</button>
            <button type="button" className="btn btn-light">{children}</button>
            <button type="button" className="btn btn-dark">{children}</button>

            <button type="button" className="btn btn-link">Link</button>
        </>
    )
}