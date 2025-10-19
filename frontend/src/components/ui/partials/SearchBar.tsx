import { useTeachersContext } from "@/contexts/TeachersContext";
import { TeacherRepository } from "@/repository/apiService/teachers";

export default function SearchBar() {
  const { setTeachers } = useTeachersContext();

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    const name = e.target.value;
    try {
      if (name) {
        const data = await TeacherRepository.getFilteredTeachers(name);
        console.log(data);
        setTeachers(data);
      } else {
        const data = await TeacherRepository.getAll();
        setTeachers(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <label className="input w-full bg-gray-50 border-gray-200 border-2 rounded-full mt-4">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
      </label>
    </>
  );
}
