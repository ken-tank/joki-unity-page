document.addEventListener("DOMContentLoaded", () => {
    var id = document.querySelector('meta[name="id"]');

    fetch('/joki-unity-page/Components/ads_card.html')
    .then(res => res.text())
    .then(data => {
        const adsCard = document.getElementById('ads-card');
        if (adsCard) {
            adsCard.innerHTML = data;
        }
    });

    fetch("/joki-unity-page/projects/list-project.json")
    .then(res => res.json())
    .then(json => {
        var item;
        if (id)
        {
            var val = id.getAttribute("content");
            json.forEach(element => {
                if (element["id"] == val) item = element;
            });
        }

        fetch("/joki-unity-page/Components/download.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("download_panel").innerHTML = html;
            document.getElementById("download_key").addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    Unlock();
                }
            });
        });
        
        if (item)
        {
            fetch("/joki-unity-page/Components/profile_project.html")
            .then(res => res.text())
            .then(html => {
                document.getElementById("profile_project").innerHTML = html;
                var platformParent = document.getElementById("project_platform");
                var itemPlatform = platformParent.children[0];
                var controlInputParent = document.getElementById("project_input");
                var controlInputItem = controlInputParent.children[0];
                
                document.getElementById("project_name").innerHTML = item["name"];
                document.getElementById("project_description").innerHTML = item["description"];
                item["target-platform"].forEach(element => {
                    var clone = itemPlatform.cloneNode();
                    clone.innerHTML = element;
                    platformParent.appendChild(clone);
                });
                item["input-control"].forEach(element => {
                    var clone = controlInputItem.cloneNode();
                    clone.innerHTML = element;
                    controlInputParent.appendChild(clone);
                });
        
                itemPlatform.hidden = true;
                controlInputItem.hidden = true;
            });
        }
    });
});

