import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home_page';
import Helmet from 'react-helmet';
import CreateAccount from './pages/Create_Account_page';
import WelcomeBack from './pages/Welcome_Back_page';
import AccountMain from './pages/Account_Main_page';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SelectPlan from './pages/Select_Plan_page';
import ChooseCountry from './pages/Choose_Country_page';
import PersonalInformation from './pages/Personal_Information_page';
import ForgotPassword from './pages/Forgot_Password_page';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FutureEd</title>
      </Helmet>
      <AuthContextProvider>
        <BrowserRouter>	
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/SignIn" element={<WelcomeBack />}/>
          <Route path="/SelectPlan" element={<SelectPlan />}/>
          <Route path="/ChooseCountry" element={<ChooseCountry />}/>
          <Route path="/PersonalInformation" element={<PersonalInformation />}/>
          <Route path="/ForgotPassword" element={<ForgotPassword />}/>
          <Route 
            path="/AccountMain" 
            element={<ProtectedRoute>
              <AccountMain />
              </ProtectedRoute>
            } 
            />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
