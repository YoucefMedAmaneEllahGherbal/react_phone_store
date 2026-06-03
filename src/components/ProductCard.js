export function ProductCard({product , background ="slategray", 
  ...restProps
})
{


  return (
    <article style={{border : '1px solid white' ,
      background,
      width:'100%',
     borderRadius:'8px',
     padding:'16px',
     textAlign:'center'
     }}>
      <h2>
        {product.title}
      </h2>
      <img src={product.imageSrc}
      alt='iphone 13 Pro'
      {...restProps}
      />
      <p>
        Specification
        <ul style={{listStyle:'none', padding:0}}>
          <li>
            {product.specification[0]}
          </li>
          <li>
             {product.specification[1]}
          </li>
          <li>
             {product.specification[2]}
          </li>
        </ul>
        <button>Buy (from {product.price}$)</button>
      </p>
    </article>
  );
}

