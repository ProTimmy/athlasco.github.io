import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.ATHLAS_API_KEY,
  authDomain: process.env.ATHLAS_AUTH_DOMAIN,
  databaseURL: process.env.ATHLAS_DATABASE_URL,
  projectId: process.env.ATHLAS_PROJECT_ID,
  storageBucket: process.env.ATHLAS_STORAGE_BUCKET,
  messagingSenderId: process.env.ATHLAS_MESSAGING_SENDER_ID,
  appId: process.env.ATHLAS_APP_ID,
  measurementId: process.env.ATHLAS_MEASUREMENT_ID
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
  }
  
  // *** Auth API ***
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)
}

export default Firebase