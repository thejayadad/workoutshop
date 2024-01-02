import { addWorkout } from '@/lib/actions'
import React from 'react'

const CreateWorkoutForm = () => {
  return (
    <form
    action={addWorkout}
    className='flex flex-col'
    >
      <label>Title</label>
      <input
        name='title'
        placeholder='Title....'
      />
      <label>Type</label>
      <input
        name='type'
        placeholder='Type....'
      />
    <button type='submit'>Create</button>
    </form>
  )
}

export default CreateWorkoutForm