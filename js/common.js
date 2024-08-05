// Room and Guest Qty
function initIncrementDecrement(context, outputSelector) {
  $(context + ' .minus').click(function () {
    var $input = $(this).parent().find('input');
    var $minusButton = $(this);
    var labelContent = $(this).parent().siblings('.tr-guest-type').find('label').text();
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    updateOutputElement($input, outputSelector, labelContent);
    updateTotalRoomGuest();
    if (count <= 1) {
      $minusButton.addClass('disabled');
    } else {
      $minusButton.removeClass('disabled');
    }
    return false;
  });
  $(context + ' .plus').click(function () {
    var $input = $(this).parent().find('input');
    var $minusButton = $(this).siblings('.minus');
    var labelContent = $(this).parent().siblings('.tr-guest-type').find('label').text();
    var count = parseInt($input.val()) + 1;
    $input.val(count);
    $input.change();
    updateOutputElement($input, outputSelector, labelContent);
    updateTotalRoomGuest();
    if (count > 1) {
      $minusButton.removeClass('disabled');
    }
    return false;
  });
}
function updateOutputElement($input, outputSelector, labelContent) {
  $(outputSelector).text(labelContent + ': ' + $input.val());
}
function updateTotalRoomGuest() {
  var totalRoomVal = $('#totalRoom').text();
  var totalAdultsGuestVal = $('#totalAdultsGuest').text();
  var totalChildrenGuestVal = $('#totalChildrenGuest').text();
  var totalChildrenInfantsVal = $('#totalChildrenInfants').text();
  if (totalRoomVal || totalAdultsGuestVal || totalChildrenGuestVal || totalChildrenInfantsVal) {
    var combinedVal = totalRoomVal + ' ' + totalAdultsGuestVal +' ' + totalChildrenGuestVal +' ' + totalChildrenInfantsVal;
    $('#totalRoomAndGuest').val(combinedVal);
  } else {
    $('#totalRoomAndGuest').val('');
  }
}
$(document).ready(function() {
  initIncrementDecrement('.tr-total-num-of-rooms', '#totalRoom');
  initIncrementDecrement('.tr-total-guest', '#totalAdultsGuest');
  initIncrementDecrement('.tr-total-children', '#totalChildrenGuest');
  initIncrementDecrement('.tr-total-infants', '#totalChildrenInfants');
  updateTotalRoomGuest();
});


// Header Form
var body = document.body;
var overLay = document.getElementById("overLay");
var btnClose = document.getElementById("btnClose");
// Recent Searchs Modal
var searchDestinationsInput = document.getElementById("searchDestinations");
var recentSearchsDestinationModal = document.getElementById("recentSearchsDestination");

var searchLocationInput = document.getElementById("searchLocation");
var recentSearchLocationModal = document.getElementById("recentSearchLocation");
// Calendars Modal
var calendarsModal = document.getElementById("calendarsModal");
var checkInBtn = document.getElementById("checkInInput1");
var checkOutBtn = document.getElementById("checkOutInput1");
// Who Guest - Qty Box
var guestQtyModal = document.getElementById("guestQtyModal");
var totalRoomAndGuesInput = document.getElementById("totalRoomAndGuest");

function searchFormControl() {
  body.classList.add("modal-open");
  overLay.style.display = "block";
  // For Explore
  searchDestinationsInput.onclick = function() {
    recentSearchsDestinationBox();
  }
  // For Hotel Search
  searchLocationInput.onclick = function() {
    recentSearchLocationBox();
  }
  checkInBtn.onclick = function() {
    topCalendarsBox();
  }
  checkOutBtn.onclick = function() {
    topCalendarsBox();
  }
  totalRoomAndGuesInput.onclick = function() {
    totalRoomAndGuestBox();
  }
}

