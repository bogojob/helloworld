import React,{ useEffect } from "react";

export const Home = ()=> {

    useEffect(()=>{
        console.log('use effect called');

    },[])
    return (
        <div><h1>home component</h1></div>
    )
    
}
