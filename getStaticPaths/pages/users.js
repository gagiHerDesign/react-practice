function UserList({ users }) {
  return (<>
    <div> List of users </div>
    {users.map((user) => {
      return (<div key={user.id}>
        <p>{users.name}</p>
        <p>{user.email}</p>
      </div>
      )
    })}
  </>
  )
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  }
}