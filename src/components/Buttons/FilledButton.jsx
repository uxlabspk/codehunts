import {Link} from "react-router-dom";


export default function FilledButton({ text, to, style = "" }) {
    return (
        <Link to={to} className={`${style} bg-amber-800 text-white  rounded-full hover:bg-amber-900 transition`}>
            {text}
        </Link>
    )
}