import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
class Footer extends React.Component
{
  render()
  {
    return (
      <footer className="text-center text-small">
      <p className="mb-1">&copy; 2022 Grocery On The Go</p>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
    )
  }
}
export default Footer;