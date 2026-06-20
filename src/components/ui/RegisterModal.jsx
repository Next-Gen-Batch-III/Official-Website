import Modal from "./Modal";
import QRCodeModal from "./QRCodeModal";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import graduationCap from "@/assets/icon_image/graduate.png";
import trainerIcon from "@/assets/icon_image/trainer.png";


const RegisterModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);
    const closeSvg = (
        <svg className="w-6 h-6 text-neutral-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
    );
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-black flex flex-col justify-center items-center text-center relative">
                <button className="close-button absolute right-0 top-0 hover:cursor-pointer" onClick={onClose}>{closeSvg}</button>
                <div>
                    <h2 className="text-2xl font-bold">Choose Your Role</h2>
                    <p className="text-[1rem] text-neutral-500">Select an option to join the program</p>
                </div>
                <div className="max-w-2xl flex flex-col md:flex-row gap-6 mt-6 mx-auto text-center">
                    <div className="flex flex-col bg-brand-primary/15 items-center p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform" onClick={() => {setIsQRModalOpen(true)}}>
                        <div>
                            <img src={graduationCap} alt="Graduate Icon" className="w-16 h-16 mb-4" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="font-bold text-xl">Student</h2>
                            <p className="text-neutral-700 text-sm">I want to learn new skill and gain practical experience.</p>
                            <Button variant="brand" shadowColor="grey">Continue as Student</Button>
                        </div>
                    </div>
                    <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} url="https://forms.cloud.microsoft/pages/responsepage.aspx?id=7GGUHmJTKUOuRmH6PpHG0iPUUmdQoLpNrQGZc3nb-d5UQ0dYRjdUVUExNzJOQlQzOUtGQlRDSlUzRS4u&origin=QRCode&route=shorturl" />
                    <div>
                        <div className="flex flex-col bg-brand-secondary-orange/15 items-center p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform" onClick={() => {onClose(); navigate("/trainer-journey")}}>
                            <div>
                                <img src={trainerIcon} alt="Trainer Icon" className="w-16 h-16 mb-4" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <h2 className="font-bold text-xl">Trainer</h2>
                                <p className="text-neutral-700 text-sm">I want to share my knowledge and mentor students.</p>
                                <Button variant="primary" shadowColor="grey">Continue as Trainer</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default RegisterModal;