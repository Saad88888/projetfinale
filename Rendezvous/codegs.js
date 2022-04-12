function doGet(e) {
  

    var tmp = HtmlService.createTemplateFromFile("page").evaluate();
    
    var output = HtmlService.createHtmlOutput(tmp);
    output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    

}

function getsheet () {
    
    var calendrier = CalendarApp.getCalendarsByName("josyjobin01@gmail.com")[0];
    var url ="https://docs.google.com/spreadsheets/d/1vUdd0Zp2cH7cRlQ2DOnFBl7PCVuWZ305DIT2w8GoJL4/edit#gid=0"
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Reservation");
    var range = ws.getDataRange();
    var values = range.getValues();

  }

function user(userinfo) {

    var url = "https://docs.google.com/spreadsheets/d/1vUdd0Zp2cH7cRlQ2DOnFBl7PCVuWZ305DIT2w8GoJL4/edit#gid=0"
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Reservation");
    ws.appendRow([userinfo.Prenom, userinfo.Nom, userinfo.Email, userinfo.Service, userinfo.Address, userinfo.Phone, userinfo.Heure, userinfo.DeHeure, userinfo.Commentaire, new Date()]);
  
    var prenom = userinfo.Prenom;
    var nom = userinfo.Nom;
    var nomcomplet = prenom + " " + nom;
    var titre = "Merci pour votre message";


    var body = "Bonjour" + " " + nomcomplet + "\n" + "\n" + "Nous avons recu votre demande avec succes , nous allons vous contacter dans les plus brefs délai." + "\n" + "\n" +
        "Merci," + "\n" + "\n" + "Josyane";

    GmailApp.sendEmail(userinfo.Email, titre, body);
   
    
}





function calendarevent(userinfo) {
 
    var calendrier = CalendarApp.getCalendarsByName("josyjobin01@gmail.com")[0];

   var title =userinfo.Service;
  var he = userinfo.Heure;
  var fin = userinfo.DeHeure;
  var addresse = userinfo.Address;
  var gues = userinfo.Email;
  var comme = userinfo.Commentaire;
  
  
     var options = {
        location: addresse,
        guests: 'josyjobin01@gmail.com ,' + gues,
        sendInvites: true,
        description: comme,
      

    }
  
   calendrier.createEvent(title,new Date(he), new Date(fin), options).addSmsReminder(20);





}



function include(filename) {


    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}







eval(UrlFetchApp.fetch('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js').getContentText());






function blo () {
  
  var calendaro = CalendarApp.getCalendarsByName("josyjobin01@gmail.com")[0];
    var eventss = calendaro.getEvents(new Date("2022-01-01"), new Date("2025-12-31"));
    var start = eventss.map(function (e) {
        return e.getStartTime().toString();
    });
  var end = eventss.map(function (e) {
        return e.getEndTime().toString();
    });

   var unique = [];
          start.forEach(function(d){
          if(unique.indexOf(d) === -1){
          unique.push(d);
          }
          
        });
   
 
            let res = [];
 
        for (var i = 0; i < unique.length; i++) {
        var event = unique[i];
        var now = new Date(event);
        var nolw = new Date(event).getTime();
        var dima = new Date(nolw).getHours();
        
        
          if (dima === 8.0) {  
               res.push(moment(new Date(unique[i])).add(1, 'hours').format('YYYY-MM-DD hh:mm:ss').toString());
              res.push(moment(new Date(unique[i])).add(2, 'hours').format('YYYY-MM-DD hh:mm:ss').toString());
           
            
          }else if (dima === 9.0){
                   
           res.push( moment(new Date(unique[i])).add(-1, 'hours').format('YYYY-MM-DD hh:mm:ss').toString());
           
          }
         
    }
 
  
var d = unique.concat(res);
return d
  

} 



function fina () {
  
    var tmpii = HtmlService.createTemplateFromFile("merci").evaluate();
    
   return  tmpii.getContent();
    
  
}
