import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </StrictMode>
  );
}
