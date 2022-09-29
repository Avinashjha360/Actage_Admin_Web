import React from 'react'
import Table from './Table/MedicineTable'

function Medicine() {

  return (
    <div className="healthbox">
      <div>
        <h3>Medicine</h3>
        <p>Dashboard/ <span>Medicine</span></p>
      </div>
      <Table />
    </div>
  )
}

export default Medicine