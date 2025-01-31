import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-200 flex items-center justify-center">
          <Profile />
        </div>
        <div className="w-1/2 bg-blue-200 flex items-center justify-center"></div>
      </div>
    </div>
  );
}
