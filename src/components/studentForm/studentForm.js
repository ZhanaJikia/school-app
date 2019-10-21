import React, { useState } from 'react'
import MaterialModal from '../modal'
import { Input, Form } from '../../react-forms.js';


const StudentForm = (props) => {

  const [v, setV] = useState({})

  const handleSubmit = (e, data, {valid, errors, submitted}) => {
    console.log(e, data, valid, errors)
    e.preventDefault()

  }

  return (
    <MaterialModal setIsOpen={props.setIsOpen}>
      <Form className="form-style-9" onSubmit={handleSubmit} setValidator={setV}>
        <h3>New Student</h3>
            <Input
              type="text" name="fullName" 
              validator='required|'
              className="field-style field-full align-none"
              placeholder="Full Name..."
              />
              {console.log(v)}
            <Input
              type="email" name="email"
              validator='required|email'
              className="field-style field-full align-none"
              placeholder="Email..."
              />
            <Input
              type="number" min="6" max="19"
              validator='required|'
              name="age" className="field-style field-full align-none"
              placeholder="Student's Age..."
              />
            <button type="submit" className="submit" >Submit</button>
      </Form>
    </MaterialModal>
  )
}


export default StudentForm