import { Server, Database, HardDrive, Cpu, MemoryStickIcon as Memory, Network } from "lucide-react"

const Architecture = () => {
  const architectureComponents = [
    {
      title: "Process Architecture",
      icon: Cpu,
      description: "PostgreSQL uses a multi-process architecture with separate processes for different functions.",
      details: [
        {
          name: "Postmaster Process",
          description: "Main server process that manages client connections and spawns backend processes"
        },
        {
          name: "Backend Processes",
          description: "Individual processes that handle client connections and execute queries"
        },
        {
          name: "Background Processes",
          description: "Utility processes like WAL writer, checkpointer, autovacuum launcher, and statistics collector"
        },
        {
          name: "Auxiliary Processes",
          description: "Optional processes for features like archiving, replication, and parallel query execution"
        }
      ]
    },
    {
      title: "Memory Architecture",
      icon: Memory,
      description: "PostgreSQL uses both shared and local memory structures for efficient data processing.",
      details: [
        {
          name: "Shared Buffers",
          description: "Shared memory area where PostgreSQL caches frequently accessed data pages"
        },
        {
          name: "WAL Buffers",
          description: "Buffer area for write-ahead log data before it's written to disk"
        },
        {
          name: "Work Memory",
          description: "Private memory used by each backend process for sorting, hashing, and other operations"
        },
        {
          name: "Maintenance Work Memory",
          description: "Memory used for maintenance operations like VACUUM, CREATE INDEX, and bulk loading"
        }
      ]
    },
    {
      title: "Storage Architecture",
      icon: HardDrive,
      description: "PostgreSQL organizes data on disk using a sophisticated storage system.",
      details: [
        {
          name: "Data Files",
          description: "Table and index data stored in 8KB pages within data files"
        },
        {
          name: "Write-Ahead Log (WAL)",
          description: "Transaction log that ensures data durability and enables point-in-time recovery"
        },
        {
          name: "Control Files",
          description: "Metadata files containing cluster state information and configuration"
        },
        {
          name: "Tablespaces",
          description: "Logical storage units that map to physical directories on the file system"
        }
      ]
    },
    {
      title: "Transaction System",
      icon: Database,
      description: "PostgreSQL implements MVCC (Multi-Version Concurrency Control) for transaction isolation.",
      details: [
        {
          name: "MVCC",
          description: "Multiple versions of rows allow concurrent reads and writes without blocking"
        },
        {
          name: "Transaction IDs",
          description: "Unique identifiers assigned to each transaction for version control"
        },
        {
          name: "Snapshots",
          description: "Point-in-time views of the database state for consistent reads"
        },
        {
          name: "Vacuum Process",
          description: "Background process that reclaims space from dead tuples and updates statistics"
        }
      ]
    },
    {
      title: "Query Processing",
      icon: Server,
      description: "PostgreSQL uses a sophisticated query processing engine with multiple stages.",
      details: [
        {
          name: "Parser",
          description: "Converts SQL text into a parse tree representing the query structure"
        },
        {
          name: "Analyzer/Rewriter",
          description: "Transforms the parse tree and applies rules and views"
        },
        {
          name: "Planner/Optimizer",
          description: "Creates an optimal execution plan based on statistics and cost estimates"
        },
        {
          name: "Executor",
          description: "Executes the query plan and returns results to the client"
        }
      ]
    },
    {
      title: "Replication & High Availability",
      icon: Network,
      description: "PostgreSQL supports various replication methods for high availability and scalability.",
      details: [
        {
          name: "Streaming Replication",
          description: "Real-time replication of WAL records to standby servers"
        },
        {
          name: "Logical Replication",
          description: "Replication of data changes using a publish/subscribe model"
        },
        {
          name: "Hot Standby",
          description: "Standby servers that can serve read-only queries while applying WAL"
        },
        {
          name: "Point-in-Time Recovery",
          description: "Ability to restore the database to any point in time using WAL archives"
        }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          PostgreSQL Architecture
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding PostgreSQL's internal architecture, components, and how they work together.
        </p>
      </div>

      <div className="space-y-8">
        {architectureComponents.map((component, componentIndex) => (
          <div key={componentIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-3">
                <component.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {component.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {component.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {component.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {detail.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
          Architecture Best Practices
        </h3>
        <ul className="space-y-2 text-green-700 dark:text-green-300">
          <li>• Configure shared_buffers based on available RAM (typically 25%)</li>
          <li>• Enable WAL archiving for point-in-time recovery</li>
          <li>• Implement regular VACUUM and ANALYZE maintenance</li>
          <li>• Monitor and adjust work_mem based on query patterns</li>
          <li>• Use connection pooling for high-concurrency workloads</li>
        </ul>
      </div>
    </div>
  );
};

export default Architecture;
