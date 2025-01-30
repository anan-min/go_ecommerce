import { Divide } from "lucide-react";
import Image from "next/image";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <div className="w-full lg:w-2/3 mx-auto items-center justify-items-center min-h-screen p-4 relative">
      <Products />
    </div>
  );
}
