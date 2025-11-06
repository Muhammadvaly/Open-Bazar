// Sample data for listings
const sampleListings = [
    {
        id: 1,
        title: 'آپارتمان ۱۲۰ متری نوساز در پردیس',
        price: '۳,۲۰۰,۰۰۰,۰۰۰',
        city: 'تهران',
        category: 'property',
        image: 'https://picsum.photos/seed/property1/400/300',
        posted_at: '۲ ساعت پیش',
        status: 'available',
        featured: true,
        urgent: true,
        location: 'پردیس، فاز ۳',
        description: 'آپارتمان ۱۲۰ متری در پردیس فاز ۳، طبقه سوم، ۳ خواب، آشپزخانه اروپایی، پارکینگ، انباری، نوساز و آماده سکونت',
        phone: '۰۹۱۲۳۴۵۶۷۸۹',
        negotiable: false,
        exchange: false
    },
    {
        id: 2,
        title: 'پژو ۲۰۶ تیپ ۵ مدل ۹۶',
        price: '۱۸۰,۰۰۰,۰۰۰',
        city: 'مشهد',
        category: 'vehicle',
        image: 'https://picsum.photos/seed/vehicle1/400/300',
        posted_at: '۵ ساعت پیش',
        status: 'available',
        featured: false,
        urgent: false,
        location: 'مشهد، احمدآباد',
        description: 'پژو ۲۰۶ تیپ ۵ مدل ۹۶، رنگ مشکی، شرایط فنی عالی، کم کارکرد، لاستیک نو، بیمه سوماهه',
        phone: '۰۹۱۲۳۴۵۶۷۸۰',
        negotiable: true,
        exchange: true
    },
    {
        id: 3,
        title: 'آیفون ۱۳ پرو مکس ۲۵۶ گیگ',
        price: '۳۸,۰۰۰,۰۰۰',
        city: 'اصفهان',
        category: 'electronic',
        image: 'https://picsum.photos/seed/electronic1/400/300',
        posted_at: '۱ روز پیش',
        status: 'sold',
        featured: true,
        urgent: false,
        location: 'اصفهان، فلکه فلسطین',
        description: 'آیفون ۱۳ پرو مکس ۲۵۶ گیگ، رنگ آبی، گارانتی اپل، فابریک و سالم، کارکرده ۶ ماه',
        phone: '۰۹۱۲۳۴۵۶۷۸۱',
        negotiable: false,
        exchange: false
    },
    {
        id: 4,
        title: 'یخچال فریزر سامسونگ اینورتر',
        price: '۲۳,۰۰۰,۰۰۰',
        city: 'شیراز',
        category: 'home',
        image: 'https://picsum.photos/seed/home1/400/300',
        posted_at: '۶ ساعت پیش',
        status: 'available',
        featured: false,
        urgent: true,
        location: 'شیراز، قصردشت',
        description: 'یخچال فریزر دو قلو سامسونگ مدل ۲۰۲۳، اینورتر، ضد باکتری، گارانتی ۵ ساله، شرایط نو',
        phone: '۰۹۱۲۳۴۵۶۷۸۲',
        negotiable: true,
        exchange: false
    },
    {
        id: 5,
        title: 'منشی دفتر مهندسی',
        price: 'توافقی',
        city: 'تبریز',
        category: 'job',
        image: 'https://picsum.photos/seed/job1/400/300',
        posted_at: '۲ روز پیش',
        status: 'available',
        featured: true,
        urgent: false,
        location: 'تبریز، آزادی',
        description: 'استخدام منشی دفتر مهندسی، تسلط به Office، تایپ سریع، سابقه کار حداقل ۲ سال، حقوق توافقی',
        phone: '۰۹۱۲۳۴۵۶۷۸۳',
        negotiable: true,
        exchange: false
    },
    {
        id: 6,
        title: 'کامیونت مزدا مدل ۹۸',
        price: '۶۵۰,۰۰۰,۰۰۰',
        city: 'تهران',
        category: 'vehicle',
        image: 'https://picsum.photos/seed/vehicle2/400/300',
        posted_at: '۸ ساعت پیش',
        status: 'available',
        featured: false,
        urgent: false,
        location: 'تهران، شهرک غرب',
        description: 'کامیونت مزدا مدل ۹۸، دیزل، سالم، کم کارکرد، مناسب باربری، بیمه یکساله',
        phone: '۰۹۱۲۳۴۵۶۷۸۴',
        negotiable: true,
        exchange: true
    },
    {
        id: 7,
        title: 'لپ تاپ لنوو ایده پد ۳',
        price: '۱۲,۵۰۰,۰۰۰',
        city: 'مشهد',
        category: 'electronic',
        image: 'https://picsum.photos/seed/electronic2/400/300',
        posted_at: '۳ روز پیش',
        status: 'available',
        featured: false,
        urgent: false,
        location: 'مشهد، امامت',
        description: 'لپ تاپ لنوو ایده پد ۳، Core i5، رم ۸ گیگ، هارد ۲۵۶ گیگ SSD، کارکرده در شرایط عالی',
        phone: '۰۹۱۲۳۴۵۶۷۸۵',
        negotiable: true,
        exchange: false
    },
    {
        id: 8,
        title: 'مبل استیل ۷ نفره',
        price: '۴۵,۰۰۰,۰۰۰',
        city: 'اصفهان',
        category: 'home',
        image: 'https://picsum.photos/seed/home2/400/300',
        posted_at: '۴ روز پیش',
        status: 'available',
        featured: true,
        urgent: false,
        location: 'اصفهان، جی',
        description: 'مبل استیل ۷ نفره، چرم مصنوعی، رنگ مشکی، شرایط نو، تحویل فوری',
        phone: '۰۹۱۲۳۴۵۶۷۸۶',
        negotiable: false,
        exchange: true
    },
    {
        id: 9,
        title: 'مغازه تجاری در مرکز شهر',
        price: '۸,۵۰۰,۰۰۰,۰۰۰',
        city: 'شیراز',
        category: 'property',
        image: 'https://picsum.photos/seed/property2/400/300',
        posted_at: '۱ هفته پیش',
        status: 'available',
        featured: false,
        urgent: true,
        location: 'شیراز، زند',
        description: 'مغازه ۶۰ متری در مرکز شهر، موقعیت تجاری عالی، مناسب برای کلیه مشاغل، متراژ دقیق ۶۲ متر',
        phone: '۰۹۱۲۳۴۵۶۷۸۷',
        negotiable: true,
        exchange: false
    },
    {
        id: 10,
        title: 'راننده با خودرو شخصی',
        price: 'توافقی',
        city: 'تبریز',
        category: 'job',
        image: 'https://picsum.photos/seed/job2/400/300',
        posted_at: '۳ روز پیش',
        status: 'available',
        featured: false,
        urgent: false,
        location: 'تبریز، باغمیشه',
        description: 'استخدام راننده با خودرو شخصی، سابقه کار الزامی، گواهینامه پایه دوم، حقوق توافقی',
        phone: '۰۹۱۲۳۴۵۶۷۸۸',
        negotiable: true,
        exchange: false
    },
    {
        id: 11,
        title: 'پلی استیشن ۵ دیجیتال',
        price: '۲۱,۰۰۰,۰۰۰',
        city: 'تهران',
        category: 'electronic',
        image: 'https://picsum.photos/seed/electronic3/400/300',
        posted_at: '۱۲ ساعت پیش',
        status: 'available',
        featured: true,
        urgent: true,
        location: 'تهران، سعادت آباد',
        description: 'پلی استیشن ۵ نسخه دیجیتال، دو دسته، گارانتی رسمی، بازی‌های رایگان، شرایط نو',
        phone: '۰۹۱۲۳۴۵۶۷۹۰',
        negotiable: false,
        exchange: false
    },
    {
        id: 12,
        title: 'ویلا ۲۰۰ متری در کردان',
        price: '۱۲,۰۰۰,۰۰۰,۰۰۰',
        city: 'تهران',
        category: 'property',
        image: 'https://picsum.photos/seed/property3/400/300',
        posted_at: '۲ روز پیش',
        status: 'available',
        featured: true,
        urgent: false,
        location: 'کردان، فاز ۲',
        description: 'ویلا ۲۰۰ متری در کردان، ۴ خواب، استخر، جکوزی، زمین ۵۰۰ متری، مناسب ویلا سازی',
        phone: '۰۹۱۲۳۴۵۶۷۹۱',
        negotiable: true,
        exchange: false
    }
];

