import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News } from '../../model/news';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {

  Archived: News[];

  constructor(
    public newsApi: NewsService,
  ) { }

  ngOnInit() {
    let s = this.newsApi.GetNewList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Archived = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;

        if(a['archived'] && a['archived'] != false) { // Filter news archived
          this.Archived.push(a as News); // Insert news
        }
      })

      // Order items by date
      this.OrderNewsByDate();
    })
  }

  DeleteArchived(id: string) {
    this.newsApi.DeleteNew(id);
  }

  OrderNewsByDate() {
    this.Archived = this.Archived.sort((a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

}
