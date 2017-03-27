// Question 1
var studentName =[];

// Question 2
var studentName = new Array();

// Question 3
var arrayString = ["Hello","World","Osama"];

// Question 4
var arrayNumbers = [1,2,3,4,5];

// Question 5
var arrayBoolean = [true,false];

// Question 6
var arrayMixed = [true,"Shehzad",1005];

// Question 7
var mobileNetworks = ["Ufone","Zong","Mobilink","Warid","Telenor"];

// Question 8
 var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS",
"M. Phil.", "PhD"];
document.write("Qualifications: <br /><br />");
for(var i=0;i<qualification.length;i++)
{
document.write(i+1+ " ) " +qualification[i]+ "<br />");
}

// Question 9
var topMovies =[];
topMovies.push("Avengers: Age of Ultron");
topMovies.push("Spectre");
topMovies.push("Jurassic World");
topMovies.push("Inside Out");
document.write("Top Movies of 2015: <br /><br />");
for(var i=0;i<topMovies.length;i++)
{
document.write(i+1+ " ) " +topMovies[i]+ "<br />");
}
document.write("<br />Length of Array: "+topMovies.length);

// Question 10
var cars =["Alto","Corrolla","Civic","Passo"];
document.write("Favourite Cars: <br /><br />");
for(var i=0;i<cars.length;i++)
{
document.write(cars[i]+ ",");
}
var lastIndex =cars.length-1;
document.write("<br />First index of the array: "+0);
document.write("<br />Car at first index of the array: "+cars[0]);
document.write("<br />Last index of the array: "+((cars.length)-1));
document.write("<br />Car at last index of the array: "+cars[lastIndex]);

// Question 11
var student = ["Michael","John","Tony"];
var score = [320,230,480];
var totalMarks = 500;
for(var i=0;i<student.length;i++)
{
document.write("<br />Score of " +student[i]+ " is "+score[i]+ ". Percentage is "+(score[i]/totalMarks)*100 + " %");

}

// Question 12
var colors = ["Red","Yellow","Green"];
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.unshift(prompt("what color u wants to add to the beginning"));
document.write("<br><br> <b>Updated Array: Element Add in the beginning</b> <br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.push(prompt("what color u wants to add to the end"));
document.write("<br><br> <b>Updated Array: Element Add in the End </b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.unshift(prompt("Add Color in the Beggining"));
colors.unshift(prompt("AGAIN Add Color in the Beggining"));
document.write("<br><br> <b/>Updated Array: Element Add in the beginning</b> <br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.shift();
document.write("<br><br><b> Updated Array: Deleted First Color</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
colors.pop();
document.write("<br><br> <b>Updated Array: Deleted Last Color</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
var index = prompt("which index u wants to add a color ");
var newColor = prompt("color name ?");
colors.splice(index,0,newColor);
document.write("<br><br><b> Updated Array: Add Colors in specified location</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}
index = prompt("which index u wants to delete colors? ");
var no =  prompt("how many colors u wants to delete?");
colors.splice(index,no);
document.write("<br><br> <b>Updated Array: Delete Colors in specified location</b><br>");
for(var i=0;i<colors.length;i++)
{
document.write(colors[i]+ ",");
}


// Question 13
var score = [320,230,480,120];
document.write("<b>Score of Students: </b><br>");
for(var i=0;i<score.length;i++)
{
document.write(score[i]+ ",");
}
score.sort();
document.write("<br><b>Ordered Scores of Students: </b><br>");
for(var i=0;i<score.length;i++)
{
document.write(score[i]+ ",");
}

// Question 14
var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("<br><b>Fruits List: </b><br>");
for(var i=0;i<fruits.length;i++)
{
document.write(fruits[i]+ ",");
}
fruits.sort();
document.write("<br><b>Ordered Fruits List: </b><br>");
for(var i=0;i<fruits.length;i++)
{
document.write(fruits[i]+ ",");
}

// Question 15
var cities =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities =cities.slice(2,5);
document.write("<br><b>Cities List: </b><br>");
for(var i=0;i<cities.length;i++)
{
document.write(cities[i]+ ",");
}
document.write("<br><b>selected Cities List: </b><br>");
for(var i=0;i<selectedCities.length;i++)
{
document.write(selectedCities[i]+ ",");
}

// Question 16
var arr = ["This ", " is ", " my ", " cat"];

document.write("<br><b>Array: </b><br>");
for(var i=0;i<arr.length;i++)
{
document.write(arr[i]+ ",");
}
var str = arr.join(" ");
document.write("<br><b>String: </b><br>"+str);

// Question 17
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("<b>Devices: </b><br>");
for(var i=0;i<devices.length;i++)
{
document.write(devices[i]+ ",");
}

    document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());
 document.write("<br>Out:<br> ");
document.write(devices.shift());

// Question 18
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("<b>Devices: </b><br>");
for(var i=0;i<devices.length;i++)
{
document.write(devices[i]+ ",");
}

    document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());
 document.write("<br>Out:<br> ");
document.write(devices.pop());


// Question 19
var manufactures = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select> <option>"+manufactures[0]+"</option><option>"+manufactures[1]+"</option> <option>"+manufactures[2]+"</option> <option>"+manufactures[3]+"</option><option>"+manufactures[4]+"</option> <option>"+manufactures[5]+"</option></select>");

// Question 20

var multiArray = [
  [],
  
];


// Question 21
var multiArray = [
  [0,1, 2,3],
  [1,0,1,2],
  [2,1,0,1]
];