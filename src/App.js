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
        <ProductCard background="darkolivegreen"
         width='90px' height='90px' 
         product={products[0]} 
         onPurchase={handlePurchase}
         />
        <ProductCard 
        width='128px' height='128px' 
        product={products[1]}
        onPurchase={handlePurchase}
        />
        <ProductCard  
        width='90px' height='90px' background="peru" 
        product={products[2]} 
        onPurchase={handlePurchase}
        />
      </ProductList>
      
    </div>
  );
}

export default App;
