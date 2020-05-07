// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            let tempTop = this.top;
            this.top = newNode;
            newNode.next = tempTop
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        if (this.length === 1) {
            let tempTop = this.top;
            this.top = null
            this.length--;
            return tempTop.value;
        };

        // if(!this.top) {
        //     return null;
        // }

        let tempTop = this.top;
        this.top = tempTop.next;
        this.length--;
        return tempTop.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
