  document.addEventListener('DOMContentLoaded', function() {
  // Get all parent li elements that contain a submenu
  const navItems = document.querySelectorAll('.lx-db-nav-ul li');

  // Function to toggle submenu visibility
  function toggleMenuVisibility(event) {
    // Prevent the default behavior (if using anchor links)
    event.preventDefault();

    // Close all open submenus first
    navItems.forEach(item => {
      item.classList.remove('menu-visible');
    });

    // Open the clicked submenu
    event.currentTarget.classList.add('menu-visible');
  }

  // Attach event listeners to all nav items
  navItems.forEach(item => {
    // Check if the nav item has a submenu (i.e., a .menu-vertical-container inside)
    if (item.querySelector('.menu-vertical-container')) {
      // Add click event listener for touch devices
      item.addEventListener('click', toggleMenuVisibility);
    }
  });

  // Close the menu if clicking outside
  document.addEventListener('click', function(event) {
    // If the click is outside the nav menu
    if (!event.target.closest('.lx-db-nav-ul')) {
      navItems.forEach(item => {
        item.classList.remove('menu-visible');
      });
    }
  });
});