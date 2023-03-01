import Cards from "../Cards/Cards";

const Home = (props) => {
  const { cosmetics } = props;

  return (
    <main className="bg-[#f2f2f2]  ">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-7 my-6">
          {cosmetics.slice(0, 5).map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
