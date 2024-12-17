// Theme JavaScript with modular functionality
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initCollectionSlider();
  initProductGallery();
  initAjaxCart();
});

// Mobile Menu
function initMobileMenu() {
  const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const overlay = document.querySelector('[data-mobile-menu-overlay]');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    overlay?.addEventListener('click', closeMobileMenu);
  }

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    overlay?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    overlay?.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Collection Slider
function initCollectionSlider() {
  const slider = document.querySelector('.collection-slider');
  if (!slider) return;

  // Initialize slider functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Product Gallery
function initProductGallery() {
  const mainImage = document.querySelector('[data-main-image]');
  const thumbnails = document.querySelectorAll('[data-thumbnail]');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const newSrc = thumb.getAttribute('data-full-size');
      mainImage.src = newSrc;
      thumbnails.forEach(t => t.classList.remove('border-black'));
      thumb.classList.add('border-black');
    });
  });
}

// Ajax Cart
function initAjaxCart() {
  const addToCartForms = document.querySelectorAll('.add-to-cart-form');
  const cartCount = document.querySelector('[data-cart-count]');

  addToCartForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        updateCartCount();
        showAddToCartNotification();
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    });
  });

  async function updateCartCount() {
    const response = await fetch('/cart.js');
    const cart = await response.json();
    if (cartCount) {
      cartCount.textContent = cart.item_count;
    }
  }

  function showAddToCartNotification() {
    // Implementation for showing a notification
  }
}