import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useMediaQuery } from './util/customHooks';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import ContactPage from './routes/contact-form/contact-form.component'
import AboutPage from './routes/about-page/about-page.component';
import TestimonialsPage from './routes/testimonials-page/testimonials-page.component';

import './App.css';

function App() {

  const isDesktop = useMediaQuery('(min-width: 1020px)')

  const [navBackground, setNavBackground] = useState('unset')

  return (
    <Routes>
      <Route path='/' element={<Navigation navBackground={navBackground} isDesktop={isDesktop} />} >
        <Route index element={<Home setNavBackground={setNavBackground} isDesktop={isDesktop} />} />
        <Route path='/contact' element={<ContactPage isDesktop={isDesktop} />} />
        <Route path='/about' element={<AboutPage setNavBackground={setNavBackground} isDesktop={isDesktop} />} />
        <Route path='/testimonials' element={<TestimonialsPage setNavBackground={setNavBackground} isDesktop={isDesktop} />} />
      </Route>
    </Routes>
  );
}

export default App;
