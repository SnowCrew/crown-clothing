import Home from './routes/home/home.components.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/Authentication/Authentication.component.jsx';
import Shop from './routes/shop/Shop.component.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
