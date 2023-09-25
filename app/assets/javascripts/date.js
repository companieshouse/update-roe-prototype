//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 



function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-UK', options);
}

const today = new Date();
const formattedDate = formatDate(today);

// Display the formatted date in the HTML element with the id "dateDisplay"
document.getElementById('dateDisplay').textContent = formattedDate;