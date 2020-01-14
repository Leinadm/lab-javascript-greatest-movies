/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies];
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return a.year - b.year;
    });
    
    return moviesCopy;
    
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0;
    }
    
    return 1;
} 

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
