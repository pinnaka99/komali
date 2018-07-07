function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("applicaton/json");
  xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status == "200") {
  callback(xhr.responseText);
}
};
xhr.send(null);
}

getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
}
)
var child2=document.querySelector(".chilTwo");
function career(careerInfo){
  var carhead=document.createElement("h2");
  child2.appendChild(carhead);
  var carhr=document.createElement("hr");
  child2.appendChild(carhr);
  carhead.textContent="career objective";
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  child2.appendChild(ch);
}
function education(edu){
var eduhead=document.createElement("h3");
eduhead.textContent="education qualification";
child2.appendChild(eduhead);
var eduhr=document.createElement("hr");
child2.appendChild(eduhr);
var edutable=document.createElement("table");
edutable.border="1";
var tr1="<tr><td>degree</td><td>institute</td><td>year</td></tr>";
//edutable.innerHTML=tr1;
var tr2="";

for(var i=0;i<edu.length;i++){
tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td></tr>";
edutable.innerHTML=tr1+tr2;

}


child2.appendChild(edutable);

}
function skills(skill) {
  var skilhd=document.createElement("h3");
  skilhd.textContent="skills";

  var ul=document.createElement("ul");
  child2.appendChild(ul);

for(var i=0;i<skill.length;i++){
  var li=document.createElement("li");
  li.textContent=skill[i].title+":"+skill[i].content;
  ul.appendChild(li);

}


}
