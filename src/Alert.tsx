import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export function Alert({ children }: Props) {
    return (

        <div className="alert alert-danger" role="alert">
            {children}
        </div>

    )
}