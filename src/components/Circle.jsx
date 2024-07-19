import './styles/Circle.scss';

const Circle = ({ type = '1', children }) => {
  return <div className={`circle circle-${type}`}>{children}</div>;
};

export default Circle;
