function Navbar({ links, isScrolled }) {
  return (
    <header className={`header-area ${isScrolled ? "header-sticky" : ""}`}>
      <nav className="navbar">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <a className="navbar-brand me-0" href="/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                    className="logo-icon" />
                </svg>
                <span>Port<span className="primary">Folio</span></span>
              </a>
            </div>
            <div className="navbar-main d-flex flex-grow-1">
              <div className="logo inner-logo d-block d-xl-none">
                <a className="navbar-brand me-0" href="index.html">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                      className="logo-icon" />
                  </svg>
                  <span>Port<span className="primary">Folio</span></span>
                </a>
              </div>
              <ul className="navbar-info mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <svg className="nav-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.475 4.92481L9.03083 1.46814C8.64082 1.16473 8.1608 1 7.66667 1C7.17254 1 6.69251 1.16473 6.3025 1.46814L1.8575 4.92481C1.59037 5.13254 1.37424 5.39858 1.22563 5.7026C1.07701 6.00662 0.99984 6.34058 1 6.67897V12.679C1 13.121 1.17559 13.5449 1.48816 13.8575C1.80072 14.17 2.22464 14.3456 2.66667 14.3456H12.6667C13.1087 14.3456 13.5326 14.17 13.8452 13.8575C14.1577 13.5449 14.3333 13.121 14.3333 12.679V6.67897C14.3333 5.99314 14.0167 5.34564 13.475 4.92481Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.9753 10.1665C9.13359 11.2773 6.14859 11.2773 4.30859 10.1665" stroke-width="1.4"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About-Me">
                    <svg className="nav-icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 9.8335C9.66304 9.8335 10.2989 9.5701 10.7678 9.10126C11.2366 8.63242 11.5 7.99654 11.5 7.3335C11.5 6.67045 11.2366 6.03457 10.7678 5.56573C10.2989 5.09689 9.66304 4.8335 9 4.8335C8.33696 4.8335 7.70107 5.09689 7.23223 5.56573C6.76339 6.03457 6.5 6.67045 6.5 7.3335C6.5 7.99654 6.76339 8.63242 7.23223 9.10126C7.70107 9.5701 8.33696 9.8335 9 9.8335Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 1.5C15 1.5 16.5 3 16.5 9C16.5 15 15 16.5 9 16.5C3 16.5 1.5 15 1.5 9C1.5 3 3 1.5 9 1.5Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M4 15.7085V15.6668C4 14.7828 4.35119 13.9349 4.97631 13.3098C5.60143 12.6847 6.44928 12.3335 7.33333 12.3335H10.6667C11.5507 12.3335 12.3986 12.6847 13.0237 13.3098C13.6488 13.9349 14 14.7828 14 15.6668V15.7085"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99967 1.3335L1.33301 4.66683L7.99967 8.00016L14.6663 4.66683L7.99967 1.3335Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.33301 8L7.99967 11.3333L14.6663 8" stroke-width="1.4" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M1.33301 11.3335L7.99967 14.6668L14.6663 11.3335" stroke-width="1.4" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">
                    <svg className="nav-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.00326 3.99733L7.95159 1.40649C8.04974 1.36442 8.15533 1.34243 8.26212 1.34181C8.3689 1.34119 8.47473 1.36196 8.57337 1.40289C8.67201 1.44382 8.76145 1.50408 8.83642 1.58013C8.9114 1.65617 8.97039 1.74646 9.00992 1.84566L13.1133 11.764C13.1985 11.9651 13.2014 12.1917 13.1213 12.3949C13.0412 12.5982 12.8845 12.7618 12.6849 12.8507L6.73742 15.4415C6.63922 15.4837 6.53356 15.5058 6.42668 15.5065C6.3198 15.5072 6.21387 15.4864 6.11514 15.4455C6.0164 15.4046 5.92688 15.3442 5.85184 15.2681C5.7768 15.192 5.71778 15.1016 5.67826 15.0023L1.57492 5.08316C1.48963 4.88204 1.48673 4.65546 1.56684 4.45222C1.64696 4.24898 1.80367 4.08616 2.00326 3.99733Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M11.5 1.3335H12.3333C12.5543 1.3335 12.7663 1.42129 12.9226 1.57757C13.0789 1.73385 13.1667 1.94582 13.1667 2.16683V5.0835"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M15.6663 3C15.8863 3.09333 16.0997 3.18083 16.3063 3.2625C16.5098 3.34882 16.6706 3.51241 16.7534 3.71729C16.8362 3.92217 16.8343 4.15155 16.748 4.355L14.833 8.83334"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    <svg className="nav-icon" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.1663 6.16676L13.4163 4.91676C13.6352 4.69789 13.8088 4.43805 13.9273 4.15208C14.0457 3.86612 14.1067 3.55962 14.1067 3.25009C14.1067 2.94056 14.0457 2.63406 13.9273 2.3481C13.8088 2.06213 13.6352 1.80229 13.4163 1.58342C13.1975 1.36455 12.9376 1.19094 12.6517 1.07248C12.3657 0.954033 12.0592 0.893066 11.7497 0.893066C11.4401 0.893066 11.1336 0.954033 10.8477 1.07248C10.5617 1.19094 10.3019 1.36455 10.083 1.58342L1.33301 10.3334V13.6668H4.66634L6.33301 12.0001"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M13.0004 15.3335L15.7921 12.5968C15.9633 12.4307 16.0995 12.232 16.1926 12.0124C16.2857 11.7927 16.3339 11.5567 16.3343 11.3181C16.3347 11.0796 16.2873 10.8434 16.1948 10.6235C16.1024 10.4035 15.9669 10.2044 15.7963 10.0377C15.448 9.69712 14.9806 9.50602 14.4935 9.50509C14.0065 9.50415 13.5383 9.69346 13.1888 10.0327L13.0021 10.216L12.8163 10.0327C12.4681 9.69237 12.0008 9.50143 11.5139 9.50049C11.0271 9.49956 10.5591 9.68871 10.2096 10.0277C10.0383 10.1937 9.9021 10.3924 9.80891 10.612C9.71572 10.8316 9.66746 11.0677 9.667 11.3062C9.66653 11.5447 9.71386 11.781 9.80619 12.0009C9.89853 12.2209 10.034 12.4201 10.2046 12.5868L13.0004 15.3335Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact-Me">
                    <svg className="nav-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.66699 5.5H12.3337" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.66699 8.8335H10.667" stroke-width="1.4" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M14 1.3335C14.663 1.3335 15.2989 1.59689 15.7678 2.06573C16.2366 2.53457 16.5 3.17045 16.5 3.8335V10.5002C16.5 11.1632 16.2366 11.7991 15.7678 12.2679C15.2989 12.7368 14.663 13.0002 14 13.0002H9.83333L5.66667 15.5002V13.0002H4C3.33696 13.0002 2.70107 12.7368 2.23223 12.2679C1.76339 11.7991 1.5 11.1632 1.5 10.5002V3.8335C1.5 3.17045 1.76339 2.53457 2.23223 2.06573C2.70107 1.59689 3.33696 1.3335 4 1.3335H14Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header-right-info d-flex align-items-center">
                <button className="theme-control-btn">
                  <span className="dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.8005 3C10.207 3.0003 8.64356 3.44286 7.27683 4.28049C5.91011 5.11811 4.79139 6.31937 4.04002 7.75612C3.28865 9.19288 2.93281 10.8112 3.01046 12.4386C3.08811 14.0659 3.59633 15.6411 4.48091 16.9963C5.3655 18.3514 6.59326 19.4356 8.03324 20.1333C9.47322 20.8309 11.0714 21.1157 12.6573 20.9574C14.2432 20.7991 15.7573 20.2036 17.0381 19.2344C18.319 18.2652 19.3185 16.9587 19.9301 15.4542C20.2302 14.7162 19.5111 13.9746 18.7875 14.2752C17.5475 14.7888 16.1706 14.8418 14.8963 14.425C13.622 14.0082 12.5308 13.1479 11.8126 11.9937C11.0943 10.8396 10.7943 9.4645 10.9648 8.10764C11.1353 6.75077 11.7655 5.49792 12.7458 4.5669L12.8136 4.4949C13.2986 3.9279 12.913 3.0072 12.1464 3.0072H11.9122L11.8524 3.0018L11.7996 3H11.8005Z"
                        fill="#1A1F2C" />
                    </svg>
                    <small className="theme-text d-block d-xl-none">Change appearance</small>
                  </span>
                  <span className="light">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 19C12.2449 19 12.4813 19.09 12.6644 19.2527C12.8474 19.4155 12.9643 19.6397 12.993 19.883L13 20V21C12.9997 21.2549 12.9021 21.5 12.7272 21.6854C12.5522 21.8707 12.313 21.9822 12.0586 21.9972C11.8042 22.0121 11.5536 21.9293 11.3582 21.7657C11.1627 21.6021 11.0371 21.3701 11.007 21.117L11 21V20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19Z"
                        fill="#FD7E41" />
                      <path
                        d="M18.3127 16.9099L18.4067 16.9929L19.1067 17.6929C19.2861 17.8729 19.3902 18.1144 19.398 18.3683C19.4057 18.6223 19.3165 18.8697 19.1485 19.0602C18.9804 19.2508 18.7462 19.3702 18.4933 19.3943C18.2403 19.4184 17.9877 19.3454 17.7867 19.1899L17.6927 19.1069L16.9927 18.4069C16.8202 18.2347 16.7165 18.0053 16.7012 17.7619C16.6859 17.5186 16.76 17.278 16.9097 17.0855C17.0593 16.893 17.2741 16.7618 17.5137 16.7166C17.7533 16.6713 18.0012 16.7152 18.2107 16.8399L18.3127 16.9099Z"
                        fill="#FD7E41" />
                      <path
                        d="M7.00747 16.993C7.17965 17.1652 7.28308 17.3943 7.29836 17.6373C7.31364 17.8803 7.23972 18.1206 7.09047 18.313L7.00747 18.407L6.30747 19.107C6.12751 19.2863 5.88604 19.3905 5.63209 19.3982C5.37814 19.406 5.13076 19.3168 4.94019 19.1487C4.74963 18.9807 4.63017 18.7464 4.60607 18.4935C4.58198 18.2406 4.65506 17.988 4.81047 17.787L4.89347 17.693L5.59347 16.993C5.781 16.8055 6.03531 16.7002 6.30047 16.7002C6.56563 16.7002 6.81994 16.8055 7.00747 16.993Z"
                        fill="#FD7E41" />
                      <path
                        d="M3.99987 11C4.25475 11.0003 4.4999 11.0979 4.68524 11.2728C4.87057 11.4478 4.9821 11.687 4.99704 11.9414C5.01198 12.1958 4.92919 12.4464 4.7656 12.6418C4.60201 12.8373 4.36996 12.9629 4.11687 12.993L3.99987 13H2.99987C2.74499 12.9997 2.49984 12.9021 2.3145 12.7272C2.12916 12.5522 2.01763 12.313 2.0027 12.0586C1.98776 11.8042 2.07054 11.5536 2.23413 11.3582C2.39772 11.1627 2.62977 11.0371 2.88287 11.007L2.99987 11H3.99987Z"
                        fill="#FD7E41" />
                      <path
                        d="M20.9999 11C21.2547 11.0003 21.4999 11.0979 21.6852 11.2728C21.8706 11.4478 21.9821 11.687 21.997 11.9414C22.012 12.1958 21.9292 12.4464 21.7656 12.6418C21.602 12.8373 21.37 12.9629 21.1169 12.993L20.9999 13H19.9999C19.745 12.9997 19.4998 12.9021 19.3145 12.7272C19.1292 12.5522 19.0176 12.313 19.0027 12.0586C18.9878 11.8042 19.0705 11.5536 19.2341 11.3582C19.3977 11.1627 19.6298 11.0371 19.8829 11.007L19.9999 11H20.9999Z"
                        fill="#FD7E41" />
                      <path
                        d="M6.21264 4.80985L6.30664 4.89285L7.00664 5.59285C7.18599 5.77281 7.29011 6.01429 7.29787 6.26824C7.30562 6.52219 7.21642 6.76957 7.04839 6.96013C6.88036 7.1507 6.64609 7.27016 6.39316 7.29425C6.14024 7.31834 5.88763 7.24526 5.68664 7.08985L5.59264 7.00685L4.89264 6.30685C4.72073 6.13453 4.61757 5.90543 4.6025 5.66248C4.58744 5.41954 4.6615 5.17945 4.8108 4.98721C4.9601 4.79497 5.1744 4.66378 5.41351 4.61824C5.65262 4.57271 5.90013 4.61594 6.10964 4.73985L6.21264 4.80985Z"
                        fill="#FD7E41" />
                      <path
                        d="M19.1071 4.89288C19.2793 5.06508 19.3827 5.29418 19.398 5.5372C19.4132 5.78023 19.3393 6.02048 19.1901 6.21288L19.1071 6.30688L18.4071 7.00688C18.2271 7.18623 17.9856 7.29036 17.7317 7.29811C17.4777 7.30587 17.2304 7.21667 17.0398 7.04864C16.8492 6.8806 16.7298 6.64633 16.7057 6.39341C16.6816 6.14049 16.7547 5.88788 16.9101 5.68688L16.9931 5.59288L17.6931 4.89288C17.8806 4.70541 18.1349 4.6001 18.4001 4.6001C18.6652 4.6001 18.9196 4.70541 19.1071 4.89288Z"
                        fill="#FD7E41" />
                      <path
                        d="M12 2C12.2449 2.00003 12.4813 2.08996 12.6644 2.25272C12.8474 2.41547 12.9643 2.63975 12.993 2.883L13 3V4C12.9997 4.25488 12.9021 4.50003 12.7272 4.68537C12.5522 4.8707 12.313 4.98223 12.0586 4.99717C11.8042 5.01211 11.5536 4.92933 11.3582 4.76573C11.1627 4.60214 11.0371 4.3701 11.007 4.117L11 4V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z"
                        fill="#FD7E41" />
                      <path
                        d="M12 7C12.9797 6.99994 13.9378 7.28769 14.7553 7.8275C15.5729 8.36731 16.2138 9.1354 16.5986 10.0364C16.9833 10.9373 17.0949 11.9315 16.9195 12.8953C16.7441 13.8592 16.2893 14.7502 15.6118 15.4579C14.9343 16.1655 14.0638 16.6585 13.1085 16.8756C12.1532 17.0928 11.1552 17.0245 10.2383 16.6793C9.3215 16.334 8.52629 15.7271 7.95146 14.9338C7.37663 14.1405 7.04752 13.1958 7.005 12.217L7 12L7.005 11.783C7.06092 10.4958 7.61161 9.27978 8.54222 8.38866C9.47284 7.49754 10.7115 7.00007 12 7Z"
                        fill="#FD7E41" />
                    </svg>
                    <small className="theme-text d-block d-xl-none">Change appearance</small>
                  </span>
                </button>
                <a href="/Contact-Me" className="lets-talk-btn">
                  Let's Talk
                  <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mobile-menu-overlay d-block d-lg-none"></div>
            <div className="mobile-menu-control-bar d-block d-xl-none">
              <button className="mobile-menu-control-bar">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
