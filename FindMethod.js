
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    var result;
    if (Array.isArray(array)){
        result = array.find(function (x) {
            return x%2 === 0;
        })
    }
    return result;
}
console.log(findFirstEvenNumber([7, 9, 0, -2]));
console.log(findFirstEvenNumber([7, 9, 3]));
// it('case 1', function () {
//     expect(findFirstEvenNumber([7, 9, 0, -2])).to.equal(0);
// });
//
// it('case 2', function () {
//     expect(findFirstEvenNumber([7, 9, 3])).to.equal(undefined);
// });