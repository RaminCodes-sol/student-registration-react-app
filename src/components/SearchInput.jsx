import { GoPlus } from "react-icons/go"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"



const SearchInput = ({ setStudents }) => {
  const [inputValue, setInputValue] = useState('')
  const { students } = useSelector(state => state)


  useEffect(() => {
    const searchedStudent = students.filter(student => student.name.toLowerCase().includes(inputValue.toLowerCase()))
    setStudents(searchedStudent)
  }, [inputValue])


  return (
    <section className='mb-5'>

      {/*----------Title----------*/}
      <div className='text-white text-4xl text-center mt-7 p-2'>
        <h1>Students Panel</h1>
      </div>

      {/*----------Add-And-Search----------*/}
      <div className='flex justify-between items-center text-white mt-8 py-2 sm:px-[]'>
        <button className='s:hidden flex justify-center items-center w-[37px] h-[37px]'>
          <Link to='/addStudent' className='text-[1.2rem] w-full h-full flex justify-center items-center bg-orange-500 text-white rounded transition-colors hover:bg-orange-600'><GoPlus /></Link>
        </button>

        <button className='hidden s:flex'>
          <Link to='/addStudent' className='bg-orange-500 font-semibold p-[.4rem] pb-[.6rem] rounded transition-colors hover:bg-orange-600 focus:bg-orange-600'>New Stundent</Link>
        </button>

        <div className='flex'>
          <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Search Students...' className='text-l text-black border-none outline-none p-[.4rem] s:p-[.6rem] s:px-[.8rem]' />
        </div>
      </div>
        
    </section>
  )
}

export default SearchInput