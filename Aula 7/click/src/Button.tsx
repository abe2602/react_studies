function Button() {
    const handleClick = () => console.log("CLICKED");

    let count = 0

    const handleClick2 = (name) => {
        if(count %2 == 0){
            console.log(name + " I'm even: " + count)
        } else {
            console.log(name + " I'm odd " + count)
        }

        count++
    }
    
    const handleEvent = (e) => {
        if(count %2 == 0){
            e.target.textContent = "event"
            console.log(name + " I'm even: " + count)
        } else {
            e.target.textContent = "odd"
            console.log(name + " I'm odd " + count)
        }

        count++
    }

    return (
        <>
        <button onClick={handleClick}>Button 1</button>

        <button onClick={() => handleClick2("Me!")}>Button 2</button>

        <button onClick={handleEvent}>Button 3</button>
        </>
    );
}

export default Button