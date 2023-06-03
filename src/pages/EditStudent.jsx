import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setShowModel } from '../store/studentSlice';
import Model from '../components/Model';



const EditStudent = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { students } = useSelector(state => state)
  const { state: { id } } = useLocation()
  const selectedStudent = students.find(student => student.id === id)
  const dispatch = useDispatch()


  const onSubmit = () => {
    dispatch(setShowModel(true))
  }


  return (
    <section className='w-full max-w-[450px] h-screen flex flex-col justify-center items-center mx-auto p-4'>

      {/*---------BackToHome-Button---------*/}
      <div className='w-full flex justify-between items-center text-white mb-8'>
        <button>
          <Link to='/' className='bg-[slateblue] text-sm p-[.4rem] pb-[.5rem] rounded-sm hover:bg-[#5c4bce] transition'>Back To Home</Link>
        </button>
        <h3 className='font-bold text-xl'>Edit Student</h3>
      </div>

      {/*---------Form---------*/}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
        <div>
          <input type='text' defaultValue={selectedStudent.name} id='name' placeholder='Enter Your Name...' {...register('name', { required: true, maxLength: 25})} className='p-3 border-none outline-none mb-1 w-full' />
          {errors.name && <span className='text-red-500 text-[.91rem]'>This field is required</span>}
        </div>

        <div>
          <input type='type' defaultValue={selectedStudent.phone} id='phone' placeholder='Enter Your Number...' {...register('phone', { required: true, maxLength: 14 })} className='p-3 border-none outline-none mb-1 w-full'/>
          {errors.phone?.type === 'maxLength' && <span className='text-red-500 text-[.91rem]'>Max length is 14</span>}
          {errors.phone?.type === 'required' && <span className='text-red-500 text-[.91rem]'>This field is required</span>}
        </div>

        <button className='text-white w-full bg-orange-500 p-2 text-l transition duration-200 hover:bg-orange-600'>Edit</button>
      </form>
      
      {/*---------Model---------*/}
      <Model message='Are you sure you want to edit this student information?' id={id} name={watch('name')} phone={watch('phone')} />

    </section>
  )
}

export default EditStudent