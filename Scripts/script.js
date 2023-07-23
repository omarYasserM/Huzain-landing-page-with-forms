let lastScrollTop =
  window.scrollY || document.documentElement.scrollTop;

let headerElement = document.getElementById('header');
console.log(headerElement);

window.addEventListener(
  'scroll',
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;
    if(scrollY < 20) return headerElement.classList.remove('stickyheader');
    if (scrollTopPosition > lastScrollTop) {
        headerElement.classList.add('stickyheader');
    } else if (scrollTopPosition < lastScrollTop) {
        headerElement.classList.add('stickyheader');
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false,
);