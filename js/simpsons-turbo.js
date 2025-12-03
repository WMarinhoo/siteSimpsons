// <!-- ==== ANIMAÇÕES JAVASCRIPT – TEMA SIMPSONS (leve e lindo) ==== -->

		/* 1. Nuvens passando no céu (efeito parallax suave) */
		document.addEventListener("DOMContentLoaded", function () {
			const body = document.body;
			const clouds = document.createElement("div");
			clouds.innerHTML = `
        <div class="cloud cloud1">☁️</div>
        <div class="cloud cloud2">☁️</div>
        <div class="cloud cloud3">☁️</div>
        <div class="cloud cloud4">☁️</div>
    `;
			clouds.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: 1; overflow: hidden;
    `;
			body.appendChild(clouds);

			const style = document.createElement("style");
			style.textContent = `
        @keyframes nuvem {
            0% { transform: translateX(-200px); }
            100% { transform: translateX(120vw); }
        }
        .cloud {
            position: absolute;
            font-size: 4rem;
            opacity: 0.3;
            animation: nuvem linear infinite;
            filter: drop-shadow(0 0 10px #ffdd02);
        }
        .cloud1 { top: 10%; animation-duration: 120s; }
        .cloud2 { top: 20%; animation-duration: 180s; font-size: 5rem; }
        .cloud3 { top: 15%; animation-duration: 150s; animation-delay: 40s; }
        .cloud4 { top: 25%; animation-duration: 200s; animation-delay: 80s; }
    `;
			document.head.appendChild(style);
		});

		/* 2. Efeito “Donut caindo” aleatório (clássico do Homer) */
		setInterval(() => {
			if (Math.random() > 0.7) { // aparece a cada ~10 segundos em média
				const donut = document.createElement("div");
				donut.textContent = "🍩";
				donut.style.cssText = `
            position: fixed;
            font-size: 3rem;
            left: ${Math.random() * 90}vw;
            top: -100px;
            z-index: 999;
            pointer-events: none;
            animation: cair 6s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
				document.body.appendChild(donut);

				const anim = document.createElement("style");
				anim.textContent = `
            @keyframes cair {
                to { transform: translateY(110vh) rotate(1080deg); opacity: 0; }
            }
        `;
				document.head.appendChild(anim);

				setTimeout(() => donut.remove(), 7000);
			}
		}, 3000);

		/* 3. Som da risada do Homer ao passar o mouse no menu */
		const menuLinks = document.querySelectorAll("nav#menu a");
		const homerLaugh = new Audio("https://www.myinstants.com/media/sounds/homer-laugh.mp3"); // link direto e leve

		menuLinks.forEach(link => {
			link.addEventListener("mouseenter", () => {
				homerLaugh.currentTime = 0;
				homerLaugh.volume = 0.4;
				homerLaugh.play().catch(() => { }); // ignora erro se o usuário não interagiu ainda
			});
		});

		/* 4. Título da página com efeito de máquina de escrever + piscar */
		document.addEventListener("DOMContentLoaded", () => {
			const title = document.querySelector("title");
			const texto = "Fan de Simpsons • A família amarela mais louca do mundo!";
			let i = 0;
			title.textContent = "";

			const digitar = setInterval(() => {
				title.textContent += texto[i];
				i++;
				if (i >= texto.length) clearInterval(digitar);
			}, 80);
		});

		/* 5. Efeito “D'oh!” aleatório quando clica em qualquer lugar da página */
		document.body.addEventListener("click", (e) => {
			if (Math.random() > 0.7) {
				const doh = document.createElement("div");
				doh.textContent = "D'oh!";
				doh.style.cssText = `
            position: absolute;
            left: ${e.clientX - 50}px;
            top: ${e.clientY - 50}px;
            font-size: 3rem;
            font-weight: bold;
            color: #ffdd02;
            pointer-events: none;
            animation: doh 1.5s forwards;
            z-index: 9999;
        `;
				document.body.appendChild(doh);

				const anim = document.createElement("style");
				anim.textContent = `
            @keyframes doh {
                0% { transform: scale(0) rotate(-20deg); opacity: 1; }
                70% { transform: scale(1.5) rotate(10deg); }
                100% { transform: translateY(-150px) scale(0.8); opacity: 0; }
            }
        `;
				document.head.appendChild(anim);

				setTimeout(() => doh.remove(), 1600);
			}
		});
