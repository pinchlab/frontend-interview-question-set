import { useState } from 'react'
import { BaseApiClient } from './api/ApiClient'
import { Interceptors } from './api/interceptors'
import './App.css'

function App() {
  const [response, setResponse] = useState<string>('')

  const handleTestApi = async () => {
    // Example interceptors - these would be implemented by the candidate
    const interceptors: Interceptors = {
      request: {
        onRequest: (config) => {
          // TODO: Implement request interceptor
          return config
        },
      },
      response: {
        onResponse: (response) => {
          // TODO: Implement response interceptor
          return response
        },
      },
    }

    const apiClient = new BaseApiClient('https://jsonplaceholder.typicode.com', interceptors)

    try {
      const result = await apiClient.get('/todos/1')
      setResponse(JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div className="App">
      <h1>API Client Interview Task</h1>
      <div className="card">
        <button onClick={handleTestApi}>
          Test API Client
        </button>
        <pre>{response}</pre>
      </div>
      <p className="read-the-docs">
        Implement the request and response interceptors in the code above.
      </p>
    </div>
  )
}

export default App
