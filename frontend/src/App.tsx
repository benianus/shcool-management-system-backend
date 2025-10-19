import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/ui/partials/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
