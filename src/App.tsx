import { Outlet } from "react-router";
import NavBar from "./components/nav/navBar";

function App() {
  return (
    <div className="w-[1300px] mx-auto">
      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;
