import Navbar from "../partials/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../partials/Sidebar";

export default function Layout() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-2/12 bg-gray-100 rounded-3xl m-4 border-4">
          <Sidebar />
        </div>
        <div className="flex flex-col w-10/12">
          <div>
            <Navbar />
          </div>
          <main className="container mx-auto py-5 px-5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
