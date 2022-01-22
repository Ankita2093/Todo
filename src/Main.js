import React, { useState } from 'react'

export default function Main() {
  const [taskname, settaskname] = useState('')
  const [tasklist, settasklist] = useState([])
  const addtask = () => {
    settasklist([...tasklist, taskname])
  }
  const tasklistcontent = tasklist.map((task, index) => {
    return (
      <div>
        <p
          style={{
            fontWeight: 'bold',
            display: 'inline',
            margin: '10px',
            marginBottom: '10px',
          }}
        >
          {task}
        </p>
        <i
          class='far fa-trash-alt'
          style={{ color: 'red' }}
          onClick={() => deletetask(index)}
        ></i>
      </div>
    )
  })
  function deletetask(index) {
    var duparray = [...tasklist]
    duparray.splice(index, 1)
    settasklist(duparray)
  }
  return (
    <div>
      <div className='row' style={{ justifyContent: 'center' }}>
        <div
          className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'
          style={{ marginTop: '100px' }}
        >
          <h1 style={{ fontWeight: 'bold' }}>Ract Todo List</h1>
          <input
            type='text'
            placeholder='Enter Task'
            className='form-control'
            value={taskname}
            onChange={(e) => {
              settaskname(e.target.value)
            }}
            style={{
              border: '2px solid black',
              display: 'inline',
              width: '70%',
            }}
          />
          <button
            className='btn-success'
            onClick={addtask}
            style={{ margin: '20px' }}
          >
            ADD
          </button>
          <br />
          {tasklistcontent}
        </div>
      </div>
    </div>
  )
}
