import './App.css';
import Header from './components/header';
import LoginCard from './components/logincard';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='grid-container login-card'>
        <div className="grid-item grid-item-1"><LoginCard role="Store Manager" description="Manages the staff do not relate with customer , Head for staff operations"/></div>
        <div className="grid-item grid-item-2">
        </div>
        <div className="grid-item grid-item-3"><LoginCard role="Staff" description="The Store Staff can insert sales for customers, roots for data insertion of customer" /></div>
      </div>
    </div>

    
  );
}

export default App;
