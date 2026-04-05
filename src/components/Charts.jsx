import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function Charts({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* 📈 LINE CHART CARD */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl hover:shadow-indigo-500/10 transition">
        
        <h3 className="text-sm text-gray-400 mb-3">
          Spending Trend
        </h3>

        <div className="h-64">
          <ResponsiveContainer>
            <LineChart data={data}>
              
              <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

              {/* 🔥 Gradient Stroke */}
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>

            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 🥧 PIE CHART CARD */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl hover:shadow-purple-500/10 transition">
        
        <h3 className="text-sm text-gray-400 mb-3">
          Category Breakdown
        </h3>

        <div className="h-64 flex justify-center items-center">
          <ResponsiveContainer>
            <PieChart>
              
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                outerRadius={90}
                innerRadius={50}   // 🔥 donut style
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />

            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}