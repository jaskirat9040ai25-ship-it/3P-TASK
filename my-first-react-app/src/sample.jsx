import { useState } from "react";

function Namefield() {
    const [ name,setName] = useState("");

    return (
        <div>
            <input type = "next"
            value ={name}
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2"/>
            <p className="mt-2 text-slate-700">hello,{name || "stranger"}</p>
        </div>
        
    );
}
export default Namefield;