function Stack(){
	this.dataStore = [];
	this.top = 0;


}

Stack.prototype. push(){
		this.dataStore[this.top++] = element;
	}

Stack.prototype.pop(){

		return	this.dataStore.splice(this.top--,1);
}

Stack.prototype.peek() {
		return this.dataStore[this.top-1];	
}

Stack.prototype.clear() {
	    delete this.dataStore;
	    this.dataStore = [];
		this.top = 0;
}

Stack.prototype.isEmty(){
	return this.top == 0;
}

Stack.prototype.length() {
		return this.top;
}