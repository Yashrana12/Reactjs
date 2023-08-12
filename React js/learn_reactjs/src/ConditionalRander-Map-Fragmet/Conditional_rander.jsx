import React from "react";

// export default function Conditional_rander(props) {
//   return props.isMale ? (
//     <div>
//       <h1>Yes, He Is A Boy</h1>
//       {props.isYoung ? (
//         <h2>Yes, He Is A Young</h2>
//       ) : (
//         <h2>NO, He Is Not Young</h2>
//       )}
//     </div>
//   ) : (
//     <div>
//       <h1>Yes, She Is A Girl</h1>
//       {props.isYoung ? (
//         <h2>Yes,she Is A Young</h2>
//       ) : (
//         <h2>NO, She Is Not Young</h2>
//       )}
//     </div>
//   );
// }

export default function Conditional_rander(props) {
  if (props.isMale) {
    return (
      <>
        <h1>Yes, He Is A Boy</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Yes, She Is A Girl</h1>
      </>
    );
  }
}
