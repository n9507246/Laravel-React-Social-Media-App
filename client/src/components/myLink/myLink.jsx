import { Link } from "react-router-dom";

export default function(props){
    
    return(
        <Link onClick={()=>{window.scrollTo(0, 0);}} {...props}/> 
    )
}