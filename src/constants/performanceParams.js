export const performanceParams = [
  {
    name: "shared_buffers",
    category: "Memory",
    description:
      "Sets the amount of memory the database server uses for shared memory buffers. This is one of the most important PostgreSQL configuration parameters.",
    defaultValue: "128MB",
    range: "128kB to system memory",
    impact: "High",
    recommendation:
      "Set to 25% of total system RAM for dedicated database servers. For mixed-use servers, start with 128MB-256MB and adjust based on monitoring.",
  },
  {
    name: "effective_cache_size",
    category: "Query Planner",
    description:
      "Provides a hint to the query planner about the effective size of the disk cache that is available to a single query.",
    defaultValue: "4GB",
    range: "1 to INT_MAX",
    impact: "Medium",
    recommendation:
      "Set to 50-75% of total system RAM. This doesn't allocate memory but helps the planner make better decisions about index usage.",
  },
  {
    name: "work_mem",
    category: "Memory",
    description:
      "Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files.",
    defaultValue: "4MB",
    range: "64kB to 2GB",
    impact: "High",
    recommendation:
      "Start with 4MB and increase based on query complexity. For OLAP workloads, consider 64MB-256MB. Monitor for memory usage and adjust accordingly.",
  },
  {
    name: "maintenance_work_mem",
    category: "Memory",
    description:
      "Specifies the maximum amount of memory to be used by maintenance operations, such as VACUUM, CREATE INDEX, and ALTER TABLE ADD FOREIGN KEY.",
    defaultValue: "64MB",
    range: "1MB to 2GB",
    impact: "Medium",
    recommendation:
      "Set to 256MB-1GB for better performance of maintenance operations. Can be set higher temporarily for large index builds or VACUUM operations.",
  },
  {
    name: "max_connections",
    category: "Connections",
    description: "Determines the maximum number of concurrent connections to the database server.",
    defaultValue: "100",
    range: "1 to 8388607",
    impact: "High",
    recommendation:
      "Set based on application needs but avoid setting too high. Each connection uses memory. Consider connection pooling for high-connection applications.",
  },
  {
    name: "wal_buffers",
    category: "Write-Ahead Logging",
    description: "Sets the amount of shared memory used for WAL data that has not yet been written to disk.",
    defaultValue: "-1 (auto-tuned)",
    range: "-1 to 2047MB",
    impact: "Medium",
    recommendation:
      "Usually auto-tuning (-1) works well. For high-write workloads, consider setting to 16MB-64MB manually.",
  },
  {
    name: "checkpoint_completion_target",
    category: "Write-Ahead Logging",
    description: "Specifies the target for checkpoint completion, as a fraction of the checkpoint interval.",
    defaultValue: "0.5",
    range: "0.0 to 1.0",
    impact: "Medium",
    recommendation:
      "Set to 0.9 to spread checkpoint I/O over a longer period, reducing I/O spikes and improving overall performance.",
  },
  {
    name: "random_page_cost",
    category: "Query Planner",
    description: "Sets the planner's estimate of the cost of a non-sequentially-fetched disk page.",
    defaultValue: "4.0",
    range: "0 to DBL_MAX",
    impact: "Medium",
    recommendation:
      "For SSDs, set to 1.1-1.5. For traditional HDDs, keep at 4.0. This affects the planner's preference for index scans vs sequential scans.",
  },
  {
    name: "seq_page_cost",
    category: "Query Planner",
    description:
      "Sets the planner's estimate of the cost of a disk page fetch that is part of a series of sequential fetches.",
    defaultValue: "1.0",
    range: "0 to DBL_MAX",
    impact: "Low",
    recommendation:
      "Usually keep at 1.0. Adjust random_page_cost relative to this value based on storage type (SSD vs HDD).",
  },
  {
    name: "max_wal_size",
    category: "Write-Ahead Logging",
    description: "Maximum size to let the WAL grow to between automatic WAL checkpoints.",
    defaultValue: "1GB",
    range: "2 to INT_MAX MB",
    impact: "Medium",
    recommendation:
      "For write-heavy workloads, increase to 4GB-16GB to reduce checkpoint frequency and improve performance.",
  },
  {
    name: "min_wal_size",
    category: "Write-Ahead Logging",
    description:
      "As long as WAL disk usage stays below this setting, old WAL files are always recycled for future use at a checkpoint.",
    defaultValue: "80MB",
    range: "2 to max_wal_size MB",
    impact: "Low",
    recommendation: "Set to 1GB-2GB for write-heavy workloads to avoid frequent WAL file creation/deletion overhead.",
  },
  {
    name: "autovacuum_max_workers",
    category: "Autovacuum",
    description:
      "Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.",
    defaultValue: "3",
    range: "1 to 8388607",
    impact: "Medium",
    recommendation:
      "Increase to 6-10 for databases with many tables or high update/delete activity. Monitor system resources when increasing.",
  },
  {
    name: "autovacuum_vacuum_scale_factor",
    category: "Autovacuum",
    description:
      "Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM.",
    defaultValue: "0.2",
    range: "0.0 to 100.0",
    impact: "Medium",
    recommendation:
      "For high-update tables, consider reducing to 0.1 or 0.05 to trigger VACUUM more frequently and prevent bloat.",
  },
  {
    name: "log_min_duration_statement",
    category: "Logging",
    description:
      "Causes the duration of each completed statement to be logged if the statement ran for at least the specified number of milliseconds.",
    defaultValue: "-1 (disabled)",
    range: "-1 to INT_MAX ms",
    impact: "Low",
    recommendation:
      "Set to 1000ms (1 second) to log slow queries for performance analysis. Adjust based on application requirements.",
  },
  {
    name: "shared_preload_libraries",
    category: "Extensions",
    description: "Specifies one or more shared libraries to be preloaded at server start.",
    defaultValue: "''",
    range: "string",
    impact: "High",
    recommendation:
      "Include 'pg_stat_statements' for query performance monitoring. Add other extensions as needed (e.g., 'auto_explain', 'pg_prewarm').",
  },
]
