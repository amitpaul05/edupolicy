import "./contact.scss"

export function onLoad() {
  const contactForm = document.querySelector('.webform-submission-contact-form');
  if (!contactForm) return;
  if(contactForm) {
    const p = document.createElement("p");
    p.textContent = "Have a question about AI ethics or policy development? We're here to help.";
    contactForm.before(p);
  }

  const consultationForm = document.querySelector('.webform-submission-schedule-consultation-form')
  if (!consultationForm) return;
  if(consultationForm) {
    const p = document.createElement("p");
    p.textContent = "Book a consultation with our experts. A Zoom meeting will be automatically generated.";
    consultationForm.before(p);
  }
}

// set onLoad
document.addEventListener("DOMContentLoaded", onLoad);
