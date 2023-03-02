const Button = ({ label }) => {
  return (
    <section className="bg-redCustom m-3 rounded-md">
      <button className=" text-white px-16 py-[10px] uppercase ">
        {label}
      </button>
    </section>
  );
};

export default Button;
