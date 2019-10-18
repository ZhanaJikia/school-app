import React, { useState } from 'react'

import MaterialModal from '../modal/MaterialModal'



const StudentForm = (props) => {

  const [values, setValue] = useState({})

  const handleChange = (key, val) => {
    setValue(prevState => ({ ...prevState, [key]: val }))
  }

  const handleSubmit = () => {
    props.setStudents(values, props.id)
    props.setIsOpen(false)
  }

  return (
    <MaterialModal setIsOpen={props.setIsOpen}>
      <form class="form-style-9">
        <h3>New Student</h3>
        <ul>
          <li>
            <input
              type="text" name="fullName" required
              className="field-style field-full align-none"
              placeholder="Full Name..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <input
              type="email" name="email" required
              className="field-style field-full align-none"
              placeholder="Email..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <input
              type="number" min="6" max="19" required
              name="age" className="field-style field-full align-none"
              placeholder="Student's Age..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <input onClick={() => handleSubmit()} className="submit" value="Submit" />
            <input className="showStudents" value="Show Students" />
          </li>
        </ul>
      </form>
    </MaterialModal>
  )
}


export default StudentForm