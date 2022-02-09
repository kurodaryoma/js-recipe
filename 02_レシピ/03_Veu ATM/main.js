Vue.createApp({
  data() {
    return {
      inputValue: "",
      money: 0,
      items: [],
    }
  },
  methods: {
    countUp: function() {
      this.money += Number(this.inputValue)
      this.items.push({
        date: new Date(),
        sousa: "入金",
        money: this.inputValue,
      })
    },
    countDown: function() {
      this.money -= Number(this.inputValue)
      this.items.push({
        date: new Date(),
        sousa: "出金",
        money: this.inputValue,
      })
    },
  },
}).mount("#nyuryoku")
