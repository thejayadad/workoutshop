import { getWorkouts } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const HomePage = async () => {
  const workouts = await getWorkouts()
  return (
    <div>HomePage
      {
        workouts.map((workout) => (
          <div key={workout.id}>
            <Link href={`/workout/${workout.id}`}>
              {workout.title}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage