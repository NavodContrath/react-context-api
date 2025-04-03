import { useContext } from "react"
import AlertContext from "../contexts/AlertContext"
export default function Alert() {
    const { type, error } = useContext(AlertContext)
    if (!error) return null;
    return (
        <>
            <div className="alert-container">
                <div className={`alert ${type || 'error'} text-info border-bottom`}>
                    {error}
                </div>
            </div>
        </>
    )
}