document.addEventListener('DOMContentLoaded', ()=>{
    //fetch movies
    fetch('http://localhost:3000/movies')
    .then(r=>r.json())
    .then(movies=>{
        //load movie list
        movies.forEach((indivMovie)=>{
            const movieList = document.querySelector('#movie-list')
            const img = document.createElement('img')
            img.src = indivMovie.image
            movieList.appendChild(img)
            //event listener for movie list
            img.addEventListener('click', ()=>{
                loadDetails(indivMovie)
            })
        })
        //load movie details
        function loadDetails(movie){
            const detailsTitle = document.getElementById('title')
            const detailsYear = document.getElementById('year-released')
            const detailsDescrip = document.getElementById('description')
            const detailsImg = document.getElementById('detail-image')
            const detailsBlood = document.getElementById('amount')
            const watchedButton = document.getElementById('watched')
            detailsTitle.textContent = movie.title
            detailsYear.textContent = movie.release_year
            detailsDescrip.textContent = movie.description
            detailsImg.src = movie.image
            detailsBlood.textContent = movie.blood_amount
            if (movie.watched===true){
                watchedButton.textContent = "Watched"
            } else{
                watchedButton.textContent = "Unwatched"
            }
            featuredMovie=movie
        }
        let featuredMovie
        loadDetails(movies[0])
        //watch button
        const watchedButton = document.getElementById('watched')
        watchedButton.addEventListener('click', ()=>{
            featuredMovie.watched = !featuredMovie.watched
            loadDetails(featuredMovie)
        })
        //bloodform
        const bloodForm = document.getElementById('blood-form')
        bloodForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            featuredMovie.blood_amount += parseInt(e.target['blood-amount'].value)
            loadDetails(featuredMovie)
        })





    })
})