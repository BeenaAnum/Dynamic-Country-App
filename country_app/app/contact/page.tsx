import React from "react";

export default function Contact (){
    return(
      
      <div className="container"> 
      <h1 className="flex justify-center items-center text-2xl font-bold text-center md:text-4xl m-1">Contact Us</h1>
      <main className="flex-grow p-2">     
        
        <form className="max-w-md mx-auto md:text-4xl">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full mb-4 p-1 text-black border rounded" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full mb-4 p-1 text-black border rounded" 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full mb-4 p-1 text-black border rounded" 
            rows={4} 
          />
          <button 
            type="submit" 
            className="w-full bg-black text-yellow p-2 mb-9 rounded">
            Send Message
          </button>
        </form>
      </main>

    </div>
    
    );
}