import { Component, OnInit } from '@angular/core';

// 어떠한 효과들을 리용하겠는가를 결정하고 서고에서 불러들인다.
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

// Service 리용을 위한 서고입력
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
	// animation options.
	trigger('goals', [
			transition('* => *', [
					// 처음에 있는 내용들을 지우는 부분이다.
					query(':enter', style({ opacity:0 }), {optional: true}),

					// 내용들의 삽입시 나타는 animation부분이다. 보다 중요한것은 처음에 있는 내용들도 enter로 본다는것이다.
					query(':enter', stagger('300ms', [
						animate('.6s ease-in', keyframes([
							style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
							style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
							style({opacity: 1, transform: 'translateY(0)', offset: 1}),
						]))
					]), {optional: true}),

					// 내용들을 지울때 나타는 animation효과이다.
					query(':leave', stagger('300ms', [
						animate('.6s ease-in', keyframes([
							style({opacity: 1, transform: 'translateY(0)', offset: 0}),
							style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
							style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
						]))
					]), {optional: true})
				])
		])
	]
})

export class HomeComponent implements OnInit {

	itemCount: number;
	btnText: string = "Add an item";
	goalText: string = "My first life goal";
	goals = [];

	// service변수 _data를 정의
	constructor(private _data: DataService) { }

	ngOnInit() {

		// **** goals변수에 _data의 내용을 대입
		this._data.goal.subscribe(res => this.goals = res);

		// **** _data의 다음 내용을 적재. 이부분이 없어도 정상동작한다.
		this._data.changeGoal(this.goals);

		this.itemCount = this.goals.length;
	}

	addItem() {
		if(this.goalText != '') {
			this.goals.push(this.goalText);
			this.goalText = '';
			this.itemCount = this.goals.length;
		}
	}

	removeItem(i) {
		this.goals.splice(i, 1);
		this.itemCount = this.goals.length;
	}
}
