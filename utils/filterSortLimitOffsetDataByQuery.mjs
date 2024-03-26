function filterDataByQuery(query, data) {
  for (const key in query) {
    if (key === "entity") {
      let countries = query[key];
      countries = countries.split(",");
      data = data.filter((energy) => countries.includes(energy.entity));
    } else {
      const [minMax, value] = key.split("-");
      if (minMax !== "min" && minMax !== "max") {
        return data;
      }
      if (minMax === "min") {
        data = data.filter((energy) => energy[value] >= query[key]);
      }
      if (minMax === "max") {
        data = data.filter((energy) => energy[value] <= query[key]);
      }
    }
  }
  return data;
}

function sortDataByQuery(query, data) {
  let { sortBy, sortOrder } = query;
  console.log(sortBy, sortOrder);
  if (sortBy !== undefined) {
    data = data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === "desc" ? 1 : -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === "desc" ? -1 : 1;
      }
      return 0;
    });
  } else {
    data = data.sort((a, b) => {
      if (a.year < b.year) {
        return sortOrder === "desc" ? 1 : -1;
      }
      if (a.year > b.year) {
        return sortOrder === "desc" ? -1 : 1;
      }
      return 0;
    });
  }
  return data;
}

function limitOffsetDataByQuery(query, data) {
  let { limit, offset } = query;
  if (offset) {
    data = data.slice(offset);
  }
  if (limit) {
    data = data.slice(0, limit);
  }
  return data;
}

export default function filterSortLimitOffsetDataByQuery(query, data) {
  data = filterDataByQuery(query, data);
  data = sortDataByQuery(query, data);
  data = limitOffsetDataByQuery(query, data);
  return data;
}
