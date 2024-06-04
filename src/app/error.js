"use client";
import { useEffect, } from "react";

export default function Error ({error, reset}){
    useEffect(() => {console.log(error);
    }, [error])

    return(
      <div className="text-center mt-10">
        <h1 className="mb-6">something went wrong, please try again</h1>
        <button className="font-bold bg-blue-300 py-2 px-4 rounded-lg mr-1" onClick={()=> reset()}>Try again</button>
      </div>
  )
}

