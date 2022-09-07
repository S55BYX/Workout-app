import {WorkoutsContext} from '../context/WorkoutContext'
import {useContext} from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error("useWorkoutContext must be inside a workout provider")
    }
    return context
}