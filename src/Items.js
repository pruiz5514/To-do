import './Items.css'
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Items (props){
    return(
        <li>
        <span className={`check ${props.completed && 'checkCompleted'}`} onClick={props.onComplete}><FaCheck/> </span>

        <p className={`taskSpec ${props.completed && 'taskSpec-completed'}`}>{props.text}</p>

        <span className={`delete ${props.completed && 'delete-completed'}`} onClick={props.onDelete}> <IoClose/> </span>
    </li>
    )

}

export {Items}