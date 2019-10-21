import React, { useContext } from 'react'

import FormContext from '../contexts/form'

const Textarea = ({ validator, value, ...rest }) => {
  const formContext = useContext(FormContext)

  return (
    <textarea
      {...rest}
      data-validator={validator}
      defaultValue={value}
      onChange={formContext.listenChange}
      ref={node => formContext.setNodeRef(node)}
    />
  )
}

export default Textarea
