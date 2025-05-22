import { useState } from "react";
import "./App.css";
import Category from "./Components/Category";
import Details from "./Components/Details";
import Price from "./Components/Price";
import Photos from "./Components/Photos";
import Location from "./Components/Location";
import Personnel from "./Components/PersonnelDetails";

function App() {
  return (
    <>
      <h1 className="text-center text-xl font-bold my-6">POST YOUR AD</h1>
      
      <div className="flex justify-center min-h-screen bg-white px-2">
        <div className="w-full max-w-3xl border border-gray-300 rounded-none p-4 sm:p-6 bg-white">
          <Category />
          <div className="mt-4 border-b border-gray-300" />
          
          <Details />
          <div className="mt-4 border-b border-gray-300" />
          
          <Price />
          <div className="mt-4 border-b border-gray-300" />
          
          <Photos />
          <div className="mt-4 border-b border-gray-300" />
          
          <Location />
          <div className="mt-4 border-b border-gray-300" />
          
          <Personnel />
          <div className="mt-4 border-b border-gray-300" />
          
          <button
            className="mt-4 px-5 py-2 bg-gray-300 text-gray-600 font-semibold rounded cursor-not-allowed w-fit"
            disabled
          >
            Post Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
