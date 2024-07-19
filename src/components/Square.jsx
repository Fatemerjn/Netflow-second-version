import './styles/Square.scss';

const Square = ({ type = '1' }) => {
  return <div className={`square square-${type}`}></div>;
};

export default Square;
