import "./App.css";
import AppFooter from "./components/AppFooter";
import Header from "./components/Header";
import RouterOutlet from "./router/RouterOutlet";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterOutlet />
      <AppFooter />
    </div>
  );
}

export default App;
