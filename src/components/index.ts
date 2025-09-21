import dynamic from "next/dynamic";

export const CardAbout = dynamic(() => import("./Card/card-about"));
export const CardProject = dynamic(() => import("./Card/card-project"));
export const Contact = dynamic(() => import("./Contact"));
export const Footer = dynamic(() => import("./Footer"));
export const Navbar = dynamic(() => import("./Navbar"));
export const Dominos = dynamic(() => import("./Dominos"));
export const LoadingSpinner = dynamic(() => import("./LoadingSpinner"));
export const ParticleBackground = dynamic(() => import("./ParticleBackground"));
export const LoadingScreen = dynamic(() => import("./LoadingScreen"));
export const ScrollIndicator = dynamic(() => import("./ScrollIndicator"));
export const Logo = dynamic(() => import("./Logo"));
