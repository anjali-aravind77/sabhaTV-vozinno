import { EOF } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides : []; 
  live_videos;
  arrivals;
  documentries;
  series; originals;
  talk_show;
  series_array;
  
  constructor(private dataservice:DataService) { 
    this.getBanners();
    this.getHomeVideos();
    
  }

  ngOnInit(): void {
  }


  getBanners() {
    this.dataservice.getBanners()
    .subscribe((res:any) => {
      // console.log(res.data)
      this.slides = res.data;
    })
  }

  getHomeVideos() {
    var i=0;
    
    this.dataservice.getHomeVideos()
    .subscribe((resp: any) => {   
      
      this.documentries = resp.data[0]['videos'];
      this.live_videos = resp.data[1]['videos'];
      this.arrivals = resp.data[2]['videos'];
      this.originals = resp.data[3]['videos'];
      this.talk_show = resp.data[4]['videos'];
      // for(i=0; i<10 ; i++) {
      //  this.series_array.push(resp.data[i]['videos']);
     
      // }
      // this.series = (resp.data['videos'].filter(x => x.type == 'series'));
      
      // console.log(resp.data['videos'])
     
    })
  }
}
