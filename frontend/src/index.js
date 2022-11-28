import React, { Children } from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import ErrorPage from './Main/Error';
import Login from './Login';
// import reportWebVitals from './reportWebVitals';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'login',
//         element: <Login />
//       }
//     ]
//   },
// ])
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)


// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
