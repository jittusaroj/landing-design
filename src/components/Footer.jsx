import { Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{background:"#f9f9f9"}}>
        <Container>
         
            <ul className='d-flex d-style-none align-items-center justify-content-center'>
                <li className='me-3'>Privacy Policy </li>
                <li className='me-3'>Privacy Notice </li>
                <li className='me-3'>Terms and Conditions</li>
            </ul>
            <p className='text-center'>Utility Co. registered trademarks of Utility Co. <br />@1998-2019 Utility Co.Ⓡ. The trademarks used herein are the property of their respective owners. All rights reserved.</p>
        </Container>
    </footer>
  )
}

export default Footer