import logo from "./logo.svg";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
