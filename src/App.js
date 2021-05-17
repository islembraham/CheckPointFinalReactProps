
import './App.css';
import { data } from "./data";
import ProfileComponent from './Profile/ProfileComponent';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const  App=()=> {
  const handelName = (fullName) => {
    alert(`Hello I am ${fullName}`);
  };
  return (
  
    <div className="App">
      {data.map((data, i) => (
      <ProfileComponent data={data} key={i}  handelName={handelName}>
     
      <Card.Img variant="top" src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
          alt=""
          width="100px"
          height="10px" />
        

      </ProfileComponent>
        ))}

    </div>
  );
}

export default App;
