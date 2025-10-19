import { Link, useNavigate } from "react-router";
import { Button } from "../button";
import axios from "axios";
import { axiosClient } from "@/api/axios";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogoutClick() {
    try {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axiosClient.post("/logout");
      if (response.status === 204) {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-end items-center bg-gray-100 border-4 p-4 m-4 rounded-3xl">
        <div className="">
          <ul className="flex justify-end items-center gap-4">
            <Link to={"/logout"}>
              <li onClick={handleLogoutClick}>Logout</li>
            </Link>
            <Button>Dark Mode</Button>
          </ul>
        </div>
      </div>
    </>
  );
}
