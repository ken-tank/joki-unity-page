function ShowPage(id)
{
    var project_parent = document.getElementById("project-list");
    project_parent.innerHTML = "";

    var itemHTML = "";
    fetch("/joki-unity-page/Components/project_list_item.html")
    .then(res => res.text())
    .then(html => {
        itemHTML = html;
    });

    fetch("/joki-unity-page/projects/list-project.json")
    .then(res => res.json())
    .then(json => {
        json[id].forEach(element => {
            var dom = document.createElement("div");
            var item = itemHTML;
            var platforms = element["platform"].sort();
            var rendered = item.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
                return element[key] !== undefined ? element[key] : '';
            });
            dom.innerHTML = rendered;
            project_parent.appendChild(dom);
            var platform_item = dom.querySelector("#platform-item");
            var parent = platform_item.parentElement;
            platforms.forEach(value => {
                var new_item = platform_item.cloneNode(true);
                new_item.innerHTML = value.trim();
                parent.appendChild(new_item);
            });
            platform_item.classList += " hidden";
        });
    });
}