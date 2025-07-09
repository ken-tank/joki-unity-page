function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "n17BfhS7S+3ofgNKrWbRNXb32+QAbNqPnzz9jFLRHc1MA9yBLX9Hr6BCoZabor6NnN47TAn7S5x7ihg0c9dTuRma3jVce0Qcd3kH/fndzqdCSzVM888bkJhYjjvzkmsp";
    Downloader.Download(key, link);
}

document.addEventListener("DOMContentLoaded", () => {
    var id = document.querySelector('meta[name="id"]').getAttribute("content");

    fetch("/joki-unity-page/projects/list-project.json")
    .then(res => res.json())
    .then(json => {
        var item;
        json.forEach(element => {
            if (element["id"] == id) item = element;
        });

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

    })
});