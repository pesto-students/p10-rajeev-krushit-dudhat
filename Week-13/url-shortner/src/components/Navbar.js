import React from 'react';

function Navbar() {

  return (<>
      <div className="container h-15 p-2 m-auto h-12"> 
        <div className="flex justify-evenly">
          <div className="p-2">
            Shortly
          </div>
          <div>
            <ul className="flex justify-around w-[300px]">
              <a href="/" className="mx-1">Features</a>
              <a href="/" className="mx-1">Pricing</a>
              <a href="/" className="mx-1">Resources</a>
            </ul>
          </div>
          <div>
            <ul className="flex justify-around w-[200px]">
              <a href="/" className="mx-1"> Login </a>
              <a href="/" className="mx-1"> Sign Up </a>
            </ul>
          </div>
        </div>
      </div>
    </>)
}

export default React.memo(Navbar);