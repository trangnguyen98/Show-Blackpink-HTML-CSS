 // modal buy tickets
 const buyBtns = document.querySelectorAll('.js-buy-tickets');
 const modal = document.querySelector('.js-modal');
 const modalClose = document.querySelector('.js-modal-close');
 const modalContainer = document.querySelector('.js-modal-container');

 function showBuyTickets() {
     modal.classList.add('open');
 }

 function hideBuyTickets() {
     modal.classList.remove('open');
 }

 for (const buyBtn of buyBtns) {
     buyBtn.addEventListener('click', showBuyTickets);
 }

 modalClose.addEventListener('click', hideBuyTickets);

 modal.addEventListener('click', hideBuyTickets);

 modalContainer.addEventListener('click', function (event) {
     event.stopPropagation()
 })

 // mobile
 var header = document.getElementById('header');
 var mobileMenu = document.getElementById('mobile-menu');
 var headerHeight = header.clientHeight;

 // đóng mở mobile menu
 mobileMenu.onclick = function () {
     // console.log(header.clientHeight); // 46
     var isClosed = header.clientHeight === headerHeight;
     if (isClosed) {
         header.style.height = 'auto'; // khi menu đang đóng mà ấn mở menu thì set height tự động
         // thêm style="height: auto" vào thẻ header ( do đây là inline css nên ưu tiên hơn thằng height viết ở file css ngoài tức external"
     } else {
         header.style.height = null; // lấy height lúc đầu ở header là 46px
     }
 }

 // tự động đóng khi chọn menu
 var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
 for (var i = 0; i < menuItems.length; i++) {
     var menuItem = menuItems[i];

     menuItem.onclick = function () {
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'); // .contains kiểm tra xem trong classlits có tồn tại class cần tìm k
         if (isParentMenu) {
             event.preventDefault(); //bỏ qua hành vi mặc định là khi ấn vào more sẽ chuyển về trang chủ
         } else {
             header.style.height = null;
         }
     }
 }