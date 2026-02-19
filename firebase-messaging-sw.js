importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDoOwqWcWTKL0SBCKdB6pqb64hl1kz0l2c",
  authDomain: "goat--bro.firebaseapp.com",
  databaseURL: "https://goat--bro-default-rtdb.firebaseio.com",
  projectId: "goat--bro",
  storageBucket: "goat--bro.firebasestorage.app",
  messagingSenderId: "1058568757005",
  appId: "1:1058568757005:web:340272be715b5f1769da44"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: "https://i.ibb.co/9m2WpxgK/IMG-20260219-WA0000.jpg"
  });
});
