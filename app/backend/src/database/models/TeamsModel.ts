import { DataTypes, Model } from 'sequelize';
import { IDataValuesTeams } from '../../interfaces/IDataValues';

import db from '.';

class Teams extends Model {
  public id: number;

  public teamName: number;

  public dataValues: IDataValuesTeams;
}

Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Teams',
  timestamps: false,
});

export default Teams;
