<template>
  <div class="question">
    <span class="question-text"> {{ question.question }}</span>
    <span class="answer-list" v-for="answer in getAnswerList" :key="answer">
      <label :id="answer"
        ><input
          type="checkbox"
          :value="answer"
          v-model="checkedAnswer"
          @change="check"
        />{{ answer }}</label
      >
    </span>
    <p v-if="!hideExplain">
      Explanation:
      <span v-for="explanation in question.explanation" :key="explanation">{{
        explanation
      }}</span>
    </p>
    <button @click="checkAnswer(question.correct)">Valider</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedAnswer: [],
      hideExplain: true,
    };
  },
  computed: {
    getAnswerList() {
      return this.randomizeAnswersOrder(this.question.answers);
    },
  },
  methods: {
    randomizeAnswersOrder(array) {
      return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
    },
    checkAnswer(correct) {
      if(this.checkedAnswer.length == correct.length){      for (let element in this.checkedAnswer) {
        if (!correct.includes(this.checkedAnswer[element])) {
          document.getElementById(this.checkedAnswer[element]).style.color =
            "red";
        } else {
          document.getElementById(this.checkedAnswer[element]).style.color =
            "green";
        }
      }
      for (let element in correct) {
        if (!this.checkedAnswer.includes(correct[element])) {
          document.getElementById(correct[element]).style.color = "green";
        }
      }
      this.hideExplain = false;}
      else{
        alert("Vous de vez sélectionner " + correct.length + " réponses")
      }
    },
  },
  props: {
    question: Object,
  },
};
</script>

<style scoped lang="scss">
.question-text {
  white-space: pre-line;
}
.question {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.answer-list {
  margin-left: 10px;
}
button {
  align-self: flex-start;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  &:hover {
    background: darken(white, 20%);
    cursor: pointer;
  }
}
label,
input {
  cursor: pointer;
}
</style>