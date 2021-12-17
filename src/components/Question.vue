<template>
  <div id="question">
    {{ question.question }}<br /><br />
    <span v-for="answer in question.answers" :key="answer">
      <label :id="answer"
        ><input
          type="checkbox"
          :value="answer"
          v-model="checkedAnswer"
          @change="check"
        />{{ answer }}</label
      >
      <br />
    </span>
    <button @click="checkAnswer(question.correct)">Valider</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedAnswer: [],
    };
  },
  methods: {
    checkAnswer(correct) {
      for (let element in this.checkedAnswer) {
        if (!correct.includes(this.checkedAnswer[element])) {
          document.getElementById(this.checkedAnswer[element]).style.color = "red";
        }
        else{
          document.getElementById(this.checkedAnswer[element]).style.color = "green";
        }
      }
      for (let element in correct) {
        if (!this.checkedAnswer.includes(correct[element])) {
          document.getElementById(correct[element]).style.color = "green";
        }
      }
    },
  },
  props: {
    question: Object,
  },
};
</script>

