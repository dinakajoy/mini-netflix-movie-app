const Title: React.FC<{title: string}>  = ({ title }) => {
  return (
    <h1 className="title"> { title } </h1>
  )
};

export default Title;