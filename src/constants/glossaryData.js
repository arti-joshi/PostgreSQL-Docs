export const glossaryData = [
  {
    term: "ACID",
    definition:
      "A set of properties that guarantee database transactions are processed reliably: Atomicity, Consistency, Isolation, Durability.",
    examples: [
      "BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT;",
      "ROLLBACK; -- Ensures atomicity if something goes wrong",
    ],
    relatedTerms: ["Transaction", "Isolation Level", "WAL", "Checkpoint"],
  },
  {
    term: "Autovacuum",
    definition: "An automated process that reclaims storage occupied by dead tuples and updates table statistics.",
    examples: [
      "SHOW autovacuum;",
      "ALTER TABLE my_table SET (autovacuum_enabled = true);",
      "SELECT * FROM pg_stat_user_tables WHERE schemaname = 'public';",
    ],
    relatedTerms: ["VACUUM", "ANALYZE", "Dead Tuples", "Statistics"],
  },
  {
    term: "B-tree Index",
    definition: "The default index type in PostgreSQL, suitable for equality and range queries on sortable data.",
    examples: [
      "CREATE INDEX idx_name ON table_name (column_name);",
      "CREATE INDEX idx_composite ON table_name (col1, col2);",
      "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM table_name WHERE column_name = 'value';",
    ],
    relatedTerms: ["Index", "GIN", "GiST", "Hash Index", "Query Planner"],
  },
  {
    term: "Connection Pooling",
    definition:
      "A technique to manage database connections efficiently by reusing existing connections rather than creating new ones.",
    examples: [
      "-- Using pgBouncer configuration",
      "pool_mode = transaction",
      "max_client_conn = 100",
      "default_pool_size = 20",
    ],
    relatedTerms: ["pgBouncer", "Connection Limit", "max_connections", "Performance"],
  },
  {
    term: "Dead Tuple",
    definition: "A row version that is no longer visible to any transaction and can be reclaimed by VACUUM.",
    examples: [
      "SELECT n_dead_tup FROM pg_stat_user_tables WHERE relname = 'my_table';",
      "VACUUM VERBOSE my_table;",
      "SELECT * FROM pg_stat_progress_vacuum;",
    ],
    relatedTerms: ["MVCC", "VACUUM", "Autovacuum", "Bloat"],
  },
  {
    term: "EXPLAIN",
    definition: "A command that shows the execution plan chosen by the PostgreSQL query planner for a statement.",
    examples: [
      "EXPLAIN SELECT * FROM users WHERE age > 25;",
      "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders JOIN customers ON orders.customer_id = customers.id;",
      "EXPLAIN (FORMAT JSON) SELECT count(*) FROM large_table;",
    ],
    relatedTerms: ["Query Planner", "Execution Plan", "Cost", "Statistics"],
  },
  {
    term: "Foreign Key",
    definition:
      "A constraint that ensures referential integrity between tables by requiring values to exist in a referenced table.",
    examples: [
      "ALTER TABLE orders ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id);",
      "CREATE TABLE orders (id SERIAL PRIMARY KEY, customer_id INTEGER REFERENCES customers(id));",
      "SELECT * FROM information_schema.table_constraints WHERE constraint_type = 'FOREIGN KEY';",
    ],
    relatedTerms: ["Primary Key", "Referential Integrity", "Constraint", "CASCADE"],
  },
  {
    term: "GIN Index",
    definition:
      "Generalized Inverted Index, optimized for indexing composite values like arrays, full-text search, and JSONB.",
    examples: [
      "CREATE INDEX idx_gin_array ON table_name USING GIN (array_column);",
      "CREATE INDEX idx_gin_jsonb ON table_name USING GIN (jsonb_column);",
      "CREATE INDEX idx_gin_tsvector ON table_name USING GIN (to_tsvector('english', text_column));",
    ],
    relatedTerms: ["B-tree Index", "GiST", "Full-text Search", "JSONB", "Array"],
  },
  {
    term: "Hot Standby",
    definition:
      "A standby server that can accept read-only queries while continuously applying WAL records from the primary server.",
    examples: [
      "-- On standby server postgresql.conf",
      "hot_standby = on",
      "max_standby_streaming_delay = 30s",
      "SELECT pg_is_in_recovery();",
    ],
    relatedTerms: ["Streaming Replication", "WAL", "Standby Server", "Read Replica"],
  },
  {
    term: "Isolation Level",
    definition:
      "Defines the degree to which transactions are isolated from each other, controlling visibility of changes.",
    examples: [
      "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
      "BEGIN ISOLATION LEVEL REPEATABLE READ;",
      "SELECT current_setting('transaction_isolation');",
      "SHOW transaction_isolation;",
    ],
    relatedTerms: ["ACID", "Transaction", "Phantom Read", "Dirty Read", "Serializable"],
  },
]
