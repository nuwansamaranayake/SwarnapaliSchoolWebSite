import Navigation from '../Navigation'

export default function NavigationExample() {
  return (
    <Navigation 
      onLoginClick={() => console.log('Login clicked')}
      onLanguageChange={(lang) => console.log('Language changed to:', lang)}
      currentLanguage="en"
    />
  )
}
