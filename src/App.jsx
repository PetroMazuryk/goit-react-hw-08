import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';

import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
