import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {
  word:IWord
  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) { }

  ngOnInit() {
      const {snapshot} = this.activatedRoute; const key = snapshot.paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key: key, meaning: meaning};
  }

}
