import React from "react";
import { Routes, Route } from "react-router";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <header> Democratia from Uzbekistan</header>
      <main style={{flexGrow: 1}}>
        <Routes>
          <Route path='/' element= {<h1>Main</h1>}/>
          <Route path='/movie/:id' element= {<h1><Movie/></h1>}/>
          <Route path='/*' element= {<h1>Not Found</h1>}/>
        </Routes>

      </main>
      <footer>
        &copy; {new Date(). getFullYear()} Express Democratii
      </footer>
    </div>

  )
}