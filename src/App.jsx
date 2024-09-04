import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Login from './auth/login';
import SignUp from './auth/signup';
import {Banner} from './components/Banner.jsx';
import { Products } from './components/Products.jsx';
import {About} from './components/About.jsx';




const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const[theme, setTheme]= useState(current_theme? current_theme : 'light');
  const [showForm, setShowForm] = useState(null);
  const [isOpenBanner, setIsOpenBenner] = useState(true); 
  const [isOpenProucts, setIsOpenProducts] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

useEffect(() => {
  localStorage.setItem('current_theme', theme)

},[theme])
const toggleform =(formType) => {
  console.log('Toggling Form:', formType);
  setShowForm(showForm == formType ? null : formType);
};
console.log({isOpenProucts});

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} toggleForm={toggleform}setIsOpenBenner={setIsOpenBenner} setIsOpenProducts={setIsOpenProducts}  setIsOpenAbout={setIsOpenAbout}  />
      {isOpenBanner && <Banner/>}
      {isOpenProucts && <Products/>}
      {isOpenAbout && <About/>}
      {showForm === 'login' && <Login toggleForm={toggleform}/>}
      { showForm === 'signup' && <SignUp toggleForm={toggleform}/>}
    </div>
  )
}

export default App;