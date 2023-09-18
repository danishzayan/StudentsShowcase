const userProfiles = [
    {
        username: 'user1',
        name: 'John Doe',
        work: 'Web Developer',
        imageUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
        skills: [
            'UI / UX', 'Front End Development', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node'
        ] ,
    },
    {
        username: 'user1',
        name: 'John Doe',
        work: 'Web Developer',
        imageUrl: 'https://randomuser.me/api/portraits/women/57.jpg', 
        skills: [
            'UI / UX', 'Front End Development', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node'
        ], 
    },
];

// Function to display user-contributed profile cards
function displayUserContributions() {
    const cardContainer = document.getElementById('card-container');

    userProfiles.forEach((profile) => {
        // Create a profile card div
        const card = document.createElement('div');
        card.classList.add('card-box');

        // Create the profile card content
        card.innerHTML = `
            <span class="pro">PRO</span>
            <img class="round" src="${profile.imageUrl}" alt="user" />
            <h3>${profile.name}</h3>
            <h6>New York</h6>
            <p>${profile.work}</p>
            <div class="buttons">
                <button class="primary">
                    Message
                </button>
                <button class="primary ghost">
                    Hire Me
                </button>
            </div>
            <div class="skills">
                <h6>Skills</h6>
                <ul>
                    ${profile.skills.map((skill) => `<li>${skill}</li>`)}
                </ul>
            </div>
        `;


        // Append the profile card to the container
        cardContainer.appendChild(card);
    });
}

// Call the function to display user contributions when the page loads
window.addEventListener('load', displayUserContributions);