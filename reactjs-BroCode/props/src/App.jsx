import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Spongebob" age={18} isStudent={true} />
      <Student name="Patrick" age={21} isStudent={false} />
      <Student name="Patrick" age={21} isStudent={false} />
      <Student name="Patrick" age={21} isStudent={false} />
      <Student />
      <Student />
    </>
  );
}

export default App;
