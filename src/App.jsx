import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <Pages />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
