import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {


  public formGroup: FormGroup;
  movies: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router, private moviesService: MoviesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      url_img: new FormControl('', Validators.required),
      dias_presentacion: new FormControl('', Validators.required)
    });
  }



  gotoList() {
    this.router.navigate(['/ListMovies']);
  }

  save() {
    debugger;
    this.moviesService.save(this.formGroup.value).subscribe(result => {
      debugger;
      this.gotoList();
      console.log(result)
    }, error => console.error(error));
  }

}
