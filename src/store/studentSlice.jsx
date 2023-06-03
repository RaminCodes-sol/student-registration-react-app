import { createSlice } from "@reduxjs/toolkit"
import { data } from '../../data'



const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: data,
        showModel: false,
    },
    reducers: {
        removeStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload)
        },

        editStudent: (state, action) => {
            state.students = state.students.map(student => {
                if (student.id === Number(action.payload.id)) {
                    return {
                        ...student,
                        name: action.payload.name,
                        phone: action.payload.phone
                    }
                }
                return student
            })
        },

        setShowModel: (state, action) => {
            state.showModel = action.payload
        },

        addStudent: (state, { payload }) => {
            state.students = [...state.students, payload]
        }
    }
})

export const { removeStudent,editStudent, setShowModel, addStudent } = studentSlice.actions
export default studentSlice.reducer;