import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [name, setName] = useState('Dusty');
    const [blogs, setBlogs] = useState([
        {title:"My new website", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"mario", id: 1},
        {title:"Welcome Party!", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"dusty", id: 2},
        {title:"Web dev top tips", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"yoshi", id: 3},
        {title:"Using Map method in React", body: "This looping of blog content is managed by map method and we also use useState hook for managing the data.", author:"frank", id: 4}
    ]);
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
            <p><button onClick={handleChange}>UseState-Hook-View</button></p>
            <BlogList blogs={blogs} title="Blog List"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'frank')} title="Franks Blog List!"/>
        </div>
     );
}
 
export default Home;