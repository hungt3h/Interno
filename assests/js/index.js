
// menu
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


// Effect
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

$('.slick-blog').slick({
  infinite: true,
  slidesToScroll: 1,
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
        slidesToScroll: 1,
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
$('.slick-team').slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 4,
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
        slidesToScroll: 1,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2
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
$('.slick-img').on('setPosition', function () {
  setEqualHeight('.slick-blog');
});
$('.slick-img').on('setPosition', function () {
  setEqualHeight('.slick-team');
});

// Gọi lại hàm khi cửa sổ thay đổi kích thước
$(window).resize(function() {
    setEqualHeight('.slick-feedback');
    setEqualHeight('.slick-img');
    setEqualHeight('.slick-blog');
    setEqualHeight('.slick-team');
});

// search
function showInputSearch() {
  document.querySelector('#search').classList.toggle('active-search');
  document.querySelector('#search .search-content').classList.remove('active-search');
}

function showSearchRps() {
  document.querySelector('#searchRps').classList.toggle('active-search');
  document.querySelector('#searchRps .search-content').classList.remove('active-search');
}

function showContentSearch(event, mobile = false, index = false) {
  event.preventDefault();
  const listDataContent = [
    {
      img: 'Image-6.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture'
    },
    {
      img: 'Image-6.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture'
    },
    {
      img: 'Image-6.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture'
    }
  ];
  let contentHTML = '';

  if (event.target.value != '') {
    if (mobile) {
      document.querySelector('#searchRps .search-content').classList.add('active-search');
    } else {
      document.querySelector('#search .search-content').classList.add('active-search');
    }
    const dataSearch = listDataContent.filter((item) => item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    if (dataSearch.length > 0) {
      if (index) {
        dataSearch.forEach((item) => {
          contentHTML += `
            <div class="item-search">
              <div class="image">
                  <a href="./pages/project.html"><img src="./assests/img/Project/${item.img}" alt=""></a>
              </div>
              <div class="name">
              <a href="./pages/project.html">
                  <span class="name-content">${item.name}</span>
                  <span class="category">${item.category}</span>
              </a>
              </div>
            </div>
          `
        });
      } else {
        dataSearch.forEach((item) => {
          contentHTML += `
            <div class="item-search">
              <div class="image">
                  <a href="./pages/project.html"><img src="../assests/img/Project/${item.img}" alt=""></a>
              </div>
              <div class="name">
              <a href="./pages/project.html">
                  <span class="name-content">${item.name}</span>
                  <span class="category">${item.category}</span>
              </a>
              </div>
            </div>
          `
        });
      }
    } else {
      contentHTML = '<span class="no-data">No Success Data...</span>';
    }
  } else {
    if (mobile) {
      document.querySelector('#searchRps .search-content').classList.remove('active-search');
    } else {
      document.querySelector('#search .search-content').classList.remove('active-search');
    }
  }

  if (mobile) {
    $("#searchRps .search-content").html(contentHTML);
  } else {
    $("#search .search-content").html(contentHTML);
  }
}
