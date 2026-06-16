import { QRCodeSVG } from "qrcode.react";
import Modal from "./Modal";
import graduateCap from "@/assets/icon_image/graduate.png"
import { useState } from "react";
import Button from "@/components/ui/Button";

const QRCodeModal = ({ isOpen, onClose, url, qrColor="#14284C" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-black flex flex-col justify-center items-center text-center px-4">
                <div>
                    <img src={graduateCap} alt="graduate-cap" className="w-16 h-16"/>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div>
                        <h2 className="font-bold text-xl">Scan the QR below to join</h2>
                        <p className="text-neutral-600 text-sm">Start your journey here</p>
                    </div>
                    <QRCodeSVG value={url} fgColor={qrColor} className={`p-4 rounded-2xl border border-neutral-400`} size={200}></QRCodeSVG>
                    <p className="text-neutral-600 text-sm">Or diectly access with button below</p>
                    <button className={`text-white w-full p-3 rounded-2xl hover:cursor-pointer hover:opacity-90`} style={{backgroundColor: qrColor}} onClick={() => {open(url)}}>Open URL</button>
                </div>
            </div>
        </Modal>
    );
}

export default QRCodeModal;