function recentSearchLocationBox() {
  searchLocationInput.focus();
  searchLocationInput.classList.add("is-focus");
  recentSearchLocationModal.style.display = "block";
  recentSearchsDestinationModal.style.display = "none";
  guestQtyModal.style.display = "none";
  calendarsModal.style.display = "none";
  searchDestinationsInput.classList.remove("is-focus");
  checkInBtn.classList.remove("is-focus");
  checkOutBtn.classList.remove("is-focus");
  totalRoomAndGuesInput.classList.remove("is-focus");
  $(checkInBtn).parent().removeClass('tr-right-border');
}
function recentSearchsDestinationBox() {
  searchDestinationsInput.focus();
  searchDestinationsInput.classList.add("is-focus");
  recentSearchsDestinationModal.style.display = "block";
  calendarsModal.style.display = "none";
  guestQtyModal.style.display = "none";
  checkInBtn.classList.remove("is-focus");
  checkOutBtn.classList.remove("is-focus");
  totalRoomAndGuesInput.classList.remove("is-focus");
  $(checkInBtn).parent().removeClass('tr-right-border');
  searchLocationInput.classList.remove("is-focus");
  recentSearchLocationModal.style.display = "none";
}
function topCalendarsBox() {
  checkInBtn.focus();
  //checkOutBtn.focus();
  checkInBtn.classList.add("is-focus");
  checkOutBtn.classList.add("is-focus");
  calendarsModal.style.display = "flex";
  recentSearchsDestinationModal.style.display = "none";
  guestQtyModal.style.display = "none";
  searchDestinationsInput.classList.remove("is-focus");
  totalRoomAndGuesInput.classList.remove("is-focus");
  $(checkInBtn).parent().addClass('tr-right-border');
  searchLocationInput.classList.remove("is-focus");
  recentSearchLocationModal.style.display = "none";
}
function totalRoomAndGuestBox() {
  totalRoomAndGuesInput.focus();
  totalRoomAndGuesInput.classList.add("is-focus");
  guestQtyModal.style.display = "block";
  recentSearchsDestinationModal.style.display = "none";
  calendarsModal.style.display = "none";
  searchDestinationsInput.classList.remove("is-focus");
  checkInBtn.classList.remove("is-focus");
  checkOutBtn.classList.remove("is-focus");
  $(checkInBtn).parent().removeClass('tr-right-border');
  searchLocationInput.classList.remove("is-focus");
  recentSearchLocationModal.style.display = "none";
}
$(document).ready(function() {
  $('.tr-search-info-section .tr-serach-modal').click(function() {
    $(".tr-search-info-section").addClass('hide');
    $(".tr-nav-tabs").addClass('show');
    $(".tr-find-hotels").addClass('show');
    searchFormControl();
  });
  
  $('.tr-utility-nav .tr-location').click(function() {
    $(".tr-search-info-section").addClass('hide');
    $(".tr-nav-tabs").addClass('show');
    $(".tr-find-hotels").addClass('show');
    searchFormControl();
    recentSearchsDestinationBox();
  });

  $('.tr-utility-nav .tr-dates').click(function() {
    $(".tr-search-info-section").addClass('hide');
    $(".tr-nav-tabs").addClass('show');
    $(".tr-find-hotels").addClass('show');
    searchFormControl();
    topCalendarsBox();
  });

  $('.tr-utility-nav .tr-guest').click(function() {
    $(".tr-search-info-section").addClass('hide');
    $(".tr-nav-tabs").addClass('show');
    $(".tr-find-hotels").addClass('show');
    searchFormControl();
    totalRoomAndGuestBox();
  });
});



$('header .tr-nav-tabs div').on('click', function(){
  $("header .tr-nav-tabs div").removeClass('active');
  $(".tr-explore-and-hotel-form form.open").removeClass('open');
  $(this).addClass('active');
  var tab_id = $(this).attr('data-tab');
  $("#"+tab_id).addClass('open');
  searchFormControl();
});

function closeSearchForm() {
  $(".tr-search-info-section").removeClass('hide');
  $(".tr-nav-tabs").removeClass('show');
  $(".tr-find-hotels").removeClass('show');
  body.classList.remove("modal-open");
  overLay.style.display = "none";
  recentSearchsDestinationModal.style.display = "none";
  guestQtyModal.style.display = "none";
  calendarsModal.style.display = "none";
  searchDestinationsInput.classList.remove("is-focus");
  checkInBtn.classList.remove("is-focus");
  checkOutBtn.classList.remove("is-focus");
  totalRoomAndGuesInput.classList.remove("is-focus");
  $(checkInBtn).parent().removeClass('tr-right-border');
}
overLay.onclick = function() {
  closeSearchForm();
}
btnClose.onclick = function() {
  closeSearchForm();
}

$(document).ready(function() {
  $('form#exploreForm').submit(function(e) {
    e.preventDefault(); 
    var searchLocation = $('#searchLocation').val();
    //Should be deleted after validation
    $(".tr-search-info-section .tr-location").text(searchLocation);
    $(".tr-search-info-section .tr-dates").text('');
    $(".tr-search-info-section .tr-guest").text('');
    closeSearchForm();
  });

  $('form#hotelForm').submit(function(e) {
    e.preventDefault(); 
    var value1 = $('#searchDestinations').val();
    var value2 = $('#checkInInput1').val();
    var value3 = $('#checkOutInput1').val();
    var value4 = $('#totalRoomAndGuest').val();
    //Should be deleted after validation
    $(".tr-search-info-section .tr-location").text(value1);
    $(".tr-search-info-section .tr-dates").text(value2+ '-' +value3);
    $(".tr-search-info-section .tr-guest").text(value4);
    if (value1 || value2 || value3 || value4) {
      $('.tr-search-info-section').addClass("tr-search-deatils-filled");
    }
    closeSearchForm();
  });
});


