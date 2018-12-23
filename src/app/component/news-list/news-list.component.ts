import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News } from '../../model/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  News: News[];

  constructor(
    public newsApi: NewsService,
  ) { }

  ngOnInit() {
    let s = this.newsApi.GetNewList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.News = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;

        if(!a['archived'] || a['archived'] == false) { // Filter news not archived
          this.News.push(a as News); // Insert news
        }
      })

      // Order items by date
      this.OrderNewsByDate();
    })
  }

  ArchiveNew(id: string) {
    this.newsApi.ArchiveNew(id);
  }

  OrderNewsByDate() {
    this.News = this.News.sort((a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

}
