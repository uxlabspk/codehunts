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
import { motion } from "framer-motion";

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
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">92%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">70%</div>
              <div className="text-sm text-muted-foreground">Process Automation</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-muted-foreground">AI Models Deployed</div>
            </div>
          </div>
        }
        image={
          "https://images.unsplash.com/photo-1717501220725-83f151c447e7?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Capabilities
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our AI Capabilities</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Comprehensive artificial intelligence and machine learning services to transform your
              business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Feature {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Use Cases
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Industry Use Cases</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              How AI and machine learning are transforming various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <UseCase {...useCase} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tec Stack Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Technology
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">AI & ML Frameworks</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Industry-leading frameworks for building intelligent, production-ready AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[TensorFlowIcon, PyTorchIcon, KerasIcon, ScikitLearnIcon].map((image, index) => {
              const titles = ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <OurStackSection image={image} title={titles[index]} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
