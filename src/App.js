import './App.css';
import data, { categoryUnique } from "./data";
// import { render } from '@testing-library/react';
import { useState } from 'react';
import Product from './components/Product'
import Category from './components/Category';
// console.log(allProducts)

function App() {
  const [category, setCategory] = useState('All')

  return (
    <div className="App">
      <header className="cat-header">
        {
          categoryUnique.map(v => <Category v={v} setCategory={setCategory} />)
        }
      </header>

      <div className="products">
        {data.filter(item => item.category == category || category == 'All').map(obj => <Product obj={obj} />)}
      </div>
    </div>
  );
};







export default App;
