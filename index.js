const filter = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','src','source'];

const url = new URL(document.location);
const searchParams = url.searchParams;

let queryParams = localStorage.getItem('queryParams') ? JSON.parse(localStorage.getItem('queryParams')) : {};

const searchParamsKeys = Array.from(searchParams.keys());

const isInFilter = searchParamsKeys.some(searchParamsKey => filter.includes(searchParamsKey));
if (isInFilter) {
  queryParams = {}
  for (const [key, value] of searchParams.entries()) {
    if (filter.includes(key)) {
      queryParams[key] = value;
      localStorage.setItem('queryParams', JSON.stringify(queryParams))
    };
  };
};

for (const oneParam in queryParams) {
  if (document.getElementById(oneParam)) {
    document.getElementById(oneParam).value = queryParams[oneParam];
  }
};

const onlyQuery = url.search.slice(1);
const arrayOfEachQuery = onlyQuery.split('&');
const comparedWithFilterQuery = arrayOfEachQuery.filter(a => !filter.includes(a.split('=')[0]));
const newQueryUrl = comparedWithFilterQuery[0] ? `?${comparedWithFilterQuery.join('&')}` : '';

const nextURL = `${url.href.split('?')?.[0]}${newQueryUrl}`;
window.history.pushState({}, document.title, nextURL);
