import React from 'react'

const aboutLayOut = ({children}) => {
  return (
    <section>
        <h1>about layout</h1>
        <div className="mt-6">{children}</div>
    </section>
  )
}

export default aboutLayOut