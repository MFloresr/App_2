function Stack(){
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function(element){
		this.dataStore[this.top++] = element;
}

Stack.prototype.pop = function(){
		return	this.dataStore.splice(this.top--,1);
}

Stack.prototype.peek = function() {
		return this.dataStore[this.top-1];	
}

Stack.prototype.clear = function() {
	    delete this.dataStore;
	    this.dataStore = [];
		this.top = 0;
}

Stack.prototype.isEmty = function(){
	return this.top == 0;
}

Stack.prototype.length = function () {
		return this.top;
}
