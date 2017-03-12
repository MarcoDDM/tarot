import React from 'react'

export const Row = ({ children }) => (
  <div className="row">
    {children}
  </div>
)

export const Col = props => {
  const classNames = props => {
    const { lg, md, sm, xs, offset } = props
    return ([
      lg ? `col-lg-${lg}` : '',
      md ? `col-md-${md}` : '',
      sm ? `col-sm-${sm}` : '',
      xs ? `col-xs-${xs}` : '',
      offset ? `col-${offset[0]}-offset-${offset[1]}` : ''
    ]).join(' ')
  }

  return (
    <div className={classNames(props)}>
      {props.children}
    </div>
  )
}
