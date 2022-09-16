const Section = ({ title, children }) => {
  return (
    <div className="section">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
export { Section };
