import EdgeContainer from "@/components/ui/EdgeContainer";

const Button = ({ children, onClick, variant, shadowColor, type = "button", className }) => {
    const isPrimary = variant === "primary";
    const buttonBg = variant === "primary" ? "bg-brand-secondary-orange" : variant === "brand" ? "bg-brand-primary" : "bg-white";
    const textColor = variant === "primary" ? "text-white" : variant === "brand" ? "text-white" : "text-brand-secondary-orange";
    
    const shadowCol = shadowColor || (isPrimary ? "white" : "#f88d2a");

    return (
        <div className="relative group w-fit h-fit cursor-pointer" onClick={onClick}>
            
            <div className="absolute inset-0 cursor-pointer">
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

            <div className={`relative transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer`}>
                <EdgeContainer edges={["bottom-right"]} edgesSize="10px">
                    <button 
                        type={type}
                        className={`px-6 py-2 lg:px-10 lg:py-2 text-sm md:text-md font-bold uppercase transition-colors cursor-pointer ${buttonBg} ${textColor} ${className}`}
                    >
                        {children}
                    </button>
                </EdgeContainer>
            </div>
        </div>
    );
};

export default Button;
