import { useState } from 'react';

const keyValue = () => {
  // 定義產品價格
  const originProducts = [
    {
      id: 1,
      title: '1基本版',
      price: 100,
    },
    {
      id: 2,
      title: '2付費版',
      price: 100,
    },
    {
      id: 3,
      title: '3專業版',
      price: 10000,
    }
  ];
  const [products, setProducts] = useState(originProducts);

  // 把所有品項的價格都*2
  const handleDoublePrice = () => {
    const productByDoublePrice = products.map(item => ({ ...item, price: item.price * 2 }))
    setProducts(productByDoublePrice)
    console.log(productByDoublePrice)
  }

  // 新增品項
  const handleNewProduct = () => {
    const newProducts = [{
      id: products.length + 1,
      title: '新增品項',
      price: 100,
    }, ...products]
    setProducts(newProducts)
    console.log('handleNewProduct', newProducts)
  }




  return (
    <div>

    </div>)
}

export default keyValue;