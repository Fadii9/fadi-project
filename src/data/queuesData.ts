import customers ,{customersList} from "./customersData"

let waitingCustomers:customersList = customers;

let queue1:customersList = [];
let queue2:customersList = [];
let queue3:customersList = [];

if (queue1.length == 0 && queue2.length == 0 && queue3.length == 0){
    if (waitingCustomers.length >= 15){
        queue1= [waitingCustomers.shift()! , ...queue1]
        queue2= [waitingCustomers.shift()! , ...queue2]
        queue3= [waitingCustomers.shift()! , ...queue3]
    }
}

let allQueues: customersList[] = [queue1, queue2, queue3]

let shortest = allQueues.reduce(function(p,c) {return p.length>c.length?c:p;});
let longest = allQueues.reduce(function(p,c) {return p.length<c.length?c:p;});


console.log(queue1)
console.log(queue2)
console.log(queue3)
console.log(waitingCustomers)

