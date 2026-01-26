//themplate literal tutorial

var photos = [
    {
        id:1,
        title: "nem tudom mit irjak ide",
        thumbnailUrl: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fholiday-picutre.html&ved=0CBYQjRxqFwoTCPjbquDvqZIDFQAAAAAdAAAAABAH&opi=89978449"
    },
    {
        id:2,
        title:"ide végkép nem tudom mit irjak",
        thumbnailUrl:"https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fpicutre&ved=0CBYQjRxqFwoTCPjbquDvqZIDFQAAAAAdAAAAABAe&opi=89978449"
    }
];

var photoListTemplate = "";
for(var photo of photos) {
    photoListTemplate = photoListTemplate +
     `<div class="card p-5 ${photos.id === 2 ? "bg-light" : ""}">
     #${photo.id} <br>
     ${photo.title}
     <img src="${photo.thumbnailUrl}">
     </div>`;
}
document.getElementById("photos-list-container").innerHTML = photoListTemplate;
console.log(photoListTemplate)