export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20">
      
      <p className="text-gray-400 text-sm tracking-wide">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3 text-white">
        ₹ {value}
      </h2>

    </div>
  );
}