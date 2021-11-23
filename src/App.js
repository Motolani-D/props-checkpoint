import "./App.css";
import Profile from "./profile/profile.js";

function App() {
  const nameHandler = (fullname) => {
    alert(fullname);
  };
  return (
    <div className="App">
      <Profile
        fullname="Motolani"
        bio="I am a designer"
        Profession="PM"
        nameHandler={nameHandler}
      ></Profile>
    </div>
  );
}

export default App;
