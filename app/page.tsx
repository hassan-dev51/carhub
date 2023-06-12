import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types/types";
import { fetchData } from "@/utils/fetchApiData";

export default async function Home({ searchParams }: HomeProps) {
  const cars = await fetchData({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
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
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        )}
      </div>
    </main>
  );
}
