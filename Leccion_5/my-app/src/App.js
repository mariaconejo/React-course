import React from "react";
import "./styles.css";
import { students } from "./studentsList.js"
import Navbar from "./components/Navbar.js";
import Layout from "./components/Layout.js";
import List from "./components/List.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Layout>
      <Navbar />
      <List students={students}/>
      <Footer />
    </Layout>
  );
}

export default App;
