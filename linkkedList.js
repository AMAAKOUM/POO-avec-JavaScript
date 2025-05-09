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
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();

console.log(list.isEmpty());
console.log(list.getSize());



  