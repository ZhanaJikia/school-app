import React, { useState } from 'react'
import MaterialModal from '../modal'
import useForm from "react-hook-form";


const StudentForm = (props) => {

  const { register, handleSubmit, watch, errors } = useForm()
  // const onSubmit = data => { console.log(data) }
  const [values, setValue] = useState({})

  const handleChange = (key, val) => {
    setValue(prevState => ({ ...prevState, [key]: val }))
  }

  const onSubmit = values => {
    console.log('values', values)
    props.setStudents(values, props.id)
    props.setIsOpen(false)
  }

  return (
    <MaterialModal setIsOpen={props.setIsOpen}>
      
      <form className="form-style-9" onSubmit={handleSubmit(onSubmit)}>

        <h3>New Student</h3>

            <input
              type="text"
              name="fullName" 
              ref={register({
                required: 'Required',
              })} 

              className="field-style field-full align-none"
              placeholder="Full Name..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
              {errors.fullName && errors.fullName.message}

            <input
              name="email" 
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}

              className="field-style field-full align-none"
              placeholder="Email..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
              {errors.email && errors.email.message}

            <input
              type="number" 
              min="6" max="19"
              name="age" 
              ref={register({
                required: 'Required',
              })} 

              className="field-style field-full align-none"
              placeholder="Student's Age..."
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            {errors.age && errors.age.message}

            <button 
              // onClick={() => submitStudentForm()}
              type="submit" 
              >Submit
            </button>

      </form>

    </MaterialModal>
  )
}


export default StudentForm