//
// import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
//
// const teamMembers = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     role: "Chief Technology Officer",
//     bio: "10+ years of experience in full-stack development and system architecture. Passionate about scalable solutions.",
//     image: "https://placehold.co/400x400/6366f1/ffffff?text=AJ",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     id: 2,
//     name: "Sarah Chen",
//     role: "Lead Frontend Developer",
//     bio: "Specializes in React and modern JavaScript frameworks. Loves creating intuitive user experiences.",
//     image: "https://placehold.co/400x400/8b5cf6/ffffff?text=SC",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     id: 3,
//     name: "Marcus Williams",
//     role: "Backend Engineer",
//     bio: "Expert in cloud infrastructure and database optimization. Builds robust APIs and microservices.",
//     image: "https://placehold.co/400x400/0ea5e9/ffffff?text=MW",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     id: 4,
//     name: "Elena Rodriguez",
//     role: "UI/UX Designer",
//     bio: "Creates beautiful, user-centered designs. Focuses on accessibility and inclusive design principles.",
//     image: "https://placehold.co/400x400/10b981/ffffff?text=ER",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     id: 5,
//     name: "David Kim",
//     role: "DevOps Specialist",
//     bio: "Automates deployment pipelines and ensures system reliability. Kubernetes and Docker expert.",
//     image: "https://placehold.co/400x400/f59e0b/ffffff?text=DK",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     role: "Quality Assurance Lead",
//     bio: "Ensures software excellence through comprehensive testing strategies and automation frameworks.",
//     image: "https://placehold.co/400x400/ef4444/ffffff?text=PS",
//     social: {
//       github: "#",
//       linkedin: "#",
//       twitter: "#"
//     }
//   }
// ];
//
//
// export default function Team() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">TechFlow</h1>
//               <p className="text-gray-600">Innovative Software Solutions</p>
//             </div>
//             <nav className="hidden md:block">
//               <ul className="flex space-x-8">
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a></li>
//                 <li><a href="#" className="text-indigo-600 font-medium">Our Team</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//
//       {/* Hero Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//
//           >
//             Meet Our <span className="text-indigo-600">Exceptional</span> Team
//           </h1>
//           <p
//             className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
//
//           >
//             We're a passionate group of developers, designers, and innovators dedicated to creating
//             cutting-edge software solutions that drive business success.
//           </p>
//         </div>
//       </section>
//
//       {/* Team Grid */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//
//           >
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center mb-6">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-20 h-20 rounded-full object-cover"
//                     />
//                     <div className="ml-4">
//                       <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//                       <p className="text-indigo-600 font-medium">{member.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6">{member.bio}</p>
//                   <div className="flex space-x-4">
//                     <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
//                       <Github size={20} />
//                     </a>
//                     <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
//                       <Linkedin size={20} />
//                     </a>
//                     <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
//                       <Twitter size={20} />
//                     </a>
//                     <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
//                       <Mail size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Values Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               These principles guide everything we do and define who we are as a team.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Innovation",
//                 description: "We constantly explore new technologies and approaches to solve complex problems.",
//                 icon: "💡"
//               },
//               {
//                 title: "Collaboration",
//                 description: "We believe the best solutions emerge from diverse perspectives working together.",
//                 icon: "🤝"
//               },
//               {
//                 title: "Quality",
//                 description: "We are committed to delivering exceptional software that exceeds expectations.",
//                 icon: "⭐"
//               },
//               {
//                 title: "Growth",
//                 description: "We invest in our team's development and encourage continuous learning.",
//                 icon: "🚀"
//               }
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl"
//
//               >
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//
//


import TeamSection from "@/components/landing/team-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";


export default function Team() {
    return (
        <>
            <div className={'bg-black'}>
                <div className={'pt-32'}>
                    <TeamSection />
                </div>
            </div>
            <OurValues />
            <CTASection />
        </>
    )
}