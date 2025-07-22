import { Settings, TrendingUp } from "lucide-react"

const PerformanceCard = ({ parameter }) => {
  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20"
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20"
      case "Low":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20"
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{parameter.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{parameter.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(parameter.impact)}`}>
          {parameter.impact} Impact
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{parameter.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Default Value:</h4>
          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm">
            {parameter.defaultValue}
          </code>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Range:</h4>
          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm">
            {parameter.range}
          </code>
        </div>
      </div>

      {parameter.recommendation && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Recommendation:</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">{parameter.recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceCard
