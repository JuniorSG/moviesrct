const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
        headers: {
          Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2I2YzEzNTc2MGVmNjNlODI4YWE5YTAxYTNkNTAyZiIsInN1YiI6IjYyMmQ1Zjk0MmUyYjJjMDA0NTgxZGFiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crY8XM-IIycOULBqGdnk8wvhuMqH52NPolHn5rrzif0",
          "Content-Type": "application/json;charset=utf-8",
        }
      }).then((result) => result.json())      
    }
