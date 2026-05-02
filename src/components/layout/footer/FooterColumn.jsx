const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer_col">
      <h4 className="font-bold text-[20px]">{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn
