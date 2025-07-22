export const systemCatalogTables = [
  {
    name: "pg_class",
    description:
      "Contains information about tables, indexes, sequences, views, materialized views, composite types, and TOAST tables.",
    columns: [
      { name: "oid", type: "oid", description: "Row identifier (hidden attribute; must be explicitly selected)" },
      { name: "relname", type: "name", description: "Name of the table, index, view, etc." },
      { name: "relnamespace", type: "oid", description: "The OID of the namespace that contains this relation" },
      {
        name: "reltype",
        type: "oid",
        description: "The OID of the data type that corresponds to this table's row type",
      },
      { name: "relowner", type: "oid", description: "Owner of the relation" },
      { name: "relam", type: "oid", description: "If this is an index, the access method used (B-tree, hash, etc.)" },
      {
        name: "relfilenode",
        type: "oid",
        description: "Name of the on-disk file of this relation; zero means this is a mapped relation",
      },
      { name: "reltablespace", type: "oid", description: "The tablespace in which this relation is stored" },
      { name: "relpages", type: "int4", description: "Size of the on-disk representation of this table in pages" },
      { name: "reltuples", type: "float4", description: "Number of rows in the table" },
      {
        name: "relallvisible",
        type: "int4",
        description: "Number of pages that are marked all-visible in the table's visibility map",
      },
      { name: "reltoastrelid", type: "oid", description: "OID of the TOAST table associated with this table" },
      {
        name: "relhasindex",
        type: "bool",
        description: "True if this is a table and it has (or recently had) any indexes",
      },
      {
        name: "relisshared",
        type: "bool",
        description: "True if this table is shared across all databases in the cluster",
      },
      {
        name: "relpersistence",
        type: "char",
        description: "p = permanent table, u = unlogged table, t = temporary table",
      },
      {
        name: "relkind",
        type: "char",
        description:
          "r = ordinary table, i = index, S = sequence, t = TOAST table, v = view, m = materialized view, c = composite type, f = foreign table, p = partitioned table, I = partitioned index",
      },
      {
        name: "relnatts",
        type: "int2",
        description: "Number of user columns in the relation (system columns not counted)",
      },
      { name: "relchecks", type: "int2", description: "Number of CHECK constraints on the table" },
      { name: "relhasrules", type: "bool", description: "True if table has (or once had) rules" },
      { name: "relhastriggers", type: "bool", description: "True if table has (or once had) triggers" },
      {
        name: "relhassubclass",
        type: "bool",
        description: "True if table or index has (or once had) any inheritance children",
      },
      { name: "relrowsecurity", type: "bool", description: "True if table has row level security enabled" },
      {
        name: "relforcerowsecurity",
        type: "bool",
        description: "True if row level security (when enabled) will also apply to table owner",
      },
      {
        name: "relispopulated",
        type: "bool",
        description:
          "True if relation is populated (this is true for all relations other than some materialized views)",
      },
      { name: "relreplident", type: "char", description: "Columns used to form replica identity for rows" },
      { name: "relispartition", type: "bool", description: "True if table is a partition" },
      {
        name: "relrewrite",
        type: "oid",
        description:
          "For new relations being written during a DDL operation that requires a table rewrite, this contains the OID of the original relation",
      },
      {
        name: "relfrozenxid",
        type: "xid",
        description:
          "All transaction IDs before this one have been replaced with a permanent (frozen) transaction ID in this table",
      },
      {
        name: "relminmxid",
        type: "xid",
        description: "All multixact IDs before this one have been replaced by a transaction ID in this table",
      },
    ],
  },
  {
    name: "pg_attribute",
    description:
      "Stores information about table columns. There is exactly one pg_attribute row for every column in every table in the database.",
    columns: [
      { name: "attrelid", type: "oid", description: "The table this column belongs to" },
      { name: "attname", type: "name", description: "The column name" },
      { name: "atttypid", type: "oid", description: "The data type of this column" },
      {
        name: "attstattarget",
        type: "int4",
        description: "Controls the level of detail of statistics collected for this column by ANALYZE",
      },
      { name: "attlen", type: "int2", description: "A copy of pg_type.typlen of this column's type" },
      { name: "attnum", type: "int2", description: "The number of the column" },
      {
        name: "attndims",
        type: "int4",
        description: "Number of dimensions, if the column is an array type; otherwise 0",
      },
      {
        name: "attcacheoff",
        type: "int4",
        description:
          "Always -1 in storage, but when loaded into a row descriptor in memory this might be updated to cache the offset of the attribute within the row",
      },
      { name: "atttypmod", type: "int4", description: "Records type-specific data supplied at table creation time" },
      { name: "attbyval", type: "bool", description: "A copy of pg_type.typbyval of this column's type" },
      { name: "attstorage", type: "char", description: "Normally a copy of pg_type.typstorage of this column's type" },
      { name: "attalign", type: "char", description: "A copy of pg_type.typalign of this column's type" },
      { name: "attnotnull", type: "bool", description: "This represents a not-null constraint" },
      {
        name: "atthasdef",
        type: "bool",
        description:
          "This column has a default value, in which case there will be a corresponding entry in the pg_attrdef catalog",
      },
      {
        name: "atthasmissing",
        type: "bool",
        description:
          "This column has a missing value, in which case there will be a non-null entry in the attmissingval column",
      },
      {
        name: "attidentity",
        type: "char",
        description:
          "If a zero byte (''), then not an identity column. Otherwise, a = generated always, d = generated by default",
      },
      {
        name: "attgenerated",
        type: "char",
        description: "If a zero byte (''), then not a generated column. Otherwise, s = stored",
      },
      { name: "attisdropped", type: "bool", description: "This column has been dropped and is no longer valid" },
      { name: "attislocal", type: "bool", description: "This column is defined locally in the relation" },
      { name: "attinhcount", type: "int4", description: "The number of direct inheritance ancestors this column has" },
      {
        name: "attcollation",
        type: "oid",
        description: "The defined collation of the column, or zero if the column is not of a collatable data type",
      },
      {
        name: "attacl",
        type: "aclitem[]",
        description: "Column-level access privileges, if any have been granted specifically on this column",
      },
      { name: "attoptions", type: "text[]", description: "Attribute-level options, as keyword=value strings" },
      {
        name: "attfdwoptions",
        type: "text[]",
        description: "Attribute-level foreign data wrapper options, as keyword=value strings",
      },
      { name: "attmissingval", type: "anyarray", description: "This column's missing value, if atthasmissing is true" },
    ],
  },
  {
    name: "pg_index",
    description: "Contains part of the information about indexes. The rest is mostly in pg_class.",
    columns: [
      { name: "indexrelid", type: "oid", description: "The OID of the pg_class entry for this index" },
      { name: "indrelid", type: "oid", description: "The OID of the pg_class entry for the table this index is for" },
      {
        name: "indnatts",
        type: "int2",
        description: "The number of columns in the index (duplicates pg_class.relnatts)",
      },
      {
        name: "indnkeyatts",
        type: "int2",
        description: "The number of key columns in the index, not counting any included columns",
      },
      { name: "indisunique", type: "bool", description: "If true, this is a unique index" },
      {
        name: "indisprimary",
        type: "bool",
        description: "If true, this index represents the primary key of the table",
      },
      { name: "indisexclusion", type: "bool", description: "If true, this is an exclusion constraint" },
      {
        name: "indimmediate",
        type: "bool",
        description: "If true, the uniqueness check is enforced immediately on insertion",
      },
      { name: "indisclustered", type: "bool", description: "If true, the table was last clustered on this index" },
      { name: "indisvalid", type: "bool", description: "If true, the index is currently valid for queries" },
      {
        name: "indcheckxmin",
        type: "bool",
        description:
          "If true, queries must not use the index until the xmin of this pg_index row is below their TransactionXmin event horizon",
      },
      { name: "indisready", type: "bool", description: "If true, the index is currently ready for inserts" },
      {
        name: "indislive",
        type: "bool",
        description: "If false, the index is in process of being dropped, and should be ignored for all purposes",
      },
      {
        name: "indisreplident",
        type: "bool",
        description:
          "If true this index has been chosen as replica identity using ALTER TABLE ... REPLICA IDENTITY USING INDEX ...",
      },
      {
        name: "indkey",
        type: "int2vector",
        description: "This is an array of indnatts values that indicate which table columns this index indexes",
      },
      {
        name: "indcollation",
        type: "oidvector",
        description: "For each column in the index key, this contains the OID of the collation to use for the index",
      },
      {
        name: "indclass",
        type: "oidvector",
        description: "For each column in the index key, this contains the OID of the operator class to use",
      },
      {
        name: "indoption",
        type: "int2vector",
        description: "This is an array of indnatts values that store per-column flag bits",
      },
      {
        name: "indexprs",
        type: "pg_node_tree",
        description:
          "Expression trees (in nodeToString() representation) for index attributes that are not simple column references",
      },
      {
        name: "indpred",
        type: "pg_node_tree",
        description: "Expression tree (in nodeToString() representation) for partial index predicate",
      },
    ],
  },
  {
    name: "pg_constraint",
    description: "Stores check, primary key, unique, foreign key, and exclusion constraints on tables.",
    columns: [
      { name: "oid", type: "oid", description: "Row identifier (hidden attribute; must be explicitly selected)" },
      { name: "conname", type: "name", description: "Constraint name (not necessarily unique!)" },
      { name: "connamespace", type: "oid", description: "The OID of the namespace that contains this constraint" },
      {
        name: "contype",
        type: "char",
        description:
          "c = check constraint, f = foreign key constraint, p = primary key constraint, u = unique constraint, t = constraint trigger, x = exclusion constraint",
      },
      { name: "condeferrable", type: "bool", description: "Is the constraint deferrable?" },
      { name: "condeferred", type: "bool", description: "Is the constraint deferred by default?" },
      { name: "convalidated", type: "bool", description: "Has the constraint been validated?" },
      { name: "conrelid", type: "oid", description: "The table this constraint is on; 0 if not a table constraint" },
      { name: "contypid", type: "oid", description: "The domain this constraint is on; 0 if not a domain constraint" },
      {
        name: "conindid",
        type: "oid",
        description:
          "The index supporting this constraint, if it's a unique, primary key, foreign key, or exclusion constraint; 0 otherwise",
      },
      {
        name: "conparentid",
        type: "oid",
        description:
          "The corresponding constraint of the parent partitioned table, if this is a constraint on a partition; 0 otherwise",
      },
      { name: "confrelid", type: "oid", description: "If a foreign key, the referenced table; 0 otherwise" },
      {
        name: "confupdtype",
        type: "char",
        description:
          "Foreign key update action code: a = no action, r = restrict, c = cascade, n = set null, d = set default",
      },
      {
        name: "confdeltype",
        type: "char",
        description:
          "Foreign key deletion action code: a = no action, r = restrict, c = cascade, n = set null, d = set default",
      },
      { name: "confmatchtype", type: "char", description: "Foreign key match type: f = full, p = partial, s = simple" },
      { name: "conislocal", type: "bool", description: "This constraint is defined locally for the relation" },
      {
        name: "coninhcount",
        type: "int4",
        description: "The number of direct inheritance ancestors this constraint has",
      },
      {
        name: "connoinherit",
        type: "bool",
        description: "This constraint is defined locally for the relation and cannot be inherited",
      },
      {
        name: "conkey",
        type: "int2[]",
        description:
          "If a table constraint (including foreign keys, but not constraint triggers), list of the constrained columns",
      },
      { name: "confkey", type: "int2[]", description: "If a foreign key, list of the referenced columns" },
      {
        name: "conpfeqop",
        type: "oid[]",
        description: "If a foreign key, list of the equality operators for PK = FK comparisons",
      },
      {
        name: "conppeqop",
        type: "oid[]",
        description: "If a foreign key, list of the equality operators for PK = PK comparisons",
      },
      {
        name: "conffeqop",
        type: "oid[]",
        description: "If a foreign key, list of the equality operators for FK = FK comparisons",
      },
      {
        name: "conexclop",
        type: "oid[]",
        description: "If an exclusion constraint, list of the per-column exclusion operators",
      },
      {
        name: "conbin",
        type: "pg_node_tree",
        description: "If a check constraint, an internal representation of the expression",
      },
      {
        name: "consrc",
        type: "text",
        description: "If a check constraint, a human-readable representation of the expression",
      },
    ],
  },
  {
    name: "pg_stat_activity",
    description: "Shows information about current activity and connections to the database server.",
    columns: [
      { name: "datid", type: "oid", description: "OID of the database this backend is connected to" },
      { name: "datname", type: "name", description: "Name of the database this backend is connected to" },
      { name: "pid", type: "int4", description: "Process ID of this backend" },
      {
        name: "leader_pid",
        type: "int4",
        description: "Process ID of the parallel group leader, if this process is a parallel query worker",
      },
      { name: "usesysid", type: "oid", description: "OID of the user logged into this backend" },
      { name: "usename", type: "name", description: "Name of the user logged into this backend" },
      {
        name: "application_name",
        type: "text",
        description: "Name of the application that is connected to this backend",
      },
      { name: "client_addr", type: "inet", description: "IP address of the client connected to this backend" },
      {
        name: "client_hostname",
        type: "text",
        description: "Host name of the connected client, as reported by a reverse DNS lookup of client_addr",
      },
      {
        name: "client_port",
        type: "int4",
        description: "TCP port number that the client is using for communication with this backend",
      },
      { name: "backend_start", type: "timestamptz", description: "Time when this process was started" },
      {
        name: "xact_start",
        type: "timestamptz",
        description: "Time when this process' current transaction was started",
      },
      { name: "query_start", type: "timestamptz", description: "Time when the currently active query was started" },
      { name: "state_change", type: "timestamptz", description: "Time when the state was last changed" },
      { name: "wait_event_type", type: "text", description: "The type of event for which the backend is waiting" },
      { name: "wait_event", type: "text", description: "Wait event name if backend is currently waiting" },
      { name: "state", type: "text", description: "Current overall state of this backend" },
      { name: "backend_xid", type: "xid", description: "Top-level transaction identifier of this backend, if any" },
      { name: "backend_xmin", type: "xid", description: "The current backend's xmin horizon" },
      { name: "query", type: "text", description: "Text of this backend's most recent query" },
      { name: "backend_type", type: "text", description: "Type of current backend" },
    ],
  },
]
