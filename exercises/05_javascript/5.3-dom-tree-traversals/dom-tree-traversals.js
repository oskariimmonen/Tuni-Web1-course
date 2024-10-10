var lists = document.getElementsByTagName("ul");
var listLen = lists.length;
for (var i = 1; i < listLen; i++) {
    var length = lists[i].querySelectorAll("li").length;
    var newLen = (" (" + length + ")")
    var inner = lists[i].getElementsByTagName("li")[0];
    inner.parentNode.insertAdjacentText("beforebegin", newLen);
}