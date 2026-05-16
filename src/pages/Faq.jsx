import FaqQuestion from "@/components/ui/FaqQuestion";
import Logo from "../assets/logo/logoWhiteNobg.png";
import Button from "@/components/ui/Button";
const Faq = () => {
    const faqData = [
        {
            question: "What is Next Gen?",
            answer: "Next Gen is a student-led initiative that aims to bridge the gap between academia and industry by providing students with real-world experience through internships, workshops, and networking events."
        },
        {
            question: "Who can join Next Gen?",
            answer: "Next Gen is open to all students who are interested in gaining practical experience and connecting with industry professionals. We welcome students from all disciplines and backgrounds."
        },
        {
            question: "How can I join Next Gen?",
            answer: "You can join Next Gen by filling out our online application form, which is available on our website. We review applications on a rolling basis and will contact you if you are selected to join our program."
        },
        {
            question: "What kind of opportunities does Next Gen offer?",
            answer: "Next Gen offers a variety of opportunities, including internships with our industry partners, workshops on professional development and technical skills, and networking events with industry professionals."
        },
        {
            question: "Is there a cost to join Next Gen?",
            answer: "No, there is no cost to join Next Gen. Our program is completely free for students, and we are committed to providing accessible opportunities for all."
        },
        {
            question: "How can I get involved with Next Gen as an industry partner?",
            answer: "If you are interested in partnering with Next Gen, please contact us through our website or email us at info@nextgen.com."
        }
    ];
    return (
        <div className="flex flex-col">
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4 bg-brand-primary px-5 py-10 lg:px-20">
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
                    {faqData.map((faq, index) => (
                        <FaqQuestion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </section>
            <section className="px-5 py-10 lg:px-20 flex flex-col gap-10 items-center">
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