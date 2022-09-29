import axiosInstance from "./api";
// import TokenService from "./token.service";
// import { refreshToken } from "../actions/auth";

const setup = () => {
let csrf_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGY5ODg3OTYtZTI4Ny00Zjc3LWE3MWQtMWQ4N2E3NGI1ZWY5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4NzA3ODg3MjkwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6ImYwNWZjNTcxLWMzZGUtNDkyMi04MDY1LTIyZTViNzMzZDcxNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkhSIiwiZXhwIjoxNjYyMTA1OTM5LCJpc3MiOiJBbGFUZWNoIiwiYXVkIjoiY2FyZTM2MENsaWVudCJ9.oZAjPpWL611VhRMsMYlR0xMygXhWhPSzrN3jKwEEhms"

  axiosInstance.interceptors.request.use(
    (config) => {
    //   const token = TokenService.getLocalAccessToken();
      if (csrf_token) {
        config.headers["Authorization"] = 'Bearer ' + csrf_token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      document.getElementById('overlay').style.cssText = "display: flex; flex-wrap: nowrap; align-items: center";
      return config;
    },
    (error) => {
    document.getElementById('overlay').style.display = 'none'
    console.log("Setup Interceptor request", error)
      return Promise.reject(error.response);
    }
  );
//   const { dispatch } = store;
  
axiosInstance.interceptors.response.use(function (response) {
  document.getElementById('overlay').style.display = 'none'
  // console.log('Response==>>', response)
  return response;
}, function (error) {
  document.getElementById('overlay').style.display = 'none'
  if (error.response.status === 401) {
    console.log("error in interceptopr use response 401")
    document.getElementById('overlay').style.display = 'none'
    localStorage.removeItem("token");
    // window.location.href = REACT_APP_BASEURL_WITHOUT_API;
    // window.location.href = 'https://www.google.com/';

  }
  else if (error.response.status === 400) {
    console.log("error in interceptopr use response 400", error.response)
    document.getElementById('overlay').style.display = 'none'
  }
  else if (error.response.status === 404) {
    console.log("error in interceptopr use response 404", error)
    document.getElementById('overlay').style.display = 'none'
  }
  else if (error.response.status === 500) {
    console.log("error in interceptopr use response 500", error.response)
    document.getElementById('overlay').style.display = 'none'
  }
  return Promise.reject(error.response);
})

//   axiosInstance.interceptors.response.use(
//     (res) => {
//         document.getElementById('overlay').style.display = 'none'  
//         console.log("Setup Interceptor response res", res) 
//       return res;
//     },
//     async (err) => {
//       console.log("Setup Interceptor response err", err.response)
//       // const originalConfig = err.config;
//     //   if (originalConfig.url !== "/auth/signin" && err.response) {
//     //     // Access Token was expired
//     //     if (err.response.status === 401 && !originalConfig._retry) {
//     //       originalConfig._retry = true;
//     //       try {
//     //         const rs = await axiosInstance.post("/auth/refreshtoken", {
//     //           refreshToken: TokenService.getLocalRefreshToken(),
//     //         });
//     //         const { accessToken } = rs.data;
//     //         dispatch(refreshToken(accessToken));
//     //         TokenService.updateLocalAccessToken(accessToken);
//     //         return axiosInstance(originalConfig);
//     //       } catch (_error) {
//     //         return Promise.reject(_error);
//     //       }
//     //     }
//     //   }
//     document.getElementById('overlay').style.display = 'none'

//       return Promise.reject(err.response);
//     }
//   );
};
export default setup;
