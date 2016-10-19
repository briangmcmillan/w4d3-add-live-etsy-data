var click = document.getElementById('searchButton')
var enter = document.getElementById('searchField')

click.addEventListener('click', search)//(name of event, function)
enter.addEventListener('keypress', searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}

function search() {
  var collectInput = document.getElementById('searchField').value
  document.querySelector('#searchField').value = ''
  document.querySelector('#searchResultsHomework').innerHTML = ''//This clears out any previous search results before running search function again.
  fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(collectInput) + '&includes=Images,Shop'))
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
}
