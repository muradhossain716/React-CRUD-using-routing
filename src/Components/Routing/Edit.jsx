
export default function Edit({editD}) {
  let editvalue={...editD}
  const [name,setName]=('');
  const [password,setPassword]=('');
  const handleSubmit=()=>{
    const upData={
      name:name,
      password:password,
      ind:editD.ind
    }
    console.log(upData,"updated data")
    // upDatedData(upData)
  }
  console.log(editD,"edit data")
  return (
    <div className='wrapper'>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="name" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={editvalue.name} onChange={(e)=>setName(e.target.value)}/>
              <small id="emailHelp" className="form-text">
              </small>
            </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={editvalue.password}/>
          </div>
          <button type="button" className={`btn btn-primary`} onClick={()=>handleSubmit}>Edit Data</button>
        </form>
    </div>
  )
}
