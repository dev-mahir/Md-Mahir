import { useState } from "react";

function UseState2 (){
    const [ count, setCount ] = useState(0);
    const handlecount = () => {
        setCount( count + 1);
    }
    return( <div>
        <h2>count: {count}</h2>
        <button onClick={handlecount}>Increment</button>
    </div> );
}
export default UseState2;