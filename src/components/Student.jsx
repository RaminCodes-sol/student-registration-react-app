import React from 'react'
import { motion } from 'framer-motion'
import { AiTwotoneEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import { removeStudent } from '../store/studentSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Student = ({ student, index }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <motion.tr className='table_row w-full text-white px-3 py-3 text-[.92rem] border-b border-[#737373]'>
        <td>{index}</td>
        <td>{student.name}</td>
        <td>{student.phone}</td>
        <td id='onScreen' className='hidden s:flex gap-6'>
            <button onClick={() => navigate(`/editStudent/${student.name}`, { state: { id: student.id } })} className='text-2xl p-1 bg-orange-500'><AiTwotoneEdit /></button>
            <button onClick={() => dispatch(removeStudent(student.id))} className='text-2xl p-1 bg-red-500'><MdDelete /></button>
        </td>
    </motion.tr>
  )
}

export default Student