import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTeachersContext } from "@/contexts/TeachersContext";
import { TeacherRepository } from "@/repository/apiService/teachers";
import { useState } from "react";

export function PaginationBar() {
  const [page, setPage] = useState<number>(1);
  const [isNextActive, setIsNextActive] = useState<boolean>(false);

  const { setTeachers } = useTeachersContext();
  async function handleClick(page: number) {
    try {
      setPage(page);
      const data = await TeacherRepository.getAll(page);
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClickNext() {
    try {
      let nextPage = page;
      nextPage++;
      console.log(nextPage);

      const data = await TeacherRepository.getAll(nextPage);
      console.log(data);
      if (data.length > 0) {
        setPage(nextPage);
        setTeachers(data);
        return;
      }
      setIsNextActive(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClickPrevious() {
    try {
      setIsNextActive(false);
      const data = await TeacherRepository.getAll(page - 1);
      setPage(page - 1);
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={handleClickPrevious}
            className={page <= 1 ? "hidden" : ""}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive={page === 1 ? true : false}
            onClick={() => handleClick(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive={page === 2 ? true : false}
            onClick={() => handleClick(2)}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive={page === 3 ? true : false}
            onClick={() => handleClick(3)}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleClickNext}
            className={isNextActive ? "hidden" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
