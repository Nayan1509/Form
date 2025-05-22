import { useRef, useState } from "react";
import { Camera, X } from "lucide-react";

export default function PhotoUploadGrid() {
  const [photos, setPhotos] = useState(Array(20).fill(null));
  const fileInputs = useRef([]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newPhotos = [...photos];
      newPhotos[index] = URL.createObjectURL(file);
      setPhotos(newPhotos);
    }
  };

  const handleClick = (index) => {
    if (fileInputs.current[index]) {
      fileInputs.current[index].click();
    }
  };

  const removePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos[index] = null;
    setPhotos(newPhotos);
  };

  const firstEmptyIndex = photos.findIndex((p) => p === null);

  return (
    <div className="space-y-2 text-left">
      <h2 className="text-lg font-bold">UPLOAD UP TO 20 PHOTOS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-120 gap-y-2">
        {photos.map((photo, index) => {
          const isHighlighted = index === firstEmptyIndex;
          const isEmpty = !photo;

          return (
            <div
              key={index}
              className={`w-[100px] h-[100px] relative flex justify-center items-center cursor-pointer overflow-hidden ${
                isHighlighted
                  ? "border-2 border-black"
                  : "border border-gray-300"
              }`}
              onClick={() => handleClick(index)}
            >
              {photo ? (
                <>
                  <img
                    src={photo}
                    alt={`uploaded-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(index);
                    }}
                    className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow"
                  >
                    <X className="w-4 h-4 text-black" />
                  </button>
                </>
              ) : (
                <div
                  className={`flex flex-col items-center transition-all ${
                    isHighlighted ? "text-black" : "text-gray-500"
                  }`}
                >
                  <Camera className="w-5 h-5" />
                  {isHighlighted && (
                    <span className="text-xs mt-1 font-medium">Add Photo</span>
                  )}
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current[index] = el)}
                onChange={(e) => handleFileChange(e, index)}
                className="hidden"
              />
            </div>
          );
        })}
      </div>

      <p className="text-sm text-red-600 mt-2">This field is mandatory</p>
    </div>
  );
}
