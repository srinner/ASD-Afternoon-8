import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../service/recipe-service.service';
//import { ConfirmDialogService } from '../service/recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
//import {  ConfirmDialog} from '../confirm-dialog';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
//import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe;
  recipes: Recipe[];
  delete: Number;
  private headers = new Headers({'Content-Type': 'application/json'});



  constructor(public recipeService: RecipeService,
    // private confirmDialogService: ConfirmDialogService,
              private router: Router,
              private route: ActivatedRoute) { }


          /*  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer*/
        /*      iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));*/



  ngOnInit() {
    this.recipeService.findAll().subscribe(data => {
      this.recipes = data;
    });
  }

  clickMethod(id: number): void {
    //sconst id = +this.route.snapshot.paramMap.get('id');
  if(confirm("Are you sure to delete ")) {
         this.recipeService.deleteById(id)
         .subscribe(() => this.refresh();
  }
}

  save(id: number, title: string): void {
     this.recipeService.updateTitle(id, title)
          .subscribe(() => this.gotoUserList());
   }
   favorize(id: number, title: string): void {
      this.recipeService.favorize(id, title)
           .subscribe(() => this.gotoUserList());
    }


   search(search: string): void {
      this.recipeService.findSearch(search)
           .subscribe(data => {
             this.recipes = data;
           });
    }




   gotoUserList() {
     this.router.navigate(['/recipelist']);
   }

   gotoFavoritesList() {
     this.router.navigate(['/favorites']);
   }

   refresh() {
    window.location.reload();
   }


     // alert(this.delete);


}
