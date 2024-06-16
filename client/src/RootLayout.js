import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "100vh",position:"relative" }}>
        <div className="container">
          {" "}
          <Outlet />
        </div>
      </div>
      <div style={{bottom:"0",width:"100%",height:"0.1rem",marginTop:"1em"}}>
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
