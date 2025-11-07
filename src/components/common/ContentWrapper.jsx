const ContentWrapper = ({ children }) => {
  return (
    <section className="mt-4">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default ContentWrapper;
