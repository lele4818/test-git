requirejs.config({
	baseUrl: "lib",
    paths: {
        "Vue": "Vue/vue",
        "VueRouter": "Vue/vueRouter",
        "router": "router/router",
        "text": "text/text",        
    }
});

require(["Vue","router"], function(Vue,router) {
    const app = new Vue({
        el: "#app",
        router
    })
});