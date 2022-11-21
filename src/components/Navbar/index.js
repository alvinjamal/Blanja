// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const logout = () => {
//     localStorage.clear();
//     window.location.reload(false);
//   };
//   const token = localStorage.getItem("token");

//   const user = useSelector((state) => state.user.user);

//   useEffect(() => {
//     console.log(user);
//   }, [user]);

//   return (
//     <nav className="bg-info">
//       <Link to="/">Home</Link>

//       <Link to="/product">Product</Link>

//       <Link to="/login">Login</Link>

//       <Link to="/profile">Profile</Link>

//       <div className="name">
//         <h6>{user.email}</h6>
//         <h6>{user.fullname}</h6>
//       </div>
//       {token && (
//         <button className="btn btn-danger btn-small" onClick={() => logout()}>
//           logout
//         </button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
