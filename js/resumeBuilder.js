/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Mirazam Usmanov",
	"role": "Systems Engineer",
	"email": "usmanov647@gmail.com",
	"mobile": "407-967-6543",
	"gitHub": "usmanov647",
	"location": "Seattle",
	"pictureUrl": "images/pic2.jpg",
	"welcomeMessage": "Hello! Welcome to my resume.",
	"skills": ["Programming", "Hardware design", "RF design"]
};

var work = {
	"jobs": [
		{
			"position": "Flight Controls Engineer",
			"employer": "Boeing Commercial Airplanes",
			"years": "July 2018 - present",
			"city": "Everett",
			"title": "Engineer II",
			"description": ["• Lead efforts on product development and design of integrated flight control system",
							"• Develop system and component level requirements for airplane flight control electronics and software",
							"• Analyze problem reports, implement design changes, work with suppliers to correct implementation errors",
							"• Implement and execute interlock, data load, configuration/compatibility test cases on integrated flight control electronics",
							"• Provide engineering support for the 777X Airplane 1 prototype initial system power-on and ground test"
						]
		},				
		{
			"position": "System Integration Engineer",
			"employer": "Seagate Technology",
			"years": "May 2015 - June 2018",
			"city": "Colorado Springs",
			"title": "Senior Engineer",
			"description": ["• Lead internal/joint product qualification projects, system level functional/performance validation for OEM customers",
							"• Designed, implemented and executed server qualification test plans on Gen.2/3 SATA/SAS/NVMe SSD products",
							"• Lead efforts on product launch, implement customer requests, represent the engineering team in front of customers",
							"• Developed, implemented and maintained automation scripts for SSD product qualification and reliability stress tests",
							"• Discovered firmware defects, validated bench and release firmware code on SATA/SAS/NVMe SSD product prototypes",
							"• Perform analysis and validation of PCIe/SATA/SAS/NVMe protocol compliance, analyze system/device error logs"
						]
		}
	]
};

var project = {
	"projects": [
		{
			"name": "Home Automation System",
			"type": "Electronics",
			"completed": true,
			"years": 2 
		},
		{
			"name": "Autonomous Hexacopter",
			"type": "Avionics",
			"completed": true,
			"years": 0.5
		}

	]
};

var education = {
	"schools": [
		{
			"school": "University of Central Florida",
			"city": "Orlando",
			"majors": ["Computer Engineering", "Electrical Engineering"],
			"minors": ["Computer Science"],
			"graduation": 2013,
			"degree": "BS",
			"onlineCourse": "Networks and Systems"
		},
		{
			"school": "University of Central Florida",
			"city": "Orlando",
			"majors": ["Computer Engineering"],
			"minors": ["none"],
			"graduation": 2015,
			"degree": "MS",
			"onlineCourse": "Communication Theory"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedGit = HTMLgithub.replace("%data%", bio.gitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureUrl);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedGit);
$("#header").append(formattedLocation);
$("#header").append(work["position"]);
$("#header").append(education.name);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length > 0){
	for(skill in bio.skills){
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills-h3:last").append(formattedSkills);
	}

}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
	$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);

	for (item in work.jobs[job].description){
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[item]);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}