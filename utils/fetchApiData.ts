import { CarProps, FilterProps } from "@/types/types";

export async function fetchData(filter: FilterProps) {
  const { model, fuel, limit, manufacturer, year } = filter;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "02b10988a6msh7e628d4d6d8a358p1a04c7jsnea2ab6104a78",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  const result = await fetch(url, options);
  const data = result.json();
  return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateYearAndGasFilter = (title: string, value: string) => {
  const newSearchPath = new URLSearchParams(window.location.search);
  if (title && value === null) newSearchPath.delete(title);
  newSearchPath.set(title, value);
  const newPath = `${window.location.pathname}?${newSearchPath.toString()}`;

  return newPath;
};
