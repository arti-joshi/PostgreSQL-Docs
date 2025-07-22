import { AlertTriangle, Info, CheckCircle } from "lucide-react"

const ErrorCard = ({ error }) => {
  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "ERROR":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "WARNING":
        return <Info className="h-5 w-5 text-yellow-500" />
      case "INFO":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "ERROR":
        return "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
      case "WARNING":
        return "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20"
      case "INFO":
        return "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
      default:
        return "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20"
    }
  }

  return (
    <div className={`rounded-lg border p-6 ${getSeverityColor(error.severity)}`}>
      <div className="flex items-start space-x-3">
        {getSeverityIcon(error.severity)}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{error.code}</h3>
            <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
              {error.severity}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{error.message}</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Description:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{error.description}</p>
            </div>

            {error.solution && (
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solution:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{error.solution}</p>
              </div>
            )}

            {error.example && (
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Example:</h4>
                <div className="bg-gray-800 dark:bg-gray-900 rounded-md p-3">
                  <code className="text-sm text-green-400">{error.example}</code>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorCard
