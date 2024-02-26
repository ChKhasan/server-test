const App = {
  data() {
    return {
      servers: [],
      name: "",
    };
  },
  async mounted() {
    const res = await fetch("/api/server");
    this.servers = await res.json();
  },
  methods: {
    async remove(id) {
      const data = await fetch(`/api/server/${id}`, {
        method: "DELETE",
      });
      const res = await fetch("/api/server");
      this.servers = await res.json();
    },
    async createServer() {
      const data = {
        name: this.name,
        status: "created",
      };
      const res = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      this.name = "";
      const newserver = await res.json();
      this.servers.push(newserver);
    },
  },
};

Vue.createApp(App).mount("#app");
