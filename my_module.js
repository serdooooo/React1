import axios from "axios";

async function getData(id){
    const{data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

    const {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    console.log("User: " ,users ,"Post:" ,posts);
    
};



export default getData;