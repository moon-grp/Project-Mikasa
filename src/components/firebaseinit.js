import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import firebaseconfig from './firebaseconfig'
const firebaseapp = firebase.initializeApp(firebaseconfig)
export default firebaseapp.firestore()