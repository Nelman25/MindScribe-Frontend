export default function DashboardAnalytics() {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 p-4 rounded-lg shadow">
      <div className="text-center bg-pl rounded-lg p-3 border border-transparent hover:border-primary">
        <h1 className="text-primary text-4xl font-medium">12</h1>
        <p className="text-text">Entries this month</p>
      </div>

      <div className="text-center bg-pl rounded-lg p-3 border border-transparent hover:border-primary">
        <h1 className="text-primary text-4xl font-medium">67%</h1>
        <p className="text-text">Positive mood</p>
      </div>

      <div className="text-center bg-pl rounded-lg p-3 border border-transparent hover:border-primary">
        <h1 className="text-primary text-4xl font-medium">8</h1>
        <p className="text-text">Days streak</p>
      </div>

      <div className="text-center bg-pl rounded-lg p-3 border border-transparent hover:border-primary">
        <h1 className="text-primary text-4xl font-medium">5</h1>
        <p className="text-text">AI Insights</p>
      </div>
    </div>
  );
}
