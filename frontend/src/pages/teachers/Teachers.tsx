import { Button } from "@/components/ui/button";
import { Link, Navigate, useNavigate } from "react-router";
import { useUserContext } from "@/contexts/UserContext";
import SearchBar from "@/components/ui/partials/SearchBar";
import { useEffect } from "react";
import { TeacherRepository } from "@/repository/apiService/teachers";
import { useTeachersContext } from "@/contexts/TeachersContext";
import { PaginationBar } from "@/components/ui/partials/PaginationBar";

interface Teacher {
  id: number;
  name: string;
  email: string;
  class: string;
  status: boolean;
}

export default function Teachers() {
  const userContext = useUserContext();
  const navigate = useNavigate();
  const { teachers, setTeachers } = useTeachersContext();

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await TeacherRepository.getAll();
      setTeachers(data);
    };

    fetchTeachers();
  }, []);

  if (userContext.authenticated) {
    return (
      <>
        <div className="flex flex-col h-181">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold">Teachers</p>
              <Button className="bg-blue-500 cursor-pointer">
                <Link to={"/teachers/create"}>+ Add Teacher</Link>
              </Button>
            </div>
            <SearchBar />
            <div className="overflow-x-auto rounded-box border my-6">
              <table className="table">
                {/* head */}
                <thead className="text-black border-b">
                  <tr className="">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {teachers.map((t: Teacher) => {
                    return (
                      <tr className="" key={t.id}>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td>{t.class}</td>
                        <td>
                          {t.status ? (
                            <button className="btn btn-outline btn-warning btn-sm rounded-full cursor-none border">
                              Active
                            </button>
                          ) : (
                            <button className="btn  btn-outline btn-Error btn-sm rounded-full cursor-none border">
                              Passive
                            </button>
                          )}
                        </td>
                        <td>
                          <Button className="cursor-pointer">View</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="">
          <PaginationBar />
        </div>
      </>
    );
  } else {
    Navigate({
      to: "/login",
    });
  }
}
