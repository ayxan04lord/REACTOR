import React from 'react'
import './App.css'
import './header.css'

const App = () => {

  const WhoAmI = ({name, surname, link, text}) => {
    return (
      <div className='card'>
        <h3>Menim adim {name()}, soyadim {surname}.</h3>
        <a href={link}>{text}</a>
      </div>
    )
  }

  return (
    <div>
      <WhoAmI name={()=>{return "Rza"}} surname="Talibov" link="https://sethub.az" text="Social network"/>
      <WhoAmI name={()=> {return "Ayxan"}} surname="Mustafayev" link="https://ayxan.com" text="Saytim" />
      <WhoAmI name={()=>{ return "Vaqif"}} surname="Huseynov" link="https://Vaqif.az" text="Sport" />

    </div>
  )

}
export default App;