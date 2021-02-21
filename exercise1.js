//Number 1
document.readyState === 'complete' ? console.log('Lets get ready to party with JQuery!!') : console.log('Please wait!');

//Number 2
$('article img').addClass('image-center');

//Number 3
$('article p:last-child').remove();

//Number 4
$('#title').css('font-size', `${Math.random() * 100}px`);

//Number 5
$('ol').append('<li>This is my item!!</li>');

//Number 6
$('aside').empty().append('<p>Sorry for the silly list</p>');

//Number 7
$('.form-control').on('keyup keydown blur change', function() {
	let r = $('.form-control').eq(0).val();
	let g = $('.form-control').eq(1).val();
	let b = $('.form-control').eq(2).val();

	$('body').css('background-color', `rgb(${r},${g},${b})`);
});

//Number 8
$('body').on('click', 'img', function() {
	$(this).remove();
});
