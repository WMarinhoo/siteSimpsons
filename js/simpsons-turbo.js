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



// <!-- ====== SIMPSONS TURBO MODE – ATIVAÇÃO TOTAL ====== -->
// 1. Bart escrevendo no quadro-negro ao rolar a página (clássico!)
const frasesBart = [
    "Não vou desperdiçar giz",
    "Não vou andar de skate nos corredores",
    "Não sou uma mulher de 32 anos",
    "Não tenho procuração para o Bart",
    "Os Simpsons não são uma mina de ouro",
    "Não vou vender os DVDs piratas do meu pai",
    "Eu não vou comer rosquinha na aula",
    "D'oh! Não vou fazer isso de novo!"
];

let fraseAtual = 0;
const bartBoard = document.createElement("div");
bartBoard.innerHTML = `
    <div id="bart-board" style="position:fixed; bottom:20px; right:20px; background:#ffdd02; color:#000; padding:20px; border:2px solid #000; border-radius:15px; font-family:'Courier New'; font-size:18px; line-height:1.8; z-index:9999; box-shadow:0 0 30px #ffdd02; opacity:0; transform:scale(0); transition:all 0.6s;">
        <strong>Bart escrevendo no quadro:</strong><br>
        <span id="bart-text">${frasesBart[0]}</span>
    </div>
`;
document.body.appendChild(bartBoard);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500 && fraseAtual < frasesBart.length) {
        document.getElementById("bart-board").style.opacity = "1";
        document.getElementById("bart-board").style.transform = "scale(1)";
        document.getElementById("bart-text").textContent = frasesBart[fraseAtual];
        fraseAtual++;
        setTimeout(() => {
            document.getElementById("bart-board").style.opacity = "0";
            document.getElementById("bart-board").style.transform = "scale(0)";
        }, 4000);
    }
});


// 2. Personagens pulando na página de personagens (detecta URL)
if (window.location.pathname.includes("personagens.html")) {
    setTimeout(() => {
        const personagens = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Krusty", "Ned", "Moe"];
        personagens.forEach((p, i) => {
            setTimeout(() => {
                const div = document.createElement("div");
                div.textContent = p === "Homer" ? "Homer" : p;
                div.style.cssText = `
                    position: fixed; font-size: 4rem; bottom: -100px; left: ${10 + i * 10}%;
                    z-index: 9999; animation: pula 2s forwards; pointer-events:none;
                `;
                document.body.appendChild(div);
                setTimeout(() => div.remove(), 3000);
            }, i * 300);
        });
    }, 1000);

}

// 3. Modo noturno automático com céu estrelado + Krusty piscando
const agora = new Date().getHours();
if (agora >= 19 || agora <= 6) {
    document.body.style.background = "#000011";
    document.body.style.backgroundImage = "radial-gradient(circle at 20% 80%, #112 1px, transparent 1px), radial-gradient(circle at 80% 20%, #224 1px, transparent 1px)";
    document.body.style.backgroundSize = "50px 50px";

    // Krusty piscando no canto
    const krusty = document.createElement("div");
    krusty.innerHTML = "Krusty";
    krusty.style.cssText = `
        position:fixed; top:20px; right:20px; font-size:5rem; z-index:9999;
        animation: pisca 3s infinite;
    `;
    document.body.appendChild(krusty);
}

// Animações extras
const styleTurbo = document.createElement("style");
styleTurbo.textContent = `
    @keyframes pula {
        0% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-300px) rotate(20deg); }
        100% { transform: translateY(-500px); opacity:0; }
    }
    @keyframes pisca {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.9); }
    }
`;
document.head.appendChild(styleTurbo);
