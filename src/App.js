import React , {useState} from 'react';

function List(props) {
  return(
    <div>
      {props.items.map((item,index)=>{
        return <h1 key={index}>{item}</h1>
      })}
    </div>
  )
}

const MetaList = ({items}) =>{
  return(
    <div>
      {items.map((item,index)=>{
        return <h1 key={index}>{item}</h1>
      })}
    </div>
  )

}
function ItemCount(props) {
   
   return <h1>{props.count}</h1>
}

function App() {

  const [items, setItems] = useState(['ali','massoud','hossein'])



  return (
    <div className="App">
      <List items={items}></List>
      <ItemCount count={items.length}></ItemCount>
      <MetaList items={items}></MetaList>
    </div>
  );
}

export default App;
