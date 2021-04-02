import React from "react"
import { useHistory } from "react-router-dom"

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1> Information page </h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam molestiae a facere quas in non ipsa explicabo, eos cum.</p>
      <button className="btn" onClick={() => history.push("/")}> Return from TaskList </button>
    </>
  )
}