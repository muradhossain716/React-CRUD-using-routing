import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';
export default function AddData({addData}) {
  let navigate = useNavigate();
  
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=()=>{
    
    if(name===''){
      toast("Please insert name")
    }
    else if(password===''){
      toast("Please insert password")
    }else{
      let data={
        name:name,password:password
      }
     console.log(data,"add section")
     addData(data);
     setName('')
     setPassword('');
      navigate("/", { replace: true });
    }
  
  }
  return (
    <div className='wrapper'>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="name" name="name" value={name} className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
              <small id="emailHelp" className="form-text">
              </small>
            </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="button" className={`btn btn-primary`} onClick={handleSubmit}>Add Data</button>
        </form>
        <ToastContainer />
    </div>
  )
}
