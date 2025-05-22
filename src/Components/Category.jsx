export default function SelectedCategory() {
  return (
    <div className="p-2 ">
      <h2 className="text-lg font-bold text-left mb-4">SELECTED CATEGORY</h2>
      <div className="flex items-center gap-4 w-full max-w-md">
        <p className="text-sm text-gray-500">
          Properties / For Sale: Houses &amp; Apartments
        </p>
        <button className="text-sm text-blue-700 font-semibold underline">
          Change
        </button>
      </div>
    </div>
  );
}
