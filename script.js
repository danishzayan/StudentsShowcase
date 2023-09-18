// Define an array of user profiles (you can fetch this data from a backend or JSON file)
const userProfiles = [
    {
        username: 'user1',
        name: 'John Doe',
        bio: 'Web Developer',
        imageUrl: 'contributions/user1/profile.jpg', // Update with the actual image path
        // Add any other profile details you want to display
    },
    {
        username: 'user2',
        name: 'Jane Smith',
        bio: 'Front-end Developer',
        imageUrl: 'contributions/user2/profile.jpg', // Update with the actual image path
        // Add any other profile details you want to display
    },
    // Add more user profiles as needed
];

// Function to display user-contributed profile cards
function displayUserContributions() {
    const cardContainer = document.getElementById('card-container');

    userProfiles.forEach((profile) => {
        // Create a profile card div
        const card = document.createElement('div');
        card.classList.add('profile-card');

        // Create the profile card content
        card.innerHTML = `
            <img src="${profile.imageUrl}" alt="${profile.name}'s profile picture">
            <h2>${profile.name}</h2>
            <p>${profile.bio}</p>
            <!-- Add more profile details here as needed -->
        `;

        // Append the profile card to the container
        cardContainer.appendChild(card);
    });
}

// Call the function to display user contributions when the page loads
window.addEventListener('load', displayUserContributions);
