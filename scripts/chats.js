const Users = {
	"Snergle": {
		"prompt1": ["In a parallel universe, I'm definitely...", "A polar bear who noms on fish all day"],
		"prompt2": ["One rule of society I'd totally rewrite...", "SUPERS MUST HAVE A SET MENU! I NEED TO KNOW THE MOZZIE STICK SCHEDULE."],
		"prompt3": ["A letter to future me would definitely include...", "I hope you made 1 million dollars, my lakehouse dreams are counting on it."],
		"checkbox": ["Chronically Online", "Punctual", "Easygoing", "Outgoing", "Memecentral"],
		"profile": {
			"color": "#738cff",
			"accessory": "images/prof_customization/glasses.svg"
		},
		"selectedPrompts": [
			"In a parallel universe, I'm definitely...",
			"One rule of society I'd totally rewrite...",
			"A letter to future me would definitely include..."
		],
		"password": "123"
	},
	"Bun Bo Hue": {
		"prompt1": ["The soundtrack of my life would definitely include...", "Call Me Maybe by Carly Rae Jepsen (Lawnmower Edition)"],
		"prompt2": ["If my life were a meme right now, it would be...", "The 'huh' cat."],
		"prompt3": ["If my personality were a cocktail, it would be called...", "Le Fat Bastard, not a cocktail but the hippo doing a handstand just resonates with me."],
		"checkbox": ["Easily Peer-Pressured", "Listener", "Honest", "Adventurous"],
		"profile": {
			"color": "#bd4fb0",
			"accessory": "images/prof_customization/bow.svg"
		},
		"selectedPrompts": [
			"The soundtrack of my life would definitely include...",
			"If my life were a meme right now, it would be...",
			"If my personality were a cocktail, it would be called..."
		],
		"password": "123"
	},
	"Ooonga Boonga": {
		"prompt1": ["If I could have one superpower, it would be...", "Absolutely decimating Earth's population of fish and having a infinite stomach to eat sushi 24/7 (sorry fish welfare, but me like fish)."],
		"prompt2": ["In a parallel universe, I'm definitely...", "A hyrax. I will dig my way into people's houses, give them the bombastic side eye, and start screaming 'AWAWA!'"],
		"prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "Snoop Dogg, Martha Stewart, and Bob Ross. And instead of wine, it will a 'not-unexpected, but wholesome' blunt rotation."],
		"checkbox": ["Sporty", "Optimistic", "Empathetic", "Chronically Online"],
		"profile": {
			"color": "#668a75",
			"accessory": "images/prof_customization/mustache.svg"
		},
		"selectedPrompts": [
			"If I could have one superpower, it would be...",
			"In a parallel universe, I'm definitely...",
			"Three dinner guests, unlimited wine, and chaos ensues..."
		],
		"password": "123"
	}
}


  

document.addEventListener('DOMContentLoaded', function() {
	// Resets and refreshes the chat
	localStorage.removeItem('messages');
	// Clear out prompts so they’ll re-randomize on refresh 
	localStorage.removeItem('prompts');
	
	console.log("Chat.js loaded!");

	const chatList = document.getElementById('chatList');
	const inputField = document.getElementById('userInput');
	const sendIcon = document.querySelector('.send-icon');
	const msgPage = document.querySelector('.msg-page');
	const nameElement = document.querySelector('.active-user p');
	const reportBtn = document.querySelector('.report-btn');
	const unmatchBtn = document.querySelector('.unmatch-btn');

	let currentUser = null;
	let storedMessages = {};
	let storedPrompts = {};

	// Load stored messages and prompts from localStorage 
	if (localStorage.getItem('messages')) {
		storedMessages = JSON.parse(localStorage.getItem('messages'));
	}

	if (localStorage.getItem('prompts')) {
		storedPrompts = JSON.parse(localStorage.getItem('prompts'));
	}



	function getRandomPrompt(userData){
		const keys = ['prompt1', 'prompt2', 'prompt3'];
		const randomKey = keys[Math.floor(Math.random() * keys.length)];
		return userData[randomKey];
	}

	function renderUserToSidebar(userName) {
		const li = document.createElement('li');
		li.textContent = userName;
		li.addEventListener('click', () => loadChat(userName));
		chatList.appendChild(li);
	}

	for (const userName in Users) {
		renderUserToSidebar(userName);
	}
	

	if (reportBtn) {
		reportBtn.addEventListener('click', () => {
			alert("This user has been reported. Thank you.");
		});
	}

	if (unmatchBtn) {
		unmatchBtn.addEventListener('click', () => {
		alert("You have unmatched with this user.");
		// What now? clear chat, remove from localStorage, redirect..?
		});
	}

	function loadChat(userName){
		// Mark which user is active
		currentUser = userName;

		const userData = Users[userName];

		// Clear old chat
		msgPage.innerHTML = '';
		inputField.value = '';

		// Update header
		if (nameElement) nameElement.textContent = userName;

		let promptAnswer;
		
		if (storedPrompts[userName]) {
			promptAnswer = storedPrompts[userName];
		} else {
			promptAnswer = getRandomPrompt(userData);
			storedPrompts[userName] = promptAnswer;
			localStorage.setItem('prompts', JSON.stringify(storedPrompts));
		}
		
		const [prompt, answer] = promptAnswer;

	

		// Show intro prompt
		const msgHTML = `
			<div class="received-chats">
				<div class="received-chats-img">
					<img src="images/profile.png" />
				</div>
				<div class="received-msg">
					<div class="received-msg-inbox">
					<p><strong>${prompt}</strong><br>${answer}</p>
					<span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
					</div>
				</div>
			</div>`;
		msgPage.insertAdjacentHTML('beforeend', msgHTML);

		// re-load this user's past messages

		const messages = storedMessages[userName] || [];
		messages.forEach(addMessageToChat);
		// scroll to bottom
  		msgPage.scrollTop = msgPage.scrollHeight;
	}

		
	function addMessageToChat({ text, time }) {
		const msgHTML = `
			<div class="outgoing-msg">
			  <div class="outgoing-chats-msg">
				<p>${text}</p>
				<span class="time">${time}</span>
			  </div>
			</div>`;
		msgPage.insertAdjacentHTML('beforeend', msgHTML);
	}

	function handleSend() {
		const message = inputField.value.trim();
		if (message !== '' && currentUser) {
			const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' })
			const newMsg = { text: message, time};

			if (!storedMessages[currentUser]) {
				storedMessages[currentUser] = [];
			}

			// Save to localStorage
			storedMessages[currentUser].push(newMsg);
			localStorage.setItem('messages', JSON.stringify(storedMessages))

			addMessageToChat(newMsg);
      		inputField.value = '';
      		msgPage.scrollTop = msgPage.scrollHeight;
		}
	}

	sendIcon.addEventListener('click', handleSend);
  	inputField.addEventListener('keydown', e => {
    	if (e.key === 'Enter') handleSend();
  	});


	// Auto-load first user
	const firstUser = Object.keys(Users)[0];
	if (firstUser) loadChat(firstUser);

});