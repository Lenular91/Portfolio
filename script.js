const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
const backProfileBtn = document.querySelector('.back-profile');
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

const isMobile = window.innerWidth <= 768; // Check if it's a mobile screen

if (!isMobile) {
    // Existing desktop functionality
    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500)
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500)
            }
        }
    })

    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        })
    }

    let totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex() {
        pageNumber--;
        if (pageNumber < 0) {
            pageNumber = totalPages - 1;
        }
    }

    backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].classList.remove('turn');            

                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
                }, 500)

            }, (index + 1) * 200 + 100)
        })
    }

    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100)

    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800)

    setTimeout(() => {
        pageLeft.style.zIndex = 20;
    }, 3200)

    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');            

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 2100)
    })
} else {
    // Mobile functionality
    pageTurnBtn.forEach(btn => btn.style.display = 'none');
    backProfileBtn.style.display = 'none';
    coverRight.style.display = 'none';
    
    pages.forEach(page => {
        page.style.position = 'static';
        page.style.transform = 'none';
        page.style.width = '100%';
        page.style.height = 'auto';
        page.style.overflow = 'visible';
    });

    contactMeBtn.onclick = () => {
        const contactPage = document.querySelector('#contact');
        contactPage.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add resize listener to handle orientation changes
window.addEventListener('resize', () => {
    location.reload();
});