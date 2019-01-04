window.addEventListener("load", function(){
window.cookieconsent.initialise({
  content: {
    header: 'Cookies used on the website!',
    message: 'TNIGC uses cookies to make your experience better.',
    dismiss: 'Confirm',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'http://ankor.us,
    close: '&#x274c;',
  },
  cookie: {
    expiryDays: 365
  },
  position: 'top'
});
$(".cc-banner").wrapInner("<div class='cc-container container'></div>");
});
