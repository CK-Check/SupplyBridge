import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getAuth, connectAuthEmulator } from "firebase/auth";
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


connectAuthEmulator(getAuth(app), "http://127.0.0.1:9099");
connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);


export default app;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
