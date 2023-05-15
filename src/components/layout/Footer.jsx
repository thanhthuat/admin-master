import moment from "moment/moment";

const Footer = () => {
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        Copyright © {moment().year()} ideavn .
      </p>
    </div>
  );
};

export default Footer;
