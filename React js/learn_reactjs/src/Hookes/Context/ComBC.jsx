import { UserContext } from "./Contex";
import { useContext } from "react";

export default function ComBC() {
  const stateUser = useContext(UserContext);

  return (
    <div>
      <h1>ComBC</h1>
      <h1>ChildBC ---- {stateUser.user}</h1>
      <input type="text" onChange={(e) => stateUser.setUser(e.target.value)} />
    </div>
  );
}

// import { NameContext } from "./Contex";
// export default function ComBC(props) {
//     const data = useContext(NameContext);

//     return (
//       <div>
//         <h1>ComBC</h1>
//         <h1>Value ---{props.name}</h1>
//         <h1>Name:{data}</h1>

//         <input type="text" onChange={(e)=>} />
//       </div>
//     );
//   }
