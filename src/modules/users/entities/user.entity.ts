import { Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'User',
})
export class User extends Model {}
