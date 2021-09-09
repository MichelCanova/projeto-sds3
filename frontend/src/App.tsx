import Navbar from "componets/Navbar";
import Footer from "componets/Navbar/Footer";
import DataTable from "componets/DataTable";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Ola mundo!!!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
