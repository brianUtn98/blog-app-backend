import mongoose from "mongoose";

// TODO Revisar un discriminidor para la jerarquía de herencia

const categorySchema = new mongoose.Schema({
    nextCategory: {
        type: this,
    },
    pointsGiven: {
        type: Number,
        required: true
    },
    categoryPoints: {
        type: Number,
        required: true
    }
});

export default categorySchema;