// SignIn/SignOut Section
$(document).ready(function() {
  $('.tr-login-section .tr-logged').click(function() {
    if($(".tr-myaccount-modal").hasClass('open')){
      $(this).removeClass("active");
      $('.tr-myaccount-modal').removeClass("open");
    }
    else{
      $(this).addClass("active");
      $('.tr-myaccount-modal').addClass("open");
    }  
  });
});
$(document).on('click', function(event) {
  if (!$(event.target).closest('.tr-myaccount-modal, .tr-login-section .tr-logged').length) {
    $(".tr-login-section .tr-logged").removeClass("active");
    $('.tr-myaccount-modal').removeClass("open");
  }
});

// Share - Copy alert
$(document).ready(function() {
  $('.tr-share-option .tr-copy').click(function() {
    var currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(function() {
      $(".tr-copy-alert").addClass('open');
      setTimeout(function() {
         $(".tr-copy-alert").removeClass('open');
      }, 3000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
  });
});


// Mobile Navigation
$('.tr-hamburgers').on('click', function(){
  $(".tr-mobile-nav-section").addClass('open');
  $(body).addClass('modal-open');
}); 
$('.tr-mobile-nav-section').on('click', function(){
  if (!$(event.target).closest('.tr-mobile-nav-content').length) {
    $(".tr-mobile-nav-section").removeClass('open');
    $(body).removeClass('modal-open');
  }
});
$('.tr-mobile-nav-section .btn-nav-close').on('click', function(){
  $(".tr-mobile-nav-section").removeClass('open');
  $(body).removeClass('modal-open');
});


// Gallery Modal
$(document).on("click", ".tr-show-all-photos, .tr-hotel-galleries img", function(){
  $(".tr-gallery-popup").addClass("open");
  $(body).addClass("modal-open");
});
$(document).on("click", ".tr-gallery-popup .btn-close", function(){
   $(".tr-gallery-popup").removeClass("open");
   $(body).removeClass("modal-open");
});

$(document).ready(function() {
  $('.tr-gallery-popup .tr-galleries-section li').each(function(index) {
    $(this).attr('data-id', index + 0);
  });
  $('.tr-gallery-popup .tr-galleries-section li').click(function () {
    $(".tr-gallery-popup .tr-galleries-section img").each(function(index, value) { 
      let arrImg = [];
      i = 0;
      arrImg[i++] = $(this).attr('src');
      let arrAlt = [];
      j = 0;
      arrAlt[j++] = $(this).attr('alt');
      if (arrImg.length === arrAlt.length) {
        $.each(arrImg, function(index, value){
          var value2 = arrAlt[index];
          var count = $("#gallerySlider .carousel-inner").find(".carousel-item").length;
          $("#gallerySlider .carousel-inner").append('<div class="carousel-item" data-silde-id="'+ count +'"><img src="'+ value +'"  alt="'+ value2 +'"/><div class="image-alt-text">' + arrAlt + '</div></div>');
          $("#gallerySlider .carousel-indicators").append('<button type="button" data-bs-target="#gallerySlider" data-bs-slide-to="'+ count +'"></button>');
        });
      };
    });
    var clickThumb = $(this).attr('data-id');
    $('#gallerySlider .carousel-inner .carousel-item').each(function(index) {
      var sliderNumber = $(this).attr('data-silde-id');
      if (sliderNumber === clickThumb) {
        $(this).addClass('active');
      }
    });
    $('#gallerySlider .carousel-indicators button').each(function(index) {
      $(this).text(index + 1);
      var sliderBtn = $(this).attr('data-bs-slide-to');
      if (sliderBtn === clickThumb) {
        $(this).addClass('active');
      }
    });
    $("#gallerySlider .carousel-indicators").each(function() { 
      var num = $(this).find("button").length;
      $(this).append("<div class='slider-count'>/"  +num + "</div>");
    });
  });

  $("#gallerySliderModal .btn-close").click(function(){
    $("#gallerySlider .carousel-inner,#gallerySlider .carousel-indicators,#gallerySlider .carousel-indicators slider-count").empty();
  });
});


// Gallery Modal Sticky Tab
const galleryanchors = $('body').find('.tr-galleries-section');
$(".tr-gallery-popup").scroll(function(){
  var scrollTop = $(document).scrollTop();
  for (var i = 0; i < galleryanchors.length; i++){
    $('.tr-galleries-nav-tab li a[href="#' + $(galleryanchors[i]).attr('id') + '"]').removeClass('active');
  }
  for (var i = galleryanchors.length-1; i >= 0; i--){
    if (scrollTop > $(galleryanchors[i]).offset().top - 0) {
      $('.tr-galleries-nav-tab li a[href="#' + $(galleryanchors[i]).attr('id') + '"]').addClass('active');
      break;
    }
  }
});

// Sticky Tab - Hotel Info Tabs
// const hotelInfoTabs = document.getElementById('hotelInfoTabs');
// //const hotelInfoTabsOffset = hotelInfoTabs.offsetTop;
// const hotelInfoTabsHeight = hotelInfoTabs.offsetHeight;
// const overviewTab = document.getElementById('overviewTab');
// const overviewTabOffset = overviewTab.offsetTop;
// const headerTag = document.getElementsByTagName('header');
// const header = headerTag[0];
// const headerHeight = header.offsetHeight;
// function handleScroll() {
//   if (window.pageYOffset >= overviewTabOffset) {
//     $(hotelInfoTabs).addClass('sticky').css({"top": headerHeight,});
//     $(overviewTab).css({"padding-top": hotelInfoTabsHeight + 32,});
//   } else {
//     $(hotelInfoTabs).removeClass('sticky').css({"top": "auto",});
//     $(overviewTab).css({"padding-top": 32,});
//   }
// }
// window.onscroll = handleScroll;

////////////////////The below code ceate problem in the listing page
const hotelInfoTabs1 = document.getElementById('hotelInfoTabs1');
//const hotelInfoTabsOffset = hotelInfoTabs.offsetTop;
//const hotelInfoTabsHeight1 = hotelInfoTabs1.offsetHeight;
const hotelInfoTabs2 = document.getElementById('hotelInfoTabs2');
if (hotelInfoTabs2) {
  const hotelInfoTabs2Offset2 = hotelInfoTabs2.offsetTop;
}
const overviewTab = document.getElementById('overviewTab');
if (overviewTab) {
  const overviewTabOffset = overviewTab.offsetTop;
  function handleScroll() {
    if (window.pageYOffset >= overviewTabOffset ) {
      $(hotelInfoTabs1).addClass('sticky').css({"top": headerHeight,});
      $(".tr-hotel-info-tabs-2").css({"display": "none",});
    } else {
      $(hotelInfoTabs1).removeClass('sticky').css({"top": "auto",});
      $(".tr-hotel-info-tabs-2").css({"display": "block",});
    }
  }
}
const headerTag = document.getElementsByTagName('header');
const header = headerTag[0];
const headerHeight = header.offsetHeight;
window.onscroll = handleScroll;


// Sticky Tab - Like Overviews, Review, Location and etc..
// const anchors = $('body').find('.tr-tab-section');
// $('.tr-hotel-info-tabs li a').click(function(event) {
//   event.preventDefault(); // Prevent the default link action
//   const target = $(this).attr('href'); // Get the href value
//   if (target && target !== '#') {
//     $('html, body').animate({
//       scrollTop: $(target).offset().top - 200
//     }, 600);
//   }
// });
// $(window).scroll(function(){
//   var scrollTop = $(document).scrollTop();
//   for (var i = 0; i < anchors.length; i++){
//     $('.tr-hotel-info-tabs li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
//   }
//   for (var i = anchors.length-1; i >= 0; i--){
//     if (scrollTop > $(anchors[i]).offset().top - 200) {
//       $('.tr-hotel-info-tabs li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
//       break;
//     }
//   }
// });

const anchors = $('.tr-tab-section');
const tabs = $('.tr-hotel-info-tabs li a');
tabs.click(function(event) {
  event.preventDefault();
  const target = $(this).attr('href');
  if (target && target !== '#') {
    $('html, body').animate({ scrollTop: $(target).offset().top - 150 }, 100);
  }
});
$(window).scroll(function() {
  const scrollTop = $(document).scrollTop();
  tabs.removeClass('active');
  for (let i = anchors.length - 1; i >= 0; i--) {
    if (scrollTop > $(anchors[i]).offset().top - 150) {
      tabs.filter(`[href="#${$(anchors[i]).attr('id')}"]`).addClass('active');
      break;
    }
  }
});

// Things to Know -Overview Section
$(document).on("click", ".tr-things-know #moreButton", function(){
  $(".tr-things-know li").addClass('show');
  document.getElementById('moreButton').style.display = 'none';
  document.getElementById('lessButton').style.display = 'block';
});
$(document).on("click", ".tr-things-know #lessButton", function(){
  $(".tr-things-know li").removeClass('show');
  document.getElementById('moreButton').style.display = 'block';
  document.getElementById('lessButton').style.display = 'none';
});


// Room Section - Slider
$(document).ready(function() {
  $(".tr-hotel-deatils .tr-hotal-image .carousel-indicators").each(function() { 
    var num = $(this).find("button").length;
    $(this).append("<div class='slider-count'>/"  +num + "</div>");
  });
});


// Room Section - See More Hotels
$(document).on("click", ".tr-hotel-lists-first #firstShowMoreHotel", function(){
  $(".tr-hotel-lists-first .tr-hotel-deatils").addClass('show');
  document.getElementById('firstShowMoreHotel').style.display = 'none';
  document.getElementById('firstShowLessHotel').style.display = 'block';
});
$(document).on("click", ".tr-hotel-lists-first #firstShowLessHotel", function(){
  $(".tr-hotel-lists-first .tr-hotel-deatils").removeClass('show');
  document.getElementById('firstShowMoreHotel').style.display = 'block';
  document.getElementById('firstShowLessHotel').style.display = 'none';
});

$(document).on("click", ".tr-hotel-lists-second #secondShowMoreHotel", function(){
  $(".tr-hotel-lists-second .tr-hotel-deatils").addClass('show');
  document.getElementById('secondShowMoreHotel').style.display = 'none';
  document.getElementById('secondShowLessHotel').style.display = 'block';
});
$(document).on("click", ".tr-hotel-lists-second #secondShowLessHotel", function(){
  $(".tr-hotel-lists-second .tr-hotel-deatils").removeClass('show');
  document.getElementById('secondShowMoreHotel').style.display = 'block';
  document.getElementById('secondShowLessHotel').style.display = 'none';
});


// Write a Review - Jump to All Review
$(document).ready(function() {
  $('.tr-jump-to-all-review').on('click', function() {
    $('html,body').animate({ scrollTop: $(".tr-customer-reviews").offset().top - 160},'fast');
  });
});


// Write a Review - Like & Dislike Button
$(document).ready(function() {
  $('.tr-helpful .tr-like-button').click(function() {
    $(this).toggleClass('selected');
    $(this).parents('.tr-helpful').find(".tr-dislike-button").removeClass('selected');
  });
  $('.tr-helpful .tr-dislike-button').click(function() {
    $(this).toggleClass('selected');
    $(this).parents('.tr-helpful').find(".tr-like-button").removeClass('selected');
  });
});


// Review - Report
$('.tr-customer-details .tr-report-icon').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }else{
    $(".tr-customer-details .tr-report-icon").removeClass('active');
    $(this).addClass('active');
  }
}); 
$(document).on('click', function(event) {
  if (!$(event.target).closest('.tr-report-popup, .tr-customer-details .tr-report-icon').length) {
    $('.tr-customer-details .tr-report-icon').removeClass('active');
  }
});


