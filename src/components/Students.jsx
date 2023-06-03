import { useSelector } from "react-redux"
import Student from '../components/Student'
import { useEffect, useState } from "react"
import SearchInput from "./SearchInput"



const Students = () => {
  let { students: studentsData } = useSelector(state => state)
  const [students, setStudents] = useState([...studentsData])
  const [sortState, setSortState] = useState({
    byId: true,
    byName: true
  })


  useEffect(() => {
    setStudents(studentsData)
  }, [studentsData])


  /*-------Sort-By-Id-------*/
  const sortingById = () => {
    const sortedList = [...students].sort((a, b) => {
      if (sortState.byId) {
        setSortState({...sortState, byId: false})
        return a.id > b.id ? -1 : 1
      } else {
        setSortState({...sortState, byId: true})
        return a.id > b.id ? 1 : -1
      }
    })
    setStudents(sortedList)
  }


  /*-------Sort-By-Name-------*/
  const sortingByName = () => {
    const sortedList = [...students].sort((a, b) => {
      if (sortState.byName) {
        setSortState({...sortState, byName: false})
        return a.name.localeCompare(b.name)
      } else {
        setSortState({...sortState, byName: true})
        return  b.name.localeCompare(a.name)
      }
    })
    setStudents(sortedList)
  }

 
  return (
    <section className="mt-10 mb-10 s:px-4">

      {/*---------SearchInput---------*/}
      <SearchInput setStudents={setStudents} />

      {/*---------Table---------*/}
      <table className='w-full'>
        <tbody className="w-full flex-col">
          {/*-----Table_Title-----*/}
          <tr className="table_header w-full text-white px-3 py-4 bg-[#6930c3] text-[.92rem]">
            <th><button onClick={() => sortingById()}>ID</button></th>
            <th><button onClick={() => sortingByName()}>Name</button></th>
            <th>Phone</th>
            <th id='onScreen' className='hidden'>Operations</th>
          </tr>

          {/*-----Table_body-----*/}
          {
            !students.length
              ? (<tr className='flex justify-center mt-6 text-[1rem] text-white'><td>No Item Found</td></tr>)
              : students?.map((student, index) => <Student key={student.id} index={index+1} student={student} />) 
          }
        </tbody>
      </table>

    </section>
  )
}

export default Students