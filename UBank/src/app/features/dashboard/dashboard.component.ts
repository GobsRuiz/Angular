import { Component } from '@angular/core';
import { NewTransactionComponent } from "./components/new-transaction/new-transaction.component";
import { ListTransactionsComponent } from "./components/list-transactions/list-transactions.component";
import { BalanceComponent } from "./components/balance/balance.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    NewTransactionComponent,
    ListTransactionsComponent,
    BalanceComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
