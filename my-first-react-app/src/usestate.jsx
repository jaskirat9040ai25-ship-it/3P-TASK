import { useState } from "react";
function Counter() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>clicked {count} times</p>
            <button  onClick={ () => setCount(count+1)}>ADD one</button>
            <button  onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}
export default Counter;