// Date - Right Col
$('.tr-date-section .tr-room-guest').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }else{
    $(".tr-date-section .tr-room-guest").removeClass('active');
    $(this).addClass('active');
  }
});
$(document).on('click', function(event) {
  if (!$(event.target).closest('.tr-add-edit-guest-count, .tr-date-section .tr-room-guest').length) {
    $('.tr-date-section .tr-room-guest').removeClass('active');
  }
});


// Date Section - Right Col
$('.tr-date-section .tr-stay-date').on('click', function(){
  $('.tr-calenders-modal-2').addClass('open');
  setTimeout(function() {
  if($(".tr-calenders-modal-2").hasClass('open')){
      $('#checkInDate').focus();
    }
  }, 100);
});
// $('.tr-clear-details').on('click', function(){
//   $('.tr-calenders-modal-2 .tr-stay-date input').val('');
// });
$('.tr-calenders-modal-2 .tr-close-btn').on('click', function(){
  $('.tr-calenders-modal-2').removeClass('open');
});
function checkDatesAndCloseModal() {
  var checkInDate2 = $("#checkInInput2").val();
  var checkOutDate2 = $("#checkOutInput2").val();
  if (checkInDate2 && checkOutDate2) {
    $('.tr-calenders-modal-2').removeClass('open');
    $('#checkInSelectDate').val(checkInDate2).parent().addClass("tr-filled");
    $('#checkOutSelectDate').val(checkOutDate2).parent().addClass("tr-filled");
  }
}
$(document).on('click', function(event) {
  if($(".tr-calenders-modal-2").hasClass('open')){
    if (!$(event.target).closest('.tr-calenders-modal-2,.tr-date-section .tr-stay-date').length) {
      checkDatesAndCloseModal();
    }
  }
});


