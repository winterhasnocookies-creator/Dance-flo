const SONGS = [

	{

		title: "TEACH ME DOUGIE",

		artist: "BOUDHA CREW REMIX",

		bpm: 85,

		url: "https://dl.dropboxusercontent.com/scl/fi/wub4nwe9v57udxwf7dojc/Teach-Me-How-to-Dougie-Steelies-Of-Boudha-Crew-Dance-Cover-Choreography-by-MannexManhattan.mp3?rlkey=spzt7op2ctq2f5ct2u7gy2h35",

		videoUrl: null,

		notes: [

			{ time: 500, lane: 0 },

			{ time: 1000, lane: 1 },

			{ time: 1500, lane: 2 },

			{ time: 2000, lane: 3 },

			{ time: 2500, lane: 0 },

			{ time: 3000, lane: 3 },

			{ time: 3500, lane: 1 },

			{ time: 4000, lane: 2 },

		]

	},

	{

		title: "TALA",

		artist: "SARAH GERONIMO",

		bpm: 120,

		url: "https://dl.dropboxusercontent.com/scl/fi/f0qt7uatlx5zgc52bapzg/Talamov.m4a?rlkey=p126461ygxumqhmr3ieqvao7k",

		videoUrl: "https://dl.dropboxusercontent.com/scl/fi/kh4orraz68qiwkoz1ce9t/Tala.mov?rlkey=dfi25pobgofx743ohxd76xfl4&dl=1",

		notes: [

			{ time: 5000, lane: 2 },

			{ time: 6000, lane: 1 },

			{ time: 8000, lane: 1 },

			{ time: 9000, lane: 1 },

			{ time: 10000, lane: 3 },

			{ time: 11000, lane: 0 },

			{ time: 11250, lane: 1 },

			{ time: 15000, lane: 0 },

			{ time: 16000, lane: 0 },

			{ time: 16250, lane: 1 },

			{ time: 17000, lane: 0 },

			{ time: 17250, lane: 0 },

			{ time: 17500, lane: 0 },

			{ time: 17750, lane: 0 },

			{ time: 19000, lane: 3 },

			{ time: 19250, lane: 0 },

			{ time: 20000, lane: 3 },

			{ time: 20250, lane: 0 },

			{ time: 20500, lane: 3 },

			{ time: 20750, lane: 0 },

			{ time: 21000, lane: 0 },

			{ time: 23000, lane: 2 },

			{ time: 23250, lane: 2 },

			{ time: 24000, lane: 3 },

			{ time: 24250, lane: 0 },

			{ time: 26000, lane: 1 },

			{ time: 26250, lane: 1 },

			{ time: 26500, lane: 1 },

			{ time: 26750, lane: 1 },

			{ time: 29000, lane: 0 },

			{ time: 29250, lane: 3 },

			{ time: 31000, lane: 0 },

			{ time: 31250, lane: 3 },

			{ time: 32000, lane: 3 },

			{ time: 33000, lane: 2 },

			{ time: 33250, lane: 1 },

			{ time: 34000, lane: 0 },

			{ time: 34250, lane: 3 },

			{ time: 34500, lane: 0 },

			{ time: 34750, lane: 0 },

			{ time: 35000, lane: 3 },

			{ time: 35250, lane: 0 },

			{ time: 38000, lane: 2 },

			{ time: 38250, lane: 1 },

			{ time: 39000, lane: 1 },

			{ time: 39250, lane: 1 },

			{ time: 39500, lane: 1 },

			{ time: 39750, lane: 1 },

			{ time: 42000, lane: 2 },

			{ time: 42250, lane: 3 },

			{ time: 42500, lane: 0 },

			{ time: 42750, lane: 0 },

			{ time: 43000, lane: 0 },

			{ time: 44000, lane: 0 },

			{ time: 44250, lane: 3 },

			{ time: 44500, lane: 0 },

			{ time: 44750, lane: 0 },

			{ time: 48000, lane: 2 },

			{ time: 48250, lane: 1 },

			{ time: 48500, lane: 3 },

			{ time: 49000, lane: 3 },

			{ time: 49250, lane: 3 },

			{ time: 49500, lane: 3 },

			{ time: 52000, lane: 0 },

			{ time: 53000, lane: 3 },

			{ time: 53250, lane: 0 },

			{ time: 53500, lane: 2 },

			{ time: 53750, lane: 1 },

			{ time: 54000, lane: 1 },

		]

	},

	{ 

		title: "Game Boy", 

		artist: "KATSEYE", 

		bpm: 120, 

		url: "https://dl.dropboxusercontent.com/scl/fi/nipt1k1m3fwmeoxbz7rht/Gameboymov.m4a?rlkey=z83iete9sq0krthsglbs0dlqg",

		videoUrl: "https://dl.dropboxusercontent.com/scl/fi/y1fyimlb4pim72yoektag/Gameboy.mov?rlkey=bi2c4s591xg7nxg0js27gasee&dl=1",

		notes: []

	},

	{ 

		title: "Salamin Salamin", 

		artist: "Gentri", 

		bpm: 123, 

		url: "",

		videoUrl: "https://dl.dropboxusercontent.com/scl/fi/vp7gdy7sevfe62rvy41l2/Salamin-Salamin.mov?rlkey=jpbyevqfk3um61k0svxw2ir2w&dl=1",

		notes: []

	},

	{ 

		title: "Only Girl (In the World)", 

		artist: "Rihanna", 

		bpm: 126, 

		url: "", 

		videoUrl: null,

		notes: []

	},

];


