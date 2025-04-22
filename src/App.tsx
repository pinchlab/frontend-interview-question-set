import { useState } from 'react'
import questions from './question'
import './App.css'

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState<number>(1)

  return (
    <div className="App">
      <h1>Frontend Interview Questions</h1>
      
      <div className="questions-nav">
        {questions.map((q) => (
          <button
            key={q.id}
            className={`nav-button ${activeQuestion === q.id ? 'active' : ''}`}
            onClick={() => setActiveQuestion(q.id)}
          >
            {q.title}
          </button>
        ))}
      </div>

      <div className="question-container">
        <h2>{questions[activeQuestion - 1].title}</h2>
        <p>{questions[activeQuestion - 1].description}</p>
        
        <div className="requirements">
          <h3>Requirements:</h3>
          <ul>
            {questions[activeQuestion - 1].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <a href={`/question${activeQuestion}`} target="_blank">
        <button className="bg-[#646cff] text-white px-4 py-2 rounded-md cursor-pointer">
          Start
        </button>
      </a>
    </div>
  )
}