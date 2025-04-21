import { useState } from 'react'
import './App.css'
import questions from './question'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()

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

      <button onClick={() => navigate(`/question${activeQuestion}`)}>
        Start
      </button>
    </div>
  )
}