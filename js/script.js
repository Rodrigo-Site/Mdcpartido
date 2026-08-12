/* =========================================================
   HEADER / MENU
========================================================= */

const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mobile = document.getElementById("mobileNav");


/* =========================================================
   HEADER AO ROLAR A PÁGINA
========================================================= */

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

});


/* =========================================================
   MENU MOBILE
========================================================= */

if (menuBtn && mobile) {

    // Abre e fecha o menu mobile
    menuBtn.addEventListener("click", () => {

        mobile.classList.toggle("open");

    });


    // Fecha o menu quando um link é selecionado
    mobile.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobile.classList.remove("open");

        });

    });

}


/* =========================================================
   ANIMAÇÕES AO APARECER NA TELA
========================================================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            // Verifica se o elemento entrou na tela
            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                // Para de observar depois da animação
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


/* =========================================================
   ELEMENTOS ANIMADOS
========================================================= */

const animatedElements = document.querySelectorAll(
    ".cards article, " +
    ".goals article, " +
    ".secondary-news article, " +
    ".featured, " +
    ".mini-grid div"
);


/* =========================================================
   CONFIGURAÇÃO DAS ANIMAÇÕES
========================================================= */

animatedElements.forEach(element => {

    // Estado inicial
    element.style.opacity = "0";

    element.style.transform =
        "translateY(18px)";

    // Transição
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    // Começa a observar
    observer.observe(element);

});
