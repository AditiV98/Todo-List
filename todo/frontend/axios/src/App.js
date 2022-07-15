import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import DashBoard from "./components/DashBoard/dashboard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DashBoard></DashBoard>
      <Footer></Footer>
    </div>
  );
}

export default App;
