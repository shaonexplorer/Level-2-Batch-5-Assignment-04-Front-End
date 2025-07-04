import { Outlet } from "react-router";
import NavBar from "./components/nav/navBar";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-[1300px] mx-auto">
        <div className="fex items-center justify-between">
          <NavBar />
          <ModeToggle />
        </div>

        <Toaster position="top-center" />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
