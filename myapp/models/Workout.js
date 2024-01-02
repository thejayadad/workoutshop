import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      type: {
        type: String,
        enum: ['strength', 'cardio'],
      }, 
      exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
}, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)