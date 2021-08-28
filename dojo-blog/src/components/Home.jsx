const Home = () => {
    const handleClickButton = () =>{
        console.log('this is how we can create function inside components');
    }
    const handleParamMethod = (abc) => {
        console.log('Param methods are called differently. As we did here. Because if we call directly then it will execute it at very beginig.');
    }
    return ( 
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Blog.</p>
            <p><button onClick={handleClickButton}>Click Me</button></p>
            <p><button onClick={() =>{handleParamMethod('param')}}>Click Me</button></p>
        </div>
     );
}
 
export default Home;