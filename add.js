module.exports = function (frst, scnd){
    this.frst = frst;
    this.scnd = scnd;
    this.sum = function () {
        sum = frst+scnd;
        return sum;
    }
}