//ajax kérések backend == vagyis oldal ujratöltés nélkül frissül az oldal!!!!
document.getElementById("fetch-posts").onclick = function () {
    var url = "https://jsonplaceholder.typicode.com/posts";
    sendRequest(url,"GET",null,function(posts) { //posts ahova érkez nek és kimülidjk az értéketket
           var postListHTML = ""; // ebből fog összes álni a html tartalom
            for(var post of post) {
                postListHTML += "<p>" + post.title + "</p>" + post.body + "</small>";
            }
            document.getElementById("post-list-container").innerHTML = postListHTML;
        }
    )} ;
    xhr.open(method,url); // hova küldj        

// request küldés
function sendRequest(url,method,body, callback) { //ide küld üzeneteket(body url methddod)
    var xhr = new XMLHttpRequest; // szervorldai kérés
    xhr.onreadystatechange = function(){ //mindig lefutt ha vmi változás történik
        if(xhr.readyState === 4 && xhr.status === 200) { //xhr status = 200 vagyis sikeres(szerver értelmzés)
            callback(JSON.parse(xhr.responseText));//json stringet vmire kovertál
        }};
        xhr.setRequestHeader("content-type","applicaton/json");
    xhr.open(method,url)
    xhr.send(body);
};