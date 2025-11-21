import HeroSection from "@/components/common/hero-section.tsx";
import {
  BarChart,
  Building,
  ChartNetwork,
  DollarSign,
  Heart,
  LockKeyhole,
  MessageSquare,
  SlidersVertical,
  Trash2,
  Zap,
} from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import Feature from "@/components/services/features-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import UseCase from "@/components/services/usecases.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import TensorFlowIcon from "@/assets/AI_tech_stack/tensorflow.svg";
import PyTorchIcon from "@/assets/AI_tech_stack/pytorch.svg";
import KerasIcon from "@/assets/AI_tech_stack/keras.svg";
import ScikitLearnIcon from "@/assets/AI_tech_stack/scikitlearn.svg";

export default function AI() {
  const capabilities = [
    {
      icon: <BarChart className="h-7 w-7 text-indigo-600" />,
      title: "Predictive Analytics",
      description:
        "Forecast trends, identify patterns, and make data-driven decisions with our advanced predictive models that learn from historical data to anticipate future outcomes.",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-purple-600" />,
      title: "Natural Language Processing",
      description:
        "Enable your systems to understand, interpret, and generate human language with our NLP solutions for chatbots, sentiment analysis, and document processing.",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <Heart className="h-7 w-7 text-blue-600" />,
      title: "Computer Vision",
      description:
        "Extract meaningful information from images and videos with our computer vision solutions for object detection, facial recognition, and quality inspection.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <Zap className="h-7 w-7 text-green-600" />,
      title: "Machine Learning Models",
      description:
        "Custom machine learning models trained on your data to solve specific business problems, from recommendation systems to anomaly detection.",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <SlidersVertical className="h-7 w-7 text-orange-600" />,
      title: "Deep Learning",
      description:
        "Advanced neural networks and deep learning architectures for complex pattern recognition, image generation, and natural language understanding.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <LockKeyhole className="h-7 w-7 text-red-600" />,
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into your existing systems, applications, and workflows to enhance functionality and user experience.",
      iconBgColor: "bg-red-100",
    },
  ];

  const useCases = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Healthcare",
      description:
        "AI-powered diagnostic tools, predictive analytics for patient outcomes, medical image analysis, and personalized treatment recommendations.",
      features: ["Medical imaging analysis", "Drug discovery", "Patient risk prediction"],
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Finance",
      description:
        "Fraud detection, algorithmic trading, credit scoring, risk assessment, and personalized financial recommendations. ",
      features: ["Fraud detection", "Algorithmic trading", "Credit risk analysis"],
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality control, supply chain optimization, and production process automation.",
      features: ["Predictive maintenance", "Quality inspection", "Supply chain optimization"],
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Transform Your Business with Intelligent AI Solutions"}
        description={
          "Harness the power of artificial intelligence and machine learning to drive innovation, automate processes, and gain actionable insights from your data. We build intelligent systems that learn, adapt, and evolve with your business."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <ChartNetwork className={"mr-2 h-5 w-5"} />
            AI & Machine Learning
          </>
        }
      />

      {/* Service Overview */}
      <ServiceOverview
        title={"The Future of Business Intelligence"}
        description={
          "In today's data-driven world, artificial intelligence and machine learning are no longer futuristic concepts—they're essential tools for competitive advantage. Our AI solutions help you unlock the hidden value in your data, automate complex processes, and make smarter decisions faster than ever before."
        }
        description2={
          "From predictive analytics to natural language processing, we leverage cutting-edge AI technologies to solve real business challenges and create intelligent systems that continuously learn and improve."
        }
        card={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">92%</div>
              <div className="">Accuracy Rate</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">70%</div>
              <div className="">Process Automation</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">50+</div>
              <div className="">AI Models Deployed</div>
            </div>
          </div>
        }
        image={
          "https://images.unsplash.com/photo-1717501220725-83f151c447e7?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="bg-black px-4 py-20 sm:px-0">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our AI Capabilities</h2>
            <p className="mx-auto max-w-3xl text-xl">
              Comprehensive artificial intelligence and machine learning services to transform your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="bg-black px-4 py-4 sm:px-0 sm:py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Industry Use Cases</h2>
            <p className="mx-auto max-w-3xl text-xl">
              How AI and machine learning are transforming various industries
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <UseCase key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Tec Stack Section */}
      <section className="bg-black px-4 py-20 sm:px-0">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Technology Stack</h2>
            <p className="mx-auto max-w-3xl text-xl">
              We leverage the latest AI and machine learning frameworks and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <OurStackSection image={TensorFlowIcon} title={"TensorFlow"} />
            <OurStackSection image={PyTorchIcon} title={"PyTorch"} />
            <OurStackSection image={KerasIcon} title={"Keras"} />
            <OurStackSection image={ScikitLearnIcon} title={"Scikit-learn"} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
