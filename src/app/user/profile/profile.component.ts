import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fadeInOutTranslate } from '../../shared/elements/animation';
import { FormsModule } from '@angular/forms';


import '../../../assets/echart/echarts-all.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [fadeInOutTranslate]
})
export class ProfileComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public editor;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor() {
  }

  ngOnInit() {
      setTimeout(() => {

          console.log('you can use the quill instance object to do something', this.editor);
          // this.editor.disable();
      }, 2800);

      // this.http.get(`assets/data/data.json`)
      //     .subscribe((data) => {
      //         this.data = data.json();
      //     });
      setTimeout(() => {
          this.profitChartOption = {
              tooltip: {
                  trigger: 'item',
                  formatter: function(params) {
                      const date = new Date(params.value[0]);
                      const data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
                      return data + '<br/>' + params.value[1] + ', ' + params.value[2];
                  },
                  responsive: true
              },
              dataZoom: {
                  show: true,
                  start: 70
              },
              legend: {
                  data: ['Profit']
              },
              grid: {
                  y2: 80
              },
              xAxis: [{
                  type: 'time',
                  splitNumber: 10
              }],
              yAxis: [{
                  type: 'value'
              }],
              series: [{
                  name: 'Profit',
                  type: 'line',
                  showAllSymbol: true,
                  symbolSize: function(value) {
                      return Math.round(value[2] / 10) + 2;
                  },
                  data: (function() {
                      const d: any = [];
                      let len = 0;
                      const now = new Date();
                      while (len++ < 200) {
                          const random1: any = (Math.random() * 30).toFixed(2);
                          const random2: any = (Math.random() * 100).toFixed(2);
                          d.push([ new Date(2014, 9, 1, 0, len * 10000), random1 - 0, random2 - 0 ]);
                      }
                      return d;
                  })()
              }]
          };
      }, 1);
  }

  toggleEditProfile() {
      this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
      this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
      this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
      this.editAbout = !this.editAbout;
  }

  onEditorBlured(quill) {
      console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
      console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
      this.editor = quill;
      console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({quill, html, text}) {
      console.log('quill content is changed!', quill, html, text);
  }

}
