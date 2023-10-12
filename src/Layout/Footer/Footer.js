import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>About Us</h3>
            <p>Your description about the company goes here.</p>
          </div>
          <div class="col-md-6">
            <h3>Contact Us</h3>
            <p>
              Email: info@example.com
              <br />
              Phone: 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