class Game {

	constructor() {

		this.canvas = document.getElementById('bg-canvas');

		this.ctx = this.canvas.getContext('2d', { alpha: true });


		this.previewVisCanvas = document.getElementById('preview-vis');

		this.previewVisCtx = this.previewVisCanvas.getContext('2d');


		this.gameVideo = document.getElementById('game-video');


		this.selectedIndex = 0;

		this.isPlaying = false;

		this.isCountingDown = false;

		this.score = 0;

		this.combo = 0;

		this.stats = { perfect: 0, good: 0, bad: 0, miss: 0 };

		this.notes = [];

		this.startTime = 0;


		this.audioCtx = null;

		this.analyser = null;

		this.dataArray = null;


		this.previewAudio = null;

		this.previewSource = null;

		this.previewAnalyser = null;

		this.previewGain = null;

		this.previewDataArray = null;


		this.currentAudio = null;

		this.userActivated = false;

		this.currentScreenId = 'screen-title';


		// Settings

		this.musicVolume = 0.7;

		this.notesOpacity = 1.0;


		// Selection mode

		this.selectorLane = 1;

		this.showDebug = false;

		this.hitWindow = 120;

		this.floatingTexts = [];

		this.processedNotes = new Set();


		this.init();

	}


	init() {

		this.resize();

		window.addEventListener('resize', () => this.resize());

		this.renderSongs();


		document.addEventListener('mousemove', (e) => {

			this.handleMouseMovement(e.clientX);

		});


		window.addEventListener('keydown', (e) => {

			if (e.key === 'Escape' && this.currentScreenId === 'screen-game' && !e.repeat) {

				e.preventDefault();

				this.togglePause();

				return;

			}


			if (this.currentScreenId === 'screen-select' && !e.repeat) {

				if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {

					this.moveSelectionBy(-1);

					e.preventDefault();

				} else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {

					this.moveSelectionBy(1);

					e.preventDefault();

				} else if (e.key === 'Enter') {

					this.startGame();

					e.preventDefault();

				}

			}

		});


		// Handle carousel scroll

		const songList = document.getElementById('song-list');

		if (songList) {

			songList.addEventListener('wheel', (e) => {

				e.preventDefault();

				if (e.deltaY < 0) {

					this.moveSelectionBy(-1);

				} else {

					this.moveSelectionBy(1);

				}

			}, { passive: false });

		}


		window.addEventListener('keydown', (e) => {

			if (!this.isPlaying || this.isCountingDown) return;

			

			if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {

				this.selectorLane = Math.max(0, this.selectorLane - 1);

				e.preventDefault();

			} else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {

				this.selectorLane = Math.min(3, this.selectorLane + 1);

				e.preventDefault();

			}

		});


		this.bgLoop();

	}


	resize() {

		this.canvas.width = window.innerWidth;

		this.canvas.height = window.innerHeight;


		const wrap = document.getElementById('preview-vis-wrap');

		if (wrap) {

			const dpr = window.devicePixelRatio || 1;

			const rect = wrap.getBoundingClientRect();

			this.previewVisCanvas.width = Math.floor(rect.width * dpr);

			this.previewVisCanvas.height = Math.floor(rect.height * dpr);

			this.previewVisCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

		}

	}


