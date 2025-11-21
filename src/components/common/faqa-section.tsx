interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => (
  <div className="faq-item rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300">
    <h3 className="mb-3 text-xl font-bold text-gray-800">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
  // <AccordionItem
  //     value="item-1"
  //     className="rounded-2xl border border-gray-100 bg-gray-50 transition-all duration-300"
  // >
  //     <AccordionTrigger className="text-left px-6 py-4 text-xl font-bold text-gray-800">
  //         What is your return policy?
  //     </AccordionTrigger>
  //     <AccordionContent className="px-6 pb-6 text-gray-600">
  //         You can return any item within 30 days of purchase. Items must be in original condition and packaging.
  //     </AccordionContent>
  // </AccordionItem>
);

export default FAQ;
