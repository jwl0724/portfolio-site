// FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

const swingProjectContent = ['Swing', 'Endless Runner Arcade Game', './images/swingProject.PNG', './images/swingProject.gif', 
'Swing is an early project I made as the capstone project to the CS50x online course. It is an endless runner game inspired by the late Flappy Bird, where you must use your grapple hook to swing through the gaps and accumulate as many points as possible. I developed this game using the Pygame library, where I implemented all game logic and created all art assets from scratch.'];

const perfectDarknessProjectContent = ['Perfect Darkness', 'Turn-based Horror Game', 'TODO', 'TODO', 
'Perfect Darkness (Terrible name I know...) is a horror game I made as the final project for one of my courses at BCIT. It is turned-based game where you are tasked with eliminating a monster that is significantly stronger than you. You must scavage for loot in pure darkness in order to get strong enough to kill the monster, all while the creature is roaming about in the building you are in.'];

const unityTutorialContent = ['Kitchen Chaos Tutorial (In Development)', 'Co-op Party Game', 'TODO', 'TODO',
'Kitchen Chaos Tutorial is a Unity game project tutorial I have been following as a starting point to begin my own projects in Unity, credits to Code Monkey for the tutorial and art assets (https://unitycodemonkey.com/).'];

const lapsProjectContent = ['LAPS', 'Live Bus Tracking Webapp', 'TODO', 'TODO',
'LAPS is a webapp that provides real-time bus locations using TransLink\'s API. It is aimed at providing transit goers agency in their decision making process.'];

const discordBotProjectContent = ['Schedule Bot (In Development)', 'Discord Schedule Plan Bot', 'TODO', 'TODO',
'Schedule Bot is a Discord bot I created to help organize due dates at school. The bot aims to consolidate features useful for students into one place. Features include due date reminders, notes saving, checklist planners, etc.'];


// TODO:
// Populate each card dynamically using info in tuple
// Get screencap of every project with a brief gif of how it works
// Have image in the background of card, and text over it
// Have image start playing gif when hovered over it
// Complete header and footer CSS
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('container');
    renderCard(swingProjectContent, cardContainer);
    renderCard(perfectDarknessProjectContent, cardContainer);
    renderCard(unityTutorialContent, cardContainer);
    renderCard(lapsProjectContent, cardContainer);
    renderCard(discordBotProjectContent, cardContainer);
})