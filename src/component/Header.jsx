import { CONTACT_LOGO } from "./Constant";

const Header = () => {
  return (
    <div className="shadow-lg shadow-gray-700 bg-blue-500">
      <img className="w-20 " src={CONTACT_LOGO} alt="contact-logo"></img>
    </div>
  );
};

export default Header;
