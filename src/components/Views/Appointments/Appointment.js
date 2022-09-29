import React from 'react'
import Table from './Table/AppointmentTable'

function Appointment() {

  return (
    <div className="healthbox">
    <div>
      <h3>Doctor Appointment</h3>
      <p>Dashboard/ <span>Doctor Appointment</span></p>
    </div>
    <Table />
  </div>
  )
}

export default Appointment