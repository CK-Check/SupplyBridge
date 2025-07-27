import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA3TKNgfjRjTT6qS8uEP7cNPph3ospXh38",
  authDomain: "supplybridge-1fb66.firebaseapp.com",
  projectId: "supplybridge-1fb66",
  storageBucket: "supplybridge-1fb66.firebasestorage.app",
  messagingSenderId: "986478475426",
  appId: "1:986478475426:web:cf7ad539c8d0297a6d3ffb",
  measurementId: "G-BG37J7KV8J"
};

const app = initializeApp(firebaseConfig);

export default app;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
