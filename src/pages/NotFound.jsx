import NotFoundImg from "../assets/error.png";
import FilledButton from "../components/Buttons/FilledButton.jsx";

export default function NotFound() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center">
            <img src={NotFoundImg} alt="404"/>
            <h1 className=" text-gray-900 text-3xl font-semibold mt-4">404 | Page Not Found</h1>
            <p className="mt-4">The specified file was not found on this website. Please check the URL for mistakes and
                try again.</p>
            <FilledButton to={"/"} text={"Go Home"} style={"px-12 py-3 mt-8"}/>
        </section>
    )
}