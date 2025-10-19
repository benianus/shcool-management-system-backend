import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/partials/SearchBar";
import { useUserContext } from "@/contexts/UserContext";
import type { SchoolClass } from "@/models/Class";
import { classes } from "@/repository/inMemory/Classes";
import { Navigate } from "react-router";

export default function Classes() {
  const userContext = useUserContext();
  if (userContext.authenticated) {
    return (
      <>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Classes</p>
            <Button className="bg-blue-500">+ Add Class</Button>
          </div>
          <SearchBar />
          <div className="overflow-x-auto rounded-box border-2 my-6">
            <table className="table">
              {/* head */}
              <thead className="text-black">
                <tr>
                  <th>Class Name</th>
                  <th>Teacher</th>
                  <th>Students Enrolled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {classes.map((t: SchoolClass) => {
                  return (
                    <tr>
                      <td>{t.name}</td>
                      <td>{t.teacher}</td>
                      <td>{t.studentsEnrolled}</td>
                      <td>
                        <Button>View</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
