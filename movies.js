
$('#submit-btn').on('click', function(e){
    e.preventDefault();
    let movieTitle = $('#title-input').val();
    let movieRating = $('#rating-input').val();

    $('#movie-submissions').append(`<div class="d-grid user-reviews">
    <h3 class="movie">Movie: ${movieTitle}</h3>
    <h3 class="rating">Rating: ${movieRating}</h3>
    <button class="btn btn-danger button">Delete</button>
    </div>`)
})

$('#movie-submissions').on('click', 'button', function(){
    $(this).parent().remove()
})

