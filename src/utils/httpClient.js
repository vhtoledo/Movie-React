const API = "https://api.themoviedb.org/3"

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Q0ZTQ5NzIxZTlmNDRmOTdhNDkyYWJhYTM1YzVhMyIsInN1YiI6IjY0MDY0YjIzZWY5ZDcyMDBkNzM2N2M4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAZ0wMSjoFMbLk301tGj1k3WLpJLkRl1sXhC8YbvUlw",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}