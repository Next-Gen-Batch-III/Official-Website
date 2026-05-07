

/**
 * 
 * @param {*} borders - An array of strings specifying which borders to apply (e.g., ["top", "right", "bottom", "left"])
 * @param {*} bordersWidth - A number specifying the width of the borders in pixels
 * @param {*} borderColor - A string specifying the color of the borders (default is "black")
 * @param {*} edges - An array of strings specifying which edges to apply (e.g., ["top-left", "top-right", "bottom-right", "bottom-left"])
 * @param {*} edgesSize - A string specifying the size of the edges with valid CSS units (e.g., "20px", "10%")
 * @param {*} className - A string specifying additional CSS classes for the container
 * @param {*} children - The child nodes to be rendered inside the container
 * @returns 
 */
const EdgeContainer = ({ borders, bordersWidth, borderColor = "black", edges, edgesSize , className, children }) => {


    if(edges === null || edges === undefined || edges.length === 0) throw new Error("At least one edge must be specified");
    if(!edgesSize) throw new Error("Edges size must be specified");
    if(!(typeof edgesSize === "string")) throw new Error("Edges size must be a string with valid CSS units");


    const clipPathValue = `polygon(${buildPolygonPoints(edges, edgesSize)})`;
    const backgroundColor = { backgroundColor: borderColor || "black" };
    return (
        <div className={`inline-block w-full h-full bg-amber-900`} style={{ clipPath: clipPathValue, ...buildBorderStyles(borders, bordersWidth), ...backgroundColor }}>
            <div className={`w-full h-full bg-white ${className}`} style={{ clipPath: clipPathValue }}>
                {children}
            </div>
        </div>
    );
}

const buildPolygonPoints = (edges, edgesSize) => {
    let points = [];

    if (edges.includes("top-left")) {
        points.push(`${edgesSize} 0%`); 
    } else {
        points.push("0% 0%");
    }

    if (edges.includes("top-right")) {
        points.push(`calc(100% - ${edgesSize}) 0%`, `100% ${edgesSize}`);
    } else {
        points.push("100% 0%");
    }

    if (edges.includes("bottom-right")) {
        points.push(`100% calc(100% - ${edgesSize})`, `calc(100% - ${edgesSize}) 100%`);
    } else {
        points.push("100% 100%");
    }

    if (edges.includes("bottom-left")) {
        points.push(`${edgesSize} 100%`, `0% calc(100% - ${edgesSize})`);
    } else {
        points.push("0% 100%");
    }

    if (edges.includes("top-left")) {
        points.push(`0% ${edgesSize}`);
    }
    return points.join(", ");
}

const buildBorderStyles = (borders, bordersWidth, borderColor) => {
    if (borders === null || borders === undefined || borders.length === 0 || !(borders instanceof Array)) return {padding: 0};
    const style = {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    }
    if(borders.includes("top")) style.paddingTop = `${bordersWidth}px`;
    if(borders.includes("right")) style.paddingRight = `${bordersWidth}px`;
    if(borders.includes("bottom")) style.paddingBottom = `${bordersWidth}px`;
    if(borders.includes("left")) style.paddingLeft = `${bordersWidth}px`;
    return style;
};

export default EdgeContainer;