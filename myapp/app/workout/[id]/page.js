import { updateExerciseWorkout } from '@/lib/actions';
import { getWorkout } from '@/lib/data';
import React from 'react'

const SingleWorkout = async ({params}) => {
    const { id } = params;
    const workout = await getWorkout(id)
    console.log("Client ID " + id)
  return (
    <section className='px-4 py-8'>
        <h2 className='text-center'>{workout.title}</h2>
        <span>Add Exercise</span>
        <form
        action={updateExerciseWorkout}
        >
            <input
            name='id'
            defaultValue={id}
            hidden
            />
             <label>Name</label>
        <input
          type='text'
          placeholder='Name...'
          name='name'
          required
        />
        <label>Type</label>
        <input
          type='text'
          placeholder='Type...'
          name='type'
          required
        />
        <label>Duration</label>
        <input
          type='number'
          placeholder='Duration...'
          name='number'
        />
        <label>Distance</label>
        <input
          type='number'
          placeholder='Distance...'
          name='distance'
        />
        <label>Intensity</label>
        <input
          type='text'
          placeholder='Intensity...'
          name='intensity'
        />
        <label>Notes</label>
        <input
          type='text'
          placeholder='Notes...'
          name='notes'
        />

            <button type='submit'>Add Exercise</button>
        </form>
    </section>
  )
}

export default SingleWorkout