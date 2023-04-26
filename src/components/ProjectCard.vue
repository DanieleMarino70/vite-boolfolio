<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },

  // components: {
  //   MyComponent,
  // },
  props:{
    project: Object,
  },

  computed: {
        getAbstract() {
            return this.project.description.slice(0, 100) + "...";
        },

        getTimeUpdated() {
            //console.log(Date.parse(typeof this.project.updated_at));
            //console.log(Date.parse(this.project.updated_at));
            const DateParse = Date.parse(this.project.updated_at).toString();

            const milliseconds = parseInt(DateParse);
            const date = new Date(milliseconds)
            //console.log(typeof parseInt(date.toLocaleString('en-GB')));
            return date.toLocaleString('en-GB');   // 👉️ "20/01/2022 09:50:15"
        }
    },
};
</script>

<template>
<div class="col">
    <div class="card h-100" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.author }}</h6>
            <p class="card-text">{{ getAbstract }}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary">Modificato il: <br>{{  getTimeUpdated }}</h6>
            <router-link class="btn btn-primary" :to="{name: 'project-detail', params: {id: project.id}}">Vedi</router-link>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped></style>