import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      avatar: String,
      exercises: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Exercise",
        default: []
      },
      workouts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Workout",
        default: []
      }
}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)