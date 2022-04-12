

  document.addEventListener('DOMContentLoaded', function () {

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var dina = document.querySelectorAll('.timepicker');
    var instam = M.Timepicker.init(dina);
    var dima = document.querySelectorAll('.datepicker');
    google.script.run.withSuccessHandler().blo();
    google.script.run.withSuccessHandler().getsheet();
    

});







$(function () {

    $(".datepicker").on("change", function () {
        if (document.getElementById("Service").value == "Nettoyage 9 ans et moins") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();
        } else if (document.getElementById("Service").value == "Nettoyage 10 à 16 ans") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();

        } else if (document.getElementById("Service").value == "Nettoyage 16 à 65 ans") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();

        } else if (document.getElementById("Service").value == "Nettoyage 65 ans et plus") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();

        } else if (document.getElementById("Service").value == "1er rdv:Gouttiere de blanchiment: empreintes") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();
        } else if (document.getElementById("Service").value == "2er rdv:Gouttiere de blanchiment: remise") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();
        } else if (document.getElementById("Service").value == "Instruction d'hygiene") {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 1));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();
        } else {
            var selected = $(this).val();
            var da = new Date(new Date(selected).setHours(new Date(selected).getHours() + 3));
            var conver = da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + (String(da.getMinutes()).padStart(2, "0"));
            document.getElementById("DeHeure").value = conver;
            M.updateTextFields();
        }
    });
});






document.getElementById("Service").addEventListener("change", prix);


function prix() {
    if (document.getElementById("Service").value == "Nettoyage 9 ans et moins") {

        document.getElementById("estimation").value = "75$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "Nettoyage 10 à 16 ans") {
        document.getElementById("estimation").value = "90$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "Nettoyage 16 à 65 ans") {
        document.getElementById("estimation").value = "120$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "Nettoyage 65 ans et plus") {
        document.getElementById("estimation").value = "100$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "Blanchiment 18 ans et plus") {
        document.getElementById("estimation").value = "300$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "1er rdv:Gouttiere de blanchiment: empreintes") {
        document.getElementById("estimation").value = "50$";
        M.updateTextFields();
    } else if (document.getElementById("Service").value == "2er rdv:Gouttiere de blanchiment: remise") {
        document.getElementById("estimation").value = "30$";
        M.updateTextFields();
    } else {
        document.getElementById("estimation").value = "40$";
        M.updateTextFields();
    }
}

document.getElementById("Service").addEventListener("change", vide);

function vide() {

         document.getElementById("DeHeure").value = "";
         document.getElementById("Heure").value = "";

}


document.getElementById("btn").addEventListener("click", boutonaction);


function boutonaction() {

    var valider = {
        pr: "Vous devrez entrer votre prénom",
        Nm: "Vous devrez entrer votre nom",
        email: "Vous devrez entrer votre courriel",
        Service: "Vous devrez entrer un service",
        Address: "Vous devrez entrer une adresse",
        Phone: "Vous devrez entrer un numéro de  téléphone valide",

    };

    var idkeys = Object.keys(valider);
    var allvalid = true;

    idkeys.forEach(function (id) {

        var isvalid = checkvalid(id, valider[id]);
        if (!isvalid) {

            allvalid = false;

        }


    });

    if (allvalid) {
        faire();
    }

   
}


function checkvalid(elID, message) {

    var isvalid = document.getElementById(elID).checkValidity();

    if (!isvalid) {
        M.toast({
            html: message
        });
        return false;
    }
    return true;

}





function faire() {

    var userinfo = {};
    userinfo.Prenom = document.getElementById("pr").value;
    userinfo.Nom = document.getElementById("Nm").value;
    userinfo.Email = document.getElementById("email").value;
    userinfo.Service = document.getElementById("Service").value;
    userinfo.Address = document.getElementById("Address").value;
    userinfo.Phone = document.getElementById("Phone").value;
    userinfo.Heure = document.getElementById("Heure").value;
    userinfo.DeHeure = document.getElementById("DeHeure").value;
    userinfo.Commentaire = document.getElementById("textarea1").value;
    userinfo.prix = document.getElementById("estimation").value;

    google.script.run.user(userinfo);
    document.getElementById("pr").value = "";
    document.getElementById("Nm").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Service").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("Heure").value = "";
    document.getElementById("DeHeure").value = "";
    document.getElementById("textarea1").value = "";
    document.getElementById("estimation").value = "";

    var myapp = document.getElementById("Service");
    myapp.selectedIndex = "0";

    M.FormSelect.init(myapp);

    google.script.run.calendarevent(userinfo);
    
    google.script.run.withSuccessHandler(redict).fina();

}

function redict(f) {
document.getElementById("contenu").innerHTML = f;

}




var refresh = document.querySelector('.datepicker');

refresh.addEventListener("click", function() {


google.script.run.withSuccessHandler().blo();
});


google.script.run.withSuccessHandler(displayValue).blo();




function formatDate(datestr) {
    var date = new Date(datestr);
    var day = date.getDate();
    day = day > 9 ? day : "0" + day;
    var month = date.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    return day + "/" + month + "/" + date.getFullYear();
}

function displayValue(value) {

    var val = value;
    

    var test = val.map(dat => new Date(dat)).toLocaleString('default', {
        hour12: false
    });

   console.log(test);



    $(".datepicker").datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        datesDisabled: ['2022-06-20 9:00'],
        daysOfWeekDisabled: '0',
        
        todayBtn: true,
        minuteStep: 60,
        autoclose: true,
        language: 'fr',
        startDate: new Date(),
        onRenderHour: function (date) {
 
             
       
            if (test.indexOf(formatDate(date) + ", " +"0"+ date.getUTCHours()+":"+"00")> -1 || test.indexOf(formatDate(date) + ", "+ date.getUTCHours()+":"+"00") > -1) {

                return ['disabled'];
            } else if (date.getUTCHours() === 21 || date.getUTCHours() === 22 || date.getUTCHours() ===
                23 || date.getUTCHours() === 0 || date.getUTCHours() === 1 || date.getUTCHours() ===
                2 || date.getUTCHours() === 3 || date.getUTCHours() === 4 || date.getUTCHours() ===
                5 || date.getUTCHours() === 6 || date.getUTCHours() === 7)
                return ['disabled'];

            else if (document.getElementById("Service").value == "Blanchiment 18 ans et plus") {
                if ((date.getUTCHours() === 9 || date.getUTCHours() === 10 || date.getUTCHours() === 11 || date.getUTCHours() === 12 || date.getUTCHours() === 13 || date.getUTCHours() ===
                        14 || date.getUTCHours() === 15 || date.getUTCHours() === 16 || date.getUTCHours() ===
                        17 || date.getUTCHours() === 18 || date.getUTCHours() === 19 || date.getUTCHours() === 20 ))
                    return ['disabled'];



            } else {
                if ((date.getUTCHours() === 8))
                    return ['disabled'];



            }
        }
    })
};



