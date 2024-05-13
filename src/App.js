import React from 'react'
import './App.css'
import './header.css'



const App = () => {

  const qeydiyyat = false;
  let Text = ""

  if(qeydiyyat){
    Text = "Çıxış 1"
  }else{
    Text = "Giriş 2"
  }
  
    const Vaqif = () => {
      return (
        <div className='elmeddin'>
          <h1>Hello</h1>
          <p>Lesson 1</p>
        </div>
      )
    }

    const Murad = () => {
      return (
        <div className="main"></div>
      )
    }


    const Ayxan = () => {
 
        return (
          <div className="ayxan_form">
            <label htmlFor="yash">Yashinizi daxil edin</label>
            <input type="text"
              placeholder='Yawinizi daxil edin'
              id='yash'
              style={{
                width: "200px",
                height: "50px",
                color: "green"
              }} />
            <button>{Text}</button>
          </div>
        )
      
    }

    return (
      <div className="demo">
        <Murad />
        <Vaqif />
        <Murad />
        <Murad />
        <Ayxan />
      </div>
    )
  }




export default App;