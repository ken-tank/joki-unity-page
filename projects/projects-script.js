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
            var item = itemHTML;
            var rendered = item.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
                return element[key] !== undefined ? element[key] : '';
            });
            project_parent.innerHTML += rendered;
        });
    });
}