import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from 'app/services/common.service';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CSVRecord } from './csvrecord';
import data from './data.json';
@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('1000ms cubic-bezier(0.4, 2.0, 1.0, 1)')),
    ]),
  ],
})
export class MembersDetailsComponent implements OnInit{
  filteredData =[];
  ngOnInit(): void {
    console.log(this.records)
    this.records.forEach((record) => {
      if(record.fathersName){
        record.isHead = true;
      if(!(record.fathersName?.trim().startsWith('श्री'))) {
        record.fathersName = 'श्री '+record.fathersName
      }
      if(!(record.fathersName?.trim().endsWith('जी'))) {
        record.fathersName = record.fathersName+ ' जी'
      } 
      record.fullName = record.name + ' पुत्र '+record.fathersName
    }
    })
   this.filteredData = this.records.slice(0,50);
    console.log(this.records)
  }
  public records: any[] =  data;
   
  pageChange(event) {
   this.filteredData = this.records.slice((event.pageIndex*event.pageSize) , ((event.pageIndex*event.pageSize) +event.pageSize));
  }
}   

