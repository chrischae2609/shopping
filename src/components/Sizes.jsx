import "../styles/size.css";

function Sizes({ size, setSize }) {
    const sizes = ["XS", "S", "M", "L", "XL"];
    
    return (
        <div className="sizes">
            {sizes.map(s => (
                <button key={s} className={size === s ? "selected" : ""}
                onClick={() => setSize(s)}>
                    {s}
                </button>
            ))}
        </div>
    )
}

export default Sizes