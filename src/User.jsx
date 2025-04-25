import Custombuton from "./shared/Custombuton";
import Custominput from "./shared/Custominput";
function User(props){
return (
  <div className="card p-3 mb-3 shadow">
  <h2>{props.name}</h2>
  <h3>{props.email}</h3>
  <div className="d-flex gap-2">
    <Custombuton text="Details" type="secondary" />
    <Custombuton text="Delete" type="danger" />
  </div>
</div>

);

}
export default User;