import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Landing from "./pages/Landing";
import { GlobalProvider } from "./components/globalContext";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
