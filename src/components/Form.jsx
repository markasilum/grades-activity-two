import React from 'react'
import { useState } from 'react';

const Form = (onSubmit) => {
    const [form, setForm] = useState({
        crsName: '',
        crsNum: '',
        units: 0,
        grade: '',
        numGrade: 0,
      })

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            crsName: '',
            crsNum: '',
            units: 0,
            grade: '',
            numGrade: 0,
        });
      };
      const [radioGrade,setRadioGrade] = useState("")
  const onGradeChange =(e) =>{
    setRadioGrade(e.target.value)
  }
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className='h-full px-3 py-6 overflow-y-auto bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label for="crsNum" className="block mb-2 text-sm font-medium text-gray-900 ">Course Number</label>
                    <input type="text" id="crsNum" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.crsNum} onChange={handleInputChange} ></input>
                </div>
                <div className="mb-4">
                    <label for="crsName" className="block mb-2 text-sm font-medium text-gray-900 ">Course Name</label>
                    <input type="text" id="crsName" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.crsName} onChange={handleInputChange}></input>
                </div>
                <div className="mb-4">
                    <label for="units" className="block mb-2 text-sm font-medium text-gray-900 " >Units</label>
                    <input type="number" id="units" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.units} onChange={handleInputChange}></input>
                </div>

                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Grades</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="A" type="radio" name="grades" value="A" className="w-4 h-4 border-gray-300" checked={radioGrade==="A"} onChange={onGradeChange}/>
                <label for="A" className="block ml-2 text-sm font-medium text-gray-900 ">A</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="B+" type="radio" name="grades" value="B+" className="w-4 h-4 border-gray-300" checked={radioGrade==="B+"} onChange={onGradeChange}/>
                <label for="B+" className="block ml-2 text-sm font-medium text-gray-900 ">B+</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="B" type="radio" name="grades" value="B" className="w-4 h-4 border-gray-300" checked={radioGrade==="B"} onChange={onGradeChange}/>
                <label for="B" className="block ml-2 text-sm font-medium text-gray-900 ">B</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="C+" type="radio" name="grades" value="C+" className="w-4 h-4 border-gray-300" checked={radioGrade==="C+"} onChange={onGradeChange}/>
                <label for="C+" className="block ml-2 text-sm font-medium text-gray-900 ">C+</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="C" type="radio" name="grades" value="C" className="w-4 h-4 border-gray-300" checked={radioGrade==="C"} onChange={onGradeChange}/>
                <label for="C" className="block ml-2 text-sm font-medium text-gray-900 ">C</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="D" type="radio" name="grades" value="D" className="w-4 h-4 border-gray-300" checked={radioGrade==="D"} onChange={onGradeChange}/>
                <label for="D" className="block ml-2 text-sm font-medium text-gray-900 ">D</label>
                </div>

                <div className="flex items-center mb-4">
                <input id="F" type="radio" name="grades" value="F" className="w-4 h-4 border-gray-300" checked={radioGrade==="F"} onChange={onGradeChange}/>
                <label for="F" className="block ml-2 text-sm font-medium text-gray-900 ">F</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    </aside>
  )
}

export default Form