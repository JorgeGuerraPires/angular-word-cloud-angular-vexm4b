import { Component, VERSION ,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
import * as newdata from './data';

const Wordcloud = require('highcharts/modules/wordcloud');
Wordcloud(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{


  public activity;
  public xData;
  public label;
  options:any;
 

   
  constructor() {
   
  var text = 'The medical sciences started bioinformatics out their path Bioinformatics as a “holistic” discipline: the information they used to make use of reality was not first-hand, and theories were mainly speculations. Bioinformatics In the last centuries, more intensely in the Bioinformatics last decades as a result of bioinformatics several technological developments, the medical bioinformatics sciences have been bombarded with a wave of new technologies and paradigm shifts coming bioinformatics from almost all possible directions, especially coming from computer science bioinformatics and mathematics. Bioinformatics';

  var obj ={name:'',weight:0}

var lines = text.split(/[,\. ]+/g),

    data = Highcharts.reduce(lines, function (arr, word) {
        
        obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
         
             obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);


    this.options = {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: ''
    }
};

}

  ngOnInit(){

    Highcharts.chart('container', this.options);
  }
}