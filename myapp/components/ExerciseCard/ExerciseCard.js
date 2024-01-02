import React from 'react'
import { getWorkout } from '@/lib/data'

const ExerciseCard = async (id) => {
    const workout = await getWorkout(id)
  return (
    <div key={workout._id}>
        <span>{workout.name}</span>
    </div>
  )
}

export default ExerciseCard