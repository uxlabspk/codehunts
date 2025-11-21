import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Ready to Work Together?</h2>
        <p className="mb-8 text-xl text-indigo-100">
          Let's discuss how our team can help bring your ideas to life.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to={"/contact-us"}>
            <Button size={"md"} className={"rounded-full px-12 py-7 font-medium"}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
