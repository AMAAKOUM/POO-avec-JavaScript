class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}
class NodeList{
  constructor(){
    this.head = null;
    this.size = 0;    
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }

  // O(1)
  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(n)
  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      let prev = this.head;
      while(prev.next){
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index){
    if(index < 0 || index > this.size){
      return;
    }
    if(index === 0){
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for(let i = 0; i < index - 1; i++){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
    
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
}
const list = new NodeList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
console.log(list.getSize());





  