import { useState } from 'react';
import './Style.css';
export default function AddData({addData}) {
  
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=()=>{
    let data={
      name:name,password:password
    }
   console.log(data,"add section")
   addData(data);
   setName('')
   setPassword('')
  }
  return (
    <div className='wrapper'>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="name" name="name" value={name} className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
              <small id="emailHelp" className="form-text">
              </small>
            </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="button" className={`btn btn-primary`} onClick={handleSubmit}>Add Data</button>
        </form>
    </div>
  )
}
