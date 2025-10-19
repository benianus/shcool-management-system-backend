import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/router.tsx";
import { RouterProvider } from "react-router";
import { UserProvider } from "./contexts/UserContext.tsx";
import { TeachersProvider } from "./contexts/TeachersContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeachersProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </TeachersProvider>
  </StrictMode>
);