// Show More Deal - Right Col
$(document).on("click", ".tr-travel-sites #showMoreDeal", function(){
  $(".tr-travel-sites .tr-travel-site").addClass('show');
  document.getElementById('showMoreDeal').style.display = 'none';
  document.getElementById('showLessDeal').style.display = 'flex';
});
$(document).on("click", ".tr-travel-sites #showLessDeal", function(){
  $(".tr-travel-sites .tr-travel-site").removeClass('show');
  document.getElementById('showMoreDeal').style.display = 'flex';
  document.getElementById('showLessDeal').style.display = 'none';
});


// Write a Review - Right Col Desktop
$(document).on("click", ".tr-enjoyed-the-stay .tr-write-review", function(){
  $(".tr-write-review-modal").addClass("open");
  $(body).addClass('modal-open');
});
$(document).on("click", ".tr-write-review-modal.open h3", function(){
  $(".tr-write-review-modal").removeClass("open");
  $(body).removeClass('modal-open');
});

// Sticky Price Section
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 500) {
    $(".tr-price-fixed-section").addClass("open");
  }
  else{
    $(".tr-price-fixed-section").removeClass("open");
  }
});

// For Small Device
if(window.matchMedia('(max-width: 768px)').matches){
  $("header .tr-nav-tabs div").removeClass('active');
  $('header .tr-nav-tabs div').on('click', function(){
    // $("header .tr-nav-tabs div").removeClass('active');
    // $(".tr-explore-and-hotel-form form.open").removeClass('open');
    // $(this).addClass('active');
    $(".tr-find-hotels").addClass('show');
    // var tab_id = $(this).attr('data-tab');
    // $("#"+tab_id).addClass('open');
    // searchFormControl();
  });

  $(document).on("click", ".tr-mobile-where", function(e){
    //e.preventDefault(); 
    var parentFormFields = $(this).closest('.tr-form-fields'); 
    parentFormFields.find('.tr-form-where').addClass("show");
  });
  $(document).on("click", ".tr-form-where.show .tr-close-btn", function(){
    $(".tr-form-where").removeClass("show");
  });
  $('#searchLocation').on('keyup', function(e) {
    if (event.key === 'Enter') {
      var inputValue2 = $(this).val();
      $('.tr-explore-form .tr-location-label').text(inputValue2).addClass("tr-value-filled");
      $(".tr-explore-form .tr-form-where").removeClass("show");
    }
  });
  $('#searchDestinations').on('keyup', function(e) {
    if (event.key === 'Enter') {
      var inputValue1 = $(this).val();
      console.log(inputValue1);
      $('.tr-hotel-form .tr-location-label').text(inputValue1).addClass("tr-value-filled");
      $(".tr-hotel-form .tr-form-where").removeClass("show");
    }
  });
  
  $(document).ready(function() {
    $('.tr-mobile-when').click(function() {
      $(".tr-form-booking-date").addClass("open");
      setTimeout(function() {
        if($(".tr-form-booking-date").hasClass('open')){
          $('#checkInInput1').click();
          $('#checkInInput1').focus();
          $('.custom-calendar').show();
        }
      }, 100);
    });
  });
  $('.tr-form-booking-date button').click(function(e) {
    e.preventDefault();
    var checkInDate = $("#checkInInput1").val();
    var checkOutDate = $("#checkOutInput1").val();
    if (checkInDate && checkOutDate) {
      $('.tr-add-dates').html(checkInDate + '-' + checkOutDate);
    }
    $(".tr-form-booking-date").removeClass("open");
  });
  // When click on Edit button
  $('header .tr-edit-btn').on('click', function(){
    $(".tr-find-hotels").addClass('show');
    $(this).addClass('active');
    $(".tr-hotel-tab").addClass('active');
  });
  

  $(document).on("click", ".tr-faqs-section .tr-ask-a-ques", function(){
     $(".tr-faqs-section .tr-popup").addClass("open");
  });
  $(document).on("click", ".tr-faqs-section .tr-popup.open h3", function(){
     $(".tr-faqs-section .tr-popup").removeClass("open");
  });

  $(document).on("click", ".tr-enjoyed-the-stay .tr-write-review", function(){
    $(".tr-enjoyed-the-stay .tr-popup").addClass("open");
  });
  $(document).on("click", ".tr-enjoyed-the-stay .tr-popup.open h3", function(){
     $(".tr-enjoyed-the-stay .tr-popup").removeClass("open");
  });

  $(document).on("click", ".tr-room-section .tr-show-all", function(){
    $(this).parent().addClass('open');
    $(this).addClass('opened');
  });
  $(document).on("click", ".tr-room-section .tr-show-all.opened", function(){
     $(this).parent().removeClass('open');
     $(this).removeClass('opened');
  });

  $(document).on("click", ".tr-explore-section .tr-title", function(){
    $(this).addClass('open');
  });
  $(document).on("click", ".tr-explore-section .tr-title.open", function(){
    $(this).removeClass('open');
  });

  $(document).on("click", ".tr-review-section .tr-show-all", function(){
    $(".tr-review-section").addClass("open");
  });
  $(document).on("click", ".tr-review-section.open h3", function(){
    $(".tr-review-section").removeClass("open");
  });

  $(document).on("click", ".tr-facilities-section .tr-show-all", function(){
    $(".tr-facilities-lists.tr-desktop").addClass("open");
    var newPosition = $('.tr-facilities-lists.tr-desktop.open');
    $('body').append(newPosition);
  });
  $(document).on("click", ".tr-facilities-lists.tr-desktop.open h3", function(){
    $(".tr-facilities-lists.tr-desktop").removeClass("open");
    var oldPosition = $('.tr-facilities-lists.tr-desktop');
    $('.tr-facilities-details').append(oldPosition);
  });

  $(document).on("click", ".tr-house-rules .tr-show-more", function(){
    $(".tr-house-rules.tr-desktop").addClass("open");
  });
  $(document).on("click", ".tr-house-rules.tr-desktop.open h3", function(){
    $(".tr-house-rules.tr-desktop").removeClass("open");
  });
};

