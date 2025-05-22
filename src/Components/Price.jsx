export default function PriceInput() {
  return (
    <div className="space-y-2 text-left">
      <h1 className="text-lg font-bold">SET A PRICE</h1>

      <label className="text-sm text-gray-500">
        Price<span className="text-red-500">*</span>
      </label>

      <div className="flex items-center border border-gray-400 rounded px-3 py-2 w-1/2">
        <span className="text-gray-500 mr-2">₹</span>
        <input
          type="number"
          className="outline-none w-full"
          placeholder="Enter price"
        />
      </div>
    </div>
  );
}
