import Exercise from "@/models/Exercise";
import db from "./db";
import Workout from "@/models/Workout";

export const getWorkouts = async () => {
    try {
        db.connect()
        const workouts = await Workout.find({})
        console.log("Works " + workouts) 
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);

    }
}

export const getWorkout = async (id) => {
    try {
        db.connect()
        const workout = await Workout.findById(id)
        return workout
    } catch (error) {
        throw new Error("Failed to fetch workout! " + error);
    
    }
    
    }
    export const getExercise = async (id) => {
        try {
            db.connect()
            const exercise = await Exercise.findById(id)
            return exercise
        } catch (error) {
            throw new Error("Failed to fetch workout! " + error);
        
        }
        
        }