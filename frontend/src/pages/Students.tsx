import { Button } from "@/components/ui/button";
import { DropdownMenuRadioGroupDemo } from "@/components/ui/DropdownMenuRadioGroupDemo";
import SearchBar from "@/components/ui/partials/SearchBar";
import { useUserContext } from "@/contexts/UserContext";
import { students } from "@/repository/inMemory/Students";
import { Navigate } from "react-router";

interface Student {
  id: number;
  name: string;
  grade: number;
  class: string;
  status: boolean;
}

export default function Students() {
  const userContext = useUserContext();
  if (userContext.authenticated) {
    return (
      <>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Students</p>
            <Button className="bg-blue-500">+ Add Student</Button>
          </div>
          <SearchBar />
          <div className="flex flex-row gap-4 mt-6">
            <DropdownMenuRadioGroupDemo
              title={"Class"}
              items={[
                "Math",
                "Science",
                "Physics",
                "Islamic",
                "Chemistry",
                "Tech",
              ]}
            />
            <DropdownMenuRadioGroupDemo
              title={"Grade"}
              items={["A", "B", "C", "D", "E", "F"]}
            />
            <DropdownMenuRadioGroupDemo
              title={"Status"}
              items={["Active", "Passive"]}
            />
          </div>
          <div className="overflow-x-auto rounded-box border-2 my-6">
            <table className="table">
              {/* head */}
              <thead className="text-black">
                <tr>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>Class</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {students.map((t: Student) => {
                  return (
                    <tr key={t.id}>
                      <td>{t.name}</td>
                      <td>{t.grade}</td>
                      <td>{t.class}</td>
                      <td>
                        {t.status ? (
                          <button className="btn btn-outline btn-warning btn-sm rounded-full">
                            Active
                          </button>
                        ) : (
                          <button className="btn btn-outline btn-Error btn-sm rounded-full">
                            Passive
                          </button>
                        )}
                      </td>
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
