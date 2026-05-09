import EdgeContainer from "@/components/ui/EdgeContainer";

const Button = ({ children, onClick, variant, className }) => {
    const buttonStyles = variant === "primary" ? "bg-brand-secondary-orange text-white hover:bg-brand-secondary-orange/80" : "bg-white text-brand-secondary-orange hover:bg-neutral-200";
    return (
        <div className="w-fit h-fit">
            <EdgeContainer edges={["bottom-right"]} edgesSize="10px" className="inline-block">
                <button onClick={onClick} className={`px-3 py-2 lg:px-10 lg:py-2 ${buttonStyles} ${className} `}>
                    {children}
                </button>
            </EdgeContainer>
        </div>
    )
}

export default Button;