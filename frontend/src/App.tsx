import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to MERN Template</h2>
        <p>API Status: {status}</p>
      </main>
    </div>
  );
}

export default App;
