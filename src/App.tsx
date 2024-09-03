import "./App.css";
import "./homepage.css";
import "./nav.css";
import MakadiServices from "./makadi services";
import Nav from "./nav";
import WelcomeSection from "./welcome section";
import FormSection from "./Form";
function App() {
  return (
    <div className="homepage">
      <Nav />
      <WelcomeSection />
      <MakadiServices />
      <FormSection />
    </div>
  );
}

export default App;
