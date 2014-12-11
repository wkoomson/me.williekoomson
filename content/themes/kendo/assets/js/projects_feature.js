var projects = [
	{
		"project_title": "The Undergraduate Times",
		"project_description": "First online news publication run by undergraduates, for undergraduates",
		"project_link": "http://ugtimes.com",
		"project_role": "Android Developer",
		"background_color": "#242524",
		"accent_color": "#046D3C",
		"text_color": "#FFFFFF",
		"font": "Georgia",
		"svg_source": ""
	},
	{
		"project_title": "PackItTrackIt",
		"project_description": "Track your packages from the web and mobile, with notifications and automatic adding",
		"project_link": "https://github.com/wkoomson/PackItTrackIt",
		"project_role": "Lead Developer (Android/Web)",
		"background_color": "#FFC107",
		"accent_color": "#FF6F00",
		"text_color": "#263238",
		"font": "Roboto",
		"svg_source": ""
	},
	{
		"project_title": "Medi",
		"project_description": "A groundbreaking interface for patient and healthcare provider interaction, on web and mobile",
		"project_link": "https://github.com/wkoomson/Medi",
		"project_role": "Lead Developer (Android/Web)",
		"background_color": "#03A9F4",
		"accent_color": "#4A148C",
		"text_color": "#FFFFFF",
		"font": "Helvetica Neue",
		"svg_source": ""
	}
]

function projectFeature (data) {
	for (var i = data.length - 1; i >= 0; i--) {
		$("section.projects_feature").velocity({
			backgroundColor: data[i].background_color
		},{
			easing: "easeInOutCubic",
			duration: "normal"
		});

		$("#project_title.projects_feature").html(data[i].project_title)
			.css({
				"color": data[i].accent_color,
				"font-family": data[i].font
			});
		$("#project_description.projects_feature").html(data[i].project_description)
			.css({
				"color": data[i].text_color,
				"font-family": data[i].font
			});
		$("#project_link.projects_feature").html(data[i].project_link)
			.css({
				"color": data[i].accent_color,
				"font-family": data[i].font
			});
		$("#project_role.projects_feature").html(data[i].project_role)
			.css({
				"color": data[i].text_color,
				"font-family": data[i].font
			});
	};
}