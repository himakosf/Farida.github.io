
const volunteerButton = document.getElementById('volunteerButton');

volunteerButton.addEventListener('click', () => {
   
    const volunteerForm = prompt('Please enter your contact information to volunteer:');
    
    if (volunteerForm) {
        alert('Thank you for volunteering! We will contact you shortly.');
    }
});


const additionalDetailsElement = document.getElementById('additionalDetails');


additionalDetailsElement.addEventListener('mouseenter', () => {
    
    alert('Displaying additional charity details!');
});
