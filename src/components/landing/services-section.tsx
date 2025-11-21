import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { ChartNetwork, Cloud, Code2, Monitor, Paintbrush, Smartphone } from "lucide-react";

const ServiceSection = () => {
  return (
    <section id="services" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Comprehensive software solutions designed to transform your business operations and
            drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code2 className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Browser Sites</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Custom web applications built with modern technologies to deliver exceptional user
                experiences and robust functionality.
              </p>
              <div className={"mt-4"}>
                <Link to={"/web-development"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>Mobile App Development</CardTitle>
              <CardDescription>Mobile Apps</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Native and cross-platform mobile applications that engage users and expand your
                business reach across all devices.
              </p>
              <div className={"mt-4"}>
                <Link to={"/app-development"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Paintbrush className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>Graphics Designing</CardTitle>
              <CardDescription>Digital Illustrations</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Creative and impactful design solutions including branding, digital illustrations,
                and marketing materials to visually elevate your business.
              </p>
              <div className={"mt-4"}>
                <Link to={"/graphics-designing"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ChartNetwork className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>AI & Machine Learning</CardTitle>
              <CardDescription>Data Driven Insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Intelligent automation and data-driven insights to help your business make smarter
                decisions and improve efficiency.
              </p>
              <div className={"mt-4"}>
                <Link to={"/ai-development"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Monitor className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>Software Consulting</CardTitle>
              <CardDescription>Software Advice's</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Expert guidance on technology strategy, architecture design, and digital
                transformation initiatives.
              </p>
              <div className={"mt-4"}>
                <Link to={"/custom-software"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className={"mb-3 h-7 w-7 text-orange-400"} />
              <CardTitle>Cloud Solutions</CardTitle>
              <CardDescription>Scalable MicroServices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Scalable cloud infrastructure and migration services to optimize your business
                operations and reduce costs.
              </p>
              <div className={"mt-4"}>
                <Link to={"/cloud-solutions"} className={"text-sm text-orange-400 underline"}>
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
