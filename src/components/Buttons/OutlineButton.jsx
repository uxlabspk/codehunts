import {Link} from "react-router-dom";


export default function OutlineButton({ text, to, style = "" }) {
    return (
        <Link to={to} className={`border-2 border-amber-800 text-amber-800  rounded-full hover:bg-amber-900 hover:text-white transition ${style}`}>
            {text}
        </Link>
    )
}