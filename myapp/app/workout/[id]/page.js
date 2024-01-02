import { getWorkout } from '@/lib/data';
import React from 'react'

const SingleWorkout = async ({params}) => {
    const { id } = params;
    const workout = await getWorkout(id)
  return (
    <section className='px-4 py-8'>
        <h2 className='text-center'>{workout.title}</h2>
    </section>
  )
}

export default SingleWorkout