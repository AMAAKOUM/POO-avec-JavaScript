class Queue {
  constructor(){
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element){
    this.items[this.rear] = element;
    this.rear++;  
  }

  dequeue(){
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++; 
    return item;
  }

  isEmpty(){
    return this.rear - this.front === 0;
  }

  peek(){
    return this.items[this.front];
  }
  size(){
    return this.rear - this.front;
  }
  printQueue(){
    console.log(this.items);
  }
  
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(15);
queue.enqueue(35);
queue.enqueue(78);

console.log(queue.size());
console.log(queue.printQueue());