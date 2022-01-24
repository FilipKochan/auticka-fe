import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../containers/Home';
import Layout from '../Layout';
import MyAccount from '../../containers/MyAccount';
import OwnSituations from '../../containers/OwnSituations';
import SituationsTests from '../../containers/SituationsTests';
import TestQuestion from '../../containers/TestQuestion';
import LoginPage from '../../containers/LoginPage/LoginPage';
import CreateAccount from '../../containers/CreateAccount/CreateAccount';
import { useDispatch } from 'react-redux';
import './App.scss';
import { setUserFromJWT } from '../../actions/userActions';

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserFromJWT());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vlastni-situace" element={<OwnSituations />} />
          <Route path="/testy" element={<SituationsTests />} />
          <Route path="/test/:testId/:question" element={<TestQuestion />} />
          <Route path="/muj-ucet" element={<MyAccount />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/novy-ucet" element={<CreateAccount />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
