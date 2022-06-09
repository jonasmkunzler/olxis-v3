import Header from '../componets/Header';

const Default = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>FOOTER</footer>
    </>
  );
};
export default Default;
