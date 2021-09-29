import Cat from "./components/Cat.js"
import Layout from "./components/Layout.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Footer><span>and ❤️</span></Footer>
      </Layout>
      <Cat name="Tokio" color="negro"/>
    </>
  )
}

export default App

