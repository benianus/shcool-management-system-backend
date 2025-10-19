import { isRoute } from "@/helpers";
import {
  LucideLayoutDashboard,
  LucidePersonStanding,
  LucideTvMinimal,
  LucideUsers,
} from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Sidebar() {
  const location = useLocation();

  const isLocation = {
    Dashboard: isRoute("/dashboard", location),
    Students: isRoute("/students", location),
    Teachers: isRoute("/teachers", location),
    Classes: isRoute("/classes", location),
  };

  return (
    <>
      <div className=" h-full">
        <div className="w-2/3 text-2xl font-bold p-4">
          <Link to={"/dashboard"}>
            <h1 className="mb-7">School Management</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-col items-start gap-4 px-4">
            <Link to={"/dashboard"} className="w-full">
              <li
                className={
                  isLocation.Dashboard
                    ? "bg-blue-200 p-2 rounded-lg transition-all duration-300 flex gap-2"
                    : "hover:bg-gray-200 rounded-md p-2 transition-all duration-300 flex gap-2"
                }
              >
                <LucideLayoutDashboard />
                Dashboard
              </li>
            </Link>
            <Link to={"/teachers"} className="w-full">
              <li
                className={
                  isLocation.Teachers
                    ? "bg-blue-200 p-2 rounded-lg transition-all duration-300 flex gap-2"
                    : "hover:bg-gray-200 rounded-md p-2 transition-all duration-300 flex gap-2"
                }
              >
                <LucideUsers />
                Teachers
              </li>
            </Link>
            <Link to={"/students"} className="w-full">
              <li
                className={
                  isLocation.Students
                    ? "bg-blue-200 p-2 rounded-lg transition-all duration-300 flex gap-2"
                    : "hover:bg-gray-200 rounded-md p-2 transition-all duration-300 flex gap-2"
                }
              >
                <LucidePersonStanding />
                Students
              </li>
            </Link>
            <Link to={"/classes"} className="w-full">
              <li
                className={
                  isLocation.Classes
                    ? "bg-blue-100 p-2 rounded-lg transition-all duration-300 flex gap-2"
                    : "hover:bg-gray-200 rounded-md p-2 transition-all duration-300 flex gap-2"
                }
              >
                <LucideTvMinimal />
                Classes
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