// App State
let currentPage = 1;
const listingsPerPage = 8;
let filteredListings = [...sampleListings];
let currentSort = 'newest';

// DOM Elements
const listingsGrid = document.getElementById('listingsGrid');
const featuredGrid = document.getElementById('featuredGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const cityFilter = document.getElementById('cityFilter');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const sortSelect = document.getElementById('sortSelect');
const applyFilters = document.getElementById('applyFilters');
const resetFilters = document.getElementById('resetFilters');
const addListingBtn = document.getElementById('addListingBtn');
const addListingModal = document.getElementById('addListingModal');
const listingDetailModal = document.getElementById('listingDetailModal');
const listingForm = document.getElementById('listingForm');
const cancelListing = document.getElementById('cancelListing');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadFeaturedListings();
    loadListings();
    initializeEventListeners();
    updatePagination();
}

// Event Listeners
function initializeEventListeners() {
    // Search
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });

    // Filters
    applyFilters.addEventListener('click', applyAllFilters);
    resetFilters.addEventListener('click', resetAllFilters);

    // Sort
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        sortListings();
        loadListings();
    });

    // Modals
    addListingBtn.addEventListener('click', openAddListingModal);
    cancelListing.addEventListener('click', closeAddListingModal);

    // Pagination
    prevPage.addEventListener('click', goToPrevPage);
    nextPage.addEventListener('click', goToNextPage);

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === addListingModal) {
            closeAddListingModal();
        }
        if (e.target === listingDetailModal) {
            closeListingDetailModal();
        }
    });

    // Close modals with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAddListingModal();
            closeListingDetailModal();
        }
    });
}