// Image Upload - Custom
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.tr-image-upload-wrap').hide();
      $('.tr-file-upload-image').attr('src', e.target.result);
      $('.tr-file-upload-content').show();
      //$('.image-title').html(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}
function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.tr-file-upload-content').hide();
  $('.tr-image-upload-wrap').show();
}
$('.tr-image-upload-wrap').bind('dragover', function () {
  $('.tr-image-upload-wrap').addClass('image-dropping');
});
$('.tr-image-upload-wrap').bind('dragleave', function () {
  $('.tr-image-upload-wrap').removeClass('image-dropping');
});

// Select Box - Custom
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// Listing Page Without date
// $('.tr-city-name').on('click', function() {
//   var $hotelLists = $(this).next('.tr-hotel-lists');

//   // Toggle the 'open' class on the clicked city's hotel lists
//   $hotelLists.toggleClass('open');
// });

// $('.tr-city-name').on('click', function() {
//     // Remove the 'open' class from all hotel lists
//     $('.tr-hotel-lists').removeClass('open');
    
//     // Add the 'open' class to the clicked city's hotel lists
//     $(this).next('.tr-hotel-lists').addClass('open');
//   });
$('.tr-city-wise-hotel-list .tr-city-name').on('click', function() {
  var hotelLists = $(this).next('.tr-hotel-lists');
  if (hotelLists.hasClass('open')) {
    hotelLists.removeClass('open');
  } else {
    $('.tr-hotel-lists').removeClass('open');
    hotelLists.addClass('open');
  }
});


