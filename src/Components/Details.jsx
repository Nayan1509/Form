import { useState } from "react";

export default function MultiButtonSelector() {
  const selectorData = [
    {
      label: "Type",
      required: true,
      options: [
        "Flats/Apartments",
        "Independent/Builder Floors",
        "Farmhouse",
        "House & Villa",
      ],
    },
    {
      label: "BHK",
      required: false,
      options: ["1", "2", "3", "4", "4+"],
    },
    {
      label: "Bathrooms",
      required: false,
      options: ["1", "2", "3", "4", "4+"],
    },
    {
      label: "Furnishing",
      required: false,
      options: ["Unfurnished", "Semi-Furnished", "Fully Furnished"],
    },
    {
      label: "Project Status",
      required: false,
      options: ["Under Construction", "New Launch", "Ready to Move"],
    },
    {
      label: "Listed By",
      required: false,
      options: ["Builder", "Dealer", "Owner"],
    },
    {
      label: "Car Parking",
      required: false,
      options: ["0","1","2", "3", "3+"],
    },
  ];

  const [selections, setSelections] = useState(Array(selectorData.length).fill(null));
  const [touched, setTouched] = useState(false);

  const handleSelect = (groupIndex, option) => {
    const updated = [...selections];
    updated[groupIndex] = option;
    setSelections(updated);
    if (groupIndex === 0) setTouched(true); // Only validate the first set
  };

  const showError = touched && !selections[0];

  const [formData, setFormData] = useState({
    superBuiltup: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNumber: "",
    projectName: "",
    adTitle: "",
    description: "",
    facing: "",
  });

//   const [touched, setTouched] = useState(false);

  const requiredFields = [
    "superBuiltup",
    "carpetArea",
    "adTitle",
    "description",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderInput = (name, label, required = false) => (
    <div>
      <label className="block mb-1 text-left font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {touched && required && !formData[name] && (
        <p className="text-red-600 text-sm mt-1">{label} is required.</p>
      )}
    </div>
  );

  return (
   <div className="space-y-6 text-left">
      <h1 className="text-lg font-bold text-left">INCLUDE SOME DETAILS</h1>

      {selectorData.map((group, groupIndex) => (
        <div key={group.label}>
          <label className="block mb-1 text-left font-semibold text-gray-700">
            {group.label}
            {group.required && (
              <span className="text-red-600" aria-hidden="true">
                *
              </span>
            )}
          </label>

          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(groupIndex, option)}
                className={`px-6 py-2 rounded border text-sm font-semibold
                  ${
                    selections[groupIndex] === option
                      ? "bg-blue-200 text-black border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          {group.required && groupIndex === 0 && showError && (
            <p className="text-sm text-red-600 mt-1">
              Please select a {group.label.toLowerCase()}.
            </p>
          )}
        </div>
      ))}

      {/* <div className="max-w-xl mx-auto space-y-4"> */}
      {/* <h2 className="text-xl font-semibold mb-4">Property Listing Form</h2> */}

      {renderInput("superBuiltup", "Super Builtup Area (sqft)", true)}
      {renderInput("carpetArea", "Carpet Area (sqft)", true)}
      {renderInput("maintenance", "Maintenance (Monthly)")}
      {renderInput("totalFloors", "Total Floors")}
      {renderInput("floorNumber", "Floor Number")}

      <label className="block mb-1 text-left font-semibold text-gray-700">
          Facing
        </label>
        <select
          name="facing"
          value={formData.facing}
          onChange={handleChange}
          className="w-1/2 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select direction</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="North-East">North-East</option>
          <option value="North-West">North-West</option>
          <option value="South-East">South-East</option>
          <option value="South-West">South-West</option>
        </select>


      {renderInput("projectName", "Project Name")}
      {renderInput("adTitle", "Ad Title", true)}
      {renderInput("description", "Description", true)}

      {/* Facing Dropdown */}
      {/* <div> */}
        
      </div>
    // </div>
    // </div>
  );
}
