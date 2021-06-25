import './App.css';
import img from './assets/img-2.jpeg';
import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <div className="app-layout">
      <img src={img} alt="medical professional on their mobile device" className="bg-img"/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
