import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
