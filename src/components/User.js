import { useState } from "react";

export const User =({name})=> {
    const [count , setCount] = useState(0);
    const [count2] = useState(1);
    return (  
        <div>
           
        <h2>Name: {name}</h2>
        <h3>Location: Sambhal</h3>
        <h4>Contact: mdanadil32@gmail.com</h4>
        </div>
    );
}

