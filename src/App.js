import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Router from './Components/Layout/Routes';
import ScrollToTopButton from './Components/Shared/ScrollTop/Scrolltop';

function App() {
  return (
    <div>
      <RouterProvider router={Router} ></RouterProvider>
      <ToastContainer></ToastContainer>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
