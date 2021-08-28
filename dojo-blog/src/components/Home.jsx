import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('Dusty');

    const handleClickButton = () =>{
        console.log('this is how we can create function inside components');
    }
    const handleParamMethod = (abc) => {
        console.log('Param methods are called differently. As we did here. Because if we call directly then it will execute it at very beginig.');
    }
    const handleChange = () => {
        setName('Napster');
    }
    return ( 
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Blog.</p>
            <p><button onClick={handleClickButton}>Click Me</button></p>
            <p><button onClick={() =>{handleParamMethod('param')}}>Click Me</button></p>
            <p>Welcome {name}</p>
            <p><button onClick={handleChange}>UseState-View</button></p>
        </div>
     );
}
 
export default Home;