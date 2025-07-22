export const cheatsheetData = {
  sections: [
    {
      title: "Database Operations",
      commands: [
        {
          command: "CREATE DATABASE",
          syntax: "CREATE DATABASE database_name;",
          description: "Create a new database",
          example: "CREATE DATABASE myapp_production;",
        },
        {
          command: "DROP DATABASE",
          syntax: "DROP DATABASE database_name;",
          description: "Delete a database",
          example: "DROP DATABASE old_database;",
        },
        {
          command: "List Databases",
          syntax: "\\l",
          description: "List all databases (psql command)",
          example: "\\l",
        },
        {
          command: "Connect to Database",
          syntax: "\\c database_name",
          description: "Connect to a specific database",
          example: "\\c myapp_production",
        },
      ],
    },
    {
      title: "Table Operations",
      commands: [
        {
          command: "CREATE TABLE",
          syntax: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
          description: "Create a new table",
          example: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(255) UNIQUE);",
        },
        {
          command: "ALTER TABLE",
          syntax: "ALTER TABLE table_name ADD COLUMN column_name datatype;",
          description: "Add a column to existing table",
          example: "ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT NOW();",
        },
        {
          command: "DROP TABLE",
          syntax: "DROP TABLE table_name;",
          description: "Delete a table",
          example: "DROP TABLE old_table;",
        },
        {
          command: "List Tables",
          syntax: "\\dt",
          description: "List all tables in current database",
          example: "\\dt",
        },
      ],
    },
    {
      title: "Data Manipulation",
      commands: [
        {
          command: "INSERT",
          syntax: "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
          description: "Insert new data into table",
          example: "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');",
        },
        {
          command: "SELECT",
          syntax: "SELECT column1, column2 FROM table_name WHERE condition;",
          description: "Query data from table",
          example: "SELECT name, email FROM users WHERE created_at > '2023-01-01';",
        },
        {
          command: "UPDATE",
          syntax: "UPDATE table_name SET column1 = value1 WHERE condition;",
          description: "Update existing data",
          example: "UPDATE users SET email = 'newemail@example.com' WHERE id = 1;",
        },
        {
          command: "DELETE",
          syntax: "DELETE FROM table_name WHERE condition;",
          description: "Delete data from table",
          example: "DELETE FROM users WHERE last_login < '2022-01-01';",
        },
      ],
    },
    {
      title: "Index Operations",
      commands: [
        {
          command: "CREATE INDEX",
          syntax: "CREATE INDEX index_name ON table_name (column_name);",
          description: "Create an index on a column",
          example: "CREATE INDEX idx_users_email ON users (email);",
        },
        {
          command: "CREATE UNIQUE INDEX",
          syntax: "CREATE UNIQUE INDEX index_name ON table_name (column_name);",
          description: "Create a unique index",
          example: "CREATE UNIQUE INDEX idx_users_username ON users (username);",
        },
        {
          command: "DROP INDEX",
          syntax: "DROP INDEX index_name;",
          description: "Remove an index",
          example: "DROP INDEX idx_old_index;",
        },
        {
          command: "List Indexes",
          syntax: "\\di",
          description: "List all indexes",
          example: "\\di",
        },
      ],
    },
    {
      title: "Performance & Monitoring",
      commands: [
        {
          command: "EXPLAIN",
          syntax: "EXPLAIN (ANALYZE, BUFFERS) SELECT ...",
          description: "Show query execution plan",
          example: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM users WHERE email = 'test@example.com';",
        },
        {
          command: "VACUUM",
          syntax: "VACUUM table_name;",
          description: "Reclaim storage and update statistics",
          example: "VACUUM ANALYZE users;",
        },
        {
          command: "Show Running Queries",
          syntax: "SELECT * FROM pg_stat_activity;",
          description: "View currently running queries",
          example: "SELECT pid, usename, query FROM pg_stat_activity WHERE state = 'active';",
        },
        {
          command: "Kill Query",
          syntax: "SELECT pg_terminate_backend(pid);",
          description: "Terminate a running query",
          example: "SELECT pg_terminate_backend(12345);",
        },
      ],
    },
  ],
}
