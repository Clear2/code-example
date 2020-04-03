var countDom = 1;
var level = 1;
var maxLevel = 1;
var maxChildrenDom = 1;
function getDom(parentNode, lastIndx) {
    if (!parentNode.children.length) {
        if (level > maxLevel) { maxLevel = level }
        if (lastIndx) { level -= 1; }
        return;
    } else {
        countDom += parentNode.children.length;
        maxChildrenDom = parentNode.children.length > maxChildrenDom ? parentNode.children.length : maxChildrenDom;
        level += 1;
        for (var i = 0; i < parentNode.children.length; i++) {
            var isLast = false;
            if (i == parentNode.children.length - 1) { isLast = true }
            getDom(parentNode.children[i], isLast);
        }
    }
}

var container = document.querySelector('html')// document.getElementsByTagName("html")[0];
getDom(container);
console.log("---countDom:", countDom);
console.log("---maxChildrenDom:", maxChildrenDom);
console.log("---maxLevel:", maxLevel);