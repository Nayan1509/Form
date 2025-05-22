import { useState } from "react";
import "./App.css";
import Category from "./Components/Category";
import Details from "./Components/Details";
import Price from "./Components/Price";
import Photos from "./Components/Photos";
import Location from "./Components/Location";
import Personnel from "./Components/PersonnelDetails";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-xl font-bold my-6">POST YOUR AD</h1>
      <div className="flex justify-center min-h-screen bg-white">
        <div className="border border-gray-300 rounded-none w-220 p-4">
          <Category />
          <div className=" mt-4 border-b border-gray-300 mt-4" />
          <Details />
          <div className="mt-4 border-b border-gray-300 mt-4" />
          <Price />
          <div className="mt-4 border-b border-gray-300 mt-4" />
          <Photos />
          <div className="mt-4 border-b border-gray-300 mt-4" />
          <Location />
          <div className="mt-4 border-b border-gray-300 mt-4" />
          <Personnel />
          <div className="mt-4 border-b border-gray-300 mt-4" />
          <button
            className=" px-5 py-2 mt-2 bg-gray-300 text-gray-600 font-semibold rounded cursor-not-allowed"
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
