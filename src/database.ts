export class Database {
  database = {}

  select (table:string):object {

    const data = this.database[table] ?? [];

    return data
  }

  insert (table:string, data:object):object {
    if (Array.isArray(this.database[table])) {
      this.database[table].push[data];
    } else {
      this.database[table] = (data);
    }
    return data
  }
}
