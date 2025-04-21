const questions = [
  {
    id: 1,
    title: "Notification System",
    description: "Design a notification system component that automatically displays notifications on the right bottom of the screen when new messages arrive and automatically dismisses them after a few seconds.",
    points: [
      "The system should support different types of notifications (success, error) and differentiate their styles based on the type.",
      "Use setTimeout or setInterval to automatically dismiss notifications after a set time.",
      "should be able to handle multiple notifications with correct order and position",
    ]
  },
  {
    id: 2,
    title: "Debounced Search",
    description: "Create a search input component that debounces API calls while typing. Show loading states and handle errors appropriately.",
    points: [
      "Implement debouncing on the search input",
      "Display a loading indicator / error message",
      "Clear results on empty or error search"
    ]
  },
]

export default questions;