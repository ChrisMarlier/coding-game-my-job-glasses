import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import ShowCharacter from '../pages/showCharacter';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show" element={<ShowCharacter />} />
    </Routes>
  );
};