// Load Featured Listings
function loadFeaturedListings() {
    const featuredListings = sampleListings.filter(listing => listing.featured).slice(0, 4);

    featuredGrid.innerHTML = featuredListings.map(listing => `
        <div class="listing-card featured" data-id="${listing.id}">
            ${listing.urgent ? '<span class="card-badge urgent">فوری</span>' : '<span class="card-badge">ویژه</span>'}
            <div class="card-image">
                <img src="${listing.image}" alt="${listing.title}" loading="lazy">
                <div class="card-actions">
                    <button class="action-btn favorite-btn" onclick="toggleFavorite(${listing.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" onclick="shareListing(${listing.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${listing.title}</h3>
                <div class="card-meta">
                    <span>${listing.city}</span>
                    <span>${formatCategory(listing.category)}</span>
                </div>
                <div class="card-price">${listing.price} ${listing.price !== 'توافقی' ? 'تومان' : ''}</div>
                <div class="card-footer">
                    <span>${listing.posted_at}</span>
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${listing.location}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to featured listings
    document.querySelectorAll('#featuredGrid .listing-card').forEach(card => {
        card.addEventListener('click', function() {
            const listingId = parseInt(this.dataset.id);
            openListingDetailModal(listingId);
        });
    });
}

// Load All Listings
function loadListings() {
    const startIndex = (currentPage - 1) * listingsPerPage;
    const endIndex = startIndex + listingsPerPage;
    const paginatedListings = filteredListings.slice(startIndex, endIndex);

    if (paginatedListings.length === 0) {
        listingsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--gray);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>هیچ آگهی‌ای یافت نشد</h3>
                <p>لطفاً فیلترهای جستجو را تغییر دهید</p>
            </div>
        `;
        return;
    }

    listingsGrid.innerHTML = paginatedListings.map(listing => `
        <div class="listing-card" data-id="${listing.id}">
            ${listing.urgent ? '<span class="card-badge urgent">فوری</span>' : ''}
            <div class="card-image">
                <img src="${listing.image}" alt="${listing.title}" loading="lazy">
                <div class="card-actions">
                    <button class="action-btn favorite-btn" onclick="toggleFavorite(${listing.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" onclick="shareListing(${listing.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${listing.title}</h3>
                <div class="card-meta">
                    <span>${listing.city}</span>
                    <span>${formatCategory(listing.category)}</span>
                </div>
                <div class="card-price">${listing.price} ${listing.price !== 'توافقی' ? 'تومان' : ''}</div>
                <div class="card-footer">
                    <span>${listing.posted_at}</span>
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${listing.location}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to listings
    document.querySelectorAll('#listingsGrid .listing-card').forEach(card => {
        card.addEventListener('click', function() {
            const listingId = parseInt(this.dataset.id);
            openListingDetailModal(listingId);
        });
    });
}

// Search Functionality
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        filteredListings = [...sampleListings];
    } else {
        filteredListings = sampleListings.filter(listing =>
            listing.title.toLowerCase().includes(query) ||
            listing.description.toLowerCase().includes(query) ||
            listing.city.toLowerCase().includes(query) ||
            formatCategory(listing.category).toLowerCase().includes(query)
        );
    }

    currentPage = 1;
    sortListings();
    loadListings();
    updatePagination();

    if (query) {
        showToast(`${filteredListings.length} نتیجه برای "${query}" یافت شد`, 'success');
    }
}

// Filter Functionality
function applyAllFilters() {
    const category = categoryFilter.value;
    const city = cityFilter.value;
    const minPriceValue = minPrice.value;
    const maxPriceValue = maxPrice.value;
    const urgentOnly = document.querySelector('input[value="urgent"]').checked;
    const negotiableOnly = document.querySelector('input[value="negotiable"]').checked;
    const exchangeOnly = document.querySelector('input[value="exchange"]').checked;

    filteredListings = sampleListings.filter(listing => {
        let match = true;

        // Category filter
        if (category && listing.category !== category) match = false;

        // City filter
        if (city && listing.city !== getCityName(city)) match = false;

        // Price filter
        if (minPriceValue && listing.price !== 'توافقی' && parseInt(listing.price.replace(/,/g, '')) < parseInt(minPriceValue)) match = false;
        if (maxPriceValue && listing.price !== 'توافقی' && parseInt(listing.price.replace(/,/g, '')) > parseInt(maxPriceValue)) match = false;

        // Status filters
        if (urgentOnly && !listing.urgent) match = false;
        if (negotiableOnly && !listing.negotiable) match = false;
        if (exchangeOnly && !listing.exchange) match = false;

        return match;
    });

    currentPage = 1;
    sortListings();
    loadListings();
    updatePagination();

    showToast(`فیلترها اعمال شدند (${filteredListings.length} آگهی)`, 'success');
}

function resetAllFilters() {
    categoryFilter.value = '';
    cityFilter.value = '';
    minPrice.value = '';
    maxPrice.value = '';
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    filteredListings = [...sampleListings];
    currentPage = 1;
    sortListings();
    loadListings();
    updatePagination();

    showToast('فیلترها حذف شدند', 'success');
}

// Sort Functionality
function sortListings() {
    switch (currentSort) {
        case 'newest':
            // Already sorted by newest (based on ID for demo)
            break;
        case 'cheapest':
            filteredListings.sort((a, b) => {
                if (a.price === 'توافقی') return 1;
                if (b.price === 'توافقی') return -1;
                return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
            });
            break;
        case 'expensive':
            filteredListings.sort((a, b) => {
                if (a.price === 'توافقی') return 1;
                if (b.price === 'توافقی') return -1;
                return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
            });
            break;
        case 'popular':
            // Sort by featured and urgent status for demo
            filteredListings.sort((a, b) => {
                let aScore = (a.featured ? 2 : 0) + (a.urgent ? 1 : 0);
                let bScore = (b.featured ? 2 : 0) + (b.urgent ? 1 : 0);
                return bScore - aScore;
            });
            break;
    }
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

    // Update buttons state
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages || totalPages === 0;

    // Generate page numbers
    let pageNumbersHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbersHTML += `
            <div class="page-number ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
                ${i}
            </div>
        `;
    }

    pageNumbers.innerHTML = pageNumbersHTML;
}

function goToPage(page) {
    currentPage = page;
    loadListings();
    updatePagination();
    window.scrollTo({ top: listingsGrid.offsetTop - 100, behavior: 'smooth' });
}

function goToPrevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(filteredListings.length / listingsPerPage);
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// Modal Functions
function openAddListingModal() {
    addListingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddListingModal() {
    addListingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    listingForm.reset();
}

function openListingDetailModal(listingId) {
    const listing = sampleListings.find(l => l.id === listingId);
    if (!listing) return;

    const modalContent = document.getElementById('listingDetailContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${listing.title}</h2>
            <span class="close-modal" onclick="closeListingDetailModal()">&times;</span>
        </div>
        <div class="modal-body">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <div class="card-image" style="height: 300px; border-radius: var(--radius); overflow: hidden;">
                        <img src="${listing.image}" alt="${listing.title}" style="width: 100%; height: 100%; object-fit: cover;">
                        ${listing.urgent ? '<span class="card-badge urgent">فوری</span>' : ''}
                        ${listing.featured ? '<span class="card-badge">ویژه</span>' : ''}
                    </div>

                    <div style="margin-top: 20px;">
                        <h3 style="margin-bottom: 15px;">توضیحات</h3>
                        <p style="color: var(--gray); line-height: 1.8;">${listing.description}</p>
                    </div>
                </div>

                <div>
                    <div style="background: var(--dark); padding: 25px; border-radius: var(--radius); margin-bottom: 20px;">
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--secondary); margin-bottom: 20px;">
                            ${listing.price} ${listing.price !== 'توافقی' ? 'تومان' : ''}
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                            <div>
                                <div style="color: var(--gray); font-size: 0.9rem;">شهر</div>
                                <div style="font-weight: 500;">${listing.city}</div>
                            </div>
                            <div>
                                <div style="color: var(--gray); font-size: 0.9rem;">دسته‌بندی</div>
                                <div style="font-weight: 500;">${formatCategory(listing.category)}</div>
                            </div>
                            <div>
                                <div style="color: var(--gray); font-size: 0.9rem;">موقعیت</div>
                                <div style="font-weight: 500;">${listing.location}</div>
                            </div>
                            <div>
                                <div style="color: var(--gray); font-size: 0.9rem;">تاریخ انتشار</div>
                                <div style="font-weight: 500;">${listing.posted_at}</div>
                            </div>
                        </div>

                        ${listing.negotiable ? '<div style="color: var(--warning); margin-bottom: 10px;"><i class="fas fa-handshake"></i> قیمت توافقی</div>' : ''}
                        ${listing.exchange ? '<div style="color: var(--primary);"><i class="fas fa-exchange-alt"></i> قابل معاوضه</div>' : ''}
                    </div>

                    <div style="background: var(--dark); padding: 25px; border-radius: var(--radius);">
                        <h3 style="margin-bottom: 15px;">اطلاعات فروشنده</h3>
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <div style="width: 50px; height: 50px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-user" style="color: white;"></i>
                            </div>
                            <div>
                                <div style="font-weight: 500;">فروشنده</div>
                                <div style="color: var(--gray); font-size: 0.9rem;">عضویت از ۱۴۰۲</div>
                            </div>
                        </div>

                        <button class="btn-primary" style="width: 100%; margin-bottom: 10px;" onclick="contactSeller(${listing.id})">
                            <i class="fas fa-phone"></i>
                            نمایش شماره تماس
                        </button>
                        <button class="btn-secondary" style="width: 100%;" onclick="sendMessage(${listing.id})">
                            <i class="fas fa-comment"></i>
                            ارسال پیام
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    listingDetailModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeListingDetailModal() {
    listingDetailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form Handling
listingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        title: document.getElementById('listingTitle').value,
        category: document.getElementById('listingCategory').value,
        price: document.getElementById('listingPrice').value,
        description: document.getElementById('listingDescription').value,
        city: document.getElementById('listingCity').value,
        phone: document.getElementById('listingPhone').value
    };

    // Validate form
    if (!formData.title || !formData.category || !formData.price || !formData.city || !formData.phone) {
        showToast('لطفاً تمام فیلدهای ضروری را پر کنید', 'error');
        return;
    }

    // In a real app, you would send this data to a server
    console.log('New listing data:', formData);

    showToast('آگهی شما با موفقیت ثبت شد و پس از تایید نمایش داده خواهد شد', 'success');
    closeAddListingModal();
});

// Utility Functions
function formatCategory(category) {
    const categories = {
        'property': 'املاک',
        'vehicle': 'وسایل نقلیه',
        'electronic': 'کالای دیجیتال',
        'home': 'خانه و آشپزخانه',
        'service': 'خدمات',
        'job': 'استخدام'
    };
    return categories[category] || category;
}

function getCityName(key) {
    const cities = {
        'tehran': 'تهران',
        'mashhad': 'مشهد',
        'isfahan': 'اصفهان',
        'shiraz': 'شیراز',
        'tabriz': 'تبریز'
    };
    return cities[key] || key;
}

function toggleFavorite(listingId) {
    // In a real app, this would update user's favorites
    showToast('به علاقه‌مندی‌ها اضافه شد', 'success');
}

function shareListing(listingId) {
    const listing = sampleListings.find(l => l.id === listingId);
    const shareUrl = `${window.location.origin}?listing=${listingId}`;

    if (navigator.share) {
        navigator.share({
            title: listing.title,
            text: listing.description,
            url: shareUrl
        });
    } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast('لینک آگهی در کلیپ‌بورد کپی شد', 'success');
        });
    }
}

function contactSeller(listingId) {
    const listing = sampleListings.find(l => l.id === listingId);
    showToast(`شماره تماس: ${listing.phone}`, 'success');
}

function sendMessage(listingId) {
    showToast('سیستم پیام‌رسانی در حال توسعه است', 'success');
}

// Toast Notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// Handle URL parameters for direct listing access
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('listing');

    if (listingId) {
        openListingDetailModal(parseInt(listingId));
    }
}

// Initialize URL parameter handling
handleURLParams();