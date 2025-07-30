import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/home"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
