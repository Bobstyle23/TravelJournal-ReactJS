import "./App.css";
import Cities from "./components/Cities";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      {data.map((item) => (
        <Cities
          image={item.image}
          title={item.title}
          location={item.location}
          googleMap={item.googleMapsUrl}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
