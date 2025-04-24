import displayDifines from "./components/apps/difines";
import displayPartner from "./components/apps/partner";
import displayChat from "./components/apps/chat";
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutStella } from "./components/apps/stella";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-stella",
    title: "About Stella",
    icon: "./images/logos/stellaray777.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutStella,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Yaru/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Yaru/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/Yaru/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Yaru/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "difines",
    title: "SHIBUYA Ecosystem",
    icon: "./themes/Yaru/apps/shibuya.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayDifines,
  },
  {
    id: "chatfi",
    title: "PEPE Sushi",
    icon: "./themes/Yaru/apps/pepesushi.webp",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Aura Fashion Theme",
    icon: "./themes/Yaru/apps/fashionlogo.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Yaru/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Yaru/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Yaru/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
