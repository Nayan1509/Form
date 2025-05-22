import React, { useState } from 'react';

export default function ReviewDetails() {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const isError = touched && name.trim() === '';

  return (
    <div className="max-w-3xl text-left mt-10 px-4">
      <h2 className="text-xl font-bold mb-6">REVIEW YOUR DETAILS</h2>

      <div className="flex items-start gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center border-4 border-white shadow-md">
            <span className="text-4xl">👤</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-800 text-white p-1 rounded-full border-2 border-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        {/* Name input */}
        <div className="flex-1">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            id="name"
            type="text"
            maxLength="30"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(true)}
            className={`w-1/2 px-3 py-2 border rounded focus:outline-none ${
              isError ? 'border-red-600' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          <div className="flex justify-between text-sm mt-1">
            {isError ? (
              <span className="text-red-600">This field is mandatory</span>
            ) : <span></span>}
          </div>
        </div>
      </div>

      {/* Phone number */}
      <div className="w-1/2 flex justify-between mt-8 text-base font-medium">
        <span>Your phone number</span>
        <span className="text-black">+911234567890</span>
      </div>
    </div>
  );
}
