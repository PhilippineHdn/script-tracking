const url = new URL(document.location);
const searchParams = url.searchParams;

const filter = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','src','source'];

const queryParams = localStorage.getItem('queryParams') ? JSON.parse(localStorage.getItem('queryParams')) : {};

for (const [key, value] of searchParams.entries()) {
  if (filter.includes(key)) {
    queryParams[key] = value;
    localStorage.setItem('queryParams', JSON.stringify(queryParams))
  };
};

for (const oneParam in queryParams) {
  if (document.getElementById(oneParam)) {
    document.getElementById(oneParam).value = queryParams[oneParam];
  }
}
