import { addWorkout } from '@/lib/actions'
import React from 'react'

const CreateWorkout = () => {
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
            <h2 className='text-center'>CreatePost</h2>
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
        </div>
    </section>
  )
}

export default CreateWorkout