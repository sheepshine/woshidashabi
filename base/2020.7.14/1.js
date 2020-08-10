function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    const result = p = {};
    while (l1 || l2) {
        const sum = (l1 && l2.val || 0) + (l2 && l2.val || 0);
        const exceed = sum % 10  //是否需要进位
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        p.val = parseInt(sum / 10)
        if (l1 || l2 || exceed) {
            p.next = { value: exceed} 
        }
        p = p.next
    }
    return result
}
console.log(11111)
console.log(addTwoNumbers([2,4,3],[5,6,4]), 111111)