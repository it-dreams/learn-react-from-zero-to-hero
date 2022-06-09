import React from 'react'

function Search() {
    return (
        <div className='my-5'>
            <div className="mb-3">
                <form>
                    <fieldset>
                        <legend>Search:</legend>
                        <input type="email" class="form-control" id="floatingInput" placeholder="Search here..." />
                        {/* <label for="floatingInput">Search</label> */}
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Search
