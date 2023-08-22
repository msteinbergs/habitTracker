import { createRoot } from "react-dom/client";
import LightsOn from "./components/LightsOn";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LightsOn />);