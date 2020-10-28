export const getCatgeoriesFromLocationList = (locationList, selectedLocation, selectedBranch) => {
  let location, branch
  location = locationList.find(item => item.name === selectedLocation)
  if (location) {
    branch = location.branches.find(item => item.name === selectedBranch)
  }

  return branch ? branch.categories : []
}