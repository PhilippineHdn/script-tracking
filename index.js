const url = new URL(document.location);

const searchParams = url.searchParams;

const filter = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','src','source'];

const localStorageQuery = localStorage.getItem('queryParams');

const parsedlocalStorageQuery = localStorageQuery ? JSON.parse(localStorageQuery) : {};

for (const [key, value] of searchParams.entries()) {
  if (filter.includes(key)) {
    parsedlocalStorageQuery[key] = value;
    localStorage.setItem('queryParams', JSON.stringify(parsedlocalStorageQuery))
  };
};
