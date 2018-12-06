define(["Vue","VueRouter"],function(Vue,VueRouter){
	Vue.use(VueRouter);
	const routes = [
	    { path: "/home", component: { template: '<div>这是home页面</div>' } },
	    { path: "/company", component: { template: '<div>这是company页面</div>' } },
	    { path: "*", redirect: "/home" }
	]
	                          
	const router = new VueRouter({
	    routes // (缩写) 相当于 routes: routes
	})
	
	return router;
})

