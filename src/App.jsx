import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout'; // Import Layout
import "preline/preline";

function App() {
  const location = useLocation();
  const { autoInit } = window.HSStaticMethods || {};

  // useEffect(() => {
  //   if (typeof autoInit === 'function') {
  //     autoInit();
  //   }
  // }, [autoInit, location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
