class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  isEmpty(){
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

  print(){
    if(this.isEmpty()){
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while(curr){
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
    
  }

  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront(){
    if(this.isEmpty()){
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd(){
    if(this.isEmpty()){
      return null;
    }
    const value = this.tail.value;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while(prev.next !== this.tail){
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }
}

const list = new linkedList();
console.log('list is empty?', list.isEmpty());
console.log('list size', list.getSize());
list.print();

list.append(3);
list.append(7);
list.append(19);
list.prepend(1);
list.print();
console.log('list size', list.getSize());