import CardTask from "../CardTodo/cardTodo";

const DisplayTodo = ({ todolist }) => {
  const tododisplay = todolist.map((ele) => {
    return <CardTask key={ele._id} task={ele}></CardTask>;
  });
  return <>{tododisplay}</>;
};
export default DisplayTodo;
