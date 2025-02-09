import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Image from "@/components/Image";
// import Details from "@/components/Details";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit w-full bg-slate-50">
        <div className="flex items-center justify-center">
          <Profile />
        </div>
        <div className="flex items-end justify-center">
          <Image />
        </div>
      </div>
    </div>
  );
}
