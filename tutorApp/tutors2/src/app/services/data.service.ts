import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  public items: any = [];

  constructor() 
  {
    this.items =
    [
      {title: "Math"},
      {title: "American Studies"},
      {title: "Art"},
      {title: "Chemistry"},
      {title: "Business"},
      {title: "Computer Science"},
      {title: "African Studies"},
      {title: "Arabic"},
      {title: "Economics"},
      {title: "German"},
      {title: "Biology"},
      {title: "Music"},
      {title: "Latin"},
      {title: "Religion"},
      {title: "Physics"},
      {title: "History"},
      {title: "Classics"},
      {title: "Critical Ethnic Studies"},
      {title: "English"}
    ] ;
  }

  filterItems(searchTerm)
  {
    return this.items.filter(item=>{return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; })
  }
}
