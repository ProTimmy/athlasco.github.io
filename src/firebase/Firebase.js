import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import * as FB_CONFIG from '../constants/firebase_config';

const firebaseConfig = {
  apiKey: FB_CONFIG.ATHLAS_API_KEY,
  authDomain: FB_CONFIG.ATHLAS_AUTH_DOMAIN,
  databaseURL: FB_CONFIG.ATHLAS_DATABASE_URL,
  projectId: FB_CONFIG.ATHLAS_PROJECT_ID,
  storageBucket: FB_CONFIG.ATHLAS_STORAGE_BUCKET,
  messagingSenderId: FB_CONFIG.ATHLAS_MESSAGING_SENDER_ID,
  appId: FB_CONFIG.ATHLAS_APP_ID,
  measurementId: FB_CONFIG.ATHLAS_MEASUREMENT_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
