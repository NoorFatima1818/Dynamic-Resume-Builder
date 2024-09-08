
interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
  }
  
  document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const workExperienceElement = document.getElementById('workExperience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
  
    console.log(nameElement, emailElement, educationElement, workExperienceElement, skillsElement);
  
    const formData: ResumeData = {
      name: nameElement.value,
      email: emailElement.value,
      education: educationElement.value,
      workExperience: workExperienceElement.value,
      skills: skillsElement.value,
    };
  
    console.log(formData);
  
    generateResume(formData);
  });
  
  function generateResume(data: ResumeData) {
    const resumeDiv = document.getElementById('resume')!;
    resumeDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      <h3>Education</h3>
      <p>${data.education}</p>
      <h3>Work Experience</h3>
      <p>${data.workExperience}</p>
      <h3>Skills</h3>
      <p>${data.skills}</p>
    `;
  }
  