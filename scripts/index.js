// FORMAT: projectName, projectGenre, projectImageStatic, projectImageGif, projectDescription

// card content for each project
const swingProjectContent = ['Swing', 'Endless Runner Arcade Game', './images/swingProject.PNG', './images/swingProject.gif', 
'Swing is an early project I made as the capstone project to the CS50x online course. It is an endless runner game inspired by the late Flappy Bird, where you must use your grapple hook to swing through the gaps and accumulate as many points as possible. I developed this game using the Pygame library, where I implemented all game logic and created all art assets from scratch.'];

const perfectDarknessProjectContent = ['Perfect Darkness', 'Turn-based Horror Game', './images/perfectDarkness.png', '', 
'Perfect Darkness (Terrible name I know...) is a horror game I made as the final project for one of my courses at BCIT. It is turned-based game where you are tasked with eliminating a monster that is significantly stronger than you. You must scavage for loot in pure darkness in order to get strong enough to kill the monster, all while the creature is roaming about in the building you are in.'];

const lapsProjectContent = ['LAPS', 'Live Bus Tracking Webapp', './images/lapsProject.jpg', '',
'LAPS is a webapp that provides real-time bus locations using TransLink\'s API. It is aimed at providing transit goers agency in their decision making process.'];

const discordBotProjectContent = ['Schedule Bot (In Development)', 'Discord Schedule Plan Bot', './images/discordBotProject.png', '',
'Schedule Bot is a Discord bot I created to help organize due dates at school. The bot aims to consolidate features useful for students into one place. Features include due date reminders, notes saving, checklist planners, etc.'];

const pawsitiveHackathonProjectContent = ['PAWsitive', 'Mobile Webapp Game', './images/PAWsitiveHomePage.png', 'TODO',
'PAWsitive is a project submission for QDS Hackathon 2024, it was designed to help promote the development of healthy routines within players by gamifying such behaviors. The game presents dailies for players, in which players do randomly generated healthy activities to get in-game currency. This currency can then be spent within either an in-game shop, or players can choose to use the currency for gacha.'
]

// TODO:
// Get gif of PAWsitive project
// Have image start playing gif when hovered over it
document.addEventListener('DOMContentLoaded', async () => {

    // hide DOM elements when they are still not done loading
    document.body.style.backgroundColor = '#CBD5E1';
    document.body.style.visibility = 'hidden';
    const cardContainer = document.getElementById('container');

    // create objects for each card
    let swingProject = new card(swingProjectContent);
    let perfectDarknessProject = new card(perfectDarknessProjectContent);
    let lapsProject = new card(lapsProjectContent);
    let discordBotProject = new card(discordBotProjectContent);
    let pawsitiveHackathonProject = new card(pawsitiveHackathonProjectContent);

    // render the cards using card objects
    await renderCard(swingProject, cardContainer);
    await renderCard(pawsitiveHackathonProject, cardContainer);
    await renderCard(perfectDarknessProject, cardContainer);
    await renderCard(lapsProject, cardContainer);
    await renderCard(discordBotProject, cardContainer);
    
    // show DOM elements once everything is done loading
    fadeIn(document.body, "visible", 0.025);
})