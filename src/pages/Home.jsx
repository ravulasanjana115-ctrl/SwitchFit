import Banner from "../components/Banner";
import Categories from "../components/Categories";

function Home() {

  return (

    <div className="home-page">

      {/* Banner Section */}
      <section className="home-banner">
        <Banner />
      </section>

      {/* Categories Section */}
      <section className="home-categories">
        <Categories />
      </section>

    </div>

  );

}

export default Home;