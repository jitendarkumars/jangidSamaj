import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from 'app/services/common.service';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.scss']
})
export class MembersDetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gotra', 'village','age','maritalStatus', 'education','work','mobileNumber'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  usersList;
  constructor(private common:CommonService) { }
  searchName = new FormControl('');
  searchGotra = new FormControl('');
  searchAge = new FormControl('');
  searchVillage = new FormControl('');

  userListObs:Observable<any>;
  ngOnInit() {

    this.common.getHeadUsers().subscribe(res=>{
      console.log(res)
      this.usersList = res;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    // this.searchName.valueChanges.pipe()

  }
 


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
}  

