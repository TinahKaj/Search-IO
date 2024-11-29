import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="main" id="top">
  <div className="container" data-layout="container">
    <div className="row flex-center min-vh-100 py-6">
      <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <a className="d-flex flex-center mb-4" href="../../../index.html">
          <img
            className="me-2"
            src="../../../assets/img/icons/spot-illustrations/falcon.png"
            alt=""
            width={58}
          />
          <span className="font-sans-serif text-primary fw-bolder fs-4 d-inline-block">
            falcon
          </span>
        </a>
        <div className="card">
          <div className="card-body p-4 p-sm-5">
            <div className="row flex-between-center mb-2">
              <div className="col-auto">
                <h5>Log in</h5>
              </div>
              <div className="col-auto fs-10 text-600">
                <span className="mb-0 undefined">or</span>{" "}
                <span>
                  <a href="register.html">Create an account</a>
                </span>
              </div>
            </div>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="row flex-between-center">
                <div className="col-auto">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="basic-checkbox"
                      default-Checked="checked"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="basic-checkbox"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <a className="fs-10" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mb-3">
                  <Link to="/home">
                  <button
                  className="btn btn-primary d-block w-100 mt-3"
                  type="submit"
                  name="submit">
                  Log in
                </button>
                  </Link>
              </div>
            </form>
            <div className="position-relative mt-4">
              <hr />
              <div className="divider-content-center">or log in with</div>
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

export default Login