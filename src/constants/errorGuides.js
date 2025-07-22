export const errorGuides = [
  {
    code: "42P01",
    severity: "ERROR",
    message: "relation does not exist",
    description:
      "This error occurs when PostgreSQL cannot find the specified table, view, or other relation. Common causes include typos in table names, missing schema qualifiers, or the table not being created yet.",
    solution:
      "Verify the table name spelling, check if you need to specify the schema (e.g., schema.table), ensure the table exists, and verify you're connected to the correct database.",
    example: "-- Correct usage:\nSELECT * FROM public.users;\n-- Instead of:\nSELECT * FROM user; -- typo",
  },
  {
    code: "23505",
    severity: "ERROR",
    message: "duplicate key value violates unique constraint",
    description:
      "Attempted to insert or update a row with a value that already exists in a column with a unique constraint or primary key.",
    solution:
      "Check for existing values before inserting, use ON CONFLICT clause for upsert operations, or modify the data to ensure uniqueness.",
    example:
      "-- Use ON CONFLICT to handle duplicates:\nINSERT INTO users (email, name) VALUES ('john@example.com', 'John')\nON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;",
  },
  {
    code: "23503",
    severity: "ERROR",
    message: "insert or update on table violates foreign key constraint",
    description:
      "Attempted to insert or update a row with a foreign key value that doesn't exist in the referenced table.",
    solution:
      "Ensure the referenced value exists in the parent table, insert the parent record first, or temporarily disable foreign key checks if necessary.",
    example:
      "-- Ensure parent record exists:\nINSERT INTO customers (id, name) VALUES (1, 'John Doe');\n-- Then insert child record:\nINSERT INTO orders (customer_id, amount) VALUES (1, 100.00);",
  },
  {
    code: "42703",
    severity: "ERROR",
    message: "column does not exist",
    description:
      "Referenced a column name that doesn't exist in the specified table or is not accessible in the current context.",
    solution:
      "Check column name spelling, verify the column exists in the table, ensure proper table aliases are used, and check if the column is in the SELECT list for GROUP BY queries.",
    example:
      "-- Correct column reference:\nSELECT user_id, username FROM users WHERE user_id = 1;\n-- Instead of:\nSELECT user_id, username FROM users WHERE id = 1; -- if column is named user_id",
  },
  {
    code: "08006",
    severity: "ERROR",
    message: "connection failure",
    description:
      "Failed to establish or maintain a connection to the PostgreSQL server. Can be caused by network issues, server downtime, or configuration problems.",
    solution:
      "Check server status, verify connection parameters (host, port, database), ensure network connectivity, check firewall settings, and verify authentication credentials.",
    example:
      "-- Check connection parameters:\npsql -h localhost -p 5432 -U username -d database_name\n-- Verify server is running:\nsudo systemctl status postgresql",
  },
  {
    code: "53300",
    severity: "ERROR",
    message: "too many connections for role",
    description:
      "The number of connections for a specific role has exceeded the limit set by the CONNECTION LIMIT parameter.",
    solution:
      "Increase the connection limit for the role, close unused connections, implement connection pooling, or optimize application connection usage.",
    example:
      "-- Increase connection limit for role:\nALTER ROLE username CONNECTION LIMIT 50;\n-- Check current connections:\nSELECT count(*) FROM pg_stat_activity WHERE usename = 'username';",
  },
  {
    code: "40001",
    severity: "ERROR",
    message: "serialization failure",
    description:
      "A transaction failed due to a serialization conflict, typically in SERIALIZABLE isolation level when concurrent transactions would create an inconsistent state.",
    solution:
      "Retry the transaction, consider using a lower isolation level if appropriate, or redesign the application logic to minimize conflicts.",
    example:
      "-- Retry logic in application:\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n-- Your transaction logic here\nCOMMIT;\n-- Catch serialization_failure and retry",
  },
  {
    code: "22001",
    severity: "ERROR",
    message: "value too long for type character varying",
    description:
      "Attempted to insert or update a string value that exceeds the maximum length defined for a VARCHAR or CHAR column.",
    solution: "Truncate the input data, increase the column length, or use TEXT type for unlimited length strings.",
    example:
      "-- Increase column length:\nALTER TABLE users ALTER COLUMN name TYPE VARCHAR(255);\n-- Or use TEXT for unlimited length:\nALTER TABLE users ALTER COLUMN description TYPE TEXT;",
  },
  {
    code: "42601",
    severity: "ERROR",
    message: "syntax error",
    description: "The SQL statement contains invalid syntax that PostgreSQL cannot parse.",
    solution:
      "Review the SQL syntax, check for missing commas, parentheses, or keywords, verify proper quoting of identifiers, and ensure correct SQL structure.",
    example:
      "-- Correct syntax:\nSELECT name, age FROM users WHERE age > 18;\n-- Instead of:\nSELECT name age FROM users WHERE age > 18; -- missing comma",
  },
  {
    code: "25P02",
    severity: "ERROR",
    message: "current transaction is aborted",
    description:
      "The current transaction has encountered an error and must be rolled back before any new commands can be executed.",
    solution: "Issue a ROLLBACK command to end the current transaction, then start a new transaction if needed.",
    example:
      "-- After an error in transaction:\nROLLBACK;\n-- Start new transaction:\nBEGIN;\n-- Continue with new commands",
  },
]
