import Student from "./Student"

function App() {
  return (
    <>
      <Student name="Abe" age={27} isStudent={false}/>
      <Student name="Bruno" age={18} isStudent={true}/>
      <Student name="Bacelar" age={24} isStudent={false}/>
      <Student name="Fake" age={30} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App
