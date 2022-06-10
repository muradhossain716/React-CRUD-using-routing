
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddData from './Components/Routing/AddData';
import EditData from './Components/Routing/Edit';
import Navbar from './Components/Routing/Navbar';
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
    console.log(data,'editData')
    setEditD(data)
  }
  const upDatedData=(data)=>{

  }
 
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<ShowData showData={showData} deleteData={deleteData} editData={editData}/>}/>
        <Route path="/adddata" element={<AddData addData={addData}/>} />
        <Route path="/editdata" element={<EditData editD={editD} upDatedData={upDatedData}/>}/>
        <Route path="/navbar" element={<Navbar />}/>
      </Routes>
     
    
    </>
  );
}

export default App;
