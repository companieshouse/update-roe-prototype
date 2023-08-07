//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

}
)




function show_hide() {
  // get div to hide / reveal
  var title_Fields = document.getElementById('revealTitleNumbers');
  if (title_Fields.classList.contains('govuk-visually-hidden')) {
    title_Fields.classList.remove('govuk-visually-hidden');
  } else {
    title_Fields.classList.add('govuk-visually-hidden');
  }
}