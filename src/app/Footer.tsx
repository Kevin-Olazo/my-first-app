export default function Footer() {
  return (
    <div className="bg-base-200">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 max-w-7xl m-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 max-w-7xl m-auto">
        <aside className="grid-flow-col items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 41.9314C21.6974 45.578 17.6315 48 13 48C5.8203 48 0 42.1797 0 35C0 27.8203 5.8203 22 13 22C17.7611 22 21.752 24.6222 24 28.3066C21.4353 32.5327 21.2482 37.8809 24 41.9314Z"
              fill="#61459C"
            ></path>
            <path
              d="M36.9851 22C41.2978 22.0203 45.5064 24.1849 47.9607 28.1126C51.7654 34.2014 49.9138 42.2216 43.8251 46.0262C37.7363 49.8309 29.7161 47.9793 25.9115 41.8905C23.3885 37.8529 23.4974 33.0789 25.4307 29.22C30.3737 29.1555 35.0083 26.4801 36.9851 22Z"
              fill="#442781"
            ></path>
            <path
              d="M13.3889 19.8399C11.4309 15.9973 11.4265 11.2647 13.7931 7.28346C17.4618 1.11185 25.439 -0.917178 31.6106 2.75151C37.7822 6.4202 39.8112 14.3973 36.1425 20.569C33.7097 24.6615 29.4164 26.7522 25.1007 26.8019C22.7784 22.4378 18.2768 19.5443 13.3889 19.8399Z"
              fill="#FF8124"
            ></path>
          </svg>
          <p>
            Flowmazon Industries Ltd.
            <br />
            Providing reliable products since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
