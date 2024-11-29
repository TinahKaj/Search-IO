import { Link } from "react-router-dom";

function Card(props:any) {
    return (
        <Link to="/details">
            <div
                className="row border-bottom border-200 hover-actions-trigger hover-shadow py-2 px-1 mx-0 bg-body-white"
                data-href="email-detail.html" style={{color:"black"}}>
                <div
                className="btn-group btn-group-sm z-2 hover-actions end-0 me-3"
                style={{ width: "10rem" }}
                >
                <button
                    className="btn btn-tertiary hover-bg-200"
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
                    className="btn btn-tertiary hover-bg-200"
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
                    className="btn btn-tertiary hover-bg-200"
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
                    className="btn btn-tertiary hover-bg-200"
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
                </div>
                <div className="col-auto d-none d-sm-block">
                <div className="d-flex bg-body-tertiary">
                    <div className="form-check mb-0 fs-9">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox-9"
                        data-bulk-select-row="data-bulk-select-row"
                    />
                    </div>
                    <svg
                    className="svg-inline--fa fa-star fa-w-18 text-300 ms-1"
                    data-fa-transform="down-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                    style={{ transformOrigin: "0.5625em 0.75em" }}
                    >
                    <g transform="translate(288 256)">
                        <g transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)">
                        <path
                            fill="currentColor"
                            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                            transform="translate(-288 -256)"
                        />
                        </g>
                    </g>
                    </svg>
                    {/* <span class="far text-300 fa-star ms-1" data-fa-transform="down-4"></span> Font Awesome fontawesome.com */}
                </div>
                </div>
                <div className="col col-md-9 col-xxl-10">
                <div className="row">
                    <div className="col-md-4 col-xl-3 col-xxl-2 ps-md-0 mb-1 mb-md-0">
                    <div className="d-flex position-relative">
                        <div className="avatar avatar-s">
                        <img
                            className="rounded-soft"
                            src="../../assets/img/team/4.jpg"
                            alt=""
                        />
                        </div>
                        <div className="flex-1 ms-2">
                        <a className="stretched-link inbox-link" href="email-detail.html">
                            Tony Stark
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <a className="d-block inbox-link" href="email-detail.html">
                        <span>Bruce Banner - Invitation to edit</span>
                        <span className="mx-1">–</span>
                        <span>
                          {props.title}
                        </span>
                    </a>
                    <Link to="">
                    <a
                        className="d-inline-flex align-items-center border rounded-pill px-3 py-1 me-2 mt-2 inbox-link"
                        href="#!">
                        <svg
                        className="svg-inline--fa fa-file-alt fa-w-12 text-primary"
                        data-fa-transform="grow-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.375em 0.5em" }}
                        >
                        <g transform="translate(192 256)">
                            <g transform="translate(0, 0)  scale(1.25, 1.25)  rotate(0 0 0)">
                            <path
                                fill="currentColor"
                                d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                                transform="translate(-192 -256)"
                            />
                            </g>
                        </g>
                        </svg>
                        {/* <span class="fas fa-file-alt text-primary" data-fa-transform="grow-4"></span> Font Awesome fontawesome.com */}
                        <span className="ms-2">Endgame schedule</span>
                    </a>
                    </Link>
                    <Link to="">
                    <a
                        className="d-inline-flex align-items-center border rounded-pill px-3 py-1 me-2 mt-2 inbox-link"
                        href="#!"
                    >
                        <svg
                        className="svg-inline--fa fa-file-pdf fa-w-12 text-danger"
                        data-fa-transform="grow-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-pdf"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.375em 0.5em" }}
                        >
                        <g transform="translate(192 256)">
                            <g transform="translate(0, 0)  scale(1.25, 1.25)  rotate(0 0 0)">
                            <path
                                fill="currentColor"
                                d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"
                                transform="translate(-192 -256)"
                            />
                            </g>
                        </g>
                        </svg>
                        {/* <span class="fas fa-file-pdf text-danger" data-fa-transform="grow-4"></span> Font Awesome fontawesome.com */}
                        <span className="ms-2">Endgame schedule</span>
                    </a>
                    </Link>
                    <Link to="">
                    <a
            className="d-inline-flex align-items-center border rounded-pill px-3 py-1 me-2 mt-2 inbox-link"
            href="../../assets/img/generic/1.jpg"
            data-gallery="gallery-7">
            <svg
                className="svg-inline--fa fa-image fa-w-16 text-danger"
                data-fa-transform="grow-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="image"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.5em 0.5em" }}>
                <g transform="translate(256 256)">
                <g transform="translate(0, 0)  scale(1.25, 1.25)  rotate(0 0 0)">
                    <path
                    fill="currentColor"
                    d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
                    transform="translate(-256 -256)"/>
                </g>
                </g>
            </svg>
            {/* <span class="fas fa-image text-danger" data-fa-transform="grow-4"></span> Font Awesome fontawesome.com */}
            <span className="ms-2">Winter</span>
                    </a>
                    </Link>
                        <Link to="">
                        <a
            className="d-inline-flex align-items-center border rounded-pill px-3 py-1 me-2 mt-2 inbox-link"
            href="#!">
            <svg
                className="svg-inline--fa fa-file-archive fa-w-12 text-warning"
                data-fa-transform="grow-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-archive"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.375em 0.5em" }}>
                <g transform="translate(192 256)">
                <g transform="translate(0, 0)  scale(1.25, 1.25)  rotate(0 0 0)">
                    <path
                    fill="currentColor"
                    d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27 0 15 14.6 27 32.5 27s32.4-12.1 32.4-27-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z"
                    transform="translate(-192 -256)"/>
                </g>
                </g>
            </svg>
            {/* <span class="fas fa-file-archive text-warning" data-fa-transform="grow-4"></span> Font Awesome fontawesome.com */}
            <span className="ms-2">syllabus</span>
            </a>
                        </Link>

                    </div>
                </div>
                </div>
                <div className="col-auto ms-auto d-flex flex-column justify-content-between">
                <span>{props.date}</span>
                <svg
                    className="svg-inline--fa fa-star fa-w-18 text-300 ms-auto mb-2 d-sm-none"
                    data-fa-transform="down-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                    style={{ transformOrigin: "0.5625em 0.9375em" }}
                >
                    <g transform="translate(288 256)">
                    <g transform="translate(0, 224)  scale(1, 1)  rotate(0 0 0)">
                        <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        transform="translate(-288 -256)"
                        />
                    </g>
                    </g>
                </svg>
                {/* <span class="far text-300 fa-star ms-auto mb-2 d-sm-none" data-fa-transform="down-7"></span> Font Awesome fontawesome.com */}
                </div>
            </div>
        </Link>
    );
}
export default Card;