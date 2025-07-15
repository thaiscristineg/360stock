import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionBenefit({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-muted pb-4 cursor-pointer group"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between gap-4 transition-all hover:opacity-90">
              <div className="flex items-center gap-4">
                <div className="bg-accent/20 p-2 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-medium text-foreground">
                  {item.title}
                </h3>
              </div>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {isOpen && (
              <p className="mt-2 ml-14 text-sm leading-relaxed text-muted-foreground transition-all max-w-3xl">
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
