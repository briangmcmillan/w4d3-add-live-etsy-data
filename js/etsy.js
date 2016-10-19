/*
<div class="col-sm-3">
    <div class="card">
        <img src="http://unsplash.it/200?random" alt="" />
        <div>
            <span>Title of thing goes here and it's a long title with a lot of words</span><br>
            <div class="row">
                <div class="col-xs-6 text-muted">
                    sellername
                </div>
                <div class="col-xs-6 text-success">
                    price
                </div>
            </div>
        </div>
    </div>
</div>
*/
createResultCard(item) {
    var col = document.createElement('div')
    col.classname = 'col-sm-3'

    var card = document.createElement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.setAttribute('src', 'http://unsplash.it/200?random')
    card.appendChild(img)

    var span = document.createElement

    var colLeft = document.createElement('div')
    colLeft.className = 'col-xs-6 text-muted'
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.className = 'col-xs-6 text-right text-success'
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}
function makeRandomAmount()
var items = [
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
    {
        title: 'A title of a product',
        image: 'http://unsplash.it/200?image=1',
        seller: 'seller1',
        price: makeRandomAmount()
    },
]
document.querySelector('searchResults').innerHTML = '='

items.forEach(function(item, i) {
    item.title += i
    item.image += i
    item.seller += i
    createResultCard(item)
})

createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
