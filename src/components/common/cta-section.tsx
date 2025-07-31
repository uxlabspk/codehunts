import { Button } from "../ui/button";
import {Link} from "react-router-dom";

export default function CTASection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
                <p className="text-indigo-100 text-xl mb-8">
                    Let's discuss how our team can help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to={'/contact-us'}>
                        <Button
                            size={'md'}
                            className={'rounded-full px-12 py-7 font-medium'}
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}