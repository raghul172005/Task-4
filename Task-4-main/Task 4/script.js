

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navigating to section: ${link.getAttribute('href')}`);
    });
  });
  