import React, { useState } from 'react';

const indianStatesAndUTs = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const LocationTabs = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="text-left w-1/2">
      <h2 className="text-xl font-semibold mb-4">Confirm your location</h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          type="button"
          onClick={() => setActiveTab('list')}
          className={`flex-1 text-center py-2 font-medium text-sm border-b-2 transition-colors duration-300 ${
            activeTab === 'list' ? 'border-blue-600 text-black' : 'border-transparent text-gray-600'
          }`}
        >
          List
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('current')}
          className={`flex-1 text-center py-2 font-medium text-sm border-b-2 transition-colors duration-300 ${
            activeTab === 'current' ? 'border-blue-600 text-black' : 'border-transparent text-gray-600'
          }`}
        >
          Current Location
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'list' ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Select a state</option>
            {indianStatesAndUTs.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="State"
            className="w-full p-2 border-b border-gray-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border-b border-gray-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Neighbourhood"
            className="w-full p-2 border-b border-gray-400 focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default LocationTabs;
