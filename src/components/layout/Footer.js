function Footer() {
  return (
    <div className='mt-5 navbar navbar-fixed-bottom'>
      <footer className='bg-dark text-center text-white'>
        <div className='container p-4 pb-0'>
          <section className='mb-4'>
            <a className='btn  btn-floating m-1' href='#!' role='button'>
              <i className='bi bi-facebook fs-3 border border-0 text-white'></i>
            </a>

            <a className='btn  btn-floating m-1' href='#!' role='button'>
              <i className='bi bi-twitter fs-3 border border-0 text-white'></i>
            </a>

            <a className='btn  btn-floating m-1' href='#!' role='button'>
              <i className='bi bi-instagram fs-3 border border-0 text-white'></i>
            </a>

            <a className='btn  btn-floating m-1' href='#!' role='button'>
              <i className='bi bi-linkedin fs-3 border border-0 text-white'></i>
            </a>

            <a className='btn  btn-floating m-1' href='#!' role='button'>
              <i className='bi bi-github fs-3 border border-0 text-white'></i>
            </a>
          </section>
        </div>

        <p className='text-center text-white p-3'>
          <span className='pe-1'>© 2023 Copyright: </span>
          Nicholas Sher
        </p>
      </footer>
    </div>
  );
}

export default Footer;
