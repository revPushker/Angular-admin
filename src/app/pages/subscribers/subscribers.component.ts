import { Component, OnInit } from '@angular/core';
import { Ajax } from '../../ajax';



@Component({
	selector: 'app-subscribers',
	templateUrl: './subscribers.component.html',
	styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
	rows = [];
	selected = [];
	subscribeUser = [];
	columns: any[] = [
	{ prop: 'name'} ,
	{ name: 'Company' },
	{ name: 'Gender' }
	];
	public loading = false;
	constructor(public ajax: Ajax) {
		this.fetch((data) => {
			this.rows = data;
			console.log(this.rows);
		});
	}
	ngOnInit() {
		this.getSubscriber();
	}

	getSubscriber() {
		this.loading = true;
		let request = this.ajax.get('subscriber').share();
		request.map(response => response.json()).subscribe(response => {
			this.loading = false;
			this.subscribeUser = response;
		}, err => {
			this.loading = false;
			console.log('Error',err);
		});
	}

	fetch(cb) {
		const req = new XMLHttpRequest();
		req.open('GET', `assets/data/company.json`);

		req.onload = () => {
			cb(JSON.parse(req.response));
		};

		req.send();
	}

	onSelect({ selected }) {
		this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	onActivate(event) {}

}
