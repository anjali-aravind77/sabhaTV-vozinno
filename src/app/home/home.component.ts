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
  series: string[] = []; originals;
  talk_show;
 
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
    this.dataservice.getHomeVideos()
    .subscribe((resp: any) => {       
      this.documentries = resp.data[0]['videos'];
      this.live_videos = resp.data[1]['videos'];
      this.arrivals = resp.data[2]['videos'];
      this.originals = resp.data[3]['videos'];
      this.talk_show = resp.data[4]['videos'];  
       

        for(var j in resp.data) {
          for(var k in resp.data[j].videos) {
            if(resp.data[j].videos[k]['type'] == 'series') {           
              this.series.push(resp.data[j].videos[k])
            }
          }
        }      
    
    })
  }
 
}
