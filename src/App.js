import './App.css';
import './components/ProductList'

import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const product1 = {
        imageSrc :"images/iphone-4.png",
        title : "Iphone 13 Pro",
        specification : ["A17 Pro processor","Good Camera","BTf Owner"],
        price : 999,
    };
  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
      </ProductList>
      
    </div>
  );
}

export default App;
