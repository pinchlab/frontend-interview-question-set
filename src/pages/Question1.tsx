export default function Question1() {
  const handleShowNotification = (type: 'success' | 'error') => {
    console.log('show notification: ', type)
  }

  return (    
  <div className="notification-container">
    <button onClick={() => handleShowNotification('success')} className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
      Success
    </button>
    <button onClick={() => handleShowNotification('error')} className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
      Error
    </button>
  </div>
  ) 
}
