const NewsSection = ({ section, children }) => {
  return (
    <>
      <section className="text-black">
        <h2 className="font-bold text-[30px] text-brand-secondary-orange">{section}</h2>
        {children}
      </section>
    </>
  );
};
export default NewsSection;
