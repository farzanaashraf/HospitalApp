function fetchHospitals() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var items = '';
            for( var i =0 ;i< response.length ; i++ ){
                items += '<tr>';
                items += '<td>' + response[i].hospitalName + '</td>';
                items += '<td>' + response[i].patientsCount + '</td>';
                items += '<td>' + response[i].location + '</td>';
                items += '</tr>';

            }
            document.getElementById('tableMain').innerHTML=items;
        }
    }

    xhttp.open('GET','http://localhost:3033/hospitals',true);
    xhttp.send();
}

fetchHospitals();




// $(document).ready(function (){
//     fetch('../data.json')
//     .then(response => response.json)
//     .then(data => {
//         var items = '';
//         for( var i =0 ;i< data.length ; i++ ){
//             items += 'tr';
//             items += '<td>' + data[i].hospitalName + '</td';
//             items += '<td>' + data[i].patientsCount + '</td';
//             items += '<td>' + data[i].location + '</td';
//             items += '</tr';

//         }
//         document.getElementById('table').innerHTML=items;
//     });
// });