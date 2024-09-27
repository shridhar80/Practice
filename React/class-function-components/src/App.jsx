import PersonClass from "./PersonClass";
import PersonFunction from "./PersonFunction"



function App() {
  
  var age= 10;

  return (
    <>
     <PersonFunction a={age}></PersonFunction>

     <hr />

     <PersonClass/>
    </>
  )
}

export default App
