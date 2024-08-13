function showSearch() {
  document.querySelector('#search').classList.toggle('active-search');
}

function showSearchRps() {
  document.querySelector('#search-rps').classList.toggle('active-search');
}

function showNav() {
  document.querySelector('.main-menu').classList.toggle('active-search');
}


// show Item menu
const menuItems = document.querySelectorAll('li');

menuItems.forEach(item => {
  const submenu = item.querySelector('.drop-item');
  
  item.addEventListener('click', () => {

    submenu.classList.toggle('active-search');
  });
  
});

$('.slick-feedback').slick({
  infinite: true,
  slidesToScroll: 3,
  slidesToShow: 3,
  prevArrow: 
  `
    <div class="prev">
      <i class="fa-solid fa-chevron-left icon-arrow"></i>
    </div>
  `,
  nextArrow: 
  `
    <div class="next">
      <i class="fa-solid fa-chevron-right icon-arrow"></i>
    </div>
  `,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});

$('.slick-img').slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false
});

function setEqualHeight(classSlick) {
    var maxHeight = 0;
    $(`${classSlick} .slick-slide`).each(function() {
        var thisHeight = $(this).outerHeight();
        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
        }
    });
    $(`${classSlick} .slick-slide`).css('height', maxHeight + 'px');
}

// Gọi hàm khi slider đã khởi tạo
$('.slick-feedback').on('setPosition', function () {
    setEqualHeight('.slick-feedback');
});
$('.slick-img').on('setPosition', function () {
  setEqualHeight('.slick-img');
});

// Gọi lại hàm khi cửa sổ thay đổi kích thước
$(window).resize(function() {
    setEqualHeight('.slick-feedback');
    setEqualHeight('.slick-img');
});

