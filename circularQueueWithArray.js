class CircularQueue{
  constructor(capacity){
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull(){
    return this.currentLength === this.capacity;
  }

  isEmpty(){
    return this.currentLength === 0;
    
  }

  enqueue(element){
    if(!this.isFull()){
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if(this.front === -1){
        this.front = this.rear;
      }
    }
    
  }

  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if(this.isEmpty()){
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[this.front];
    }
  }

  print(){
    if(this.isEmpty()){
      console.log('Queue is empty');
    }
    else {
      let i;
      let str = '';
      for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      console.log(str);
    }
  }  
}

const circularqueue = new CircularQueue(5);
console.log(circularqueue.isEmpty());

circularqueue.enqueue(10);
circularqueue.enqueue(20);
circularqueue.enqueue(30);
circularqueue.enqueue(40);
circularqueue.enqueue(50);

console.log(circularqueue.isFull());
circularqueue.print();

console.log(circularqueue.dequeue());
console.log(circularqueue.peek());
circularqueue.print();

circularqueue.enqueue(60);
console.log(circularqueue.peek());
circularqueue.print();

circularqueue.enqueue(70);
console.log(circularqueue.peek());
circularqueue.print();

