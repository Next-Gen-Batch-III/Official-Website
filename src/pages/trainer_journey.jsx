import trainerJourneyImage from '../assets/journey/trainer_journey.png';
import bookIcon from '../assets/icon_image/book.png';
import diagramIcon from '../assets/icon_image/diagram.png';
import userIcon from '../assets/icon_image/user.png';
import addIcon from '../assets/icon_image/add.png';
import checkIcon from '../assets/icon_image/checked.png';
import qrImage from '../assets/journey/trainerRegisterQR.jpg';
import listIcon from '../assets/icon_image/list.png';
import smartphoneIcon from '../assets/icon_image/smartphone.png';
import phoneIcon from '../assets/icon_image/phone.png';


const TrainerJourney = () => {
  return (
    <div>
        <section className="bg-brand-primary grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-12 md:py-32 items-center">
            {/* Text Section */}
            <div className="flex flex-col gap-2 items-start items-center px-4 md:px-16">
                <h1 className="font-bold text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] text-white">
                    Become a Trainer for the
                    <span className="text-brand-secondary-orange"><br />Next-Gen Engagement</span>
                    <span className="text-brand-secondary-orange"><br />Program</span>
                </h1>

                <p className="text-[1.25rem] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center items-center mt-10 lg:mt-0 px-4 md:px-16">
  
                    <div className="w-full lg:w-full h-auto overflow-hidden">
                        <img
                        src={trainerJourneyImage}
                        className="w-full h-full object-cover object-top"
                        alt="Trainer Journey"
                        />
                    </div>

                <div className="absolute bottom-0 right-0 
                    border-l-[60px] md:border-l-[100px] lg:border-l-[120px] 
                    border-b-[60px] md:border-b-[100px] lg:border-b-[120px] 
                    border-l-transparent 
                    border-b-[#14284C]">
                </div>
            </div>
        </section>
 
        <section className="bg-white gap-4 px-4 md:px-16 items-center">

            <h1 className="text-[2rem] font-bold mb-12 mt-8 text-center"><span className="text-brand-secondary-orange">Why Become</span> <span className="text-brand-primary">a Trainer?</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="bg-[#F88D2A]/10 p-10 md:p-20 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-30 h-30 bg-[#F88D2A]/10 rounded-full flex items-center justify-center mb-6">
                       <img src={bookIcon} alt="Book Icon" className="w-16 h-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Share Your Knowledge</h3>
                    <p className="text-gray-600 text-center">
                        Teach what you love and help learners gain practical skills.
                    </p>
                </div>

                 {/* Card 2 */}
                <div className="bg-[#F88D2A]/10 p-10 md:p-20 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-30 h-30 bg-[#F88D2A]/10 rounded-full flex items-center justify-center mb-6">
                       <img src={diagramIcon} alt="Diagram Icon" className="w-16 h-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Grow Professionally</h3>
                    <p className="text-gray-600 text-center">
                        Enchane your profile, experience, and career opportunities.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F88D2A]/10 p-10 md:p-20 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-30 h-30 bg-[#F88D2A]/10 rounded-full flex items-center justify-center mb-6">
                       <img src={userIcon} alt="User Icon" className="w-16 h-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Inspire The Future</h3>
                    <p className="text-gray-600 text-center">
                        Menor and motivate the next generation of talent.
                    </p>
                </div>
            </div>
        </section>
        
        {/* form registration */}
        <section className="bg-white gap-4 items-center py-12 md:py-32 px-4 md:px-16">

            {/* CARD */}
            <div className="p-12 bg-white rounded-xl shadow-md border-gray-300 border grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    
                {/* LEFT SIDE */}
                
                <div className=" gap-4 items-center grid-cols-1 md:grid-cols-2 flex flex-col md:flex-row mt-10 md:mt-0 mb-10 h-full py-10 border-b lg:border-b-0 lg:border-r lg:pr-20">
                    <div className="flex h-full ">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                            <img src={addIcon} alt="Add Icon" className="w-12 h-12" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-full">
                        <h1 className="text-2xl md:text-4xl font-bold text-brand-primary">
                        Ready To Join ?
                        </h1>

                        <p className="mt-2">
                        Scan the QR code to start your trainer registration.
                        </p>

                        {/* LIST */}
                        <div className="mt-6 space-y-5">

                            {/* item 1 */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                                    <img src={smartphoneIcon} alt="Smartphone Icon" className="w-6 h-6" />
                                </div>
                                <span>
                                Quick and easy registration.
                                </span>
                            </div>

                            {/* item 2 */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                                    <img src={listIcon} alt="List Icon" className="w-6 h-6" />
                                </div>
                                <span>
                                Fill out the trainer application form.
                                </span>
                            </div>

                            {/* item 3 */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                                    <img src={checkIcon} alt="Check Icon" className="w-6 h-6" />
                                </div>
                                <span>
                                Our team will review your application
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="text-center mb-10 mt-10 md:mt-0 flex items-center justify-center flex-col">
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-orange-400">
                    Register as a Trainer
                    </h1>

                    <p className=" mt-2">
                    Scan the QR code below to register
                    </p>

                    {/* QR BOX */}
                    <div className="mt-5 flex justify-center">
                        <div className="p-3 border-2 border-orange-200 rounded-xl">
                            <img
                            src={qrImage}
                            alt="QR Code"
                            className="w-40 md:w-60 h-40 md:h-60"
                            />
                        </div>
                    </div>

                        <p className="mt-4 text-sm">
                            <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5 inline mr-2" />
                            Scan using your phone camera
                        </p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default TrainerJourney;