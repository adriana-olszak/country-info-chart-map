## How to run
- create `.env` file using `.env.example`
- add your MapBox API KEY to `.env` file
- install dependencies and run the app ```yarn && yarn start```

## Time taken to complete
around 5h (excluding refreshment break which is not visible in git history)

## Implemented base features:
- [x] Users should be able to search for a specific country OR choose a region from a list.
- [x] Partial searches should return a list of countries. For example, the search term “new”
  should fetch data about New Caledonia, New Zealand, and Papua New Guinea.
- [x] Display the location of each country which matches the search term on an embedded
  map.
- [x] used MapBox.
- [x] Each location should be represented by a marker at the country’s approximate latitude
  and longitude.
- [x] Markers should have a label with the corresponding country’s name
- [x] Using an appropriate chart from your preferred data visualization library, compare the
  populations of the country/countries matching your search term.
- [x] Both the map and the chart should update with each new search/selection.

## Implemented nice-to-haves features:
- [x] Mobile responsive
- [x] Pretty UI/UX
- [x] Autocomplete for user input
