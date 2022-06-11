import { Link } from "react-router-dom";
export default function ShowData({showData,deleteData,editData}) {
  const handleDelete=(ind)=>{
    deleteData(ind)
  }
  const edit=(el,ind)=>{
    const data={
      name:el.name,password:el.password,ind:ind
    };
    console.log(data)
    editData(data)
  }
  return (
    <>
    <div>
       <button type="button" className={`btn btn-warning addDataBtn`}><Link to="/adddata" className="linkStyle">Add Data</Link></button>
    </div>
    <div className="tableWrapper">
        <table className={`table table-hover table-dark`.split(' ').join(' ')}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {
              
              
              showData.map((el,ind)=>{
                console.log(el,"el eliment")
                return (
                  <tr key={ind}>
                      <th scope="row">{ind+1}</th>
                      <td>{el.name}</td>
                      <td>{el.password}</td>
                      <td><button type="button" className={`btn btn-primary`}> <Link to={`/editdata/${ind}`} className="linkStyle" >Edit Data</Link></button>/<button type="button" className={`btn btn-warning`} onClick={()=>handleDelete(ind)}>Delete</button></td>
                  </tr>
                )
              })

            }
            
            
          </tbody>
        </table>
    </div>
    </>
  )
}
