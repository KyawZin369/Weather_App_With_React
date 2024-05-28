import React from 'react'

const SearchForm = () => {
  return (
    <div className='d-flex justify-content-center align-items-center mx-5 my-5'>
            <input type="text" placeholder='Enter Country Name' className='form-control ms-3'/>
            <input type="button" value="Search" className='btn btn-success ms-3' />
    </div>
  )
}

export default SearchForm