	async initAudioAndStart() {

		if (this.userActivated) return;

		this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

		if (this.audioCtx.state === 'suspended') await this.audioCtx.resume();


		this.analyser = this.audioCtx.createAnalyser();

		this.analyser.fftSize = 128;

		this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);


		this.previewAnalyser = this.audioCtx.createAnalyser();

		this.previewAnalyser.fftSize = 128;

		this.previewDataArray = new Uint8Array(this.previewAnalyser.frequencyBinCount);

		this.previewGain = this.audioCtx.createGain();

		this.previewGain.gain.value = 0.35;


		this.userActivated = true;

		this.showScreen('screen-main');

	}


	showScreen(id) {

		const oldScreen = document.getElementById(this.currentScreenId);

		const newScreen = document.getElementById(id);


		if (oldScreen) {

			oldScreen.classList.remove('active');

			oldScreen.style.display = 'none';

		}


		if (newScreen) {

			newScreen.style.display = 'flex';


			const visWrap = document.getElementById('preview-vis-wrap');

			if (visWrap) {

				visWrap.style.display = (id === 'screen-select') ? 'block' : 'none';

			}


			const items = newScreen.querySelectorAll('.stagger-item');

			items.forEach(item => {

				item.style.animation = 'none';

				void item.offsetWidth;

				item.style.animation = '';

			});


			newScreen.classList.add('active');

		}


		if (this.currentScreenId === 'screen-select' && id !== 'screen-select') {

			this.stopPreview();

		}


		this.currentScreenId = id;

	}


	renderSongs() {

		const list = document.getElementById('song-list');

		if (!list) return;

		

		list.innerHTML = '';

		const wrapper = document.createElement('div');

		wrapper.className = 'carousel-wrapper';

		

		SONGS.forEach((s, i) => {

			const card = document.createElement('div');

			card.className = `osu-card stagger-item ${i === 0 ? 'active' : ''}`;

			card.style.animationDelay = `${0.05 * i}s`;

			card.onclick = () => this.selectSong(i);

			

			card.innerHTML = `

				<div class="title">${s.title}</div>

				<div class="artist">${s.artist}</div>

			`;

			

			wrapper.appendChild(card);

		});

		

		list.appendChild(wrapper);

		this.updatePreview();

	}


	selectSong(i) {

		this.selectedIndex = (i + SONGS.length) % SONGS.length;

		document.querySelectorAll('.osu-card').forEach((c, idx) => 

			c.classList.toggle('active', idx === this.selectedIndex)

		);

		

		// Scroll to active card

		const activeCard = document.querySelectorAll('.osu-card')[this.selectedIndex];

		if (activeCard) {

			activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

		}

		

		this.updatePreview();

		this.playPreviewForSelected();

	}


	moveSelectionBy(delta) {

		this.selectSong(this.selectedIndex + delta);

	}


	updatePreview() {

		const s = SONGS[this.selectedIndex];

		document.getElementById('preview-title').innerText = s.title;

		document.getElementById('preview-artist').innerText = "BY " + s.artist;

	}


	async playPreviewForSelected() {

		const song = SONGS[this.selectedIndex];

		if (!this.audioCtx || !song.url) {

			this.stopPreview();

			return;

		}


		try {

			this.stopPreview();

			this.previewAudio = new Audio(song.url);

			this.previewAudio.crossOrigin = "anonymous";

			this.previewSource = this.audioCtx.createMediaElementSource(this.previewAudio);

			this.previewSource.connect(this.previewAnalyser);

			this.previewAnalyser.connect(this.previewGain);

			this.previewGain.connect(this.audioCtx.destination);

			await this.previewAudio.play();

		} catch (err) {

			console.warn('Preview failed:', err);

		}

	}


	stopPreview() {

		if (this.previewAudio) {

			this.previewAudio.pause();

			if (this.previewSource) this.previewSource.disconnect();

		}

	}


	async startGame() {

		document.getElementById('loading-overlay').style.display = 'flex';

		const song = SONGS[this.selectedIndex];


		try {

			this.stopPreview();

			if (this.currentAudio) this.currentAudio.pause();

			

			this.currentAudio = new Audio(song.url);

			this.currentAudio.crossOrigin = "anonymous";

			const source = this.audioCtx.createMediaElementSource(this.currentAudio);

			source.connect(this.analyser);

			this.analyser.connect(this.audioCtx.destination);


			await new Promise(resolve => { this.currentAudio.oncanplaythrough = resolve; });


			this.resetStats();

			this.notes = song.notes.map(n => ({ ...n, processed: false }));

			this.selectorLane = 1;

			this.processedNotes = new Set();

			this.isPlaying = false;

			this.isCountingDown = true;


			document.getElementById('loading-overlay').style.display = 'none';

			this.showScreen('screen-game');

			this.runCountdown();


		} catch (e) {

			console.error(e);

			document.getElementById('loading-overlay').style.display = 'none';

		}

	}


	runCountdown() {

		const container = document.getElementById('countdown-container');

		const text = document.getElementById('countdown-text');

		const sequence = ['3', '2', '1', 'GO!'];

		container.style.display = 'flex';


		let step = 0;

		const nextStep = () => {

			if (step >= sequence.length) {

				container.style.display = 'none';

				this.isCountingDown = false;

				this.isPlaying = true;

				

				const song = SONGS[this.selectedIndex];

				if (song.videoUrl) {

					this.gameVideo.src = song.videoUrl;

					this.gameVideo.style.display = 'block';

					this.gameVideo.currentTime = 0;

					this.gameVideo.play().catch(err => console.warn('Video play failed:', err));

				} else {

					this.gameVideo.style.display = 'none';

				}

				

				this.currentAudio.play();

				this.startTime = Date.now() - this.currentAudio.currentTime * 1000;

				return;

			}

			text.innerText = sequence[step];

			text.style.animation = 'none';

			void text.offsetWidth;

			text.style.animation = 'countPop 0.8s ease-out forwards';

			step++;

			setTimeout(nextStep, 800);

		};

		nextStep();

	}


	resetStats() {

		this.score = 0;

		this.combo = 0;

		this.stats = { perfect: 0, good: 0, bad: 0, miss: 0 };

		this.updateUI();

	}


	updateUI() {

		document.getElementById('score-val').innerText = this.score;

		const total = this.stats.perfect + this.stats.good + this.stats.bad + this.stats.miss;

		const acc = total === 0 ? 100 : ((this.stats.perfect * 100 + this.stats.good * 70 + this.stats.bad * 30) / total).toFixed(1);

		document.getElementById('game-acc-val').innerText = acc + "%";

		const c = document.getElementById('combo-val');

		c.innerText = this.combo;

		c.style.opacity = this.combo > 0 ? "1" : "0";

		

		if (this.showDebug) {

			document.getElementById('current-lane').innerText = ['LEFT', 'L-CENTER', 'R-CENTER', 'RIGHT'][this.selectorLane];

			document.getElementById('active-notes').innerText = this.notes.filter(n => !n.processed).length;

		}

	}


	handleMouseMovement(mouseX) {

		if (!this.isPlaying) return;

		const width = this.canvas.width;

		const centerX = width / 2;

		

		if (mouseX < centerX - 100) this.selectorLane = 0;

		else if (mouseX < centerX) this.selectorLane = 1;

		else if (mouseX < centerX + 100) this.selectorLane = 2;

		else this.selectorLane = 3;

	}


	updateHitWindow(value) {

		this.hitWindow = parseInt(value);

		let difficulty = 'HARD';

		if (value >= 150) difficulty = 'EASY 👍';

		else if (value >= 100) difficulty = 'NORMAL 👍';

		else if (value >= 50) difficulty = 'HARD';

		document.getElementById('hit-window-value').innerText = value + 'ms (' + difficulty + ')';

	}


	toggleDebug() {

		this.showDebug = !this.showDebug;

		const debugEl = document.getElementById('mouse-debug');

		debugEl.classList.toggle('active');

	}


	updateMusicVolume(value) {

		this.musicVolume = value / 100;

		document.getElementById('music-value').innerText = value + '%';

		if (this.currentAudio) this.currentAudio.volume = this.musicVolume;

		if (this.previewGain) this.previewGain.gain.value = this.musicVolume * 0.5;

	}


	updateNotesOpacity(value) {

		this.notesOpacity = value / 100;

		document.getElementById('opacity-value').innerText = value + '%';

	}


	togglePause() {

		if (this.isCountingDown || !this.currentAudio) return;

		if (this.isPlaying) this.pauseGame();

		else this.resumeGame();

	}


	pauseGame() {

		if (!this.currentAudio || !this.isPlaying) return;

		this.isPlaying = false;

		this.currentAudio.pause();

		if (this.gameVideo && this.gameVideo.src) this.gameVideo.pause();

		document.getElementById('pause-overlay').style.display = 'flex';

	}


	resumeGame() {

		if (!this.currentAudio || this.isPlaying) return;

		this.startTime = Date.now() - this.currentAudio.currentTime * 1000;

		this.isPlaying = true;

		document.getElementById('pause-overlay').style.display = 'none';

		this.currentAudio.play();

		if (this.gameVideo && this.gameVideo.src) this.gameVideo.play();

	}


	restartGame() {

		document.getElementById('pause-overlay').style.display = 'none';

		if (this.currentAudio) {

			this.currentAudio.pause();

			this.currentAudio.currentTime = 0;

		}

		if (this.gameVideo && this.gameVideo.src) {

			this.gameVideo.pause();

			this.gameVideo.currentTime = 0;

		}

		this.startGame();

	}


	backToSelect() {

		document.getElementById('pause-overlay').style.display = 'none';

		if (this.currentAudio) this.currentAudio.pause();

		if (this.gameVideo && this.gameVideo.src) {

			this.gameVideo.pause();

			this.gameVideo.currentTime = 0;

		}

		this.isPlaying = false;

		this.gameVideo.style.display = 'none';

		this.showScreen('screen-select');

	}


	bgLoop() {

		const draw = () => {

			const { width, height } = this.canvas;

			

			this.ctx.clearRect(0, 0, width, height);


			if (this.isPlaying) {

				const now = Date.now() - this.startTime;

				const notepadY = height - 100;

				const speed = 1.2;

				

				this.drawNotepad(width, notepadY);

				this.drawSelector(width, notepadY);

				

				this.notes.forEach((n, idx) => {

					if (n.processed) return;

					

					const y = notepadY - (n.time - now) * speed;

					

					if (y > notepadY + 100) {

						n.processed = true;

						this.stats.miss++;

						this.combo = 0;

						this.updateUI();

					}

					

					if (y >= notepadY - 50 && y <= notepadY + 50) {

						if (n.lane === this.selectorLane) {

							n.processed = true;

							const timeDiff = Math.abs(n.time - now);

							this.processHit(timeDiff, n.lane);

						}

					}

					

					if (!n.processed && y > -100 && y < height) {

						this.drawNote(n, y, width);

					}

				});


				this.floatingTexts = this.floatingTexts.filter(text => {

					text.life -= 0.016;

					if (text.life <= 0) return false;


					this.ctx.fillStyle = text.color;

					this.ctx.globalAlpha = text.life;

					this.ctx.font = `900 ${100 + (1 - text.life) * 50}px "Permanent Marker", cursive`;

					this.ctx.textAlign = 'center';

					this.ctx.textBaseline = 'middle';

					text.y -= 2;

					this.ctx.fillText(text.text, text.x, text.y);


					return true;

				});

				this.ctx.globalAlpha = 1.0;


				if (this.notes.every(n => n.processed) && this.currentAudio && this.currentAudio.ended) {

					this.endGame();

				}

			}


			// Draw preview visualizer

			if (this.currentScreenId === 'screen-select') {

				this.drawPreviewVisualizer();

			}


			requestAnimationFrame(draw);

		};

		draw();

	}


	drawPreviewVisualizer() {

		const canvas = this.previewVisCanvas;

		const ctx = this.previewVisCtx;

		const dataArray = this.previewDataArray;


		if (!canvas || !ctx) return;


		this.previewAnalyser.getByteFrequencyData(dataArray);


		// Clear with semi-transparent black for trail effect

		ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';

		ctx.fillRect(0, 0, canvas.width, canvas.height);


		const barWidth = (canvas.width / dataArray.length) * 2.5;

		let x = 0;


		for (let i = 0; i < dataArray.length; i++) {

			const barHeight = (dataArray[i] / 255) * canvas.height;

			

			// Color gradient - pink to cyan to green

			let hue;

			if (i < dataArray.length / 3) {

				hue = 320 + (i / (dataArray.length / 3)) * 70; // Pink to Cyan

			} else if (i < (dataArray.length * 2) / 3) {

				hue = 180 - ((i - dataArray.length / 3) / (dataArray.length / 3)) * 120; // Cyan to Green

			} else {

				hue = 120 - ((i - (dataArray.length * 2) / 3) / (dataArray.length / 3)) * 120; // Green to Pink

			}

			

			ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

			ctx.globalAlpha = 0.8;

			ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

			ctx.globalAlpha = 1.0;

			x += barWidth + 1;

		}

	}


	drawNotepad(width, notepadY) {

		const centerX = width / 2;

		const colors = ['#c24b99', '#00ffff', '#12fa05', '#f9393f'];

		const positions = [

			{ x: centerX - 150, arrow: '←' },

			{ x: centerX - 50, arrow: '↓' },

			{ x: centerX + 50, arrow: '↑' },

			{ x: centerX + 150, arrow: '→' }

		];


		this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

		this.ctx.globalAlpha = 0.3;

		this.ctx.lineWidth = 2;

		this.ctx.beginPath();

		this.ctx.moveTo(centerX - 200, notepadY);

		this.ctx.lineTo(centerX + 200, notepadY);

		this.ctx.stroke();


		positions.forEach((pos) => {

			this.ctx.fillStyle = colors[positions.indexOf(pos)];

			this.ctx.globalAlpha = 0.8;

			this.ctx.font = '900 50px "Permanent Marker", cursive';

			this.ctx.textAlign = 'center';

			this.ctx.textBaseline = 'middle';

			this.ctx.fillText(pos.arrow, pos.x, notepadY);

		});

		this.ctx.globalAlpha = 1.0;

	}


	drawSelector(width, notepadY) {

		const centerX = width / 2;

		const positions = [centerX - 150, centerX - 50, centerX + 50, centerX + 150];

		const selectorX = positions[this.selectorLane];

		const selectorSize = 100;


		this.ctx.strokeStyle = '#ffff00';

		this.ctx.globalAlpha = 0.9;

		this.ctx.lineWidth = 4;

		this.ctx.beginPath();

		this.ctx.roundRect(selectorX - selectorSize/2, notepadY - selectorSize/2, selectorSize, selectorSize, 15);

		this.ctx.stroke();


		this.ctx.globalAlpha = 1.0;

	}


	drawNote(note, y, width) {

		const centerX = width / 2;

		const colors = ['#c24b99', '#00ffff', '#12fa05', '#f9393f'];

		const positions = [centerX - 150, centerX - 50, centerX + 50, centerX + 150];

		

		const noteWidth = 70;

		const noteX = positions[note.lane] - noteWidth / 2;


		this.ctx.fillStyle = colors[note.lane];

		this.ctx.globalAlpha = this.notesOpacity;

		this.ctx.beginPath();

		this.ctx.roundRect(noteX, y, noteWidth, 100, 20);

		this.ctx.fill();


		this.ctx.fillStyle = 'white';

		this.ctx.globalAlpha = 1.0;

		this.ctx.font = '900 55px Outfit';

		this.ctx.textAlign = 'center';

		this.ctx.fillText(['←', '↓', '↑', '→'][note.lane], positions[note.lane], y + 68);

	}


	processHit(diff, lane) {

		let r = 'MISS';

		let color = '#ff4444';

		const perfect = this.hitWindow * 0.3;

		const good = this.hitWindow * 0.6;


		if (diff < perfect) { r = 'PERFECT'; this.score += 100; this.stats.perfect++; this.combo++; color = '#00ffff'; }

		else if (diff < good) { r = 'GOOD'; this.score += 70; this.stats.good++; this.combo++; color = '#fff000'; }

		else { r = 'BAD'; this.score += 30; this.stats.bad++; this.combo = 0; color = '#ff8844'; }


		const width = this.canvas.width;

		const centerX = width / 2;

		const positions = [centerX - 150, centerX - 50, centerX + 50, centerX + 150];

		const notepadY = this.canvas.height - 100;


		this.floatingTexts.push({

			text: r,

			x: positions[this.selectorLane],

			y: notepadY,

			life: 1.0,

			color: color

		});


		this.updateUI();

	}


	endGame() {

		this.isPlaying = false;

		if (this.gameVideo && this.gameVideo.src) {

			this.gameVideo.pause();

			this.gameVideo.style.display = 'none';

		}

		document.getElementById('res-perfect').innerText = this.stats.perfect;

		document.getElementById('res-good').innerText = this.stats.good;

		document.getElementById('res-score').innerText = this.score;

		const total = this.stats.perfect + this.stats.good + this.stats.bad + this.stats.miss;

		const acc = total === 0 ? 0 : ((this.stats.perfect * 100 + this.stats.good * 70 + this.stats.bad * 30) / total).toFixed(1);

		document.getElementById('res-acc').innerText = acc + "%";

		document.getElementById('res-rank').innerText = acc > 95 ? 'S' : acc > 85 ? 'A' : 'B';

		this.showScreen('screen-results');

	}

}


const app = new Game();

window.app = app;


