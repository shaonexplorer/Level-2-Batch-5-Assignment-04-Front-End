import { Outlet } from "react-router";
import NavBar from "./components/nav/navBar";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="w-[1300px] mx-auto">
      <NavBar />
      <Toaster position="top-center" />
      <Outlet />
    </div>
  );
}

export default App;
