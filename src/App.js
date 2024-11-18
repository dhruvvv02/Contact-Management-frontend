import { Routes, Route }  from 'react-router-dom';

import './App.css';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { AuthContextProvider } from './Context/AuthContext';
import { ToastContextProvider } from './Context/ToastContext';
import CreateContact from './Pages/CreateContact';
import AllContact from './Pages/AllContacts';
import EditContact from './Pages/EditContact';

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <ToastContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/create" element={<CreateContact/>} />
            <Route path="/mycontacts" element={<AllContact/>} />
            <Route path="/edit/:id" element={<EditContact/>} />
          </Routes>
        </Layout>
        </ToastContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
