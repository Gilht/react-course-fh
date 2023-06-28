import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './components/reducer/TodoApp';
import { GiftExpertApp } from './GiftExpertApp';
import  MainPage  from "./useContext/MainPage"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  // </React.StrictMode>
)
