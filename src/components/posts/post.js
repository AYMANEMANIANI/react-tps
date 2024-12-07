import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Post(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts') 
            .then((reponse) => {
                // console.log(reponse.data)
               setData(reponse.data)
            })
    },[]);
    // .filter(post => post.userId===user.id)
    const posts=data.filter(post => post.userId===1).map((post)=>{
        return (
            
            <div className="card w-25 m-3 col-6" key={post.userId}>
                <div className="card-header m-0 p-0">
                     {"post "+ post.userId + ":" + post.title.substring(0,10)+"..."}
                </div>
                <p className="card-body m-0 p-0">
                    {post.body.substring(0,30)+"..."}
                </p>
          </div>
        )
       
    })
    return(
        <>
        <div className="row">
            {posts}
        </div>
           
        </>
    )
}