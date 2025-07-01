import React, { useState } from "react"
import "./count.css"

function Count() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedName(name)
  }

  return (
    <div className="count-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          placeholder="Введите ваше имя"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="count-btn" type="submit">
          Войти
        </button>
      </form>
      {submittedName && (
        <div className="greeting">Привет, {submittedName}!</div>
      )}
      <h1 className="count-title">Количество кликов: {count}</h1>
      <button
        className="count-btn"
        onClick={() => setCount(count + 1)}
      >
        Кликни меня
      </button>
    </div>
  )
}

export default Count