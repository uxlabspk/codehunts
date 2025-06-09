import FilledButton from "./Buttons/FilledButton.jsx";
import OutlineButton from "./Buttons/OutlineButton.jsx";


export default function Hero() {
    return (
        <section id="home" className="bg-gray-50 sm:h-[90vh] h-[80vh] flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Innovative Software Solutions for Your Business
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    We are a leading software development company dedicated to providing cutting-edge solutions
                    tailored to meet your specific business needs.
                </p>
                <div className="flex items-center justify-center gap-2 flex-col sm:flex-row">
                    <FilledButton text={"Get Started"} to={"/"} style={"px-8 py-3 sm:w-42 w-96"} />
                    <OutlineButton text={"Trustpilot"} to={"/"} style={"px-8 py-3 sm:w-42 w-96"} />
                </div>
            </div>
        </section>

    )
}