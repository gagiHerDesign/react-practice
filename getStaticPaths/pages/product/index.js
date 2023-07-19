export default function productIndex({ products }) {

  return (
    <div>
      <h1>Product Index</h1>
      {
        products.map((product) => {
          return (
            <ul key={product.id}>
              <li>{product.id}</li>
              <li>{product.name}</li>
              <li>{product.description}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req, res, params, query, ...rest } = context;
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();
  console.log(data);

  return {
    props: { products: data.products }, // will be passed to the page component as props  
  }
}