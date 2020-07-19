module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'pwd',
  database: 'db_gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
