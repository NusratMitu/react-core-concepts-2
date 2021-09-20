import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <Externalusers></Externalusers>
    </div>
  );
}
function Externalusers() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h3>External Users</h3>
      {
        // users.map(user => <li>{user.name}</li>)
        users.map(user => <User name ={user.name} email={user.email}></User> )
      }
    </div>
  );
}
function User(props) {
  return (
    <div className='product'>
      <h2>Name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  // const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
function Products(props) {
  const productStyle = {
    border: '2px solid grey',
    borderRadius: '20px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}
/* 
  const products = [
    {name:'mobile', price:25000},
    {name:'laptop', price:45000},
    {name:'camera', price:85000},
    {name:'watch', price:5000}
  ]
*/

/* 
{
  products.map(product => <Products name={product.name} price={product.price}></Products> )
}
 */ 
export default App;
