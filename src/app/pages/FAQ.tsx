import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  title: string;
  category: string;
  questions: Array<{ question: string; answer: string }>;
}

export function FAQ({ title, category, questions }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="header-margin" >
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-2">{title}</h1>
          <p className="opacity-90">{category}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-start space-x-3 flex-1">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm flex-shrink-0">
                    Q
                  </span>
                  <span className="pt-1">{item.question}</span>
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="bg-secondary text-foreground px-3 py-1 rounded text-sm flex-shrink-0">
                      A
                    </span>
                    <p className="pt-1 text-gray-700">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
