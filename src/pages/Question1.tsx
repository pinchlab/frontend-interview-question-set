export default function Question1() {
  const handleShowNotification = () => {
    console.log('show notification')
  }

  return (    
  <>
    <button onClick={handleShowNotification}>
      Show Notification
    </button>
  </>
  )
}
