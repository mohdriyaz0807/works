var section=create_class('div','container');

var gray=create_class('div','gray');
var pic= create_img('empty-profile-picture.png','pic');

var lightgray=create_class('div','lightgray');
lightgray.innerHTML="<input type='text' class='name' value='BRIAN DUDEY'>"

var contact_area=create_class('div','contact');
var contact=create_class('p','p');
contact.innerHTML="N Damen Avenue, Chicago 9999|999-999-9999|hello@kickresume.com|www.kickresume.com";
var line=create_class('hr');

var row=create_class('div','row');
var column1=create_class('div','column1');

var Profile=create_class('h1');
Profile.innerHTML='<img src="profile_icon.svg" class="pro">Profile';

var profile_content=create_class('p');
profile_content.innerHTML="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, and an alliteration advocate";

var Skills=create_class('h1');
Skills.innerHTML='<img src="badge.svg" class="pre">Skills';

var Technical_Skills=create_class('div','center');
Technical_Skills.innerHTML='Technical Skills';
var table1=create_class('table');
var tr1=create_tr('Javascript','80');
var tr2=create_tr('CSS','80');
var tr3=create_tr('HTML','50');
var tr4=create_tr('React','80');
var tr5=create_tr('Redux','50');
var tr6=create_tr('Mongo','100');


var Additional_Skills=create_class('div','center');
Additional_Skills.innerHTML='Additional Skills';
var table2=create_class('table');
var tr7=create_tr('Project Management','80');
var tr8=create_tr('Requirement','80');
var tr9=create_tr('Buiness Development','50');
var tr10=create_tr('Editing','80');
var tr11=create_tr('Fundraising','50');


var Work_experience=create_class('h1');
Work_experience.innerHTML='<img src="job-seeker.svg" class="pre">Work experience';

var table3=create_class('table','event');
var tr12=create_trs('<b>Event manager</b>','03/2014-02/2017');
var tr13=create_trs('C3 presents wahington DC','')

var first_work_content=create_class('ul');
var first_work_points=create_list(first_work_content,3);
first_work_points[0].innerHTML="Lead and execute all phases of event planning and production spaning committee Recruitment,training,vendor relationships and on-suite facilitation.";
first_work_points[1].innerHTML="Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civicevent to date, the United State of Women.";
first_work_points[2].innerHTML="Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.";


var column2=create_class('div','column2');

var Work_experience2=create_class('h1');
Work_experience2.innerHTML='<img src="job-seeker.svg" class="pre">Work experience';

var table4=create_class('table','event');
var tr14=create_trs('<b>Community relationships<br> Manager</b>','06/2011 - 01/2014');
var tr15=create_trs('Gay 3. Lesh‘an Elder Housing, Los Angeles','')

var second_work_content=create_class('ul');
var second_work_points=create_list(second_work_content,4);
second_work_points[0].innerHTML="Arranging presentations and pitch deck.";
second_work_points[1].innerHTML="Designing a PR plan and establishing important focus points.";
second_work_points[2].innerHTML="Designing, creating and managing content across multiple communication platforms.";
second_work_points[3].innerHTML="Building relationships with key media players.";

var Education=create_class('h1');
Education.innerHTML='<img src="graduation-hat.svg" class="pro">Education';
var table5=create_class('table','event');
var tr16=create_trs('<b>Englnurlng innurdan <br>Program</b>','06/2018 - 11/2018');
var tr17=create_trs('Thinklul CthaUD, IL','')

var cont=create_class('p');
cont.innerHTML="Proiect-locused inteisive program wth emphas's on Mongo, apiece. React, and J5 vaScript (MERN) lechnlcalslad.";
var first_edu_content=create_class('ul');
var first_edu_points=create_list(first_edu_content,3);
first_edu_points[0].innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";
first_edu_points[1].innerHTML='Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and MongoDB were used to createa backend that stores user data.';
first_edu_points[2].innerHTML="Developed a concierge app,. 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.";

var table6=create_class('table','event');
var tr18=create_trs('<b>BA. English</b>','06/2018 - 11/2018');
var tr19=create_trs('University of Caifomia. Los Angles','')

var second_edu_content=create_class('ul');
var second_edu_points=create_list(second_edu_content,1);
second_edu_points[0].innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";


document.body.append(section,row);
section.append(gray,contact_area,line)
gray.append(pic,lightgray)
contact_area.append(contact)
table1.append(tr1,tr2,tr3,tr4,tr5,tr6)
Technical_Skills.append(table1)
table2.append(tr7,tr8,tr9,tr10,tr11)
Additional_Skills.append(table2)
table3.append(tr12,tr13)
Work_experience.append(table3)
column1.append(Profile,profile_content,Skills,Technical_Skills,Additional_Skills,Work_experience,first_work_content)
table4.append(tr14,tr15)
table5.append(tr16,tr17)
table6.append(tr18,tr19)
column2.append(Work_experience2,table4,second_work_content,Education,table5,cont,first_edu_content,table6,second_edu_content)


row.append(column1,column2)








function create_tr(name,range){
    var tr=document.createElement('tr')
    var course=document.createElement('td')
    course.innerHTML=name
    var range_count=document.createElement('td')
    range_count.innerHTML='<input type="range" value=range>'

    tr.append(course,range_count)
    return tr;
}

function create_trs(name,year){
    var tr=document.createElement('tr')
    var course=document.createElement('td')
    course.innerHTML=name
    if(year){
    var range=document.createElement('td')
    range.innerHTML=year
    range.setAttribute="style=text-align:right";
    }
    tr.append(course,year)
    return tr;
}


function create_class(element,className) {
    var elem=document.createElement(element);
    if(className) {
        elem.setAttribute('class',className);
    }
    return elem;
}
function create_img(link,clName) {
    var image=document.createElement('img');
    image.setAttribute('src',link);
    if(clName) {
        image.setAttribute('class',clName);
    }
    return image;
}
function create_list(element,number) {
    var array=[];
    for(var itr=0;itr<number;itr++) {
        array.push(document.createElement('li'));
        element.appendChild(array[itr]);
    }
    return array;
}
function create_label(name) {
    var value=document.createElement('label');
    value.innerHTML=name;
    return value;
}
