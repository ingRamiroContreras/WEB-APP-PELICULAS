import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservasService } from 'src/app/services/reservas.service';

export interface DialogData {
  idMovie: number;
  nombrePelicula: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MoviesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.movieService.getAll().subscribe(
      data => {
        this.movies = data;
      }
    );
  }

  openDialog(id: number, nombre: string): void {
    debugger;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { idMovie: id, nombrePelicula: nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, private reservaService: ReservasService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      cedula: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      movie_id: new FormControl(this.data.idMovie, Validators.required)
    });
  }
  onClick(): void {
    this.reservaService.save(this.formGroup.value).subscribe(result => {
      debugger;
      console.log(result)
      this.dialogRef.close();
    }, error => console.error(error)
    );

  }

}