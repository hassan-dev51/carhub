import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchData } from "@/utils/fetchApiData";

export default async function Home() {
  const cars = await fetchData();
  const isEmptyData = !Array.isArray(cars) || cars.length < 1 || !cars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} /> */}
          </div>
        </div>
        {isEmptyData ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No Result Found</h2>
            <p>{cars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, index: number) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
