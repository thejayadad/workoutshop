    'use server'
    import db from "./db";
    import Workout from "@/models/Workout";
    import getServerUser from "./getServerUser";
    import { revalidatePath } from "next/cache";
    import { redirect } from "next/navigation";
    import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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