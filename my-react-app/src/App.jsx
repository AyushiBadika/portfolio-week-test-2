import AboutSection from "./components/AboutSection";
import Sidebar from "./components/Sidebar";
import "./App.css";
export default function App() {
  return (
    <div className="flex justify-around  m-24 ">
      <Sidebar />
      <AboutSection />
    </div>
  );
}
