import ComA from "./ComA";
import ComB from "./ComB";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function Contex() {
  let [user, setUser] = useState("");
  return (
    <div>
      <UserContext.Provider value={{ setUser, user: user }}>
        <ComA />
        <ComB />
      </UserContext.Provider>

      <h1>{user}</h1>
    </div>
  );
}

// export const NameContext = createContext();

// export default function Contex() {
//     let [user, setUser] = useState("Yash");
//     return (
//       <div>
//         <h1>Contex</h1>
//         <NameContext.Provider value={"YASH"}>
//           <ComA />
//           <ComB name={"Yash"} />
//         </NameContext.Provider>

//         <h1>{user}</h1>
//       </div>
//     );
//   }
