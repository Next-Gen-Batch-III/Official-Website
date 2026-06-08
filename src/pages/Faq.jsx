import FaqQuestion from "@/components/ui/FaqQuestion";
import Logo from "../assets/logo/logoWhiteNobg.png";
import Button from "@/components/ui/Button";
import faqs from "@/data/faq";
const Faq = () => {
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
                    <form className="w-full md:w-7/10 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row w-full gap-4">
                                <input type="text" placeholder="Name*" required  name="name" className="border border-neutral-400 rounded-3xl px-6 py-2 bg-neutral-100 grow"/>
                                <input type="email" placeholder="Email*" required name="email" className="border border-neutral-400 rounded-3xl px-6 py-2 bg-neutral-100 grow"/>
                            </div>
                            <textarea placeholder="Message" name="message" className="w-full border h-62 border-neutral-400 bg-neutral-100 rounded-3xl px-6 py-5 resize-none"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="primary" type="submit" shadowColor="#666666">Send Message</Button>
                        </div>
                    </form>
            </section>
        </div>
    );
}

export default Faq;
