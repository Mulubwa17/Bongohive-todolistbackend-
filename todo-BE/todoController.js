const todo = require('./todo');







exports.getTodoList = async (req, res, next) => {
    const todos = await todo.find({});
    res.status(200).json({
      data: todos
    });
  }
  
  exports.getTodo = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(req.body)
      // find the user by id
      const userObject = await todo.findOne({ id: id });
      console.log(userObject)
  
      const todo = await todo.findById(userObject._id);
      if (!user) return next(new Error('User does not exist'));
      res.status(200).json({
        data: todo
      });
    } catch (error) {
      next(error)
    }
  }


  exports.updateTodo = async (req, res, next) => {
  try {
         const update = req.body
         const id = req.params.id;
         await todo.findByIdAndUpdate(id, update);
         const todo = await todo.findById(id)
         res.status(200).json({
          data: todo,
          message: 'Todo has been updated'
         });
        } catch (error) {
         next(error)
        }
       }