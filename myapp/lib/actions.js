    'use server'
    import db from "./db";
    import Workout from "@/models/Workout";
    import getServerUser from "./getServerUser";
    import { revalidatePath } from "next/cache";
    import { redirect } from "next/navigation";
    import { authOptions } from "@/app/api/auth/[...nextauth]/route";
    import Exercise from "@/models/Exercise";

    export const addWorkout = async (formData) => {
        const getUser = await getServerUser(authOptions)
        const creator = getUser._id
        console.log("Creator " + creator)
        if(!getUser) throw new Error('Unathorized!')
        const { title, type } =
        Object.fromEntries(formData);
        try {
            db.connect()
            const newWorkout = new Workout({
                title,
                type,
                creator       
            })
            await newWorkout.save()
        } catch (error) {
            throw new Error("Failed to Create Workout" + error)
        }

        revalidatePath("/")
        redirect("/")

    }


    export const updateExerciseWorkout = async (formData) => {
        const getUser = await getServerUser(authOptions);
        const creator = getUser._id;
        console.log("Creator " + creator);
        if (!getUser) throw new Error("Unauthorized!");
      
        const { location,  name, duration, distance, intensity, notes, id } =
          Object.fromEntries(formData);
      
        try {
          db.connect();
          
          const workout = await Workout.findById(id);
      
          if (!workout) {
            throw new Error("Workout not found");
          }
      
          const exercise = new Exercise({
            location,
            name,
            duration,
            distance,
            intensity,
            notes,
            creator,
          });
      
      
          workout.exercises.push(exercise);
          await exercise.save()

          await workout.save();
        } catch (err) {
          console.log(err);
          throw new Error("Failed to update workout with exercise " + err);
        }
      
        revalidatePath("/");
        redirect("/");
      };