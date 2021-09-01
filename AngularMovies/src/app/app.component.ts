import { Component } from "@angular/core";

type Movie = {
  name: string;
  available: Number;
  quantity: Number;
};

type Movies = Array<Movie>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: String = "Películas";
  movies: Movies = [
    {
      name: "Avengers",
      available: 3,
      quantity: 0
    },
    {
      name: "Terminator",
      available: 5,
      quantity: 0
    }
  ];

  addMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity += 1;
  }

  RemoveMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity -= 1;
  }
}
