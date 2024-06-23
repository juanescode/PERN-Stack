import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Menu from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
