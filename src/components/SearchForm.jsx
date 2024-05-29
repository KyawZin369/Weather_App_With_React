import React, { useState } from 'react'

const SearchForm = ({submitSearch}) => {

  const [searchCountry, setsearchCountry] = useState('');

  const handlingSpace = (tranferCountryName) => {
    submitSearch(tranferCountryName);
    setsearchCountry('')
  }

  return (
    <div className='d-flex justify-content-center align-items-center mx-5 my-5'>
            <input value={searchCountry} onChange={e=>setsearchCountry(e.target.value)} type="text" placeholder='Enter Country Name' className='form-control ms-3'/>
            <input type="button" value="Search" className='btn btn-success ms-3' onClick={()=>handlingSpace(searchCountry)} />
    </div>
  )
}

export default SearchForm