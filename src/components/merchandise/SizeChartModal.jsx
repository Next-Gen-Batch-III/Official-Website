import Modal from "@/components/ui/Modal";
import { merchandiseSizeChart } from "@/data/merchandise";

const SizeChartModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    contentClassName="w-full max-w-sm rounded-2xl p-6"
  >
    <h2 className="pr-10 text-xl font-bold text-[#142f55]">Size chart</h2>
    <table className="mt-5 w-full border-collapse overflow-hidden rounded-xl text-left text-sm">
      <thead className="bg-[#142f55] text-white">
        <tr>
          <th className="px-4 py-3 font-semibold">Size</th>
          <th className="px-4 py-3 font-semibold">Weight</th>
        </tr>
      </thead>
      <tbody>
        {merchandiseSizeChart.map((row) => (
          <tr key={row.size} className="border-b border-gray-100 last:border-0">
            <td className="px-4 py-3 font-semibold text-[#142f55]">
              {row.size}
            </td>
            <td className="px-4 py-3 text-gray-600">{row.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Modal>
);

export default SizeChartModal;
