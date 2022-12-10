import './App.scss';
import Header from './components/Header/Header';
import RouterPage from './router/RouterPage';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="app-container">
      <div className='p-header'>
        <Header />
      </div>
      <div className='app-content'>
        <RouterPage />
        <ToastContainer
             position="top-right"
             autoClose={3000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover={false}
             limit={5}
          />
      </div>
    </div>
  );
}

export default App;
