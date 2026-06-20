const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer_col">
      <h3 className="text-[20px] font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default FooterColumn;
