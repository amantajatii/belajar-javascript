// App.jsx
import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
      <>
        {/* Ini harus menampilkan "Please log in to continue" dan "Guest" */}
        <UserGreeting />

        <hr />

        {/* Ini harus menampilkan "welcome Guest" */}
        <UserGreeting isLoggedIn={true}/>

        <hr />

        {/* Ini harus menampilkan "welcome John Doe" */}
        <UserGreeting isLoggedIn={true} username="John Doe"/>

        <hr />

        {/* Ini akan menampilkan "welcome " (string kosong) karena username diset kosong */}
        <UserGreeting isLoggedIn={true} username=""/>
      </>
  );
}

export default App