import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoApp from "./components/TodoApp.jsx";
import Events from "./components/Events.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Events />
  </StrictMode>
);
