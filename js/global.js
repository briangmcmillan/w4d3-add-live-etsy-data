fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
.then(response => response.json())
.then(function(items) {
  console.log(items)
  items.results.forEach(function(item) {
    var card = document.createElement('div')
    card.classList.add('col-sm-3', 'helperClass')

    var card2 = document.createElement('div')
    card2.classList.add('secondDiv')
    card.appendChild(card2)

    var image = document.createElement('img')
    image.setAttribute('src', item.Images[0].url_570xN)
    card2.appendChild(image)

    var card3 = document.createElement('div')
    card3.classList.add('textDiv')
    card2.appendChild(card3)

    var title = document.createElement('h6')
    title.classList.add('titleText')
    title.innerHTML = item.title
    card3.appendChild(title)

    var seller = document.createElement('p')
    seller.classList.add('leftSide', 'text-muted')
    seller.innerHTML = item.Shop.shop_name
    card3.appendChild(seller)

    var price = document.createElement('p')
    price.classList.add('rightSide')
    price.innerHTML = item.price
    card3.appendChild(price)


    // your code here to build up the card
    // keep in mind you'll be nesting tags

    document.getElementById('searchResultsHomework').appendChild(card)
  })
})

// // Declare your builder function
// function createResultCard(item) {
//   var card = document.createElement('div')
//   card.classList.add('col-sm-3', 'helperClass')
//
//   var card2 = document.createElement('div')
//   card2.classList.add('secondDiv')
//   card.appendChild(card2)
//
//   var image = document.createElement('img')
//   image.setAttribute('src', item.image)
//   card2.appendChild(image)
//
//   var card3 = document.createElement('div')
//   card3.classList.add('textDiv')
//   card2.appendChild(card3)
//
//   var title = document.createElement('h6')
//   title.classList.add('titleText')
//   title.innerHTML = item.title
//   card3.appendChild(title)
//
//   var seller = document.createElement('p')
//   seller.classList.add('leftSide', 'text-muted')
//   seller.innerHTML = item.seller
//   card3.appendChild(seller)
//
//   var price = document.createElement('p')
//   price.classList.add('rightSide')
//   price.innerHTML = item.price
//   card3.appendChild(price)
//
//
//   // your code here to build up the card
//   // keep in mind you'll be nesting tags
//
//   document.getElementById('searchResultsHomework').appendChild(card)
// }

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
// var items = [
//   {
//     image: 'http://unsplash.it/400?image=',
//     title: 'Moutain Top Sky View Art',
//     seller: 'brianglenn',
//     price:'$' + 18.87
//   },
//   {
//     image: 'http://unsplash.it/400?image=',
//     title: 'Set of 3 Dinner Forks',
//     seller: 'emmagq',
//     price:'$' + 4.56
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Cliffside Ocean View Painting',
//     seller: 'melindmarie',
//     price:'$' + 8.99
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Water Beads Painting',
//     seller: 'robertallen',
//     price:'$' + 21.99
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Lighthouse Photo',
//     seller: 'saraheliz',
//     price:'$' + 12.89
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Burgundy Shades',
//     seller: 'jamesty',
//     price:'$' + 12.99
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Ancient Wooden Swing Set',
//     seller: 'lailamarie',
//     price:'$' + 87.89
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Blades of Grass Painting',
//     seller: 'buddy',
//     price:'$' + 7.99
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Ancient Wooden Wheel',
//     seller: 'javascript16',
//     price:'$' + 8.89
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Manly Tool Set',
//     seller: 'justaddwater25',
//     price:'$' + 12.09
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Navy Pier',
//     seller: 'greenThunder',
//     price:'$' + 15.79
//   },{
//     image: 'http://unsplash.it/400?image=',
//     title: 'Vintage Oil Drum',
//     seller: 'tiy16',
//     price:'$' + 19.99
//   }
// ]
// items.forEach(function(item, i) {
//     item.title += i
//     item.image += i
//     item.seller += i
//   createResultCard(item)
// })
// console.log(items)
