import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Array<Item> = [];
  constructor() { }
}


//how delete this item with  this.items.splice(index,1);
//how to get index of this item with this.items.indexOf(item)
//how to get item with this.items[index]
//how to get all items with this.items.slice()
//how to get length of this.items.length
//how to get last item with this.items[this.items.length-1]
//how to get first item with this.items[0]
//how to get last index of this.items.length-1
//how to get first index of this.items[0]
//how to get last item with this.items.slice(-1)
//how to get first item with this.items.slice(0,1)
//how to get items with this.items.slice(0,3)
//how to get items with this.items.slice(0,this.items.length)
//how to get items with this.items.slice(0,this.items.length-1)
//how to get items with this.items.slice(0,this.items.length-2) slice