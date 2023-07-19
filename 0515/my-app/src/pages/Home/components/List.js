import Item from './Item'

const arr = [1, 2, 3]

const List = ({ listData }) => {
  console.log('listData', listData)
  return <div className="list">
    {
      // 可以把arr印出來
      arr.map(item => <div>{item}</div>)
    }


    <Item />
    <Item />
    <Item />

  </div>
}
export default List;