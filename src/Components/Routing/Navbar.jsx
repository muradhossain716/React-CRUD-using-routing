import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Show Data</Link></li>
        <li><Link to="/adddata">Add Data</Link></li>
        <li><Link to="/editData">Edit Data</Link></li>
      </ul>
    </div>
  )
}
