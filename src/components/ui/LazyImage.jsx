import { useState } from "react";

const LazyImage = ({ src, alt, className = "", ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
                onLoad={() => setLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default LazyImage;
