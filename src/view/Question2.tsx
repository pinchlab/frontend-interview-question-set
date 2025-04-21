import { useState } from "react"
import { apiClient } from "../api/ApiClient"

export default function Question2() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 
  }

  // TODO: implement debouncing on the api call
  const handleApiCall = async () => {
    try {
      const result = await apiClient.get(`/users?q=${query}`)
      // TODO: ...
    } catch (error: unknown) {
      // TODO: ...
      console.error(error);
    }
  }

  return (
    <>
      <input type="text" className="search-input" placeholder="Search..." onChange={handleSearch} />
      <div style={{marginTop: '12px'}}>Response will be shown here</div>
    </>
  )
}
