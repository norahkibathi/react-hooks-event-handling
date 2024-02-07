import react from  'react';
import ReactDOM from 'react-dom'
function Clickable({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }
  export default Clickable