import React from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqsData = [
    {
      question: "Lightning-Fast Performance",
      answer: "Built with speed — minimal load times and optimized rendering.",
    },
    {
      question: "Fully Customizable Components",
      answer: "Easily adjust styles, structure, and behavior to match your project needs.",
    },
    {
      question: "Responsive by Default",
      answer: "Every component is responsive by default — no extra CSS required.",
    },
    {
      question: "Tailwind CSS Powered",
      answer: "Built using Tailwind utility classes — no extra CSS or frameworks required.",
    },
    {
      question: "Dark Mode Support",
      answer: "All components come ready with light and dark theme support out of the box.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="flex flex-col items-center text-center text-slate-800 px-4 py-10">
        <p className="text-base font-medium text-indigo-600">FAQ</p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-2">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-500 mt-4 max-w-md">
          Proactively answering FAQs boosts user confidence and cuts down on
          support tickets.
        </p>

        <div className="max-w-xl w-full mt-8 flex flex-col gap-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-indigo-100 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Question */}
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-left cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium">{faq.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`px-4 text-sm text-slate-500 transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-40 opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
