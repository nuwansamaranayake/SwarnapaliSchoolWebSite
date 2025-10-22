import StudentDashboard from '../StudentDashboard'

export default function StudentDashboardExample() {
  return (
    <StudentDashboard 
      language="en"
      onLogout={() => console.log('Logout clicked')}
    />
  )
}
