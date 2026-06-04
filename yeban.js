let heroInterval = null;
let isAdminMode = false; 
// Toggle between Admin and Guest modes
function toggleMode() {
    if (isAdminMode) {
      
        isAdminMode = false;
        document.body.classList.remove('admin-mode');
        document.body.classList.add('guest-mode');
        
    
        const addMovieBtn = document.getElementById('openAddMovieModal');
        const clearRatingsBtn = document.getElementById('clearRatingsBtn');
        const deleteMovieBtn = document.getElementById('deleteMovieBtn');
        
        if (addMovieBtn) addMovieBtn.style.display = 'none';
        if (clearRatingsBtn) clearRatingsBtn.style.display = 'none';
        if (deleteMovieBtn) deleteMovieBtn.style.display = 'none';
        
        showToast('👤 Guest Mode - Browse only');
    } else {
   
        isAdminMode = true;
        document.body.classList.remove('guest-mode');
        document.body.classList.add('admin-mode');
        
        
        const addMovieBtn = document.getElementById('openAddMovieModal');
        const clearRatingsBtn = document.getElementById('clearRatingsBtn');
        const deleteMovieBtn = document.getElementById('deleteMovieBtn');
        
        if (addMovieBtn) addMovieBtn.style.display = 'flex';
        if (clearRatingsBtn) clearRatingsBtn.style.display = 'block';
        if (deleteMovieBtn) deleteMovieBtn.style.display = 'block';
        
        showToast('🔒 Admin Mode - Full access');
    }
}
// MOVIES
let movies = [
    {
        id: '1',
        title: 'Inception',
        year: 2010,
        genre: 'Sci-Fi',
        poster: 'https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/2ssWTSVklAEc98frZUQhgtGHx7s.jpg',
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO\'s mind.',
        trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0&pp=ygURaW5jZXB0aW9uIHRyYWlsZXI%3D',
        yourRating: null,
        comment: null,
        ratedAt: null
    },
    {
        id: '2',
        title: 'The Dark Knight',
        year: 2008,
        genre: 'Action',
        poster: 'https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.',
        trailerUrl: 'https://youtu.be/EXeTwQWrcwY?si=FropYVFiPKp2IYWe',
        yourRating: null,
        comment: null,
        ratedAt: null
    },
    {
        id: '3',
        title: 'Interstellar',
        year: 2014,
        genre: 'Sci-Fi',
        poster: 'https://image.tmdb.org/t/p/w1280/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/2ssWTSVklAEc98frZUQhgtGHx7s.jpg',
        description: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.',
        trailerUrl: 'https://youtu.be/zSWdZVtXT7E?si=oWgwyTIS9VnV82pK',
        yourRating: null,
        comment: null,
        ratedAt: null
    },
    {
        id: '4',
        title: 'John Wick',
        year: 2014,
        genre: 'Action',
        poster: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/ff2ti5DkA9UYLzyqhQfI2kZqEuh.jpg',
        description: 'An ex-hitman comes out of retirement to track down the gangsters who killed his dog.',
        trailerUrl: 'https://www.youtube.com/watch?v=C0BMx-qxsP4&pp=ygURam9obiB3aWNrIHRyYWlsZXLSBwkJBAsBhyohjO8%3D',
        comment: null,
        ratedAt: null,
        yourRating: null,
    },
    {
        id: '5',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2002,
        genre: 'Fantasy',
        poster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/a0lfia8tk8ifkrve0Tn8wkISUvs.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/a0lfia8tk8ifkrve0Tn8wkISUvs.jpg',
        description: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. .',
        yourRating: null,
        trailerUrl: 'https://youtu.be/V75dMMIW2B4?si=oWCIDZT2-QuAi0H3',
        comment: null,
        ratedAt: null
    },
    {
        id: '6',
        title: 'The Lord of the Rings: The two towers',
        year: 2002,
        genre: 'Fantasy',
        poster: 'https://image.tmdb.org/t/p/w1280/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg',
        description: 'follows Frodo and Sam as they journey toward Mordor with Gollum, while Aragorn and his allies defend Rohan against Saruman\'s powerful army in the growing war for Middle-earth.',
        yourRating: null,
        trailerUrl: 'https://youtu.be/LbfMDwc4azU?si=Zz1xmTAfKScOeox3',
        comment: null,
        ratedAt: null
    },
    {
        id: '7',
        title: 'The Lord of the Rings: The Return of the King',
        year: 2004,
        genre: 'Fantasy',
        poster: 'https://image.tmdb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 
        yourRating: null,
        trailerUrl: 'https://youtu.be/r5X-hFf6Bwo?si=JjwC-SNpIDxQq0JP',
        comment: null,
        ratedAt: null
    },
    {
        id: '8',
        title: 'Mad Max: Fury Road',
        year: 2015,
        genre: 'Action',
        poster: 'https://image.tmdb.org/t/p/w1280/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/uT895WNwm0aIJRtGizcQhrejWUo.jpg',
        description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.',
        yourRating: null,
        trailerUrl: 'https://www.youtube.com/watch?v=hEJnMQG9ev8&pp=ygUZbWFkIG1heCBmdXJ5IHJvYWQgdHJhaWxlcg%3D%3D',
        comment: null,
        ratedAt: null
    },
    {
        id: '9',
        title: 'Parasite',
        year: 2019,
        genre: 'Thriller',
        poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
        description: 'A poor family schemes to become employed by a wealthy family and infiltrate their household.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://www.youtube.com/watch?v=isOGD_7hNIY&pp=ygUQcGFyYXNpdGUgdHJhaWxlctIHCQkECwGHKiGM7w%3D%3D'
    },
    {
        id: '10',
        title: 'Swiss Army Man',
        year: 2015,
        genre: 'Comedy',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/8pxn8CQ6SD6tly75lrKw08wfZKv.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w533_and_h300_face/xo6Sedrdj4DVnh4ZEzDM4D0QQYU.jpg',
        description: 'A young man is stranded on a deserted island with a dead body and must find a way to survive.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/yrK1f4TsQfM?si=LQJwQ2YIBc95WXfe'
    },
    {
        id: '11',
        title: 'snowpiercer',
        year: 2013,
        genre: 'Sci-Fi',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w533_and_h300_face/tBIRtMCELcA5PxO7z7OiuCHJdFO.jpg',
        description: 'A group of people survive on a massive train that circles the globe.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/nX5PwfEMBM0?si=C5PPSaKwHjzCMOl7'
    },
    {
        id: '12',
        title: 'The Grand Budapest Hotel',  
        year: 2014,
        genre: 'Comedy',
        poster: 'https://image.tmdb.org/t/p/w1280/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/9udCLTxTFl28RxnK8Q05E154ZGa.jpg',
        description: 'A concierge teams up with one of his employees to prove his innocence after he is framed for murder.',    
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/1Fg5iWmQjwk?si=VJCQe1yQLS8Z9KDy'
    }, 
    {
        id: '13',
        title: 'Legend of the Guardians: The Owls of Ga\'hoole',
        year: 2010,
        genre: 'Animation',
        poster: 'https://image.tmdb.org/t/p/w1280/qweKCtPdnIP2uGp1PgWZyCV7gzj.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/s1aCCFPCRl4Zw2EBHLGK1dAHs1L.jpg',
        description: 'A young owl learns about his destiny and the threat of a dark force.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/0c5gYg3adeI?si=E0K-fpIVGSZpe9yL'
    },
    {
        id: '14',
        title: 'SE7EN',
        year: 1995,
        genre: 'Thriller',
        poster: 'https://image.tmdb.org/t/p/w1280/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg',
        description: 'A pair of detectives investigate a series of murders that are connected to the seven deadly sins.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/vr3UZ-axauU?si=t5cqaEdtCqfdaAbh'
    },
    {
        id: '15',
        title: 'Sharknado',
        year: 2013,
        genre: 'Action',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_face/atEmHkVFTSGRYt2PeCiziQqbZnI.jpg',
        heroPoster: 'https://media.themoviedb.org/t/p/w533_and_h300_face/riGVdQS9gXy38VoSaXXBhmR6A4h.jpg',
        description: 'A group of people are caught in a shark-infested tornado. REQUEST NI SUMIT',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: 'https://youtu.be/M-pXDoe5a0E?si=fTaK2BKyrLf3g621'
    }

    
];


