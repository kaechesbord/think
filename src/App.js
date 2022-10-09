import './App.css';
import Category from './hierarchy/Category';
import Products from './hierarchy/Products';
import Search from './hierarchy/Search';

function App() {
  return (
    <div className="contain">
      <Search/>
      <Category/>
      <Products/>
    </div>
  );
}

export default App;
