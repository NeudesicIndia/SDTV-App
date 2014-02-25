(function (window, document, undefined) {
    var apps = function(){
                },
        keyChar,
        currElm = document.getElementById("item-selected"),
        futureElm;

    apps.route = {
        desc: "route for app nav."
    };

    apps.route.NavigateLeft = function (elm) {
        elm.setAttribute("id", "");
        elm.previousElementSibling ? futureElm = elm.previousElementSibling : futureElm = elm.parentElement.lastElementChild;
        futureElm.setAttribute("id", "item-selected");
    };

    apps.route.NavigateRight = function (elm) {
        elm.setAttribute("id", "");
        elm.nextElementSibling ? futureElm = elm.nextElementSibling : futureElm = elm.parentElement.firstElementChild;
        futureElm.setAttribute("id", "item-selected");
    };
    
    apps.route.NavigateTop = function (elm) {
    };

    apps.route.NavigateBottom = function (elm) {
    };

    apps.route.Play = function () {

    };

    document.addEventListener("keyup", function (e) {

        keyChar = e.keyCode;
        currElm = document.getElementById("item-selected");
        
        console.log(keyChar);
        
        switch (keyChar) {
            case 38:
                apps.route.NavigateTop(currElm);
                break;

            case 40:
                apps.route.NavigateBottom(currElm);
                break;

            case 37:
                apps.route.NavigateLeft(currElm);
                break;

            case 39:
                apps.route.NavigateRight(currElm);
                break;
                
            case 13:
                apps.route.Play(currElm);
                break;

            default:
                break;
        }

    }, false);

})(window, document);