import { useState, useEffect } from "react";
import BootingScreen from "./screen/booting_screen";
import Desktop from "./screen/desktop";
import LockScreen from "./screen/lock_screen";
import Navbar from "./screen/navbar";
import ReactGA from "react-ga";

const Ubuntu = () => {
  const [screenLocked, setScreenLocked] = useState(false);
  const [bgImageName, setBgImageName] = useState("wall-8");
  const [bootingScreen, setBootingScreen] = useState(true);
  const [shutDownScreen, setShutDownScreen] = useState(false);

  useEffect(() => {
    getLocalData();
  }, []);

  const setTimeOutBootScreen = () => {
    setTimeout(() => {
      setBootingScreen(false);
    }, 2000);
  };

  const getLocalData = () => {
    const bgImage = localStorage.getItem("bg-image");
    if (bgImage) {
      setBgImageName(bgImage);
    }

    const booting = localStorage.getItem("booting_screen");
    if (booting) {
      setBootingScreen(false);
    } else {
      localStorage.setItem("booting_screen", false);
      setTimeOutBootScreen();
    }

    const shutDown = localStorage.getItem("shut-down");
    if (shutDown === "true") {
      shutDownHandler();
    } else {
      const locked = localStorage.getItem("screen-locked");
      if (locked) {
        setScreenLocked(locked === "true");
      }
    }
  };

  const lockScreen = () => {
    ReactGA.pageview("/lock-screen");
    ReactGA.event({
      category: "Screen Change",
      action: "Set Screen to Locked",
    });

    document.getElementById("status-bar").blur();
    setTimeout(() => {
      setScreenLocked(true);
    }, 100);
    localStorage.setItem("screen-locked", true);
  };

  const unLockScreen = () => {
    ReactGA.pageview("/desktop");

    window.removeEventListener("click", unLockScreen);
    window.removeEventListener("keypress", unLockScreen);

    setScreenLocked(false);
    localStorage.setItem("screen-locked", false);
  };

  const changeBackgroundImage = (imgName) => {
    setBgImageName(imgName);
    localStorage.setItem("bg-image", imgName);
  };

  const shutDownHandler = () => {
    ReactGA.pageview("/switch-off");
    ReactGA.event({
      category: "Screen Change",
      action: "Switched off the Ubuntu",
    });

    document.getElementById("status-bar").blur();
    setShutDownScreen(true);
    localStorage.setItem("shut-down", true);
  };

  const turnOn = () => {
    ReactGA.pageview("/desktop");

    setShutDownScreen(false);
    setBootingScreen(true);
    setTimeOutBootScreen();
    localStorage.setItem("shut-down", false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden" id="monitor-screen">
      <LockScreen
        isLocked={screenLocked}
        bgImgName={bgImageName}
        unLockScreen={unLockScreen}
      />

      <BootingScreen
        visible={bootingScreen}
        isShutDown={shutDownScreen}
        turnOn={turnOn}
      />

      <Navbar lockScreen={lockScreen} shutDown={shutDownHandler} />

      <Desktop
        bg_image_name={bgImageName}
        changeBackgroundImage={changeBackgroundImage}
      />
    </div>
  );
};

export default Ubuntu;