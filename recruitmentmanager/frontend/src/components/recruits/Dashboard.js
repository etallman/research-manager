import React, { Fragment } from 'react'
import Form from './Form';
import Recruits from './Recruits';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Recruits/>
    </Fragment>
  )
}