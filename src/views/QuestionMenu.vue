<template>
  <div class="question-menu">
    <ul class="question-box" v-for="question in questions" :key="question">
      <li v-for="name in question" :key="name">
        <span class="question-id">{{ Object.keys(question)[0] }}</span>
        <Question :id="Object.keys(question)[0]" :question="name" />
      </li>
      <br />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";
import questionList from "../questions.json";

export default {
  name: "QuestionMenu",
  data() {
    return {
      questions: questionList,
    };
  },
  components: {
    Question,
  },
};
</script>
<style lang="scss" scoped="true">
.question-box {
  background: lightgray;
  border-radius: 20px;
  padding: 10px 30px;
}
.question-id {
  color: darkred;
}
li {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>