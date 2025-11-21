export default function AboutSection() {
  return (
    <section className="bg-black px-4 sm:px-0 sm:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Why Choose Code HUNT'S?</h2>
            <p className="mb-6 text-lg leading-relaxed">
              With years of experience in software development, we understand the challenges
              businesses face in today's digital landscape. Our team of expert developers and
              consultants work closely with you to deliver solutions that not only meet your current
              needs but also scale with your future growth.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                Expert team of certified developers
              </li>
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                Agile development methodology
              </li>
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                24/7 support and maintenance
              </li>
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                Scalable and future-proof solutions
              </li>
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                Competitive pricing and transparent billing
              </li>
              <li className="flex items-center">
                <span className="mr-3 font-bold">✓</span>
                On-time project delivery guarantee
              </li>
            </ul>
          </div>

          <div className={"flex items-center justify-end"}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="About"
              className="w-full rounded-lg sm:w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
