import { Component, OnInit } from '@angular/core';

// router모듈을 불러들이는 부분이다.
import { ActivatedRoute, Router } from '@angular/router';

// service모듈을 불러들이는 부분이다.
import { DataService } from '../data.service';

@Component({
  	selector: 'app-about',
  	templateUrl: './about.component.html',
  	styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

    goals: any;

	  /* router 모듈의 두개변수를 창조했는데 그것은 아직 정확히는 모른다.
       Service 변수 _data를 창조함. */
  	constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
  		
  		// res는 response에 해당되며 php에서 $_GET와 류사하다.
  		this.route.params.subscribe(res => {
  			console.log(res);
  		})
  	}

  	ngOnInit() {
      this._data.goal.subscribe(res => this.goals = res);
  	}

  	sendMeHome() {
  		// url을 이동하는 부분이다. 여기서 ['']이 url에 해당된다.
  		this.router.navigate(['']);
  	}
}
