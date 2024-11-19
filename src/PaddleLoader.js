// import { useEffect } from 'react';

// const PaddleLoader = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
//     script.async = true;

//     script.onload = () => {
//       if (window.Paddle) {
//         window.Paddle.Environment.set('sandbox');
//         window.Paddle.Setup({
//           token: 'test_eb3735e1002625d14eb6b1879d0'// Replace with your sandbox token
//         });
//       }
//     };

//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return null;
// };

// export default PaddleLoader;
