import { Card } from "@/components/ui/card";
import { useUserContext } from "@/contexts/UserContext";
import { Navigate } from "react-router";

export default function Dashboard() {
  const userContext = useUserContext();
  if (userContext.authenticated) {
    return (
      <>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="flex gap-14 ">
            <div className="w-2/3">
              <h3 className="my-4 text-xl font-bold">Attendance Overview</h3>
              <Card className="w-full h-50" />
              <h3 className="my-4 text-xl font-bold">Announcements</h3>
              <Card className="w-full my-4 h-25" />
              <Card className="w-full my-4 h-25" />
            </div>
            <div className=" w-1/3">
              <h3 className="my-4 text-xl font-bold">Upcoming Events</h3>
              <Card className="w-full h-50" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    Navigate({
      to: "/login",
    });
  }
}
