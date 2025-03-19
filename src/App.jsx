import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./features/home/Home";
import { SearchingUser } from "./features/searchingUsers/SearchingUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<SearchingUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
