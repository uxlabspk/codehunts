import FilledButton from "./Buttons/FilledButton.jsx";


export default function Hero() {
    return (
        <section id="home" className="relative bg-gray-50 sm:h-[90vh] h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Adding Background Animation */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply blur-2xl opacity-30 blob-animate z-0"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-30 blob-animate z-0"></div>

            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-2xl opacity-30 blob-animate" style={{ animationDuration: '10s' }}></div>
            <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-20 blob-animate" style={{ animationDuration: '15s' }}></div>

            {/* Content */}
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
                </div>
                <div className="mt-4">
                    <a
                        href="https://www.trustpilot.com/evaluate/codehuntspk.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex underline items-center text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                        Review us on Trustpilot
                    </a>
                </div>
            </div>
        </section>

    )
}