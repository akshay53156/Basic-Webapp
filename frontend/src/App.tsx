import AppRoutes from "./routes/Routes";
import Navbar from "./components/common/header/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
