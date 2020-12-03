var x = 0;
var subbed = []; //submitted array
var gnosis = ["6538", "6642", "7019", "0803", "4977", "2592", "8190", "8454", "7715", "5375"]; //placeholder for potential arrays
var forgottenArray = []; //for forgotten function
var rememberArray = []; //for remembered function
var paramnesia = []; //Can use for data input not there
var results = [];


function add_element_to_subbed()
{
 subbed[x] = document.getElementById("numbers").value;
 x++;
 document.getElementById("numbers").value = "";

}


function display_subbed()
{
   var e = "<hr/>";   
    
   for (var y=0; y<subbed.length; y++)
   {
     e += subbed[y] + "<br/>";
   }
   document.getElementById("Submitted").innerHTML = e;
}

function forgotten()
{
for (var i = 0; i < gnosis.length; i++) {
    // we want to know if gnosis[i] is found in subbed
    var match = false; // we haven't found it yet
    for (var j = 0; j < subbed.length; j++) {
        if (gnosis[i] == subbed[j]) {
            // we have found gnosis[i] in subbed, so we can stop searching
            match = true;
            break;
        }
        // if we never find gnosis[i] in subbed, the for loop will simply end,
        // and match will remain false
    }
    // add gnosis[i] to newArray only if we didn't find a match.
    if (!match) {
        forgottenArray.push(gnosis[i]);
    }
}

}

function remember()
{
for (var remi = 0; remi < subbed.length; remi++) {
    // we want to know if subbed [i] is found in gnosis
    var match = false; // we haven't found it yet
    for (var gnoj = 0; gnoj < gnosis.length; gnoj++) {
        if (gnosis[remi] == subbed[gnoj]) {
            // we have found gnosis[i] in subbed, so we can stop searching
            match = true;
            break;
        }
        // if we never find gnosis[i] in subbed, the for loop will simply end,
        // and match will remain false
    }
    // add subbed[i] to remember only if we find a match.
    if (match) {
        rememberArray.push(subbed[remi]);
    }
}

}

function display_forgotten()
{
		var a = "<br/>";

for (var b = 0; b<forgottenArray.length; b++)
{
	a += forgottenArray[b] + "<br/>";
}

document.getElementById("Forgotten").innerHTML = a;
}


function display_remember()
{
var rema = "<br/>";

for (var remb = 0; remb<rememberArray.length; remb++)
{
	rema += rememberArray[remb] + "<br/>";
}

document.getElementById("Remember").innerHTML = rema;
}

function percent()
{

 var per = (rememberArray.length/gnosis.length)*100
 
	console.log (per + "%")
  
 document.getElementById("Percent").innerHTML = (per + "%");
}

function disablebtn() 
{
	document.getElementById("button2").disabled = true;
}

function my_confirm() {
    if( confirm("Are you sure you want to redeem?") ) {
        return true;
    }
    else {
        // do something 
        return false;
    }
}
