import { Component } from '@angular/core';
import { InventoryService } from './services/inventory.service';
import { Inventory } from './models/inventory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  inventories: Inventory[] = [];
  
  showError: boolean = false;

  constructor(private inventoryService: InventoryService) {}
  ngOnInit() {
    this.getInventories();
  }

  getInventories() {
    this.inventoryService.getInventories().subscribe((result: any) => {
        this.inventories = result.data;
      },(error: any) => {
        console.log("error");
        this.showError = true;
      }
    );
  }

}