let currentNav = 'home';
let searchTerm = '';
let currentGenre = 'all';
let currentMovie = null;


function loadData() {
    const stored = localStorage.getItem('my_movie_ratings');
    if (stored) {
        movies = JSON.parse(stored);
    } else {
        saveData();
    }
}

function saveData() {
    localStorage.setItem('my_movie_ratings', JSON.stringify(movies));
}



// Rate a movie 
function rateMovie(movieId, score) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        movie.yourRating = score;
        movie.ratedAt = new Date().toISOString();
        saveData();
        renderAllMovies();
        
      
        if (currentMovie && currentMovie.id === movieId) {
            currentMovie = movie;
            updateMovieDetailModal();
        }
        
        showToast(`⭐ You rated "${movie.title}" ${score}/10!`);
    }
}

// Clear ratings and comment for current movie
function clearRatingsAndComment() {
    if (!currentMovie) return;
    
    if (confirm(`Are you sure you want to clear your rating and review for "${currentMovie.title}"?`)) {
        currentMovie.yourRating = null;
        currentMovie.ratedAt = null;
        currentMovie.comment = null;
        
        saveData();
        renderAllMovies();
        updateMovieDetailModal();
        closeMovieDetailModal();  
        showToast(`🗑️ Rating and review cleared for "${currentMovie.title}"!`);
    }
}
// Delete entire movie from collection
function deleteMovieFromCollection() {
    if (!currentMovie) return;
    
    if (confirm(`⚠️ Are you sure you want to permanently delete "${currentMovie.title}" from your collection?\n\nThis action cannot be undone.`)) {
       
        movies = movies.filter(m => m.id !== currentMovie.id);
        
        saveData();
        renderAllMovies();
        updateHero();
        closeMovieDetailModal();
        
        showToast(`🗑️ "${currentMovie.title}" has been deleted from your collection!`);
    }
}

