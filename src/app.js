import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import UserContext from "./utils/UserContext";
// import {Grocery} from "./components/Grocery";
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';



// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1", key: "child1" }, [
//       React.createElement("h1", { key: "h1-1" }, "hii i am h1 tag"),
//       React.createElement("h2", { key: "h2-1" }, "hii i am h2 tags"),
//     ]),
  
//     React.createElement("div", { id: "child2", key: "child2" }, [
//       React.createElement("h1", { key: "h1-2" }, "Hii i am h1 tags"),
//       React.createElement("h2", { key: "h2-2" }, "hii i am h2 tags"),
//     ]),
//   ]);


//    const jsxheadng = <h1 id="heading"> i am jsx </h1>;


//    const headingComponent = ()=>{
//     return <h1>Function component - a javascript function which return some jsx code callded functional component</h1>
//    }


// const Grocery = lazy(()=>import("./components/Grocery")); // this is called lazy and ondemand loading it improve performance
//Chunking
//code spliting
//dynamic bundling
//lazy loading
// onDemand loading

const AppLayout =() =>{
   const [userName , setUserName] = useState("");

   useEffect(()=>{
     const data = {
      name:"Anadil Ghosi"
     };
     setUserName(data.name);
   },[])
   

 return(
   <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
    <div className='app'>
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
 )
}

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>
           
         },
         {
            path:"/about",
            element:<About/>
           
         },
         {
            path:"/contact",
            element:<Contact/>
           
         },
         {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
         },
         // {
         //    path:"/grocery",
         //    element:<Grocery/>
         // }
      ],
      errorElement:<Error/>
   },

   
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(<RouterProvider router={appRouter}/>);



