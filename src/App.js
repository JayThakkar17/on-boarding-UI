import './App.css';
import Routes from './routes/Routes';
import logo from './assets/images/logo.png';
import { StepComponent } from './core/components/steps';

function App() {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <span className='logo-title'>Eden</span>
      </div>

      <div className='steps'>
        <StepComponent />
      </div>

      <Routes />
    </div>
  );
}

export default App;
