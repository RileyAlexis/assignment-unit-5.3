console.log('***** Music Collection *****')

let collection = [];
let tracksArr = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let addedItem = {
        title: title,
        artist: artist,
        published: yearPublished,
    }
    collection.push(addedItem);
    return addedItem;
}

console.log(addToCollection('Not a Pretty Girl', 'Ani Difranco', '1995'));
console.log(addToCollection('Dilate', 'Ani Difranco', '1996'));
console.log(addToCollection('Yes I am', 'Melissa Etheridge', '1993'));
console.log(addToCollection('Fearless Love', 'Melissa Etheridge', '2010'));
console.log(addToCollection('Feed the Beast', 'Kim Petras', '2023'));
console.log(addToCollection('So Jealous', 'Tegan and Sara', '2004'));


function showCollection(displayCollection) {
    console.log('This collection has', displayCollection.length, ' items');
    for (i in displayCollection) {
        console.log(`${displayCollection[i].title} by ${displayCollection[i].artist}, 
        published in ${displayCollection[i].published}`);
    }
}

function findByArtist(artist) {
    let results = [];
    let pos = 0;
    for (i in collection) {
        if(artist === collection[i].artist) { 
            results.push(collection[i]); 
            pos++;
        }
    }
    if(pos>0) return results;
    else return 'Not Found';
}


showCollection(collection);
console.table(findByArtist('Ani Difranco'));

function search(criteria) {
    let result = [];
    
  for (i in collection) {
    if(collection[i].artist === criteria || collection[i].title === criteria 
        || collection[i].published == criteria) {
            result.push(collection[i]);
        }
  }
  return result;
}
//Allows for a string or number on date search
console.log('Search', search(2004));