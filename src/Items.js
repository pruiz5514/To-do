import './Items.css'

function Items (props){
    return(
        <li>
        <span className="check">V</span>

        <p>{props.text}</p>

        <span className="delete">X</span>
    </li>
    )

}

export {Items}