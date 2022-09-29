import axios from 'axios';

// let csrf_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGY5ODg3OTYtZTI4Ny00Zjc3LWE3MWQtMWQ4N2E3NGI1ZWY5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4NzA3ODg3MjkwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6ImYwNWZjNTcxLWMzZGUtNDkyMi04MDY1LTIyZTViNzMzZDcxNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkhSIiwiZXhwIjoxNjYyMTA1OTM5LCJpc3MiOiJBbGFUZWNoIiwiYXVkIjoiY2FyZTM2MENsaWVudCJ9.oZAjPpWL611VhRMsMYlR0xMygXhWhPSzrN3jKwEEhms"
const instance  = axios.create({
    baseURL: 'https://care360-net-dev.azurewebsites.net/api/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + csrf_token
    }
})


export default instance 