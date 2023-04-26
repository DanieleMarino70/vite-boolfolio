<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";


export default {
  data() {
    return {
      title: "Project List",
      projects: [],
    }
  },

  

  components: {
    ProjectCard
  },

  
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        console.log(response.data.projects);
        this.projects = response.data.projects;
        console.log(this.projects);
      });
    }
  },

  created() {
    this.fetchProjects();
  }
  
};
</script>

<template>
  <div class="container mt-5">
    <div class="row g-3">
        <ProjectCard v-for="project in projects" :project="project" :key="project.id"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>