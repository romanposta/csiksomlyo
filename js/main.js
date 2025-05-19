document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'hu';

    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            // ✨ Itt beírjuk a címet is
            const titleElement = document.querySelector("#title h1");
            if (titleElement && data.title) {
                titleElement.textContent = data.title[lang] || data.title.hu;
            }

            const linksContainer = document.getElementById("links");
            const imagesContainer = document.getElementById("images");

            data.links.forEach(link => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.label[lang] || link.label.hu;
                a.style.display = "block";
                a.style.margin = "10px 0";
                a.style.fontSize = "1.2rem";
                linksContainer.appendChild(a);
            });

            data.images.forEach(img => {
                const image = document.createElement("img");
                image.src = img.src;
                image.alt = img.alt[lang] || img.alt.hu;
                image.style.maxWidth = "300px";
                image.style.display = "block";
                image.style.margin = "20px auto";
                imagesContainer.appendChild(image);
            });
        });
});
