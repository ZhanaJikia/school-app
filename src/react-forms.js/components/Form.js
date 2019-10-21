import React from 'react'

import FormContext from '../contexts/form'
import useForm from '../hooks/useForm'
import useValidator from '../hooks/useValidator'

const Form = ({ onSubmit, setValidator, errorClass, ...rest }) => {
  const {
    setNodeRef,
    getNodeRefs,
    getNodeRefsData,
    setSubmitted,
    getSubmitted
  } = useForm()

  const { listenChange, validate } = useValidator(
    getNodeRefs,
    getSubmitted,
    setValidator,
    errorClass
  )

  const listenSubmit = e => {
    const submitted = true
    setSubmitted(submitted)
    const validator = validate()
    setValidator({ ...validator, submitted })
    return onSubmit(e, getNodeRefsData(), validator)
  }

  return (
    <FormContext.Provider value={{ setNodeRef, listenChange }}>
      <form {...rest} onSubmit={listenSubmit} />
    </FormContext.Provider>
  )
}

export default Form
