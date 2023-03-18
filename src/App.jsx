import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter basename="/">
        <div className="App">
          <Navbar />
          <Pages />
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
