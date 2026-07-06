const TrackCard = ({ track, icon }) => {
  const schedule = icon.schedule;
  const note = icon.note;

  return (
    <div className="bg-white rounded-xl shadow border border-gray-300 overflow-hidden h-full flex flex-col">
      {/* HEADER */}
      <div
        className={`${track.headerColor} text-white text-center font-semibold py-3`}
      >
        {track.title}
      </div>

      {/* BODY */}
      <div className="flex items-stretch flex-1">
        {/* LEFT */}
        <div className="w-1/2 p-5 flex gap-3">
          <img src={schedule} className="w-5 h-5 text-brand-secondary-orange mt-1 shrink-0" />

          <div className="flex flex-col justify-between">
            <div>
              <p className="font-semibold text-sm text-brand-primary">
                {track.schedule.label}
              </p>
              <p className="text-sm text-gray-600">{track.schedule.day}</p>
              <p className="text-sm text-gray-600">{track.schedule.time}</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-px bg-gray-200" />

        {/* RIGHT */}
        <div className="w-1/2 p-5 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-sm text-brand-primary mb-2">Options</p>

            <ul className="text-sm text-gray-600 space-y-1">
              {track.options.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* NOTE */}
      <div className="flex gap-3 items-start border-t border-gray-300 p-5">
        <img src={note} className="w-5 h-5 text-brand-secondary-orange mt-1" />
        <div>
          <p className="font-semibold text-sm text-brand-primary">Note</p>
          <p className="text-sm text-gray-600">{track.note}</p>
        </div>
      </div>
    </div>
  );
};
export default TrackCard;
