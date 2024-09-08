document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var educationElement = document.getElementById('education');
    var workExperienceElement = document.getElementById('workExperience');
    var skillsElement = document.getElementById('skills');
    console.log(nameElement, emailElement, educationElement, workExperienceElement, skillsElement);
    var formData = {
        name: nameElement.value,
        email: emailElement.value,
        education: educationElement.value,
        workExperience: workExperienceElement.value,
        skills: skillsElement.value,
    };
    console.log(formData);
    generateResume(formData);
});
function generateResume(data) {
    var resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = "\n      <h2>".concat(data.name, "</h2>\n      <p>Email: ").concat(data.email, "</p>\n      <h3>Education</h3>\n      <p>").concat(data.education, "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(data.workExperience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(data.skills, "</p>\n    ");
}
