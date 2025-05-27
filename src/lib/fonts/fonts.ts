import { Kaisei_Tokumin } from "next/font/google";
import localFont from "next/font/local";

const amoresa = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/amoresa-font/Andrey-Sharonov-Amoresa-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-amoresa",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

const avenir = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/avenir-font/AvenirLTStd-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/avenir-font/AvenirLTStd-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

const carrig = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/carrig-w01/Carrig-W01-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-carrig",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

const texGyreTermes = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/tex-gyre-termes/texgyretermes-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/tex-gyre-termes/texgyretermes-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tex-gyre-termes",
  display: "swap",
  preload: true,
  fallback: ["serif"],
});

const KaiseiTokumin = Kaisei_Tokumin({
  variable: "--font-kaisei-tokumin",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  fallback: ["sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

export { amoresa, avenir, carrig, texGyreTermes, KaiseiTokumin };
