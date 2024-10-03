//strings
let email = "utkarsh.saboo"
let domainName = "advancedbionics.com"

//string concatenation
console.log(email + domainName)

//string properties
console.log(email.length)


//string methods
console.log(email.toUpperCase())

//1 toUpperCase
let result = email.toUpperCase()

//2 indexOf = finds us the first index of something
let index = domainName.indexOf('e')
console.log(index)

//3 lastIndexOf - finds us the last instance of something
let lastIndex = email.lastIndexOf('o')

//4 slice = slice from firstindex to lastindex
let result2 = email.slice(0, 10)
console.log(result2)

//5 replace = replaces the first occurance by the second argument
let result3 = email.replace('o','@')
console.log(result3)


//template string

let title = "Book of words"
let author = "Utkarsh"
let likes = 10

//concatenation way
let result4 = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
console.log(result4)

//template string way
let result5 = `the blog called ${title} by ${author} has ${likes} likes`
console.log(result5)

//creating html templates
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes</span>
`

//arrays
let items = ['apple', 'banana', 'orange']
console.log(items)

let ages = [1,2,3,4]
console.log(ages)

let random = ['apple',3,'banana',4]
console.log(random)

//array methods
//join method
let result6 = items.join(',')
console.log(result6)

//indexOf
let result7 = items.indexOf('banana')
console.log(result7)

//concat
let result8 = items.concat(['berries'])
console.log(result8)

//push
items.push('kale')
console.log(items)

//pop
let result9 = items.pop()
console.log(result9)

