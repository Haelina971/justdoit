import { Route, Routes } from 'react-router-dom';
import ToDoList from "./Components/ToDoList"
import Layout from './Components/Pages/Layout';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  //Renders ToDoList
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/pages/home" element={<Home />}></Route>
          <Route path="/pages/signup" element={<SignUp />}></Route>
          <Route path="/pages/login" element={<LogIn />}></Route>
          <Route path="/pages/about" element={<About />}></Route>
          <Route path="/todolist" element={<ToDoList />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
