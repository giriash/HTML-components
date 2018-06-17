// cross browser event function
function addEvent(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + event, hanlder);
    } else {
        ele['on' + event] = hanlder;
    }
}

function removeEvent(ele, event, hanlder) {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, hanlder, false);
    } else if (ele.detachEvent) {
        ele.detachEvent('on' + event, hanlder);
    } else {
        ele['on' + event] = null;
    }
}

//clean nodes
function removeChildrenNodes(ele){
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
}

//capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}