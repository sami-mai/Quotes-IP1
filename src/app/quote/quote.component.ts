import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  new Quote(1,'Don\'t cry because it\'s over, smile because it happened.','Dr. Seuss','Sami-Mai',new Date(2015,3,1)),
  new Quote(2,'Be yourself; everyone else is already taken.','Oscar Wilde','Sami-Mai',new Date(2012,3,9)),
  new Quote(3,'So many books, so little time.','Frank Zappa','Sami-Mai',new Date(2018,1,10)),
  new Quote(4,'Be the change that you wish to see in the world.','Mahatma Gandhi','Sami-Mai',new Date(2007,7,14)),
  new Quote(3,'My body knows its limits, my mind refuses to accept them.','Unknown','Sami-Mai',new Date(2018,4,10)),
  ]

  addQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
         quote.datePublished = new Date()
        this.quotes.push(quote)

    }

  toogleDetails(index){
      this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete,index){
      if (isDelete){

        let toDelete=confirm(`Are you sure you want to delete this quote?\n \n \" ${this.quotes[index].quote}\"`)


        if (toDelete){
            this.quotes.splice(index,1);
            }
        }
    }

  constructor() { }

  ngOnInit() {
  }

}
