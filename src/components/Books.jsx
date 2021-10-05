import React from 'react'

const Books = (props) => (
  <section id="books">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Books</h2>
          <hr className="star-primary" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav nav-pills text-center">
            {props.navBooks.map((element, index) => (
              <li key={index}>
                <a href="#">{element}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row book-list">LIBRI</div>
    </div>
  </section>
)

export default Books