const searchLocationInput3 = document.getElementById("searchLocation3");
if (searchLocationInput3) {
  searchLocationInput3.onclick = function() {
    recentSearchLocationBox3();
  }
}

const recentSearchsLocation3Modal = document.getElementById("recentSearchsLocation3");
// function searchFormControl3() {
//   // For Search Location
//   searchLocationInput3.onclick = function() {
//     alert("Yes");
//     recentSearchLocationBox3();
//   }
// }
function recentSearchLocationBox3() {
  searchLocationInput3.classList.add("is-focus");
  recentSearchsLocation3Modal.style.display = "block";
  calendarsModal3.style.display = "none";
  checkInInput3.classList.remove("is-focus");
  checkOutInput3.classList.remove("is-focus");

}

const checkInInput3 = document.getElementById("checkInInput3");
const checkOutInput3 = document.getElementById("checkOutInput3");
const calendarsModal3 = document.getElementById("calendarsModal3");
if (checkInInput3 && checkOutInput3) {
  checkInInput3.onclick = function() {
    calendarsBox3();
  }
  checkOutInput3.onclick = function() {
    calendarsBox3();
  }
  function calendarsBox3() {
    calendarsModal3.style.display = "flex";
    checkInInput3.classList.add("is-focus");
    checkOutInput3.classList.add("is-focus");
    searchLocationInput3.classList.remove("is-focus");
    recentSearchsLocation3Modal.style.display = "none";
  }
}

// const totalRoomGuest = document.getElementById("totalRoomAndGuest3");
// if (totalRoomGuest) {
//   totalRoomGuest.onclick = function() {

