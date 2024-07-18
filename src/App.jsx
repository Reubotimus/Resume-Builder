import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fields from './Fields'
import Resume from './Resume'

function App() {
  let defaultCv = {
    personalDetails: {
      categoryTitle: "Personal Details", 
      items:
      [{
        id: 0,
        fields: {
          name: {fieldTitle: "Name: ", value: "Scott Davis"}, 
          email: {fieldTitle: "Email: ", value: "example@gmail.com"}, 
          location: {fieldTitle: "Location: ", value: "Melbourne, Australia"}
      }}]
    },
    education: {
      categoryTitle: "Education",
      items: [{
        id: 0,
        fields: {
          school: {fieldTitle: "School Name: ", value: "University of London"}, 
          degree: {fieldTitle: "Degree Name: ", value: "Computer Science"}, 
          start: {fieldTitle: "Start Date: ", value: "01/01/2000"},
          end: {fieldTitle: "End Date: ", value: "01/01/2004"}
        }
      }]
    },
    experience: {
      categoryTitle: "Experience",
      items: [{
        id: 0,
        fields: {
          company: {fieldTitle: "Company Name: ", value: "Google"}, 
          role: {fieldTitle: "Role Title: ", value: "Disinguished Developer"}, 
          start: {fieldTitle: "Start Date: ", value: "01/01/2004"},
          end: {fieldTitle: "End Date: ", value: "01/01/2024"}
        }
      }]
    }
  }

  const [cv, setCv] = useState(defaultCv)

  return (
    <>
      <Fields cv={cv} setCv={setCv}/>
      <Resume cv={cv} />
    </>
  )
}

export default App
