import { Outlet } from "react-router";
import NavBar from "./components/nav/navBar";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen px-5 sm:px-0 sm:w-[1300px] min-h-screen mx-auto flex flex-col">
        <div className="mt-5 flex items-center justify-between">
          <NavBar />
          <ModeToggle />
        </div>

        <Toaster position="top-center" />
        <div className="flex-grow">
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
