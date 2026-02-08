interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => (
  <div className="rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-white/[0.12]">
    <h3 className="mb-3 text-lg font-semibold text-white">{question}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
  </div>
);

export default FAQ;
