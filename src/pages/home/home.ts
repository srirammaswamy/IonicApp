import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Http } from "@angular/http";
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { MapPage } from '../map/map';


var aoa = [];
var stop=null;
var sb = null;
// var stop1=null;

// var aoo = [];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


  headerRow:any[]=[];
  csvData:any=[];
  d:any=[];
  stopIds = {};
  k:any=[];
  aoo = [];
  stop = null;
  stop1 = null;
  buses:any={};
  choosedbus:any=[];
  stops:any=[];
  routes:any=[];
  routingall:any=[];
  buslist:any=[];

  constructor(public navCtrl: NavController,public http: Http,public actionSheetCtrl: ActionSheetController) { 
   

    this.readCsvData();

  }

  change()
  {

  }

  presentActionSheet()
  {
    console.log('1'+this.buslist[0]);
    console.log(this.buslist);
    var array = Array(6);
    for(let i=0;i<10;i++) {
      if(this.buslist[i]!=null)
      array[i] = this.buslist[i];
    }
    console.log('a'+array);
    for(let i=0;i<array.length;i++) {
      if(array[i]==null) {
        array = array.slice(0, i);
      }
    }
    
    // var array = this.buslist;
    console.log('A:'+array);
     const actionsSheet =this.actionSheetCtrl.create(
       {
         title : 'Bus Numbers',
         buttons : this.buslist
       }
     );
     actionsSheet.present();

   
  }
  private readCsvData() {
    var count = 0;
    this.http.get('assets/allBusStops48(1).csv')
      .subscribe(
      // data => this.extractData(data),
      data => {this.stopIds=data;
        this.k=this.stopIds["_body"].split('\n');
for(var i of this.k)
{
  var row = [];
  row=i.split(',');
  aoa.push(row);
}
  
    for(let a=0;a<aoa.length;a++) {
      var obj = {};
      obj["id"]=aoa[a][0];
      console.log('S:'+aoa[a][1]);
      obj["name"]=aoa[a][1];
      obj["lat"]=aoa[a][2];
      obj['lon']=aoa[a][3];
      this.aoo.push(obj);
    }
    }
    );
  }

 

  stopChanged(_event: { component: SelectSearchableComponent, value: any }) {

  }

  showroutes()
  {
    var allplace:any=[];
    
    this.d=[];
    var num1=this.stop["id"];
    var num2=this.stop1['id'];
    this.http.get("/assets/routes.csv").subscribe(
      data=> {
      
        var m=data;
        var k=m["_body"].split('\n');
        
        for(var i of k)
        {
         var row:any=[];
      
         row=(i.split(','));
         this.d.push(row);
         
        }

        

        for(var l=0;l<this.d.length-1;l++)
        {
            var routearray=this.d[l][4].split('/');
            this.d[l][4]=routearray;
        }
          
          
        for(var o=0;o<this.d.length-1;o++)
        {
              var route:any=[];
              route=this.d[o][4];
              var routing:any=[];
          
           if((route.find(x => x==num1)) && (route.find(y => y==num2)))
           {
                var a = this.d[o][4].indexOf(num1);
                var b = this.d[o][4].indexOf(num2);
                if(a>b) {
                  var t = a;
                  a = b;
                  b = t;
                }
                allplace=this.d[o][4].slice(a,b+1);
                for(var y=0;y<this.aoo.length;y++)
                {
                  if(allplace.find(x => x==this.aoo[y]["id"]))
                  {
                    routing.push(this.aoo[y]);
                  }
                }
             this.routingall.push(routing);   
           }
           // if(routing.length!=null)
           
        }
       
       
        
       } );

       this.navCtrl.push(MapPage ,{
        route : this.routingall,
        flag: true
      });
  }

  busname() {
    document.getElementById("bb").innerHTML = '48';
  }

   showBuses()
   {
     

     this.d=[];
      var num1=this.stop["id"];
      var num2=this.stop1['id'];

      this.http.get("/assets/routes.csv").subscribe(
        data => {
        
          var m=data;
          var k=m["_body"].split('\n');
          
          for(var i of k)
          {
           var row:any=[];
        
           row=(i.split(','));
           this.d.push(row);
           
          }

          

          for(var l=0;l<this.d.length-1;l++)
          {
              var routearray=this.d[l][4].split('/');
              this.d[l][4]=routearray;
          }
            
          var o = 0;
          for(o=0;o<=this.d.length-2;o++)
          {
                var route:any=[];
                route=this.d[o][4];
                var obj:any={};
             if((route.find(x => x==num1)) && (route.find(y => y==num2)))
             {
               var routing:any=[];
               var routingbus:any=[];
                  obj["text"]=this.d[o][1];
                  obj["hander"]=()=>
                  {
                   var  allplace=this.d[o][4];
                    for(var y=0;y<this.aoo.length;y++)
                    {
                      if(allplace.find(x => x==this.aoo[y]["id"]))
                      {
                        routing.push(this.aoo[y]);
                      }
                    
                    }

                    console.log(routing);
                    this.navCtrl.push(MapPage, {
                      busroutes:routing
                    });
                  }
              this.buslist.push(obj);
              
              //this.d[o][4].slice(this.d[o][4].indexOf(num1),this.d[o][4].indexOf(num2));
             }
             // if(obj!=null)
              
          }
                 
        });
        console.log(this.buslist);

         this.presentActionSheet();
         this.buslist=[];

}





}






























































/*

private extractData(res) {
  console.log('R:'+res);
  let csvData = res['_body'] || '';
  console.log('C:'+csvData);
  let parsedData = papa.parse(csvData).data;

  this.headerRow = parsedData[0];

  parsedData.splice(0, 1);
  this.csvData = parsedData;
  console.log('P: '+parsedData);
}

downloadCSV() {
  let csv = papa.unparse({
    fields: this.headerRow,
    data: this.csvData
  });

  // Dummy implementation for Desktop download purpose
  var blob = new Blob([csv]);
  var a = window.document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = "newdata.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
private handleError(err) {

  console.log('something went wrong: ', err);
}  */
