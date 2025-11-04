import { Routes, Route, Outlet } from "react-router";
import "./index.css";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/signin-page";
import SignUpPage from "./pages/signup-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";

const AuthLayout = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}
