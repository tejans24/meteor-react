FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, { content: <Hello /> });
  }
});
