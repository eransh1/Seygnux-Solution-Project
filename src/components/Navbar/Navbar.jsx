import React from 'react'
import "./Navbar.css"
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  return (
   <>
    <nav style={{zIndex:"999"}} class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand navbar_main_brand_logo" href="#">M</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar_ul_links">
        <li class="nav-item navbar_first_link_item">
          <a class="nav-link " aria-current="page" href="#">Sample</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Layouts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Our Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Buy Theme</a>
        </li>
        <li>
            <AiOutlineSearch className="navbar_search_icon"/>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar