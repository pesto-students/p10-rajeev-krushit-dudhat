import React from "react";

function Footer() {

  return (<>
    <div className="bg-black h-44 ">
      <div className="container flex justify-around m-auto text-white">
        <div className="m-2">
            Shortly
        </div>
        <div className="flex justify-around ">
          <ul className="m-2">
            <li className="Font-Bold text-xl">Features</li>
            <li >Link sharing</li>
            <li>Branded links</li>
            <li>Analytics</li>
          </ul>
          <ul className="m-2">
            <li className="Font-Bold text-xl">Resources</li>
            <li>Blogs</li>
            <li>Developers</li>
            <li>Supports</li>
          </ul>
          <ul className="m-2">
            <li className="Font-Bold text-xl">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contacts</li>
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

export default React.memo(Footer);