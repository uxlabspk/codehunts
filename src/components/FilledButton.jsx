import {Link} from "react-router-dom";


export default function FilledButton({ text, to }) {
    return (
        <Link to={to} className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition">
            {text}
        </Link>
    )
}