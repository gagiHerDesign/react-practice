import mock from "./mock.json"

export default async function handler(req, res) {

  console.log(req.method, req.query);
  // const response = await fetch('https://wt-tp-service.wanin.tw/WebClientInterview/task');
  // const response = await fetch('http://localhost:3000/api/products');
  // const data = await response.json();

  res.status(200).json({ products: mock.products })
}