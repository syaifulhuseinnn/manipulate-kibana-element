document.addEventListener("DOMNodeInserted", function(event) {
    if(document.querySelector(".euiBreadcrumb.euiBreadcrumb--last" != null)) {
        let title = document.querySelector(".euiBreadcrumb.euiBreadcrumb--last")
        title.innerHTML = "SAMPLE TITLE"
    }
})