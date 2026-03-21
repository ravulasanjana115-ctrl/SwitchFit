// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:5000"
// });

// /* ================= REQUEST INTERCEPTOR ================= */

// API.interceptors.request.use((config) => {

//     const token = localStorage.getItem("accessToken");

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;

// });


// /* ================= RESPONSE INTERCEPTOR ================= */

// API.interceptors.response.use(

//     (response) => response,

//     async (error) => {

//         const originalRequest = error.config;

//         /* If token expired */

//         if (error.response && error.response.status === 403 && !originalRequest._retry) {

//             originalRequest._retry = true;

//             const refreshToken = localStorage.getItem("refreshToken");

//             try {

//                 const res = await axios.post("http://localhost:5000/refresh", {
//                     refreshToken
//                 });

//                 /* Save new access token */

//                 localStorage.setItem("accessToken", res.data.accessToken);

//                 /* Retry original request */

//                 originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

//                 return API(originalRequest);

//             } catch (err) {

//                 console.log("Refresh token expired");

//                 localStorage.clear();
//                 window.location.href = "/login";

//             }

//         }

//         return Promise.reject(error);

//     }

// );

// export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000"
// });

// /* ================= REQUEST INTERCEPTOR ================= */

// API.interceptors.request.use((config) => {

//   const token = localStorage.getItem("accessToken");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;

// });


// /* ================= RESPONSE INTERCEPTOR ================= */

// API.interceptors.response.use(

//   (response) => response,

//   async (error) => {

//     const originalRequest = error.config;

//     if (!error.response) {
//       return Promise.reject(error);
//     }

//     /* Access token expired */

//     if (error.response.status === 403 && !originalRequest._retry) {

//       originalRequest._retry = true;

//       const refreshToken = localStorage.getItem("refreshToken");

//       if (!refreshToken) {
//         localStorage.clear();
//         window.location.href = "/login";
//         return;
//       }

//       try {

//         const res = await axios.post("http://localhost:5000/refresh", {
//           refreshToken
//         });

//         const newAccessToken = res.data.accessToken;

//         /* Save new token */

//         localStorage.setItem("accessToken", newAccessToken);

//         /* Retry original request */

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//         return API(originalRequest);

//       } catch (err) {

//         console.log("Refresh token expired");

//         localStorage.clear();
//         window.location.href = "/login";

//       }

//     }

//     return Promise.reject(error);

//   }

// );

// export default API;








import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

/* ================= REQUEST INTERCEPTOR ================= */

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});


/* ================= RESPONSE INTERCEPTOR ================= */

API.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    const status = error.response.status;

    /* ================= TOKEN EXPIRED ================= */

    if ((status === 401 || status === 403) && !originalRequest._retry) {

      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {

        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);

      }

      try {

        const res = await axios.post("http://localhost:5000/refresh", {
          refreshToken
        });

        const newAccessToken = res.data.accessToken;

        /* Save new token */

        localStorage.setItem("accessToken", newAccessToken);

        /* Update header */

        API.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        /* Retry original request */

        return API(originalRequest);

      } catch (err) {

        console.log("Refresh token expired");

        localStorage.clear();
        window.location.href = "/login";

        return Promise.reject(err);

      }

    }

    return Promise.reject(error);

  }

);

export default API;