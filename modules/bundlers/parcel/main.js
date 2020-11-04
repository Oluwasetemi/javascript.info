// => object for 'barney'
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import _ from 'lodash';
import temi from './assets/images/temi.jpg';
import p from './pcomponent';
import './styles/index.css';

let users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

let result = _.find(users, function (o) { return o.age < 40; });
console.log(result)

console.log(format(new Date(), "'Today is a' PPPP"))
//=> "Today is a Wednesday"

console.log(formatDistance(subDays(new Date(), 3), new Date()))
//=> "3 days ago"

console.log(formatRelative(subDays(new Date(), 3), new Date()))
//=> "last Friday at 7:26 p.m."

const image = document.createElement('img');
image.src = temi;
image.alt = 'setemi\'s picture'

console.log('Parcel is working')

// say();

// hi()

// bye();

p.textContent = 'I am a paragraph';

document.body.append(p, image);
