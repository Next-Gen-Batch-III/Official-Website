import EdgeContainer from "@/components/ui/EdgeContainer";

const Button = ({ children, onClick, variant, shadowColor, type = "button", className }) => {
    const isPrimary = variant === "primary";
    
    const buttonBg = isPrimary ? "bg-brand-secondary-orange" : "bg-white";
    const textColor = isPrimary ? "text-white" : "text-brand-secondary-orange";
    
    const shadowCol = shadowColor || (isPrimary ? "white" : "#f88d2a");

    return (
        <div className="relative group w-fit h-fit cursor-pointer" onClick={onClick}>
            
            <div className="absolute inset-0">
                <EdgeContainer 
                    edges={["bottom-right"]} 
                    edgesSize="10px" 
                    borderColor={shadowCol}
                    borders={["bottom", "right", "left", "top"]} 
                    bordersWidth={0}
                >
                    <div className="w-full h-full opacity-100 min-h-10 min-w-30" style={{ backgroundColor: shadowCol }} />
                </EdgeContainer>
            </div>

            <div className={`relative transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`}>
                <EdgeContainer edges={["bottom-right"]} edgesSize="10px">
                    <button 
                        type={type}
                        className={`px-3 py-2 lg:px-10 lg:py-2 font-bold uppercase transition-colors ${buttonBg} ${textColor} ${className}`}
                    >
                        {children}
                    </button>
                </EdgeContainer>
            </div>
        </div>
    );
};

export default Button;