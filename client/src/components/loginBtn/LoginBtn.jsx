import { useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"

export default function(){

    const auth = useAuth()
    const navigate = useNavigate()
    return(
        <button onClick={
            (e) => {
                e.preventDefault()
                login()
                navigate('/', {replace:true})
            }
        }>Login</button>
    )
}