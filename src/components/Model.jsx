import { useDispatch, useSelector } from "react-redux"
import { addStudent, editStudent, setShowModel } from "../store/studentSlice"
import { useNavigate } from "react-router-dom"



const Model = ({ message, id, name, phone, onAddStudentComponent }) => {
  const { showModel } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!showModel) return
  
  /*-------Edit-Student-Function-------*/
  const edit = ()=> {
    dispatch(editStudent({ id, name, phone }))
    dispatch(setShowModel(false))
    navigate('/')
  }

  /*-------Add-Student-Function-------*/
  const add = () => {
    dispatch(addStudent({ id: Math.random() * 100 + id, name, phone }))
    dispatch(setShowModel(false))
    navigate('/')
  }
  

  return (
    <div className="h-screen fixed inset-0 bg-black/50 flex justify-center items-center p-3">
       <div className="bg-[#2c2c2c] rounded w-full max-w-[450px] h-60 flex flex-col gap-4 justify-center items-center text-center font-Space_Grotesk ">
            <p className='text-white text-2xl'>{message}</p>
            <div className='flex gap-5'>
                <button onClick={() => onAddStudentComponent ? add() : edit() } className='bg-orange-500 rounded-sm px-[.7rem] py-[.5rem] text-white transition hover:bg-orange-600'>Sure</button>
                <button onClick={() => dispatch(setShowModel(false))} className='bg-red-500 rounded-sm px-[.7rem] py-[.5rem] text-white transition hover:bg-red-600'>Cancel</button>
            </div>
       </div>
    </div>
  )
}

export default Model