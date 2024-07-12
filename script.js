// script.js

$(document).ready(function() {
    $('#start-btn').on('click', function() {
        $('#welcome-section').fadeOut(500, function() {
            $('#gallery-section').fadeIn(500);
        });
    });

    // Define image URLs for each category
    const images = {
        dinosaurs: [
            'https://img.freepik.com/premium-photo/realistic-photo-dinosaur-showing-its-teeth_933356-1539.jpg',
            'https://img.freepik.com/premium-photo/tyranosaurus-rex-dinosaur-angry_919579-196.jpg'
        ],
        vehicles: [
            'https://cdn.motor1.com/images/mgl/LmNNm/s4/the-real-jurassic-park-suvs-were-actually-toyota-land-cruisers.jpg',
            'https://www.collectjurassic.com/wp-content/uploads/2020/04/MV5-2048x2048.jpg'
        ],
        landscapes: [
            'https://pl.sterlingcdn.com/wp-content/uploads/sites/3/2018/09/JurassicPark.backgroundimage_v3-1024x747.jpg',
            'https://i.pinimg.com/originals/80/65/70/806570506108687c270ff8502c7d6479.jpg',
            'https://static.vecteezy.com/system/resources/previews/002/644/310/original/mountain-range-by-famous-kualoa-ranch-in-oahu-hawaii-its-landscape-was-featured-in-jurassic-park-free-photo.jpg'
        ],
        visitors: [
            'https://th.bing.com/th/id/OIP.t0UyGijZFfXQvzlHz5SSdAHaEK?rs=1&pid=ImgDetMain'
        ]
    };

    // Populate gallery with all images initially
    Object.keys(images).forEach(category => {
        images[category].forEach(url => {
            $('#gallery').append(`<div class="image" data-category="${category}"><img src="${url}" alt="${category}"></div>`);
        });
    });

    // Filter images by category
    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        let category = $(this).data('category');
        if (category === 'all') {
            $('.image').fadeIn();
        } else {
            $('.image').fadeOut(0);
            $('.image[data-category="' + category + '"]').fadeIn();
        }
    });

    // Lightbox functionality
    $('.image').on('click', function() {
        let imgSrc = $(this).find('img').attr('src');
        $('#lightbox .lightbox-img').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('#lightbox .close-btn').on('click', function() {
        $('#lightbox').fadeOut();
    });
});
