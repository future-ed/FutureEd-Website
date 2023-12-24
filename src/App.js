import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home_page';
import Helmet from 'react-helmet';

import CreateAccount from './pages/Log_In_Phase/Create_Account_page';
import WelcomeBack from './pages/Log_In_Phase/Welcome_Back_page';
import SelectPlan from './pages/Log_In_Phase/Select_Plan_page';
import ChooseCountry from './pages/Log_In_Phase/Choose_Country_page';
import PersonalInformation from './pages/Log_In_Phase/Personal_Information_page';
import ForgotPassword from './pages/Log_In_Phase/Forgot_Password_page';

import PersonalFinances from './pages/Dashboard/Personal_Finances_Page';
import Taxes from './pages/Dashboard/Taxes_page';
import CareerBuilding from './pages/Dashboard/Career_Building_page';
import IndependentLiving from './pages/Dashboard/Independent_Living_page';
import Health from './pages/Dashboard/Health_page';
import LifeSkills from './pages/Dashboard/LifeSkills_page';
import HomePage from './pages/Dashboard/Home_page';

// Test
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
            path="/PersonalFinances" 
            element={<ProtectedRoute>
              <PersonalFinances />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/Taxes" 
            element={<ProtectedRoute>
              <Taxes />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/CareerBuilding" 
            element={<ProtectedRoute>
              <CareerBuilding />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/IndependentLiving" 
            element={<ProtectedRoute>
              <IndependentLiving />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/Health"     
            element={<ProtectedRoute>
              <Health />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/LifeSkills" 
            element={<ProtectedRoute>
              <LifeSkills />
              </ProtectedRoute>
            } 
            />
            <Route 
            path="/Home" 
            element={<ProtectedRoute>
              <HomePage />
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
