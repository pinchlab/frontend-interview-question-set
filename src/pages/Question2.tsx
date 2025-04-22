import { useState } from "react"
import { apiClient } from "../api/ApiClient"

export default function Question2() {
  const [query, setQuery] = useState('')

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    // TODO: ...
  }

  // TODO: implement debouncing on the api call
  async function handleApiCall(){
    try {
      const result = await apiClient.get(`/users?q=${query}`)
      // TODO: ...
    } catch (error: unknown) {
      // TODO: ...
      console.error(error);
    } finally {
    }
  }

  return (
    <>
      <input type="text" className="search-input" placeholder="Search..." onChange={handleSearch} />
      <div style={{marginTop: '12px'}}>
        Response will be shown here
      </div>
    </>
  )
}
