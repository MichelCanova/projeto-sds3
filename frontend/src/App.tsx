import Navbar from "componets/Navbar";
import Footer from "componets/Navbar/Footer";
import DataTable from "componets/DataTable";
import BarChart from "componets/BarChart";
import DonutChart from "componets/DonutChart";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de vendas:</h1>
        <div className="row px-3">
          <div className="col-sm-6"><h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
            <BarChart /></div>
          <div className="col-sm-6"><h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
            <DonutChart /></div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
