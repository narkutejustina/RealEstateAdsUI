import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ad } from '../ads/models/ad';

import {MatPaginator, MatTableDataSource} from '@angular/material';


const ADS_LIST: Ad[] = [
  {id: 1, title: "Title 1", description: "This is descrption of fake item with id 1", price: {currency:"$", value: 1}, country: "Country1", city: "City1"},
  {id: 2, title: "Title 2", description: "This is descrption of fake item with id 2", price: {currency:"$", value: 2}, country: "Country2", city: "City2"},
  {id: 3, title: "Title 3", description: "This is descrption of fake item with id 3", price: {currency:"$", value: 3}, country: "Country2", city: "City3"},
  {id: 4, title: "Title 4", description: "This is descrption of fake item with id 4", price: {currency:"$", value: 4}, country: "Country1", city: "City3"},
];

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})

export class AdsListComponent implements OnInit {

  @ViewChild (MatPaginator) paginator: MatPaginator;

  tableOptions: any = {
    pageSizeOptions: [2, 5, 10],
    displayedColumns: ['id', 'title', 'description', "location", "price"]
  }
  
  ads: MatTableDataSource<Ad>;

  ngOnInit() {
    this.ads = new MatTableDataSource<Ad>(ADS_LIST);
      this.ads.paginator = this.paginator;
  }
}
