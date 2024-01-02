import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
    location: {
        type: String,
        enum: ['other', 'indoor', 'outdoor', 'gym'],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
    
      },
      intensity: {
        type: String,
        enum: ['low', 'medium', 'high'],
      },
      notes: {
        type: String,
      },
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
}, {timestamps: true})

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema)