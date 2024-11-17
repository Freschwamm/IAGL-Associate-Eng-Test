const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async (task) => {
      return await repository.addTodo(task)
    }
  };
};

module.exports = todoService;