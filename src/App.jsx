import "./App.css";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";


function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Main />
      {/* insert footer here */}
      <Footer />
     
    </div>
  );
}

export default App;
