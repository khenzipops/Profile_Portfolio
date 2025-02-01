import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Image from "@/components/Image";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen w-full bg-blue-200">
        <div className=" flex items-center justify-center pt-52">
          <Profile />
        </div>
        <div className="flex h-fit w-fit items-end justify-center">
          <Image />
        </div>
      </div>
      <div className="bg-gray-200">
        <Details />
      </div>
    </div>
  );
}
