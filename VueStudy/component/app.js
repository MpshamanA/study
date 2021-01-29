var items = [
  {
    name: '鉛筆', price: 300, quantity: 0
  }, {
    name: 'ノート', price: 400, quantity: 0
  }, {
    name: '消しゴム', price: 500, quantity: 0
  }]
var vm = new Vue({
  el: '#app',
  data: {
    items: items
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  }, computed: {
    //即時関数 sum = 0
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08)
    },
    //HTMLで1000以下だったら要素を表示するという使い方をする
    canBuy: function () {
      return this.totalPrice >= 1000 // 1000円以上から購入可能にする
    }
  }
});
window.vm = vm;