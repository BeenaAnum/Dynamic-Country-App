import Link from "next/link";
import React from "react";
export default function Page(){
    return(

        <nav className="flex justify-center items-center bg-black border-2 border-yellow-300 w-full py-1 gap-4 top-0 font-bold md:text-4xl">
        <Link className="hover:text-red-500" href="/">Home</Link>
        <Link className="hover:text-red-600" href="/about">About</Link>
        <Link className="hover:text-red-600" href="/country">Country</Link>
        <Link className="hover:text-red-600" href="/contact">Contact</Link>
        {/* <Link className="hover:text-red-600" href="/props">Props</Link> */}
        </nav>
        
    );
}