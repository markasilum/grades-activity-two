import React from 'react'

const SearchBar = ({value,onChange}) => {
  return (
    <form>
    <div className='relative'>
        <input type="text" value={value} onChange={onChange} className="block w-1/2 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white" placeholder="Search Course Number, Course Name"/>
    </div>
</form>
  )
}

export default SearchBar