// Modified addCommentFromModal 
function addCommentFromModal() {
    const commentInput = document.getElementById('commentInput');
    
    if (!commentInput) return;
    
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        showToast('💬 Please enter your review!');
        return;
    }
    
    if (addComment(currentMovie.id, commentText, null)) {
        commentInput.value = '';
        closeMovieDetailModal(); 
        showToast(`💬 Your review has been saved!`);
    }
}
// Add comment to movie 
function addComment(movieId, commentText, rating) {
    const movie = movies.find(m => m.id === movieId);
    if (movie && commentText.trim()) {
       
        movie.comment = {
            text: commentText.trim(),
            rating: rating,
            date: new Date().toLocaleDateString(),
            timestamp: new Date().getTime()
        };

        saveData();
        renderAllMovies();

        if (currentMovie && currentMovie.id === movieId) {
            currentMovie = movie;
            updateMovieDetailModal();
        }

        showToast(`💬 Your review for "${movie.title}" has been saved!`);
        return true;
    }
    return false;
}


// Create movie card 
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    
    const yourRating = movie.yourRating;
    
    card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" 
             onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
        <div class="movie-info">
            <div class="movie-title">${escapeHtml(movie.title)}</div>
            <div class="movie-year">${movie.year}</div>
            <div class="genre-badge">${escapeHtml(movie.genre)}</div>
            <div class="your-rating">
                ${yourRating ? 
                    `<i class="fas fa-star" style="color: #ffc107;"></i>
                     <span style="color: #ffc107; font-weight: bold;">${yourRating}/10</span>
                     <span style="color: #888; font-size: 11px;">Your rating</span>` : 
                    `<span style="color: #888; font-size: 12px;"><i class="far fa-star"></i> Not rated yet</span>`
                }
            </div>
            <div class="hover-preview">
                <i class="fas fa-info-circle"></i> ${escapeHtml(movie.description.substring(0, 70))}${movie.description.length > 70 ? '...' : ''}
            </div>
        </div>
    `;
    
  
    card.addEventListener('click', (e) => {

        if (!e.target.closest('.delete-movie-btn')) {
            openMovieDetailModal(movie);
        }
    });
    
    return card;
}

// Open movie detail modal
function openMovieDetailModal(movie) {
    currentMovie = movie;
    const modal = document.getElementById('movieDetailModal');
    if (modal) {
        updateMovieDetailModal();
        modal.style.display = 'flex';
        
        if (!isAdminMode) {
            const stars = document.querySelectorAll('#modalStarSelector i');
            const commentInput = document.getElementById('commentInput');
            const addCommentBtn = document.getElementById('addCommentBtn');
            const clearRatingsBtn = document.getElementById('clearRatingsBtn');
            const ratingSection = document.querySelector('#movieDetailModal .rating-section');
                 
            stars.forEach(star => {
                star.style.cursor = 'not-allowed';
                star.style.opacity = '0.4';
                star.style.pointerEvents = 'none';
            });
            
          
            if (commentInput) {
                commentInput.disabled = true;
                commentInput.placeholder = '👁️ Guest Mode - View only. Switch to Admin to rate and review.';
                commentInput.style.opacity = '0.5';
                commentInput.style.cursor = 'not-allowed';
            }
            if (addCommentBtn) {
                addCommentBtn.disabled = true;
                addCommentBtn.style.opacity = '0.5';
                addCommentBtn.style.cursor = 'not-allowed';
            }
            
           
            if (clearRatingsBtn) {
                clearRatingsBtn.style.display = 'none';
            }
            
           
            if (ratingSection) {
                const viewOnlyBadge = document.createElement('div');
                viewOnlyBadge.className = 'view-only-badge';
                viewOnlyBadge.innerHTML = '👁️ View Only Mode';
                viewOnlyBadge.style.cssText = 'background: #333; color: #ffc107; padding: 5px 10px; border-radius: 20px; font-size: 12px; text-align: center; margin-top: 10px;';
                if (!document.querySelector('.view-only-badge')) {
                    ratingSection.appendChild(viewOnlyBadge);
                }
            }
        } else {
            const stars = document.querySelectorAll('#modalStarSelector i');
            const commentInput = document.getElementById('commentInput');
            const addCommentBtn = document.getElementById('addCommentBtn');
            const clearRatingsBtn = document.getElementById('clearRatingsBtn');
            const viewOnlyBadge = document.querySelector('.view-only-badge');
            
            stars.forEach(star => {
                star.style.cursor = 'pointer';
                star.style.opacity = '1';
                star.style.pointerEvents = 'auto';
            });
            
            if (commentInput) {
                commentInput.disabled = false;
                commentInput.placeholder = 'Write your review...';
                commentInput.style.opacity = '1';
                commentInput.style.cursor = 'text';
            }
            if (addCommentBtn) {
                addCommentBtn.disabled = false;
                addCommentBtn.style.opacity = '1';
                addCommentBtn.style.cursor = 'pointer';
            }
            
            if (clearRatingsBtn) {
                clearRatingsBtn.style.display = 'block';
            }
            

            if (viewOnlyBadge) {
                viewOnlyBadge.remove();
            }
        }
    }
}
// Update movie detail modal content
function updateMovieDetailModal() {
    if (!currentMovie) return;
    
    const yourRating = currentMovie.yourRating;
    const modalTitle = document.getElementById('modalMovieTitle');
    const modalYear = document.getElementById('modalMovieYear');
    const modalGenre = document.getElementById('modalMovieGenre');
    const modalDesc = document.getElementById('modalMovieDesc');
    const modalPoster = document.getElementById('modalMoviePoster');
    const modalYourRating = document.getElementById('modalYourRating');
    
    if (modalTitle) modalTitle.textContent = currentMovie.title;
    if (modalYear) modalYear.textContent = currentMovie.year;
    if (modalGenre) modalGenre.textContent = currentMovie.genre;
    if (modalDesc) modalDesc.textContent = currentMovie.description;
    if (modalPoster) modalPoster.src = currentMovie.poster;
    
    if (modalYourRating) {
        if (yourRating) {
            modalYourRating.innerHTML = `
                <div class="your-rating-display">
                    <span class="big-rating">${yourRating}</span>
                    <span class="rating-label">/10</span>
                    <div class="rating-date">Rated on ${new Date(currentMovie.ratedAt).toLocaleDateString()}</div>
                </div>
            `;
        } else {
            modalYourRating.innerHTML = `
                <div class="your-rating-display">
                    <span class="not-rated">Not rated yet</span>
                    <div class="rating-hint">Rate this movie using the stars below</div>
                </div>
            `;
        }
    }
    
   
    updateStarSelector(currentMovie.id, yourRating || 0);
    
   
    updateCommentSection();
}

// Update star selector in modal
function updateStarSelector(movieId, currentRating) {
    const starSelector = document.getElementById('modalStarSelector');
    if (!starSelector) return;
    
    starSelector.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('i');
        star.className = i <= currentRating ? 'fas fa-star' : 'far fa-star';
        star.style.cursor = 'pointer';
        star.style.fontSize = '28px';
        star.style.transition = 'all 0.2s';
        star.style.color = i <= currentRating ? '#ffc107' : '#555';
        star.addEventListener('mouseenter', () => {
            highlightStars(starSelector, i);
        });
        star.addEventListener('mouseleave', () => {
            resetStars(starSelector, currentRating);
        });
        star.addEventListener('click', () => {
            rateMovie(movieId, i);
            showToast(`You rated ${currentMovie.title} ${i}/10`);
            updateStarSelector(movieId, i);
            updateMovieDetailModal();
        });
        starSelector.appendChild(star);
    }
}

function highlightStars(container, count) {
    const stars = container.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < count) {
            star.className = 'fas fa-star';
            star.style.color = '#ffc107';
        } else {
            star.className = 'far fa-star';
            star.style.color = '#555';
        }
    });
}

function resetStars(container, currentRating) {
    const stars = container.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < currentRating) {
            star.className = 'fas fa-star';
            star.style.color = '#ffc107';
        } else {
            star.className = 'far fa-star';
            star.style.color = '#555';
        }
    });
}

// Update comment section
function updateCommentSection() {
    const commentSection = document.getElementById('commentSection');
    const commentDisplay = document.getElementById('commentDisplay');
    const commentInputArea = document.getElementById('commentInputArea');
    
    if (!commentSection || !currentMovie) return;
    
    const hasComment = currentMovie.comment && currentMovie.comment.text;
    
    if (hasComment) {
        if (commentDisplay) {
            commentDisplay.style.display = 'block';
            const commentText = document.getElementById('existingCommentText');
            const commentDate = document.getElementById('existingCommentDate');
            
            if (commentText) commentText.textContent = currentMovie.comment.text;
            if (commentDate) commentDate.textContent = currentMovie.comment.date;
        }
        if (commentInputArea) commentInputArea.style.display = 'none';
    } else {
        if (commentDisplay) commentDisplay.style.display = 'none';
        if (commentInputArea) commentInputArea.style.display = 'block';
    }
}



function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Filter movies 
function getFilteredMovies() {
    let filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (currentGenre !== 'all') {
        filtered = filtered.filter(movie => movie.genre === currentGenre);
    }
    
    if (currentNav === 'toprated') {
        return [...filtered].sort((a, b) => {
            const ratingA = a.yourRating || 0;
            const ratingB = b.yourRating || 0;
            return ratingB - ratingA;
        });
    }
    return filtered;
}

function renderAllMovies() {
    const filteredMovies = getFilteredMovies();
    const allMoviesRow = document.getElementById('allMoviesRow');
    const topRatedRow = document.getElementById('topRatedRow');
    
    if (!allMoviesRow || !topRatedRow) return;
    
    if (currentNav === 'toprated') {
        allMoviesRow.innerHTML = '';
        topRatedRow.innerHTML = '';
        filteredMovies.forEach(movie => {
            topRatedRow.appendChild(createMovieCard(movie));
        });
        document.getElementById('topRatedSection').style.display = 'block';
    } else {
        allMoviesRow.innerHTML = '';
        filteredMovies.forEach(movie => {
            allMoviesRow.appendChild(createMovieCard(movie));
        });
    
        const yourTopRated = [...movies]
            .filter(m => m.yourRating !== null)
            .sort((a, b) => (b.yourRating || 0) - (a.yourRating || 0))
            .slice(0, 8);
        topRatedRow.innerHTML = '';
        yourTopRated.forEach(movie => {
            topRatedRow.appendChild(createMovieCard(movie));
        });
        document.getElementById('topRatedSection').style.display = 'block';
    }
}

// Update hero section with random movie
function updateHero() {
    if (movies.length === 0) {
        const heroSection = document.getElementById('heroSection');
        if (heroSection) {
            heroSection.style.backgroundImage = 'linear-gradient(135deg, #1a1a1a, #0a0a0a)';
        }
        const heroTitle = document.getElementById('heroTitle');
        const heroDesc = document.getElementById('heroDescription');
        if (heroTitle) heroTitle.textContent = 'Your Movie Collection';
        if (heroDesc) heroDesc.textContent = 'Add movies using the + button and start rating them!';
        return;
    }
    
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
        heroSection.style.backgroundImage = `url(${randomMovie.heroPoster || randomMovie.poster})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center 20%';
    }
    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDescription');
    if (heroTitle) heroTitle.textContent = randomMovie.title;
    if (heroDesc) heroDesc.textContent = randomMovie.description;
}

