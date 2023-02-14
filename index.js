const url = new URL(document.location);

const searchParams = url.searchParams;

const localStorageQuery = localStorage.getItem('queryParams');
const parsedlocalStorageQuery = localStorageQuery ? JSON.parse(localStorageQuery) : {};

for (const [key, value] of searchParams.entries()) {
  parsedlocalStorageQuery[key] = value;
  localStorage.setItem('queryParams', JSON.stringify(parsedlocalStorageQuery));
}
