// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function ProtectedRoute({ children }) {

// const user = JSON.parse(localStorage.getItem("user"));

// if(!user){
// toast.error("Please login to continue");
// return <Navigate to="/login" />;
// }

// return children;

// }

// export default ProtectedRoute;
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

function ProtectedRoute({ children }) {

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      toast.error("Please login to continue");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;