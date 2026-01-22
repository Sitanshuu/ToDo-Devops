const router = require("express").Router();
const { getTodos, createTodos, updateTodos, deleteTodos } = require("../controllers/TodoController");

router.get("/", getTodos);
router.post("/", createTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);

module.exports = router;