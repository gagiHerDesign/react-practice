import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  // 使用 useRouter() hook 可以取得路由參數
  const { params } = router.query;
  console.log(params);

  return <h1>Doc</h1>
}

export default Doc;