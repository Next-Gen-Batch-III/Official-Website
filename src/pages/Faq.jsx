import FaqQuestion from "@/components/ui/FaqQuestion";
import Logo from "../assets/logo/logoWhiteNobg.png";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import faqs from "@/data/faq";
import { useState } from "react";

const Faq = () => {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.currentTarget.reset();
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="flex flex-col">
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4 bg-brand-primary section-padding">
                <div className="flex flex-col gap-15">
                    <div className="flex flex-col gap-2 text-white">
                        <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
                        <p className="text-[1.25rem]">Find quick answers to common questions about our program.</p>
                    </div>
                    <div>
                        <img src={Logo} alt="Next Gen Logo" className="w-full max-w-xs" />
                    </div>
                </div>
                <div className="faq-container flex flex-col gap-4 max-h-120 overflow-y-scroll no-scrollbar">
                    {faqs.map((faq, index) => (
                        <FaqQuestion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </section>
            <section className="section-padding flex flex-col gap-10 items-center">
                    <div className="text-center">
                        <h1 className="font-bold text-[2rem] text-brand-primary"><span className="text-brand-secondary-orange">If you have any questions</span><br/>Please do not hesitate to send us a message</h1>
                    </div>
                    <form className="w-full md:w-7/10 flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row w-full gap-4">
                                <input type="text" placeholder="Name*" required  name="name" className="border border-neutral-400 rounded-3xl px-6 py-2 bg-neutral-100 grow"/>
                                <input type="email" placeholder="Email*" required name="email" className="border border-neutral-400 rounded-3xl px-6 py-2 bg-neutral-100 grow"/>
                            </div>
                            <textarea placeholder="Message*" name="message" required className="w-full border h-62 border-neutral-400 bg-neutral-100 rounded-3xl px-6 py-5 resize-none"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="primary" type="submit" shadowColor="#666666">Send Message</Button>
                        </div>
                    </form>
            </section>
            <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
                <div className="relative flex max-w-sm flex-col items-center gap-5 px-8 py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-secondary-green text-3xl text-brand-secondary-green font-bold">
                        ✓
                    </div>
                    <p className="text-xl font-bold leading-snug text-brand-primary">Your feedback has been submited successfully!</p>
                    <button
                        type="button"
                        onClick={() => setIsSuccessModalOpen(false)}
                        className="bg-brand-secondary-orange px-7 py-2 font-bold uppercase transition-opacity hover:opacity-90 cursor-pointer text-white"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default Faq;
