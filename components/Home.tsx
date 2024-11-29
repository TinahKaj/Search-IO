import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react'
import Card from '../components/Card'

const dataResult = [
  {
      id:1,
      date:"Decembre 29",
      title:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file"
  },

  {
      id:2,
      date:"Decembre 29",
      title:":Hello, this is your second requested document"
  },

  {
      id:3,
      date:"Decembre 29",
      title:":Hello, this is your third requested document"
  },
  {
      id:4,
      date:"Decembre 29",
      title:":Hello, this is your fourth requested document"
  },
  {
      id:5,
      date:"Decembre 29",
      title:":Hello, this is your fourth requested document"
  }

]

function Home() {
  const dataSearch = dataResult.map((data) =>{return <Card title={data.title.toString()} date={data.date} ></Card> });

  return (
    <main className="main" id="top">
    <div className="container" data-layout="container">
    <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
         <button
        className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarStandard"
        aria-controls="navbarStandard"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggle-icon">
          <span className="toggle-line" />
        </span>
         </button>
        <a className="navbar-brand me-1 me-sm-3">
        <div className="d-flex align-items-center">
          <img
            className="me-2"
            src="src/assets/img/icons/spot-illustrations/falcon.png"
            alt=""
            width={40}
          />
          <span className="font-sans-serif text-primary">falcon</span>
        </div>
         </a>
         
        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
          <li className="nav-item ps-2 pe-0">
       <div className="dropdown theme-control-dropdown">
      <a
        className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
        role="button"
        id="themeSwitchDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          className="svg-inline--fa fa-sun fa-w-16 fs-7"
          data-fa-transform="shrink-2"
          data-theme-dropdown-toggle-icon="light"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="sun"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
          style={{ transformOrigin: "0.5em 0.5em" }}>
          <g transform="translate(256 256)">
            <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                transform="translate(-256 -256)"
              />
            </g>
          </g>
        </svg>
        {/* <span class="fas fa-sun fs-7" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="light"></span> Font Awesome fontawesome.com */}
        <svg
          className="svg-inline--fa fa-moon fa-w-16 fs-7 d-none"
          data-fa-transform="shrink-3"
          data-theme-dropdown-toggle-icon="dark"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
          style={{ transformOrigin: "0.5em 0.5em" }}
        >
          <g transform="translate(256 256)">
            <g transform="translate(0, 0)  scale(0.8125, 0.8125)  rotate(0 0 0)">
              <path
                fill="currentColor"
                d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                transform="translate(-256 -256)"
              />
            </g>
          </g>
        </svg>
        {/* <span class="fas fa-moon fs-7 d-none" data-fa-transform="shrink-3" data-theme-dropdown-toggle-icon="dark"></span> Font Awesome fontawesome.com */}
        <svg
          className="svg-inline--fa fa-adjust fa-w-16 fs-7 d-none"
          data-fa-transform="shrink-2"
          data-theme-dropdown-toggle-icon="auto"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="adjust"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
          style={{ transformOrigin: "0.5em 0.5em" }}
        >
          <g transform="translate(256 256)">
            <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
              <path
                fill="currentColor"
                d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                transform="translate(-256 -256)"
              />
            </g>
          </g>
        </svg>
        {/* <span class="fas fa-adjust fs-7 d-none" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="auto"></span> Font Awesome fontawesome.com */}
      </a>
      <div
        className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3"
        aria-labelledby="themeSwitchDropdown"
      >
        <div className="bg-white dark__bg-1000 rounded-2 py-2">
          <button
            className="dropdown-item d-flex align-items-center gap-2 active"
            type="button"
            value="light"
            data-theme-control="theme"
          >
            <svg
              className="svg-inline--fa fa-sun fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sun"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              />
            </svg>
            {/* <span class="fas fa-sun"></span> Font Awesome fontawesome.com */}
            Light
            <svg
              className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              />
            </svg>
            {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
          </button>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            type="button"
            value="dark"
            data-theme-control="theme"
          >
            <svg
              className="svg-inline--fa fa-moon fa-w-16"
              data-fa-transform=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="moon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
              />
            </svg>
            {/* <span class="fas fa-moon" data-fa-transform=""></span> Font Awesome fontawesome.com */}
            Dark
            <svg
              className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              />
            </svg>
            {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
          </button>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            type="button"
            value="auto"
            data-theme-control="theme"
          >
            <svg
              className="svg-inline--fa fa-adjust fa-w-16"
              data-fa-transform=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="adjust"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
              />
            </svg>
            {/* <span class="fas fa-adjust" data-fa-transform=""></span> Font Awesome fontawesome.com */}
            Auto
            <svg
              className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              />
            </svg>
            {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
          </button>
        </div>
      </div>
    </div>
         </li>
         <li className="nav-item dropdown">
    <a
      className="nav-link pe-0 ps-2"
      id="navbarDropdownUser"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style={{color:"black"}}>
      <div className="avatar avatar-xl">
        <img
          className="rounded-circle"
          src="src/assets/img/team/3-thumb.png"
          alt=""
        />
      </div>
    </a>
    <div
      className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
      aria-labelledby="navbarDropdownUser"
    >
      <div className="bg-white dark__bg-1000 rounded-2 py-2">
        <a className="dropdown-item fw-bold text-warning" href="#!">
          <svg
            className="svg-inline--fa fa-crown fa-w-20 me-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="crown"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
            />
          </svg>
          {/* <span class="fas fa-crown me-1"></span> Font Awesome fontawesome.com */}
          <span>Go Pro</span>
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#!">
          Set status
        </a>
        <a className="dropdown-item" href="src/pages/user/profile.html">
          Profile &amp; account
        </a>
        <a className="dropdown-item" href="#!">
          Feedback
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="src/pages/user/settings.html">
          Settings
        </a>
        <a
          className="dropdown-item"
          href="src/pages/authentication/card/logout.html"
        >
          Logout
        </a>
      </div>
    </div>
         </li>
        </ul>

      
    </nav>
    <div className="content">
      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col d-flex align-items-center">
              <div className="form-check mb-0 d-none d-sm-block">
                <input
                  className="form-check-input checkbox-bulk-select"
                  type="checkbox"
                  data-bulk-select='{"body":"emails","actions":"emails-actions"}'
                />
              </div>
              <button
                className="btn btn-falcon-default btn-sm ms-sm-1"
                type="button"
                on-click="location.reload()"
              >
                <svg
                  className="svg-inline--fa fa-redo fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="redo"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
                  />
                </svg>
                {/* <span class="fas fa-redo"></span> Font Awesome fontawesome.com */}
              </button>
            </div>
            <div className="search-box" data-list='{"valueNames":["title"]}'  style={{paddingRight:0}}>
                     <form
                   className="position-relative show"
                   data-bs-toggle="search"
                   data-bs-display="static"
                    aria-expanded="true">
                <input
                className="form-control search-input fuzzy-search"
                type="search"
                 placeholder="Search..."
                aria-label="Search"/>
                <svg
                 className="svg-inline--fa fa-search fa-w-16 search-box-icon"
                aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                 data-icon="search"
                   role="img"
                  xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                  data-fa-i2svg="">
                   <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      />
    </svg>
    {/* <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com */}
  </form>
  <div
    className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
    data-bs-dismiss="search"
  >
    <button className="btn btn-link btn-close-falcon p-0" aria-label="Close" />
  </div>
  
</div>

            <div className="col-auto">
              <a className="btn btn-falcon-primary btn-sm" href="compose.html">
                {/* <span class="fas fa-plus me-1" data-fa-transform="shrink-3"></span> Font Awesome fontawesome.com */}
                Search
              </a>
            </div>
          </div>
        </div>
        <div className="card-body fs-10 border-top border-200 p-0" id="emails">
  <h5 className="fs-9 px-3 pt-3 pb-2 mb-0 border-bottom border-200">Unread</h5>

  <div
    className="row border-bottom border-200 hover-actions-trigger hover-shadow py-2 px-1 mx-0 bg-white dark__bg-dark"
    data-href="email-detail.html">
   
  </div>

  <h5 className="fs-9 px-3 pt-3 pb-2 mb-0 border-bottom border-200">
    Everything else
  </h5>

 
    {dataSearch}

</div>

        <div className="card-footer d-flex justify-content-between align-items-center">
          <small>
            <span className="d-none d-sm-inline-block"></span>
          </small>
          <div>
            <small>1-12 of 354</small>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2"
              type="button"
            >
              <svg
                className="svg-inline--fa fa-chevron-left fa-w-10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                />
              </svg>
              {/* <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com */}
            </button>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2"
              type="button"
            >
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
              {/* <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com */}
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row g-0 justify-content-between fs-10 mt-4 mb-3">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">
              Thank you for creating with Falcon{" "}
              <span className="d-none d-sm-inline-block">| </span>
              <br className="d-sm-none" /> 2024 ©{" "}
              <a href="https://themewagon.com/">Themewagon</a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">v3.20.0</p>
          </div>
        </div>
      </footer>
    </div>
    <div
      className="modal fade"
      id="authentication-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="authentication-modal-label"
      aria-hidden="true"
    >
      <div className="modal-dialog mt-6" role="document">
        <div className="modal-content border-0">
          <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
            <div className="position-relative z-1">
              <h4 className="mb-0 text-white" id="authentication-modal-label">
                Register
              </h4>
              <p className="fs-10 mb-0 text-white">
                Please create your free Falcon account
              </p>
            </div>
            <button
              className="btn-close position-absolute top-0 end-0 mt-2 me-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body py-4 px-5">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="modal-auth-name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="on"
                  id="modal-auth-name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="modal-auth-email">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  autoComplete="on"
                  id="modal-auth-email"
                />
              </div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6">
                  <label className="form-label" htmlFor="modal-auth-password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    id="modal-auth-password"
                  />
                </div>
                <div className="mb-3 col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="modal-auth-confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    id="modal-auth-confirm-password"
                  />
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="modal-auth-register-checkbox"
                />
                <label
                  className="form-label"
                  htmlFor="modal-auth-register-checkbox"
                >
                  I accept the <a href="#!">terms </a>and{" "}
                  <a className="white-space-nowrap" href="#!">
                    privacy policy
                  </a>
                </label>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary d-block w-100 mt-3"
                  type="submit"
                  name="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="position-relative mt-5">
              <hr />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-google-plus btn-sm d-block w-100"
                  href="#"
                >
                  <svg
                    className="svg-inline--fa fa-google-plus-g fa-w-20 me-2"
                    data-fa-transform="grow-8"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google-plus-g"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                    style={{ transformOrigin: "0.625em 0.5em" }}
                  >
                    <g transform="translate(320 256)">
                      <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                          transform="translate(-320 -256)"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* <span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */}{" "}
                  google
                </a>
              </div>
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-facebook btn-sm d-block w-100"
                  href="#"
                >
                  <svg
                    className="svg-inline--fa fa-facebook-square fa-w-14 me-2"
                    data-fa-transform="grow-8"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                    style={{ transformOrigin: "0.4375em 0.5em" }}
                  >
                    <g transform="translate(224 256)">
                      <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                          transform="translate(-224 -256)"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* <span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */}{" "}
                  facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default Home