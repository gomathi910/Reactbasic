// import React, { useEffect, useRef } from 'react'

// function RefForm() {
//     const inputRef1 = useRef(null);
//     const inputRef2 = useRef(null);
//     const inputRef3 = useRef(null);

// useEffect(() =>{
//     inputRef1.current.focus();
//     inputRef2.current.focus();
//     inputRef3.current.focus();
    
// })
//     const handleNextClick = () => {
//         if (inputRef1.current) {
//             inputRef1.current.focus();
//         }
//         if (inputRef2.current) {
//             inputRef2.current.focus();
//         }
//         if (inputRef3.current) {
//             inputRef3.current.focus();
//         }
//     };
//   return (
//     <form>
//     <div>
//     <div> <input ref={inputRef1}type="text" placeholder='Name' /></div>
//     <div>  <input ref={inputRef2} type="text" placeholder='Email' /></div>
//     <div>  <input ref={inputRef3} type="text" placeholder='Password' /></div>
//       <button onClick = {handleNextClick}>Next</button>
//     </div></form>
//   )
// }

// export default RefForm




// // import React from 'react'

// // function withExtraprops ({WrappedComponent})  {
// //     return () => {
// //         const extraProps = {
// //             extraData : 'this is some extra data!'
// //         };
// //         return<WrappedComponent {...props} {...extraProps}/>
// //     }
// // }
// // function RefForm({extraData}) {
// //   return (
// //     <div>
// //       <h1>Hello,HOC!</h1>
// //       <p>{extraData}</p>
      
// //     </div>
// //   )
// // }
// // const RefFormWithExtraProps = withExtraprops(RefForm)
// // export default RefForm



