//What am I doing? I am creating this variable, and naming it "click".
//Why am I doing this? This is going to search through my HTML document (index.html), and look for an element ID that I named "searchButton". This is in my header section. It is the button that a user would click on to search the term that they input. Once they hit the click button, the value that they input will be saved into my variable and will be apart of my EventListener function below.
var click = document.getElementById('searchButton')
//What am I doing? I am creating this variable, and naming it "enter".
//Why am I doing this? This is going to search through my HTML document (index.html), and look for an element ID that I named "searchField". This is also in my header section. It is the input tag that a user would type in keywords to what they want to search etsy for. Whatever word they type, then hit the enter button, will now become the value of the click variable. That word will be apart of the EventListener below once they do a keypress.
var enter = document.getElementById('searchField')
//What am I doing? I am creating a EventListener function that is going to be waiting on a user to input a value in the search box, wait on them to click the search button, save that word and run it through my fetch below.
//Why am I doing this? I am doing this so that when a user types a word, I can pull that into my click variable and return to this cards with images, titles, prices, and sellers for any etsy items that match the keyword they searched for. ex.) basketball
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
