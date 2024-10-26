import { useState } from "react";


export const  FirstApp= () => {
    return ( <>
    <h1>HOC Component</h1>
    <HOCAPP a={CounterExample}/> 
    <HOCAPP2 a={CounterExample}/> 
    {/* <HOCAPP a={"hi everyone"}/> */}
    </> );
}
 
 
export const  HOCAPP= (props) => {
    return ( <>
     <h2 style={{backgroundColor:'red'}}><props.a/></h2>
    </> );
}

export const  HOCAPP2= (props) => {
    return ( <>
     <h2 style={{backgroundColor:'green'}}><props.a/></h2>
    </> );
}

export const CounterExample = () => {
    const [count,setCount]=useState(0);
    return   ( <>
   <span style={{backgroundColor:'red'}}>{count}</span>

    <button onClick={()=>{setCount(count+1)}}>Click</button>
            </> );

 

}

export default FirstApp;



// What is Controlled Component?

// any component where you use UseState  to update your  state is called as Controlled Component
//    what is uncontrolled Component?

// Any Component where we uses useRef or document.getElelmet to update your values is called as 

//   uncontrolled Components


//    what is Higher Order Component? 
//      a hoc in react is a function that takes a component as a an argument and returns a new
//     component that basically wraps orignal components  is called HOC   