/* ==========================
   PANNEAUX – OUVERTURE & FERMETURE
   ========================== */

/* --- Variables --- */
const closes = document.querySelectorAll('.close-panel');
const panels = document.querySelectorAll('.panel');
const infolinks = document.querySelectorAll('a[href="#infos"]');
const panelinfos = document.querySelector('#infos');

/* --- OUVRIR LES PANNEAUX --- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        const panel = document.getElementById(targetId);

        if(panel) {
            event.preventDefault();          
            panel.classList.add('visible'); // ouvrir le panneau
        }
    });
});

/* --- FERMER LES PANNEAUX --- */
closes.forEach(cross => {
    cross.addEventListener('click', (event) => {
        event.preventDefault();

        const panel = cross.closest('.panel');
        if(panel) panel.classList.remove('visible'); // ferme le panneau
    });
});

/* --- PANNEAU INFOS (pages projets) --- */
if(panelinfos) {
    infolinks.forEach(infolink => {
        infolink.addEventListener('click', (event) => {
            event.preventDefault();
            panelinfos.classList.add('visible');
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        const panel = document.getElementById(targetId);

        if(panel) {
            event.preventDefault();

            // Augmente le z-index du panneau cliqué pour qu'il passe au-dessus
            panels.forEach(p => {
                if(p !== panel) {
                    p.style.zIndex = '100'; // derrière
                } else {
                    p.style.zIndex = '200'; // au-dessus
                    p.classList.add('visible'); // ouvre le panneau
                }
            });
        }
    });
});
