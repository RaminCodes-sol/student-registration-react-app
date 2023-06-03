import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Model from '../components/Model'
import { setShowModel } from '../store/studentSlice'




const AddStudent = () => {
  const { students } = useSelector(state => state)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const dispatch = useDispatch()

  
  const onSubmit = () => {
    dispatch(setShowModel(true))
  }


  return (
    <section className='w-full max-w-[450px] h-screen flex flex-col justify-center items-center mx-auto p-4'>

      {/*----------Title----------*/}
      <div className='w-full flex justify-between items-center text-white mb-8'>
        <button>
          <Link to='/' className='bg-[slateblue] text-sm p-[.4rem] pb-[.5rem] rounded-sm hover:bg-[#5c4bce] transition'>Back To Home</Link>
        </button>
        <h3 className='font-bold text-xl'>Add Student</h3>
      </div>

      {/*----------Form----------*/}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
        <div>
          <input type='text' id='name' placeholder='Enter Your Name...' {...register('name', { required: true, maxLength: 25})} className='p-3 border-none outline-none mb-1 w-full' />
          {errors.name && <span className='text-red-500 text-[.91rem]'>This field is required</span>}
        </div>

        <div>
          <input type='type' id='phone' placeholder='Enter Your Number...' {...register('phone', { required: true, maxLength: 14 })} className='p-3 border-none outline-none mb-1 w-full'/>
          {errors.phone?.type === 'maxLength' && <span className='text-red-500 text-[.91rem]'>Max length is 14</span>}
          {errors.phone?.type === 'required' && <span className='text-red-500 text-[.91rem]'>This field is required</span>}
        </div>

        <button className='text-white w-full bg-orange-500 p-2 text-l transition duration-200 hover:bg-orange-600'>Add Student</button>
      </form>

      {/*---------Model---------*/}
      <Model message='Are you sure you want to add this student?' id={students.length + 1} name={watch('name')} phone={watch('phone')} onAddStudentComponent={true} />

    </section>
  )
}

export default AddStudent