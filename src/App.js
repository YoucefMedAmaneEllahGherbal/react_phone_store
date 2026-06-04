import './App.css';
import './components/ProductList'

import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
function handlePurchase(product){
    alert(`you clicked on ${product.title} with the cost ${product.price} $`);
  }
function App() {
  const products = [{
        imageSrc :"images/iphone-4.png",
        title : "IPhone 13 Pro",
        specification : ["A17 Pro processor","Good Camera","BTf Owner"],
        price : 999,
    },
  {
        imageSrc :"images/ipad.png",
        title : "IPad air 7",
        specification : ["A18 Pro processor","13 inches screen","good for reading"],
        price : 1500,
    },
    {
        imageSrc :"images/smartwatch (1).png",
        title : "Apple watch",
        specification : ["heart rate function","blutooth and wifi","suitable with many hand sizes"],
        price : 459,
    }];
  return (
    <div className="App">
      <ProductList>
        {
          products.map(product => <ProductCard 
            key={product.title}
         product={product} 
         onPurchase={handlePurchase}
         />)
        }
      </ProductList>
      <h2>Products that cost up tp 500$ :</h2>
      <ul>
        {products.filter(({price})=> price<500).map(({title , price}) => <li>
          {title} Costs ${price}
        </li>)}
      </ul>

      <h2>
        Products that cost more than 500$
      </h2>

      <ul>
        {products.filter(({price}) => price>1000).map(({title , price}) =>
        <li>
          {title} costs ${price}
        </li>)}
      </ul>

      <h2>
        Porducts that cost more than 1k$
      </h2>
      <uL>
        {products.filter(({price}) => price > 1000).map(({title , price}) => <li>
          {title} costs ${price}
        </li>)}
      </uL>
    </div>
  );
}

export default App;
