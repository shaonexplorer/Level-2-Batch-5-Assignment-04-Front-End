function Footer() {
  return (
    <div className="flex flex-col items-center sm:justify-center mb-[20px] text-xs sm:text-base">
      <p className="">
        &copy; <span>{new Date().getFullYear()}</span> Library Mangement App.
        All Rights Reserved.
        {/* <a href="">Privacy Policy</a> | <a href="">Terms of Service</a> */}
      </p>
      {/* <div>Built with TanStack Table, React Router, and Shadcn.</div> */}
    </div>
  );
}

export default Footer;
