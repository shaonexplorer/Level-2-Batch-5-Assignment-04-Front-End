function Footer() {
  return (
    <div className="flex justify-center mb-[20px]">
      <p className="text-sm sm:text-base">
        &copy; <span>{new Date().getFullYear()}</span> Abir Hasan Khan. All
        Rights Reserved.
        {/* <a href="">Privacy Policy</a> | <a href="">Terms of Service</a> */}
      </p>
    </div>
  );
}

export default Footer;
