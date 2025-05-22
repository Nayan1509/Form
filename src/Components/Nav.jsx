import { ArrowLeft } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="bg-gray-50 h-16 flex items-center px-6 shadow-sm">
      <button className="p-2 text-black">
        <ArrowLeft className=" w-5 h-5" />
      </button>
    </nav>
  );
}
