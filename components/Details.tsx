import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

function Details() {
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
          <Link to="/home">
          <a className="navbar-brand me-1 me-sm-3" href="">
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
          </Link>
      
      <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <li className="nav-item ps-2 pe-0">
          <div className="dropdown theme-control-dropdown">
            <a
              className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
              href="#"
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
                style={{ transformOrigin: "0.5em 0.5em" }}
              >
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
        <li className="nav-item d-none d-sm-block">
          <a
            className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
            href="../e-commerce/shopping-cart.html"
          >
            <svg
              className="svg-inline--fa fa-shopping-cart fa-w-18"
              data-fa-transform="shrink-7"
              style={{ fontSize: 33, transformOrigin: "0.5625em 0.5em" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <g transform="translate(288 256)">
                <g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)">
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                    transform="translate(-288 -256)"
                  />
                </g>
              </g>
            </svg>
            {/* <span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
            <span className="notification-indicator-number">1</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
            id="navbarDropdownNotification"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
          >
            <svg
              className="svg-inline--fa fa-bell fa-w-14"
              data-fa-transform="shrink-6"
              style={{ fontSize: 33, transformOrigin: "0.4375em 0.5em" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <g transform="translate(224 256)">
                <g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)">
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                    transform="translate(-224 -256)"
                  />
                </g>
              </g>
            </svg>
            {/* <span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
          </a>
          <div
            className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
            aria-labelledby="navbarDropdownNotification"
          >
            <div className="card card-notification shadow-none">
              <div className="card-header">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <h6 className="card-header-title mb-0">Notifications</h6>
                  </div>
                  <div className="col-auto ps-0 ps-sm-3">
                    <a className="card-link fw-normal" href="#">
                      Mark all as read
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="scrollbar-overlay"
                style={{ maxHeight: "19rem" }}
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <div className="list-group list-group-flush fw-normal fs-10">
                            <div className="list-group-title border-bottom">
                              NEW
                            </div>
                            <div className="list-group-item">
                              <a
                                className="notification notification-flush notification-unread"
                                href="#!"
                              >
                                <div className="notification-avatar">
                                  <div className="avatar avatar-2xl me-3">
                                    <img
                                      className="rounded-circle"
                                      src="src/assets/img/team/1-thumb.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="notification-body">
                                  <p className="mb-1">
                                    <strong>Emma Watson</strong> replied to your
                                    comment : "Hello world 😍"
                                  </p>
                                  <span className="notification-time">
                                    <span
                                      className="me-2"
                                      role="img"
                                      aria-label="Emoji"
                                    >
                                      💬
                                    </span>
                                    Just now
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="list-group-item">
                              <a
                                className="notification notification-flush notification-unread"
                                href="#!"
                              >
                                <div className="notification-avatar">
                                  <div className="avatar avatar-2xl me-3">
                                    <div className="avatar-name rounded-circle">
                                      <span>AB</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="notification-body">
                                  <p className="mb-1">
                                    <strong>Albert Brooks</strong> reacted to{" "}
                                    <strong>Mia Khalifa's</strong> status
                                  </p>
                                  <span className="notification-time">
                                    <svg
                                      className="svg-inline--fa fa-gratipay fa-w-16 me-2 text-danger"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fab"
                                      data-icon="gratipay"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 496 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z"
                                      />
                                    </svg>
                                    {/* <span class="me-2 fab fa-gratipay text-danger"></span> Font Awesome fontawesome.com */}
                                    9hr
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="list-group-title border-bottom">
                              EARLIER
                            </div>
                            <div className="list-group-item">
                              <a
                                className="notification notification-flush"
                                href="#!"
                              >
                                <div className="notification-avatar">
                                  <div className="avatar avatar-2xl me-3">
                                    <img
                                      className="rounded-circle"
                                      src="src/assets/img/icons/weather-sm.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="notification-body">
                                  <p className="mb-1">
                                    The forecast today shows a low of 20℃ in
                                    California. See today's weather.
                                  </p>
                                  <span className="notification-time">
                                    <span
                                      className="me-2"
                                      role="img"
                                      aria-label="Emoji"
                                    >
                                      🌤️
                                    </span>
                                    1d
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="list-group-item">
                              <a
                                className="border-bottom-0 notification-unread  notification notification-flush"
                                href="#!"
                              >
                                <div className="notification-avatar">
                                  <div className="avatar avatar-xl me-3">
                                    <img
                                      className="rounded-circle"
                                      src="src/assets/img/logos/oxford.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="notification-body">
                                  <p className="mb-1">
                                    <strong>University of Oxford</strong>{" "}
                                    created an event : "Causal Inference Hilary
                                    2019"
                                  </p>
                                  <span className="notification-time">
                                    <span
                                      className="me-2"
                                      role="img"
                                      aria-label="Emoji"
                                    >
                                      ✌️
                                    </span>
                                    1w
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="list-group-item">
                              <a
                                className="border-bottom-0 notification notification-flush"
                                href="#!"
                              >
                                <div className="notification-avatar">
                                  <div className="avatar avatar-xl me-3">
                                    <img
                                      className="rounded-circle"
                                      src="src/assets/img/team/10.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="notification-body">
                                  <p className="mb-1">
                                    <strong>James Cameron</strong> invited to
                                    join the group: United Nations International
                                    Children's Fund
                                  </p>
                                  <span className="notification-time">
                                    <span
                                      className="me-2"
                                      role="img"
                                      aria-label="Emoji"
                                    >
                                      🙋‍
                                    </span>
                                    2d
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: 0, height: 0 }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ width: 0, display: "none" }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ height: 0, display: "none" }}
                  />
                </div>
              </div>
              <div className="card-footer text-center border-top">
                <a
                  className="card-link d-block"
                  href="../social/notifications.html"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown px-1">
          <a
            className="nav-link fa-icon-wait nine-dots p-1"
            id="navbarDropdownMenu"
            role="button"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={43}
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx={2} cy={2} r={2} fill="#6C6E71" />
              <circle cx={2} cy={8} r={2} fill="#6C6E71" />
              <circle cx={2} cy={14} r={2} fill="#6C6E71" />
              <circle cx={8} cy={8} r={2} fill="#6C6E71" />
              <circle cx={8} cy={14} r={2} fill="#6C6E71" />
              <circle cx={14} cy={8} r={2} fill="#6C6E71" />
              <circle cx={14} cy={14} r={2} fill="#6C6E71" />
              <circle cx={8} cy={2} r={2} fill="#6C6E71" />
              <circle cx={14} cy={2} r={2} fill="#6C6E71" />
            </svg>
          </a>
          <div
            className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
            aria-labelledby="navbarDropdownMenu"
          >
            <div className="card shadow-none">
              <div
                className="scrollbar-overlay nine-dots-dropdown"
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <div className="card-body px-3">
                            <div className="row text-center gx-0 gy-0">
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="../../pages/user/profile.html"
                                  target="_blank"
                                >
                                  <div className="avatar avatar-2xl">
                                    {" "}
                                    <img
                                      className="rounded-circle"
                                      src="src/assets/img/team/3.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                    Account
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="https://themewagon.com/"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="src/assets/img/nav-icons/themewagon.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Themewagon
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="https://mailbluster.com/"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/mailbluster.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Mailbluster
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/google.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Google
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/spotify.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Spotify
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/steam.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Steam
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/github-light.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Github
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/discord.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Discord
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/xbox.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    xbox
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/trello.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Kanban
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/hp.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Hp
                                  </p>
                                </a>
                              </div>
                              <div className="col-12">
                                <hr className="my-3 mx-n3 bg-200" />
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/linkedin.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Linkedin
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/twitter.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Twitter
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/facebook.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Facebook
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/instagram.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Instagram
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/pinterest.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Pinterest
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/slack.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Slack
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="#!"
                                  target="_blank"
                                >
                                  <img
                                    className="rounded"
                                    src="../../assets/img/nav-icons/deviantart.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                    Deviantart
                                  </p>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                  href="../events/event-detail.html"
                                  target="_blank"
                                >
                                  <div className="avatar avatar-2xl">
                                    <div className="avatar-name rounded-circle bg-primary-subtle text-primary">
                                      <span className="fs-7">E</span>
                                    </div>
                                  </div>
                                  <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                    Events
                                  </p>
                                </a>
                              </div>
                              <div className="col-12">
                                <a
                                  className="btn btn-outline-primary btn-sm mt-4"
                                  href="#!"
                                >
                                  Show more
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: 0, height: 0 }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ width: 0, display: "none" }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ height: 0, display: "none" }}
                  />
                </div>
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
          >
            <div className="avatar avatar-xl">
              <img
                className="rounded-circle"
                src="../../assets/img/team/3-thumb.png"
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
              <a className="dropdown-item" href="../../pages/user/profile.html">
                Profile &amp; account
              </a>
              <a className="dropdown-item" href="#!">
                Feedback
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="../../pages/user/settings.html"
              >
                Settings
              </a>
              <a
                className="dropdown-item"
                href="../../pages/authentication/card/logout.html"
              >
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <div className="content">
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <Link to="/home">
            <a
              className="btn btn-falcon-default btn-sm"
              href=""
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Back to inbox"
              data-bs-original-title="Back to inbox"
            >
              <svg
                className="svg-inline--fa fa-arrow-left fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                />
              </svg>
              {/* <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com */}
            </a>
            </Link>
            <span className="mx-1 mx-sm-2 text-300">|</span>
            <button
              className="btn btn-falcon-default btn-sm"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Archive"
              data-bs-original-title="Archive"
            >
              <svg
                className="svg-inline--fa fa-archive fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="archive"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"
                />
              </svg>
              {/* <span class="fas fa-archive"></span> Font Awesome fontawesome.com */}
            </button>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Delete"
              data-bs-original-title="Delete"
            >
              <svg
                className="svg-inline--fa fa-trash-alt fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="trash-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                />
              </svg>
              {/* <span class="fas fa-trash-alt"></span> Font Awesome fontawesome.com */}
            </button>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Mark as unread"
              data-bs-original-title="Mark as unread"
            >
              <svg
                className="svg-inline--fa fa-envelope fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                />
              </svg>
              {/* <span class="fas fa-envelope"></span> Font Awesome fontawesome.com */}
            </button>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Snooze"
              data-bs-original-title="Snooze"
            >
              <svg
                className="svg-inline--fa fa-clock fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                />
              </svg>
              {/* <span class="fas fa-clock"></span> Font Awesome fontawesome.com */}
            </button>
            <button
              className="btn btn-falcon-default btn-sm ms-1 ms-sm-2 d-none d-sm-inline-block"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Print"
              data-bs-original-title="Print"
            >
              <svg
                className="svg-inline--fa fa-print fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                />
              </svg>
              {/* <span class="fas fa-print"></span> Font Awesome fontawesome.com */}
            </button>
          </div>
          <div className="d-flex">
            <div className="d-none d-md-block">
              <small>2 of 354</small>
              <button
                className="btn btn-falcon-default btn-sm ms-2"
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
                className="btn btn-falcon-default btn-sm ms-2"
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
            <div className="dropdown font-sans-serif">
              <button
                className="btn btn-falcon-default text-600 btn-sm dropdown-toggle dropdown-caret-none ms-2"
                type="button"
                id="email-settings"
                data-bs-toggle="dropdown"
                data-boundary="viewport"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  className="svg-inline--fa fa-cog fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cog"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                  />
                </svg>
                {/* <span class="fas fa-cog"></span> Font Awesome fontawesome.com */}
              </button>
              <div
                className="dropdown-menu dropdown-menu-end border py-2"
                aria-labelledby="email-settings"
              >
                <a className="dropdown-item" href="#!">
                  Configure inbox
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
                <a className="dropdown-item" href="#!">
                  Themes
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#!">
                  Send feedback
                </a>
                <a className="dropdown-item" href="#!">
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md d-flex">
              <div className="avatar avatar-2xl">
                <img
                  className="rounded-circle"
                  src="../../assets/img/team/1.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 ms-2">
                <h5 className="mb-0">
                  Women work wonders… on your{" "}
                  <span className="white-space-nowrap">marketing skills</span>
                </h5>
                <a className="text-800 fs-10" href="#!">
                  <span className="fw-semi-bold">Emma Watson</span>
                  <span className="ms-1 text-500">&lt;emma@watson.com&gt;</span>
                </a>
              </div>
            </div>
            <div className="col-md-auto ms-auto d-flex align-items-center ps-6 ps-md-3">
              <small>8:40 AM (9 hours ago)</small>
              <svg
                className="svg-inline--fa fa-star fa-w-18 text-warning fs-10 ms-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
              {/* <span class="fas fa-star text-warning fs-10 ms-2"></span> Font Awesome fontawesome.com */}
            </div>
          </div>
        </div>
        <div className="card-body bg-body-tertiary">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="card shadow-none mb-3">
                <img
                  className="card-img-top"
                  src="src/assets/img/icons/spot-illustrations/international-women-s-day-2.png"
                  alt=""
                />
                <div className="card-body">
                  <h3 className="fw-semi-bold">
                    Happy International Women’s Day!
                  </h3>
                  <p>
                    On International Women’s Day, we at ThemeWagon want you to
                    discover the skills you can learn from our amazing women
                    digital marketing instructors.
                  </p>
                  <p>
                    That's not all, when you enroll in one of their courses, use
                    promo code: <code>GirlPower20</code> and get{" "}
                    <a className="fw-semi-bold" href="#!">
                      20% off
                    </a>{" "}
                    as our Women's Day gift to you. This offer{" "}
                    <a className="fw-semi-bold" href="#!">
                      expires in 7 days
                    </a>{" "}
                    —so pick your course—and enroll today!
                  </p>
                  <div className="text-center">
                    <button
                      className="btn btn-success btn-lg my-3"
                      type="button"
                    >
                      Browse Courses
                    </button>
                    <small className="d-block">
                      For any technical issues faced, please contact{" "}
                      <a href="#!">Customer Support</a>.
                    </small>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="icon-group justify-content-center">
                  <a className="icon-item text-facebook" href="#!">
                    <svg
                      className="svg-inline--fa fa-facebook-f fa-w-10"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                    {/* <span class="fab fa-facebook-f"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a className="icon-item text-twitter" href="#!">
                    <svg
                      className="svg-inline--fa fa-twitter fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                    {/* <span class="fab fa-twitter"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a className="icon-item text-google-plus" href="#!">
                    <svg
                      className="svg-inline--fa fa-google-plus-g fa-w-20"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google-plus-g"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                      />
                    </svg>
                    {/* <span class="fab fa-google-plus-g"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a className="icon-item text-linkedin" href="#!">
                    <svg
                      className="svg-inline--fa fa-linkedin-in fa-w-14"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                    {/* <span class="fab fa-linkedin-in"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a className="icon-item text-700" href="#!">
                    <svg
                      className="svg-inline--fa fa-medium-m fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="medium-m"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                      />
                    </svg>
                    {/* <span class="fab fa-medium-m"></span> Font Awesome fontawesome.com */}
                  </a>
                </div>
                <small>
                  If you wish to unsubscribe from all future emails, please
                  click <a href="#!">here</a>.
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row justify-content-between">
            <div className="col">
              <a className="btn btn-falcon-default btn-sm" href="compose.html">
                <svg
                  className="svg-inline--fa fa-reply fa-w-16"
                  data-fa-transform="down-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="reply"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                  style={{ transformOrigin: "0.5em 0.625em" }}
                >
                  <g transform="translate(256 256)">
                    <g transform="translate(0, 64)  scale(1, 1)  rotate(0 0 0)">
                      <path
                        fill="currentColor"
                        d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
                        transform="translate(-256 -256)"
                      />
                    </g>
                  </g>
                </svg>
                {/* <span class="fas fa-reply" data-fa-transform="down-2"></span> Font Awesome fontawesome.com */}
                <span className="d-none d-sm-inline-block ms-1">Reply</span>
              </a>
              <a
                className="btn btn-falcon-default btn-sm ms-2"
                href="compose.html"
              >
                <svg
                  className="svg-inline--fa fa-location-arrow fa-w-16"
                  data-fa-transform="down-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="location-arrow"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                  style={{ transformOrigin: "0.5em 0.625em" }}
                >
                  <g transform="translate(256 256)">
                    <g transform="translate(0, 64)  scale(1, 1)  rotate(0 0 0)">
                      <path
                        fill="currentColor"
                        d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
                        transform="translate(-256 -256)"
                      />
                    </g>
                  </g>
                </svg>
                {/* <span class="fas fa-location-arrow" data-fa-transform="down-2"></span> Font Awesome fontawesome.com */}
                <span className="d-none d-sm-inline-block ms-1">Forward</span>
              </a>
            </div>
            <div className="col-auto d-flex align-items-center">
              <small>2 of 354</small>
              <button
                className="btn btn-falcon-default btn-sm ms-2"
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
                className="btn btn-falcon-default btn-sm ms-2"
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

export default Details