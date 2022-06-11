import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './Style.css';

export default function Edit({data,upDatedData}) {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
console.log(data,'edit data')
  useEffect(()=>{
    let dataa=data.filter((el,ind)=> ind==id);
     setName(dataa[0].name);
     setPassword(dataa[0].password);
    console.log(dataa[0].name,'dataaaaa')
  },[data])
  
 
  const handleSubmit=()=>{
    
    let data={
      name:name,password:password,ind:id
    }
   console.log(data,"edited ")
  upDatedData(data);
   setName('')
   setPassword('');
    navigate("/", { replace: true });
  
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
          <button type="button" className={`btn btn-primary`} onClick={()=>handleSubmit()}>Edit Data</button>
        </form>
    </div>
  )
}
