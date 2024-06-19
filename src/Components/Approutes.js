import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutPage";
import Menu from "./Menu";
import ContactUs from "./Contact";
import Layout from "./Layout";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/AboutPage"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/Menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
