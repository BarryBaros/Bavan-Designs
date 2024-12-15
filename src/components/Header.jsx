import bavanLogo from "../images/Bavan logo.png";
import "../css/stylesheet.css";
function Header() {
  return (
    <div className="container">
    <div className="header">
      <img src={bavanLogo} alt="Bavan Designs Logo" />
      <h1 className="header1">Bavan Designs</h1>
      <h4 className="header4">Home</h4>
      <h4 className="header4">About Us</h4>
      <h4 className="header4">Product</h4>
      <h4 className="header4">Shop</h4>
      <h4 className="header4">Contact</h4>
    </div>
    </div>
  );
}

export default Header;
