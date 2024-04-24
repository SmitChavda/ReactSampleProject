import "src/shared/footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section mt-2">
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved{" "}
                    <a href="https://www.linkedin.com/in/smit-chavda-55b117139/">
                      Smit Chavda
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
