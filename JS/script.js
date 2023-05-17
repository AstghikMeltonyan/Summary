const seeMoreBtn = document.querySelectorAll('.work-btn');
const closeBtn = document.querySelector('.close__btn');
const dropDownList = document.querySelector('.dropdown-list')

seeMoreBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    console.log(555);
    e.currentTarget.classList.toggle('active');
    // console.log(e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle('active'));
  })
})

closeBtn.addEventListener('click', function () {
  console.log(dropDownList);
  closeBtn.classList.add('active')
})


// seeMoreBtn.addEventListener('click', ()=> {
//   workContent.classList.toggle('active')
// })

// console.log(seeMoreBtn);
