import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Novellist from "./component/Novellist";
import CreateNovel from "./component/CreateNovel";
import EditNovel from './component/EditNovel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Novellist />} />
        <Route path='/create' element={<CreateNovel />} />
        <Route path='/edit/:id' element={<EditNovel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;