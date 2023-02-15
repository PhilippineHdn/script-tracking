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
};

// Current URL: file:///Users/philippine/Sites/script-tracking/form.html?utm_medium=insta
const nextURL = 'file:///Users/philippine/Sites/script-tracking/form.html';
const nextTitle = 'Hidden queryParams';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);

