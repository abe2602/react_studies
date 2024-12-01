function Button() {
    // Good for small component style
    const styles = {
        backgroundColor: "red",
        color: "white",
        padding:  "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
    }
    
    return (
    
        <button style={styles}>Click me</button>
    );
}

export default Button