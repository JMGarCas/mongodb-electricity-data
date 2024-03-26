export default function filterAndSortDataByQuery(query, data) {
  let { countries, minYear, maxYear } = query;
  if (countries) {
    countries = countries.split(",");
    data = data.filter((energy) => countries.includes(energy.entity));
  }
  if (minYear) {
    data = data.filter((energy) => energy.year >= minYear);
  }
  if (maxYear) {
    data = data.filter((energy) => energy.year <= maxYear);
  }
  return data;
}
