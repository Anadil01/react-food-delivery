import {User} from "./User";
import UserClass from "./UserClass";

export const About = ()=>{
    return(
        <div className="User-card">
            <h1>About Us</h1>
            <User name={"Anadil from functional component"}/> 
            <UserClass name={"Anadil from class based component"}/>
        </div>
    )
}

//Parent constrcuter 
// parent render

//child constrcuter
//child render