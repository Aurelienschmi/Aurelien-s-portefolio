import React, { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import SwitchTheme from "./components/SwitchTheme.tsx";
import Translation from "./components/Translation.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";
import BurgerMenu from "./components/BurgerMenu.tsx";
import { AppProvider } from "./context/AppContext.tsx";

const App = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = 'dark';
    const rootElement = document.documentElement;

    if (isDarkMode) {
      rootElement.classList.add(darkModeClass);
    } else {
      rootElement.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppProvider>
      <div
        className={`bg-cover bg-center flex justify-center items-start min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
        style={{
          backgroundImage: isDarkMode
            ? `url(/images/background_dark.jpg)`
            : `url(/images/background_light.jpg)`
        }}
      >
        <div className="sticky top-16 bg-white dark:bg-black rounded-3xl p-6 mt-56">
          <PersonalInfo />
        </div>
        <div className="absolute top-0 right-0 m-4 flex space-x-4">

          <Translation />
          <SwitchTheme toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="flex flex-col w-1/2 p-5 m-5 bg-white dark:bg-black rounded-3xl mt-40">
          <Home about={about} resume={resume} works={works} contact={contact} />
        </div>
        <div className="sticky top-16 bg-white dark:bg-black rounded-3xl p-4 mt-56">
          <Header
            about={about}
            resume={resume}
            works={works}
            contact={contact}
          />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;