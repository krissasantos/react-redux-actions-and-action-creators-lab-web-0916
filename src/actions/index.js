// define your actions here!

// export function incrementCount(){
//   return {
//     type: 'INCREMENT_COUNT'
//   }
// }

  

export function addMovie(movie){
    return {
     type: 'ADD_MOVIE',
     movie: movie
    };
}

// let addMovie = addMovie();
// store.dispatch( addMovie ) ;

export function deleteMovie(movie){
    return {
     type: 'DELETE_MOVIE',
     movie: movie
    };
}

export function updateUsername(name){
    return {
     type: 'UPDATE_USERNAME',
     username: name
    };
}
export function resetUsername(){
    return {
     type: 'RESET_USERNAME',
     username: 'default'
    };
}