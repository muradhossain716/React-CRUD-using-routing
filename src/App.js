
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddData from './Components/Routing/AddData';
import EditData from './Components/Routing/Edit.jsx';
import ShowData from './Components/Routing/ShowData';
function App() {
  const [showData,setShowData]=useState([]);
  const[editD,setEditD]=useState({});
 
  const addData=(data)=>{
    let tempData=[...showData];
    tempData.push(data)
    setShowData(tempData)
  }
  const deleteData=(ind)=>{
    const remainingData=showData.filter((el,i)=>i!==ind);
    console.log(remainingData)
     setShowData(remainingData)
  }
  const editData=(data)=>{
    console.log(data,'Datahhh')
    setEditD(...data)
    console.log(editD,'editD')
  }
  
 
  const upDatedData=(upData)=>{
    console.log(upData,"updata")
    let temp=[...showData];
    temp[upData.ind].name=upData.name;
    temp[upData.ind].password=upData.password;
    console.log(temp,'temp data')
    setShowData(temp)
  }
  
 
  return (
    <>
      <Routes>
        <Route path="/" exect element={<ShowData showData={showData} deleteData={deleteData} editData={editData}/>}/>
        <Route exect path="/adddata" element={<AddData addData={addData}/>} />
        <Route exect path="/editdata/:id" element={<EditData upDatedData={upDatedData} data={showData} />}/>
      </Routes>
     
     
    </>
  );
}

export default App;
