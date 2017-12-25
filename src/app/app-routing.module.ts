import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// 해당url을 지정해주는 부분이다.
const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about/:id',
		component: AboutComponent
	}
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
