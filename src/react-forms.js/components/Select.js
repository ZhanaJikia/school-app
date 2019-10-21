import React, { useContext } from 'react'

import FormContext from '../contexts/form'

const Select = ({ validator, value, ...rest }) => {
  const formContext = useContext(FormContext)

  return (
    <select
      {...rest}
      data-validator={validator}
      defaultValue={value}
      onChange={formContext.listenChange}
      ref={node => formContext.setNodeRef(node)}
    />
  )
}

export default Select
