console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let addedItem = {
        title: title,
        artist: artist,
        published: yearPublished,
    }
    collection.push(addedItem);
    return addedItem;
}

addToCollection('Not a Pretty Girl', 'Ani Difranco', 1995);
addToCollection('Dilate', 'Ani Difranco', 1996);
addToCollection('Yes I am', 'Melissa Etheridge', 1993);
addToCollection('Fearless Love', 'Melissa Etheridge', 2010);
addToCollection('Feed the Beast', 'Kim Petras', 2023);
addToCollection('So Jealous', 'Tegan and Sara', 2004);

console.table(collection);