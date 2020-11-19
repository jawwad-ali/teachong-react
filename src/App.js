import React, { useState } from 'react';

export default function App() {

  const name = "Ali"
  const adj = " tall"

  const [theme, setTheme] = useState("red")
  const [font, setfont] = useState("14px")

  const OnClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red")
    setfont(font === "14px" ? "50px" : "14px")
  }


  return (
    <div  >
      <h1>STRING LITERALS</h1>

      {
        `
          His is ${name} and he is very ${adj}
        `
      }

      <div>
        <Text theme={theme} font={font} />
        <button onClick={OnClickHandler}> Change Theme </button>
      </div>

    </div>
  )
}

function Text({ theme, font }) {
  return (
    <h1 style={{ color: `${theme}`, fontSize: `${font}` }}> {theme} </h1>
  );
}