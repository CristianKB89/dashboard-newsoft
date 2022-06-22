import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home";

function Products() {
  return (
    <div>
        <h1>Products</h1>
        <Link to="/">
            <HomeIcon color="primary" />
        </Link>
    </div>

  )
}

export default Products