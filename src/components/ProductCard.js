export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article style={{border : '1px solid white' ,
      background,
      width:'100%',
     borderRadius:'8px',
     padding:'16px',
     textAlign:'center',
     }}>
      <h2>
        {product.title}
      </h2>
      <img src={product.imageSrc}
      alt={product.title}
      width={"128px"}  height={"128px"}
      />
      <p>
        Specification
        <ul style={{listStyle:'none', padding:0}}>

          {product.specification.map((spec,idx) => (
            <li key={idx}>{spec}</li>
          ))}
        </ul>
        <button onClick={()=>onPurchase(product)}>Buy (from {product.price}$)</button>
      </p>
    </article>
  );
}

