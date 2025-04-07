fetch('/joki-unity-page/Components/ads_card.html')
.then(res => res.text())
.then(data => {
    const adsCard = document.getElementById('ads-card');
    if (adsCard) {
        adsCard.innerHTML = data;
    }
});