//   }
// }


$(document).on('click', function(event) {
  if($("#recentSearchsLocation3").css('display') === 'block') {
    if (!$(event.target).closest("#searchLocation3, #recentSearchsLocation3").length) {
      calendarsModal3.style.display = "none";
      recentSearchsLocation3Modal.style.display = "none";
      checkInInput3.classList.remove("is-focus");
      checkOutInput3.classList.remove("is-focus");
    }
  }
  if($("#calendarsModal3").css('display') === 'flex') {
    if (!$(event.target).closest("#calendarsModal3, #checkInInput3, #checkOutInput3").length) {
      calendarsModal3.style.display = "none";
      recentSearchsLocation3Modal.style.display = "none";
      checkInInput3.classList.remove("is-focus");
      checkOutInput3.classList.remove("is-focus");
    }
  }
});

// For Small Device
if(window.matchMedia('(max-width: 768px)').matches){
  $(document).on("click", ".tr-mobile-where", function(e){
    //e.preventDefault(); 
    var parentFormFields = $(this).closest('.tr-form-fields'); 
    parentFormFields.find('.tr-form-where').addClass("show");
  });
  $(document).on("click", ".tr-form-where.show .tr-close-btn", function(){
    $(".tr-form-where").removeClass("show");
  });

  $('.tr-form-where .tr-btn').click(function() {
    // Get the value of the input field within the closest .tr-form-where container
    var searchDestinationsInputVal = $(this).closest('.tr-form-where').find('input').val();
    // Check if the value is retrieved correctly
    if (searchDestinationsInputVal) {
      // Update another element and add a class if searchDestinationsInputVal is not empty
      $(this).closest(".tr-form-fields").find(".tr-location-label").text(searchDestinationsInputVal).addClass("tr-value-filled");
    }
    $(".tr-hotel-form .tr-form-where").removeClass("show");
  });
  
  $('#searchLocation3').on('keyup', function(e) {
    if (event.key === 'Enter') {
      var searchDestinationsInputVal = $(this).val();
      console.log(searchDestinationsInputVal);
      $('#hotelForm3 .tr-location-label').text(searchDestinationsInputVal).addClass("tr-value-filled");
      $("#hotelForm3 .tr-form-where").removeClass("show");
    }
  });
  
  $(document).ready(function() {
    $('.tr-mobile-when').click(function() {
      $(".tr-form-booking-date").addClass("open");
      setTimeout(function() {
        if($(".tr-form-booking-date").hasClass('open')){
          $('#checkInInput3').click();
          $('#checkInInput3').focus();
          $('.custom-calendar').show();
        }
      }, 100);
    });
  });

  // $('.tr-form-booking-date button').click(function(e) {
  //   e.preventDefault();
  //   var checkInDate3 = $(".checkIn").val();
  //   var checkOutDate3 = $(".checkOut").val();
  //   if (checkInDate3 && checkOutDate3) {
  //     e.preventDefault();
  //     $(this).closest(".tr-form-fields").find(".tr-add-dates").addClass("==========").html(checkInDate3 + '-' + checkOutDate3);
  //   }
  //   $(".tr-form-booking-date").removeClass("open");
  // });

  $('.tr-form-booking-date button').click(function(e) {
    e.preventDefault();
    // Get the check-in and check-out dates
    // Get the check-in and check-out dates using class selectors
    var parentContainer = $(this).closest('.tr-form-booking-date');
    // Select the .checkIn and .checkOut elements within this parent container
    var checkInDate3 = parentContainer.find(".checkIn").val();
    var checkOutDate3 = parentContainer.find(".checkOut").val();
    
    if (checkInDate3 && checkOutDate3) {
      // Prevent the default action of the button
      e.preventDefault();
      // Find the closest '.tr-form-fields' ancestor and the '.tr-add-dates' child
      $(this).closest(".tr-form-fields").find(".tr-add-dates").html(checkInDate3 + ' - ' + checkOutDate3);
    }
        $(".tr-form-booking-date").removeClass("open");
  });



  // Room And guest
  document.addEventListener('DOMContentLoaded', function () {
    var totalRoomGuest = document.querySelectorAll('.tr-total-room-and-guest');
    totalRoomGuest.forEach(function (inputField) {
      inputField.addEventListener('click', function () {
        // Get the next sibling element
        var guestsModal = inputField.nextElementSibling;

        // Check if the next sibling exists and has the class 'tr-guests-modal'
        if (guestsModal && guestsModal.classList.contains('tr-guests-modal')) {
          // Add the 'open' class to the guests modal
          guestsModal.style.display = "block";
        } 
      });
    });
  });
};