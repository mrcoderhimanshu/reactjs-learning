import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const [name, setName] = useState('Dusty');
    const { data: blogs, loading, Error} = useFetch('http://localhost:3000/blogs');
    /*
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    */
   /*
    const [blogs, setBlogs] = useState([
        {title:"My new website", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"mario", id: 1},
        {title:"Welcome Party!", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"dusty", id: 2},
        {title:"Web dev top tips", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled....", author:"yoshi", id: 3},
        {title:"Using Map method in React", body: "This looping of blog content is managed by map method and we also use useState hook for managing the data.", author:"frank", id: 4}
    ]);
    */
    const handleClickButton = () =>{
        console.log('this is how we can create function inside components');
    }
    const handleParamMethod = (abc) => {
        console.log('Param methods are called differently. As we did here. Because if we call directly then it will execute it at very beginig.');
    }
    const handleChange = () => {
        setName('Napster');
    }
    const handleDelete = (id) =>{
        //const newBlogs = blogs.filter(blog => blog.id !== id);
        //setData(newBlogs);
    }
    /*
    useEffect(() => {
        //console.log('runs on every state change. As we didn\'t attached dependencies. Or an empty array after the useEffect.');
        //console.log('Now it will run only at the first time');
        console.log('It will run at the begining and also at the state change');
        //console.log('We can trigger it at a particular state change by adding that state into the array');
    },[name])
    */
   /*
    useEffect(() =>{
        fetch('http://localhost:3000/blogs').then(res => {
            if(res.ok !== true){
                throw Error("Could not find the address.");
            }
            return res.json();
        }).then(data =>{
            setBlogs(data);
            setLoading(false);
            setError(null);
        }).catch(err =>{
            setError(err);
            setLoading(false);
        })
    },[]);
    */
    return ( 
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Blog.</p>
            <p><button onClick={handleClickButton}>Click Me</button></p>
            <p><button onClick={() =>{handleParamMethod('param')}}>Click Me</button></p>
            <p>Welcome {name}</p>
            <p><button onClick={handleChange}>UseState-Hook-View</button></p>
            {Error && <div>{Error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blog List" handleDelete ={handleDelete}/>}
        </div>
    );
}
 
export default Home;