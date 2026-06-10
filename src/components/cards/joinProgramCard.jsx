
import "./JoinProgram.css";
import graduateIcon from "../../assets/icon_image/graduate.png";
import trainerIcon from "../../assets/icon_image/trainer.png";
import { useNavigate } from "react-router-dom";

const JoinProgramCard = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h1 className="text-2xl font-bold text-brand-primary text-center">Choose Your Role</h1>
        <p className="text-center">Select an option to join the program</p>

        <div className="role-container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="role-card-std bg-blue-50">
            <img src={graduateIcon} alt="Student" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-brand-primary">Student</h2>
            <p>I want to learn new skills and gain practical experience.</p>
            <button onClick={() => navigate("/student-register")}>Continue as Student</button>
          </div>

          <div className="role-card-trainer bg-orange-50  ">
            <img src={trainerIcon} alt="Trainer" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-brand-primary">Trainer</h2>
            <p>I want to teach, share knowledge and inspire others.</p>
            <button onClick={() => navigate("/trainer-journey")}>Continue as Trainer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProgramCard;