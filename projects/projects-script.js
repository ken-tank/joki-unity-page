var data;
var splitted;
var itemHTML;
var currentIndexPage = 999;

function splitArrayIntoChunks(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

function ShowPage(index)
{
    if (currentIndexPage == index) return;
    index = Math.min(index, splitted.length-1);

    var project_parent = document.getElementById("project-list");
    project_parent.innerHTML = "";

    splitted[index].forEach(element => {
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
    currentIndexPage = index;
}

document.addEventListener("DOMContentLoaded", () => {
    var pageRoot = document.getElementById("page");
    var pageItem = pageRoot.children[0];
    var params = new URLSearchParams(window.location.search);
    var parm_page = params.get('page');

    fetch("/joki-unity-page/Components/project_list_item.html")
    .then(res => res.text())
    .then(html => {
        itemHTML = html;
    });
    fetch("/joki-unity-page/projects/list-project.json")
    .then(res => res.json())
    .then(json => {
        data = json;
        splitted = splitArrayIntoChunks(data, 5);
        
        for (let index = 0; index < splitted.length; index++) {
            var text = pageItem.innerHTML.replace("{index}", index + 1);
            var cloned = pageItem.cloneNode(true);
            cloned.innerHTML = text;
            cloned.addEventListener("click", callback => {
                //ShowPage(index);
                location.assign("/joki-unity-page/projects/?page=" + (index + 1));
            });
            pageRoot.appendChild(cloned);
        }
        pageItem.hidden = true;
        
        if (!params.has("page") || isNaN(parm_page) || parseInt(parm_page) <= 0)
        {
            location.replace("/joki-unity-page/projects/?page=1");
            return;
        }
        ShowPage(parseInt(parm_page)-1);
    });
})