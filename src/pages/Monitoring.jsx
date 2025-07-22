import { Activity, Database, Clock, Users, HardDrive, Zap } from "lucide-react"

const Monitoring = () => {
  const monitoringAreas = [
    {
      title: "Connection Monitoring",
      icon: Users,
      description: "Monitor active connections and connection limits",
      queries: [
        {
          name: "Active Connections",
          query: "SELECT count(*) as active_connections FROM pg_stat_activity WHERE state = 'active';",
          description: "Count of currently active connections",
        },
        {
          name: "Connections by Database",
          query:
            "SELECT datname, count(*) as connections FROM pg_stat_activity GROUP BY datname ORDER BY connections DESC;",
          description: "Connection count grouped by database",
        },
        {
          name: "Long Running Queries",
          query:
            "SELECT pid, usename, datname, query_start, now() - query_start as duration, query FROM pg_stat_activity WHERE state = 'active' AND now() - query_start > interval '5 minutes';",
          description: "Queries running longer than 5 minutes",
        },
      ],
    },
    {
      title: "Performance Monitoring",
      icon: Zap,
      description: "Monitor query performance and database statistics",
      queries: [
        {
          name: "Slow Queries",
          query:
            "SELECT query, calls, total_time, mean_time, rows FROM pg_stat_statements ORDER BY mean_time DESC LIMIT 10;",
          description: "Top 10 slowest queries by average execution time",
        },
        {
          name: "Most Frequent Queries",
          query: "SELECT query, calls, total_time, mean_time FROM pg_stat_statements ORDER BY calls DESC LIMIT 10;",
          description: "Most frequently executed queries",
        },
        {
          name: "Cache Hit Ratio",
          query:
            "SELECT schemaname, tablename, heap_blks_read, heap_blks_hit, round((heap_blks_hit::numeric / (heap_blks_hit + heap_blks_read)) * 100, 2) as cache_hit_ratio FROM pg_statio_user_tables WHERE heap_blks_read > 0 ORDER BY cache_hit_ratio;",
          description: "Table-level cache hit ratios",
        },
      ],
    },
    {
      title: "Storage Monitoring",
      icon: HardDrive,
      description: "Monitor disk usage and table sizes",
      queries: [
        {
          name: "Database Sizes",
          query:
            "SELECT datname, pg_size_pretty(pg_database_size(datname)) as size FROM pg_database ORDER BY pg_database_size(datname) DESC;",
          description: "Size of each database",
        },
        {
          name: "Largest Tables",
          query:
            "SELECT schemaname, tablename, pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size FROM pg_tables ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC LIMIT 10;",
          description: "Top 10 largest tables by total size",
        },
        {
          name: "Table Bloat",
          query:
            "SELECT schemaname, tablename, n_dead_tup, n_live_tup, round((n_dead_tup::numeric / (n_live_tup + n_dead_tup)) * 100, 2) as bloat_ratio FROM pg_stat_user_tables WHERE n_live_tup > 0 ORDER BY bloat_ratio DESC;",
          description: "Tables with high dead tuple ratios",
        },
      ],
    },
    {
      title: "Lock Monitoring",
      icon: Clock,
      description: "Monitor locks and blocking queries",
      queries: [
        {
          name: "Current Locks",
          query:
            "SELECT locktype, database, relation::regclass, page, tuple, virtualxid, transactionid, mode, granted FROM pg_locks WHERE NOT granted;",
          description: "Currently waiting locks",
        },
        {
          name: "Blocking Queries",
          query:
            "SELECT blocked_locks.pid AS blocked_pid, blocked_activity.usename AS blocked_user, blocking_locks.pid AS blocking_pid, blocking_activity.usename AS blocking_user, blocked_activity.query AS blocked_statement, blocking_activity.query AS current_statement_in_blocking_process FROM pg_catalog.pg_locks blocked_locks JOIN pg_catalog.pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid JOIN pg_catalog.pg_locks blocking_locks ON blocking_locks.locktype = blocked_locks.locktype AND blocking_locks.DATABASE IS NOT DISTINCT FROM blocked_locks.DATABASE AND blocking_locks.relation IS NOT DISTINCT FROM blocked_locks.relation AND blocking_locks.page IS NOT DISTINCT FROM blocked_locks.page AND blocking_locks.tuple IS NOT DISTINCT FROM blocked_locks.tuple AND blocking_locks.virtualxid IS NOT DISTINCT FROM blocked_locks.virtualxid AND blocking_locks.transactionid IS NOT DISTINCT FROM blocked_locks.transactionid AND blocking_locks.classid IS NOT DISTINCT FROM blocked_locks.classid AND blocking_locks.objid IS NOT DISTINCT FROM blocked_locks.objid AND blocking_locks.objsubid IS NOT DISTINCT FROM blocked_locks.objsubid AND blocking_locks.pid != blocked_locks.pid JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid WHERE NOT blocked_locks.GRANTED;",
          description: "Queries that are blocking other queries",
        },
      ],
    },
    {
      title: "Replication Monitoring",
      icon: Database,
      description: "Monitor replication status and lag",
      queries: [
        {
          name: "Replication Status",
          query:
            "SELECT client_addr, state, sent_lsn, write_lsn, flush_lsn, replay_lsn, write_lag, flush_lag, replay_lag FROM pg_stat_replication;",
          description: "Status of all replication connections",
        },
        {
          name: "Replication Lag",
          query:
            "SELECT client_addr, extract(epoch from write_lag) as write_lag_seconds, extract(epoch from flush_lag) as flush_lag_seconds, extract(epoch from replay_lag) as replay_lag_seconds FROM pg_stat_replication;",
          description: "Replication lag in seconds",
        },
      ],
    },
    {
      title: "Maintenance Monitoring",
      icon: Activity,
      description: "Monitor vacuum, analyze, and maintenance operations",
      queries: [
        {
          name: "Last Vacuum/Analyze",
          query:
            "SELECT schemaname, tablename, last_vacuum, last_autovacuum, last_analyze, last_autoanalyze FROM pg_stat_user_tables ORDER BY last_autovacuum DESC NULLS LAST;",
          description: "Last vacuum and analyze times for each table",
        },
        {
          name: "Vacuum Progress",
          query:
            "SELECT p.pid, p.datname, p.relid::regclass, p.phase, p.heap_blks_total, p.heap_blks_scanned, p.heap_blks_vacuumed, round((p.heap_blks_scanned::numeric / p.heap_blks_total) * 100, 2) as percent_complete FROM pg_stat_progress_vacuum p;",
          description: "Progress of currently running VACUUM operations",
        },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">PostgreSQL Monitoring</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Essential queries and techniques for monitoring PostgreSQL database health and performance.
        </p>
      </div>

      <div className="space-y-8">
        {monitoringAreas.map((area, areaIndex) => (
          <div
            key={areaIndex}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-3">
                <area.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{area.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {area.queries.map((queryItem, queryIndex) => (
                  <div key={queryIndex} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{queryItem.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{queryItem.description}</p>
                    <div className="bg-gray-800 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
                      <code className="text-sm text-green-400 whitespace-pre-wrap">{queryItem.query}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Monitoring Best Practices</h3>
        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
          <li>• Enable pg_stat_statements extension for query performance monitoring</li>
          <li>• Set up automated monitoring with tools like pgAdmin, Grafana, or custom scripts</li>
          <li>• Monitor key metrics: connections, query performance, disk usage, and replication lag</li>
          <li>• Set up alerts for critical thresholds (connection limits, disk space, long-running queries)</li>
          <li>• Regularly review slow query logs and optimize problematic queries</li>
          <li>• Monitor autovacuum effectiveness and tune parameters as needed</li>
        </ul>
      </div>
    </div>
  )
}

export default Monitoring
