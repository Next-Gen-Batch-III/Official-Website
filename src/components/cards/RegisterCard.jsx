const RegisterCard = ({
  title,
  subtitle,
  features,
  qrImage,
  qrTitle,
  qrDesc,
  icons,
}) => {
  return (
    <section className="bg-white gap-4 items-center py-12 md:py-32 px-4 md:px-16">
      <div className="p-12 bg-white rounded-xl shadow-md border-gray-300 border grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* LEFT SIDE */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-0 mb-10 h-full py-10 border-b lg:border-b-0 lg:border-r lg:pr-20 gap-6">
          {/* Main Icon */}
          <div className="hidden md:flex h-full">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <img src={icons.main} alt="Main Icon" className="w-12 h-12" />
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <h1 className="text-2xl md:text-4xl font-bold text-brand-primary">
              {title}
            </h1>

            <p className="mt-2">{subtitle}</p>

            {/* FEATURES LIST */}
            <div className="mt-6 space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <img src={item.icon} alt={item.text} className="w-6 h-6" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center mb-10 mt-10 md:mt-0 flex items-center justify-center flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-secondary-orange">
            {qrTitle}
          </h1>

          <p className="mt-2">{qrDesc}</p>

          {/* QR */}
          <div className="mt-5 flex justify-center">
            <div className="p-3 border-2 border-orange-200 rounded-xl">
              <img
                src={qrImage}
                alt="QR Code"
                className="w-40 md:w-60 h-40 md:h-60"
              />
            </div>
          </div>

          <p className="mt-4 text-sm flex items-center justify-center gap-2">
            <img src={icons.phone} alt="Phone" className="w-5 h-5" />
            Scan using your phone camera
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterCard;
