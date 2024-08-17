import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import MyApp from "./components/MyApp";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <MyApp />
        <Footer/>
      </div>
    </>
  );
}

export default App;
