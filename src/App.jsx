import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
