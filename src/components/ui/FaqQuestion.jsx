import { useState } from "react";

const FaqQuestion = ({ question, answer , key}) => {
    if (!question || !answer) throw new Error("Question and answer props are required for FaqQuestion component.");
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col gap-0" key={key}>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`text-black px-12.5 py-6 flex items-center justify-between rounded-lg cursor-pointer select-none transition-colors duration-300 ${isOpen ? "bg-neutral-200" : "bg-white"}`}
            >
                <p className="text-[1.25rem] font-bold">{question}</p>
                <div>
                    <svg 
                        className={`w-6 h-6 text-gray-800 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                </div>
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                <div className="overflow-hidden">
                    <div className="text-black bg-white px-12.5 py-6 rounded-lg">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqQuestion;