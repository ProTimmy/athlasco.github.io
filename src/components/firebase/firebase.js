import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import * as CONFIG from '../../constants/firebase_config'

const config = {
  apiKey: CONFIG.ATHLAS_API_KEY,
  authDomain: CONFIG.ATHLAS_AUTH_DOMAIN,
  databaseURL: CONFIG.ATHLAS_DATABASE_URL,
  projectId: CONFIG.ATHLAS_PROJECT_ID,
  storageBucket: CONFIG.ATHLAS_STORAGE_BUCKET,
  messagingSenderId: CONFIG.ATHLAS_MESSAGING_SENDER_ID,
  appId: CONFIG.ATHLAS_APP_ID,
  measurementId: CONFIG.ATHLAS_MEASUREMENT_ID
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)

    this.auth = firebase.auth()
    this.db = firebase.firestore()

    this.db.settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    })
    this.db.enablePersistence()
  }

  // *** Auth API ***

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.doc(`users/${uid}`)

  users = () => this.db.collection('users')

  // *** Tags API ***
  tags = () => this.db.collection('tags')

  tag = id => this.db.doc(`tags/${id}`)
}

export default Firebase