// Start rotating hero every 7 seconds
function startHeroRotation() {
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        updateHero();
    }, 7000);
}

// Add new movie to your personal collection
function addMovie(title, poster, heroPoster, genre, year, description, trailerUrl) {
    if (!title || !poster || !genre || !year) {
        showToast('❌ Please fill all required fields!');
        return false;
    }
    
    const newMovie = {
        id: Date.now().toString(),
        title: title.trim(),
        year: parseInt(year),
        genre: genre.trim(),
        poster: poster.trim(),
        heroPoster: heroPoster ? heroPoster.trim() : poster.trim(),
        description: description || 'No description available.',
        yourRating: null,
        comment: null,
        ratedAt: null,
        trailerUrl: trailerUrl || null
    };
    
    movies.push(newMovie);
    saveData();
    renderAllMovies();
    updateHero();
    showToast(`✅ "${title}" has been added to your collection!`);
    return true;
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toastMessage');
    const toastText = document.getElementById('toastText');
    if (toast && toastText) {
        toastText.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// Open add movie modal
function openModal() {
    const modal = document.getElementById('movieModal');
    if (modal) modal.style.display = 'flex';
}

// Close add movie modal
function closeModal() {
    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.style.display = 'none';
        const form = document.getElementById('addMovieForm');
        if (form) form.reset();
    }
}

// Close movie detail modal
function closeMovieDetailModal() {
    const modal = document.getElementById('movieDetailModal');
    if (modal) {
        modal.style.display = 'none';
        currentMovie = null;
    }
}

// Show trailer modal
function showTrailer() {
    const heroTitle = document.getElementById('heroTitle').textContent.trim();
    const heroMovie = movies.find(m => m.title.toLowerCase() === heroTitle.toLowerCase());
    
    const trailerModal = document.getElementById('trailerModal');
    const trailerFrame = document.getElementById('trailerFrame');
    
    if (trailerModal && trailerFrame) {
        let trailerUrl = 'https://www.youtube.com/embed/8hP9D6kZseM?autoplay=1'; // Default
        
        if (heroMovie?.trailerUrl) {
            let url = heroMovie.trailerUrl;
            if (url.includes('watch?v=')) {
                const videoId = url.split('watch?v=')[1].split('&')[0];
                trailerUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (url.includes('youtu.be/')) {
                const videoId = url.split('youtu.be/')[1].split('?')[0];
                trailerUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else {
                trailerUrl = url;
            }
        }
        
        trailerFrame.src = trailerUrl;
        trailerModal.style.display = 'flex';
    }
}

// Close trailer modal
function closeTrailer() {
    const trailerModal = document.getElementById('trailerModal');
    const trailerFrame = document.getElementById('trailerFrame');
    if (trailerModal && trailerFrame) {
        trailerFrame.src = '';
        trailerModal.style.display = 'none';
    }
}

// Set active navigation
function setActiveNav(navId) {
    currentNav = navId;
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-nav="${navId}"]`);
    if (activeLink) activeLink.classList.add('active');
    renderAllMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
}

// Initialize event listeners
function initEventListeners() {
    const searchInput = document.getElementById('searchMovie');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderAllMovies();
        });
    }
    const profileLink = document.querySelector('.user-dropdown a:first-child');
    if (profileLink) {
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMode();
        });
    }
    
    const genreSelect = document.getElementById('genreSelect');
    if (genreSelect) {
        genreSelect.addEventListener('change', (e) => {
            currentGenre = e.target.value;
            renderAllMovies();
        });
    }
    
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (genreSelect) genreSelect.value = 'all';
            searchTerm = '';
            currentGenre = 'all';
            renderAllMovies();
            showToast('🔄 Filters reset!');
        });
    }
    
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const navId = link.getAttribute('data-nav');
            if (navId) setActiveNav(navId);
        });
    });
    
    const addBtn = document.getElementById('openAddMovieModal');
    if (addBtn) addBtn.addEventListener('click', openModal);
    
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    const closeDetailBtn = document.getElementById('closeDetailModalBtn');
    if (closeDetailBtn) closeDetailBtn.addEventListener('click', closeMovieDetailModal);
    
    const closeTrailerBtn = document.getElementById('closeTrailerBtn');
    if (closeTrailerBtn) closeTrailerBtn.addEventListener('click', closeTrailer);
    
    const watchBtn = document.getElementById('watchTrailerBtn');
    if (watchBtn) watchBtn.addEventListener('click', showTrailer);
    
    const addToListBtn = document.getElementById('addToListHeroBtn');
    if (addToListBtn) {
        addToListBtn.addEventListener('click', () => {
            showToast('💾 Check "My List" to see movies you\'ve rated!');
        });
    }
    
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    
    const addCommentBtn = document.getElementById('addCommentBtn');
    if (addCommentBtn) {
        addCommentBtn.addEventListener('click', addCommentFromModal);
    }
    
    const clearRatingsBtn = document.getElementById('clearRatingsBtn');
    if (clearRatingsBtn) {
        clearRatingsBtn.addEventListener('click', clearRatingsAndComment);
    }

    const deleteMovieBtn = document.getElementById('deleteMovieBtn');
        if (deleteMovieBtn) {
            deleteMovieBtn.addEventListener('click', deleteMovieFromCollection);
    }

    const addForm = document.getElementById('addMovieForm');
        if (addForm) {
            addForm.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const title = document.getElementById('movieTitleInput')?.value;
            const poster = document.getElementById('moviePosterInput')?.value;
            const heroPoster = document.getElementById('movieHeroInput')?.value;
            const genre = document.getElementById('movieGenreInput')?.value;
            const year = document.getElementById('movieYearInput')?.value;
            const desc = document.getElementById('movieDescInput')?.value;
            const trailerUrl = document.getElementById('movieTrailerInput')?.value;
        
            console.log('Title:', title);
            console.log('Poster:', poster);
            console.log('Genre:', genre);
            console.log('Year:', year);
        
            if (title && poster && genre && year) {
                addMovie(title, poster, heroPoster, genre, year, desc, trailerUrl);
                closeModal();
                document.getElementById('addMovieForm').reset();
            } else {
                let missing = [];
                if (!title) missing.push('Title');
                if (!poster) missing.push('Poster URL');
                if (!genre) missing.push('Genre');
                if (!year) missing.push('Release Year');
                showToast(`❌ Please fill in: ${missing.join(', ')}`);
            }
        });
    }
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('movieModal');
        const detailModal = document.getElementById('movieDetailModal');
        const trailerModal = document.getElementById('trailerModal');
        if (e.target === modal) closeModal();
        if (e.target === detailModal) closeMovieDetailModal();
        if (e.target === trailerModal) closeTrailer();
    });
}

function hideLoadingAndInit() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loadingScreen && mainApp) {
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainApp.style.display = 'block';
            
            loadData();
            renderAllMovies();
            updateHero();
            initEventListeners();
            updateHero();
            startHeroRotation(); 
            
            mainApp.style.animation = 'fadeIn 0.5s ease';
            isAdminMode = false;
            document.body.classList.add('guest-mode');
        }, 500);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideLoadingAndInit, 2000);
});