import React from "react";
class Animal extends React.Component {
    constructor(props) {
        super(props);
  
    this.state = {name:'tiger',type:'Wild'  }
    
     }

     static getDerivedStateFromProps(props,state){
        console.log("derived State from props "+props.name)
        return {name:props.name+' Animal'}
     }
componentDidMount(){
setTimeout(()=>{
    console.log("ComponentDidMount Called")

    this.setState({name:"Chetah"});

},1000)  
}


handleevent=()=>{
    this.setState({name:"Lion"})
        }

    render() { 
        return ( <>
        Hello Animal {this.state.name} and type is {this.state.type}
        <button onClick={this.handleevent}>Update State</button>
        </> );
    }
}
 
export default Animal;





// Component LifeCycle 3 phases

// Mounting
// your going to put your Html elements in the DOM 

// In mounting we have 4 builtin  Methods 
// a)constructor()

// are called before any other methods
// best place to initialize state and Props 


// b)getDerivedStateFromProps()




// c)render()
// d)ComponentDidMount() 



// Updating 
// unMounting